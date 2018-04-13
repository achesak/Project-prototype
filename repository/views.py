from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect
from django.utils.decorators import method_decorator
from django.views.generic import View
from django.http import HttpResponse
from repository.models import Repository
from users.models import UserProfile

import re
import os


class RepositorySharingView(View):
    @method_decorator(login_required(login_url='login'))
    def post(self, request):
        user = request.user
        owner_username = request.POST.get("owner_username", "")
        shared_username = request.POST.get("shared_username", "")
        repo_name = request.POST.get("repo_name", "")

        # Check if the operator is the owner
        if not owner_username == user.username:
            return HttpResponse("You must be the owner of a repository to share it with another user!")

        try:
            repo = Repository.objects.get(name=repo_name, user=user)
            shared_user = UserProfile.objects.get(username=shared_username)

            if repo.shared_users.filter(username=shared_username).exists():
                return HttpResponse("You have already shared this repository to " + shared_username + ".")

            repo.shared_users.add(shared_user)
        except UserProfile.DoesNotExist:
            return HttpResponse("User \"" + shared_username + "\" does not exist.")
        except Repository.DoesNotExist:
            return HttpResponse("Repository \"" + repo_name + "\" does not exist.")

        return HttpResponse("Repository \"" + repo_name + "\" is now shared with " + shared_username + ".")


class RepositoryView(View):
    @method_decorator(login_required(login_url='login'))
    def get(self, request):
        user = request.user
        repos = Repository.objects.filter(user=user)
        repos = repos.extra(order_by=["name"])
        shared_repos = Repository.objects.filter(shared_users=user)
        shared_repos = shared_repos.extra(order_by=["name"])
        return render(request, 'files.html', {'repos': repos, 'shared_repos': shared_repos})

    @method_decorator(login_required(login_url='login'))
    def post(self, request):
        repo_owner = request.user
        repo_name = request.POST.get("repo_name", "")

        # sanitize the repo name
        repo_name = repo_name.replace(" ", "_")

        # Check if a repository with same already exists
        if not Repository.objects.filter(name=repo_name, user=repo_owner).exists():
            repo_name = "".join([c for c in repo_name if re.match(r'\w', c)])
            repo = Repository(name=repo_name, user=repo_owner)
            repo.set_path()
            repo.save()
            print('repo path is' + repo.repo_path)
            return self.get(request=request)
        else:
            user = request.user
            repos = Repository.objects.filter(user=user)
            repos = repos.extra(order_by=["name"])
            return render(request, 'files.html', {'repos': repos, 'err_msg': 'Repository "' + repo_name + '" already exists'})


class RepositoryFileView(View):
    @method_decorator(login_required(login_url='login'))
    def get(self, request):
        """Gets the files in a repository."""

        path = request.GET.get("path", "")
        mode = request.GET.get("mode", "")

        if mode == "list":
            files = [f for f in os.listdir(path) if os.path.isfile(os.path.join(path, f)) and not os.access(os.path.join(path, f), os.X_OK)]
            files.sort()

            formatted_files = "<ul>"
            for file in files:
                formatted_files += "<li><a class=\"c-link file_open_item\">" + file + "</a> <a style=\"cursor: pointer; color: red\" class=\"file_delete_item\">&times;</a></li>"
            formatted_files += "</ul>"

            if len(files) == 0:
                formatted_files = "<p>No files yet!</p>"

            return HttpResponse(formatted_files)

        elif mode == "file":
            filename = request.GET.get("filename", "")

            f = open(os.path.join(path, filename), "r")
            text = f.read()
            f.close()

            return HttpResponse(text)

    @method_decorator(login_required(login_url='login'))
    def post(self, request):
        """Saves a file to the directory."""

        path = request.POST.get("path", "")
        filename = request.POST.get("filename", "")
        mode = request.POST.get("mode", "")

        if mode == "save":
            text = request.POST.get("text", "")

            f = open(os.path.join(path, filename), "w")
            f.write(text)
            f.close()

            return HttpResponse("File saved")

        elif mode == "delete":

            os.remove(os.path.join(path, filename))

            return HttpResponse("File deleted")


class RepositoryManageView(View):
    @method_decorator(login_required(login_url='login'))
    def get(self, request, owner_username, repo_name):
        user = request.user
        try:
            owner = UserProfile.objects.get(username=owner_username)
            # If the acting user is not the owner of the repository
            if user != owner:
                # Redirect to previous page
                return redirect('files')
            repo = Repository.objects.get(name=repo_name, user=user)
            return render(request, 'manage.html', {"repo": repo})
        except UserProfile.DoesNotExist:
            # Redirect to previous page
            return redirect('files')
        except Repository.DoesNotExist:
            # Redirect to previous page
            return redirect('files')

    @method_decorator(login_required(login_url='login'))
    def post(self):
        # update repository info
        pass