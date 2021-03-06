from .coderunner import *
from .formatter import *

import os
import shlex
import base64
import hashlib

from django.shortcuts import render
from django.views.generic import View
from django.http import HttpResponse, JsonResponse
from django.shortcuts import redirect

from users.models import UserProfile
from repository.models import Repository


class IndexView(View):
    def get(self, request):
        """Shows the intro page."""

        return render(request, "index.html")


class EditorUpdateView(View):
    def get(self, request):
        """Checks for updates."""

        js_hash = request.GET.get("hash")
        filename = request.GET.get("filename")
        path = request.GET.get("path")

        full_path = os.path.join(path, filename)

        try:
            f = open(full_path, "r")
            data = f.read()
            f.close()
        except:
            return JsonResponse({"updated": False})

        decoding_data = data.encode("utf-8")
        py_hash = base64.b64encode(hashlib.sha256(decoding_data).digest())
        print("python: " + py_hash.decode())
        print("js: " + js_hash)
        if py_hash.decode() == js_hash:
            return JsonResponse({"updated": False})
        else:
            return JsonResponse({"updated": True, "data": data})

    def post(self, request):
        """Updates the file."""

        code = request.POST.get("text")
        filename = request.POST.get("filename")
        path = request.POST.get("path")

        if filename.strip() == "":
            return HttpResponse("not updated")

        full_path = os.path.join(path, filename)
        if not os.path.isfile(full_path):
            return HttpResponse("not updated")

        f = open(full_path, "w")
        f.write(code if code else "")
        f.close()

        return HttpResponse("updated")


class EditorView(View):
    def get(self, request, username, repo_name):
        """Shows the editor."""
        # Look for user
        user = request.user
        try:
            owner = UserProfile.objects.get(username=username)
            repo = Repository.objects.get(name=repo_name, user=owner)
        except UserProfile.DoesNotExist:
            return redirect('files')
        except Repository.DoesNotExist:
            return redirect('files')

        if not repo.shared_users.filter(username=user.username).exists() and not repo.user == user:
            return redirect('files')

        repo_path = "workspaces/repo_" + username + "_" + repo_name + "/"

        # Check if the repo_path exists
        if not os.path.isdir(repo_path):
            os.makedirs(repo_path)

        return render(request, "editor.html", {"path": repo_path, "repo_name": repo_name, "owner_username": owner.username, "owner_nickname": owner.nick_name})

    def post(self, request):
        """Runs the user-entered code."""

        code = request.POST.get("text")
        language = request.POST.get("language")
        filename = request.POST.get("filename")
        flags = request.POST.get("flags")
        path = request.POST.get("path")

        if code.strip() == "":
            return HttpResponse(format([["Error", "No code entered"]]))

        current_dir = os.path.dirname(os.path.realpath(__file__))
        base_dir = os.path.dirname(current_dir)

        new_path = os.path.join(base_dir, path)
        if not os.path.isdir(new_path):
            os.makedirs(new_path)

        os.chdir(new_path)

        flags = shlex.split(flags, posix=True)

        result = []
        if language == "c":
            result = run_c(code, filename, flags)
        elif language == "cpp":
            result = run_cpp(code, filename, flags)
        elif language == "java":
            result = run_java(code, filename, flags)
        elif language == "python":
            result = run_python(code, filename, flags)
        else:
            result = [["ERROR", "Pick a language to execute code!"]]

        os.chdir(os.path.dirname(current_dir))

        return HttpResponse(format(result))