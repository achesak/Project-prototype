(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"background_atlas_", frames: [[0,2002,1200,1200],[1202,2522,550,380],[2002,0,1600,1600],[3117,2324,512,512],[1202,2002,518,518],[3604,0,200,200],[0,0,2000,2000],[2002,1602,1113,1373],[3117,1602,828,720]]}
];


// symbols:



(lib.Brainicon1 = function() {
	this.spriteSheet = ss["background_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.c = function() {
	this.spriteSheet = ss["background_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.cprogramming = function() {
	this.spriteSheet = ss["background_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.http = function() {
	this.spriteSheet = ss["background_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.java = function() {
	this.spriteSheet = ss["background_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.program = function() {
	this.spriteSheet = ss["background_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.python = function() {
	this.spriteSheet = ss["background_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.sql = function() {
	this.spriteSheet = ss["background_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.thought = function() {
	this.spriteSheet = ss["background_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.thought_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.thought();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.162,0.167);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.thought_1, new cjs.Rectangle(0,0,134.1,120.1), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// head
	this.instance = new lib.Brainicon1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.302,0.333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(71));

	// gray
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAAv7IAAf3");
	this.shape.setTransform(457,135.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("EgtnATxMAAAgnhMAgWAAAMAAAAnhgAYOOnIAA/3IVaAAIAAf3g");
	this.shape_1.setTransform(165,143.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(71));

	// one5
	this.text = new cjs.Text("1", "96px 'Times'", "#0099FF");
	this.text.lineHeight = 98;
	this.text.parent = this;
	this.text.setTransform(304.2,48.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({x:307.5,y:48.4},0).wait(1).to({x:310.8},0).wait(1).to({x:314.2},0).wait(1).to({x:317.5},0).wait(1).to({x:320.9},0).wait(1).to({x:324.2},0).wait(1).to({x:327.6},0).wait(1).to({x:330.9},0).wait(1).to({x:334.3},0).wait(1).to({x:337.6},0).wait(1).to({x:341},0).wait(1).to({x:344.3},0).wait(1).to({x:347.7},0).wait(1).to({x:351},0).wait(1).to({x:354.4,y:48.3},0).wait(1).to({x:357.7},0).wait(1).to({x:361.1},0).wait(1).to({x:364.4},0).wait(1).to({x:367.7},0).wait(1).to({x:371.1},0).wait(1).to({x:374.4},0).wait(1).to({x:377.8},0).wait(1).to({x:381.1},0).wait(1).to({x:384.5},0).wait(1).to({x:387.8},0).wait(1).to({x:391.2},0).wait(1).to({x:394.5},0).wait(1).to({x:397.9},0).wait(1).to({x:401.2,y:48.2},0).wait(1).to({x:404.6},0).wait(1).to({x:407.9},0).wait(1).to({x:411.3},0).wait(1).to({x:414.6},0).wait(1).to({x:418},0).wait(1).to({x:421.3},0).wait(1).to({x:424.6},0).wait(1).to({x:428},0).wait(1).to({x:431.3},0).wait(1).to({x:434.7},0).wait(1).to({x:438},0).wait(1).to({x:441.4},0).wait(1).to({x:444.7},0).wait(1).to({x:448.1,y:48.1},0).wait(1).to({x:451.4},0).wait(1).to({x:454.8},0).wait(1).to({x:458.1},0).wait(1).to({x:461.5},0).wait(1).to({x:464.8},0).wait(1).to({x:468.2},0).wait(1).to({x:471.5},0).wait(1).to({x:474.9},0).wait(1).to({x:478.2},0).wait(1).to({x:481.5},0).wait(1).to({x:484.9},0).wait(1).to({x:488.2},0).wait(1).to({x:491.6},0).wait(1).to({x:494.9,y:48},0).wait(1).to({x:498.3},0).wait(1).to({x:501.6},0).wait(1).to({x:505},0).wait(1).to({x:508.3},0).wait(1).to({x:511.7},0).wait(1).to({x:515},0).wait(1).to({x:518.4},0).wait(1).to({x:521.7},0).wait(1).to({x:525.1},0).wait(1).to({x:528.4},0).wait(1).to({x:531.8},0).wait(1).to({x:535.1},0).wait(1).to({x:538.5},0).wait(1));

	// one4
	this.text_1 = new cjs.Text("1", "96px 'Times'", "#0099FF");
	this.text_1.lineHeight = 98;
	this.text_1.parent = this;
	this.text_1.setTransform(199.5,51.5);

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(1).to({x:202.7},0).wait(1).to({x:206},0).wait(1).to({x:209.3},0).wait(1).to({x:212.5},0).wait(1).to({x:215.8},0).wait(1).to({x:219.1},0).wait(1).to({x:222.4},0).wait(1).to({x:225.6},0).wait(1).to({x:228.9},0).wait(1).to({x:232.2},0).wait(1).to({x:235.4},0).wait(1).to({x:238.7},0).wait(1).to({x:242},0).wait(1).to({x:245.3},0).wait(1).to({x:248.5},0).wait(1).to({x:251.8},0).wait(1).to({x:255.1},0).wait(1).to({x:258.3},0).wait(1).to({x:261.6},0).wait(1).to({x:264.9},0).wait(1).to({x:268.1},0).wait(1).to({x:271.4},0).wait(1).to({x:274.7},0).wait(1).to({x:278},0).wait(1).to({x:281.2},0).wait(1).to({x:284.5},0).wait(1).to({x:287.8},0).wait(1).to({x:291.1},0).wait(1).to({x:294.3},0).wait(1).to({x:297.6},0).wait(1).to({x:300.9},0).wait(1).to({x:304.1},0).wait(1).to({x:307.4},0).wait(1).to({x:310.7},0).wait(1).to({x:314},0).wait(1).to({x:317.2},0).wait(1).to({x:320.5},0).wait(1).to({x:323.8},0).wait(1).to({x:327},0).wait(1).to({x:330.3},0).wait(1).to({x:333.6},0).wait(1).to({x:336.8},0).wait(1).to({x:340.1},0).wait(1).to({x:343.4},0).wait(1).to({x:346.7},0).wait(1).to({x:349.9},0).wait(1).to({x:353.2},0).wait(1).to({x:356.5},0).wait(1).to({x:359.8},0).wait(1).to({x:363},0).wait(1).to({x:366.3},0).wait(1).to({x:369.6},0).wait(1).to({x:372.8},0).wait(1).to({x:376.1},0).wait(1).to({x:379.4},0).wait(1).to({x:382.7},0).wait(1).to({x:385.9},0).wait(1).to({x:389.2},0).wait(1).to({x:392.5},0).wait(1).to({x:395.7},0).wait(1).to({x:399},0).wait(1).to({x:402.3},0).wait(1).to({x:405.6},0).wait(1).to({x:408.8},0).wait(1).to({x:412.1},0).wait(1).to({x:415.4},0).wait(1).to({x:418.6},0).wait(1).to({x:421.9},0).wait(1).to({x:425.2},0).wait(1).to({x:428.5},0).wait(1));

	// one3
	this.text_2 = new cjs.Text("1", "96px 'Times'", "#0099FF");
	this.text_2.lineHeight = 98;
	this.text_2.parent = this;
	this.text_2.setTransform(147.3,51.5);

	this.timeline.addTween(cjs.Tween.get(this.text_2).wait(1).to({x:150.5},0).wait(1).to({x:153.8},0).wait(1).to({x:157.1},0).wait(1).to({x:160.3},0).wait(1).to({x:163.6},0).wait(1).to({x:166.9},0).wait(1).to({x:170.2},0).wait(1).to({x:173.4},0).wait(1).to({x:176.7},0).wait(1).to({x:180},0).wait(1).to({x:183.2},0).wait(1).to({x:186.5},0).wait(1).to({x:189.8},0).wait(1).to({x:193.1},0).wait(1).to({x:196.3},0).wait(1).to({x:199.6},0).wait(1).to({x:202.9},0).wait(1).to({x:206.1},0).wait(1).to({x:209.4},0).wait(1).to({x:212.7},0).wait(1).to({x:215.9},0).wait(1).to({x:219.2},0).wait(1).to({x:222.5},0).wait(1).to({x:225.8},0).wait(1).to({x:229},0).wait(1).to({x:232.3},0).wait(1).to({x:235.6},0).wait(1).to({x:238.9},0).wait(1).to({x:242.1},0).wait(1).to({x:245.4},0).wait(1).to({x:248.7},0).wait(1).to({x:251.9},0).wait(1).to({x:255.2},0).wait(1).to({x:258.5},0).wait(1).to({x:261.8},0).wait(1).to({x:265},0).wait(1).to({x:268.3},0).wait(1).to({x:271.6},0).wait(1).to({x:274.8},0).wait(1).to({x:278.1},0).wait(1).to({x:281.4},0).wait(1).to({x:284.6},0).wait(1).to({x:287.9},0).wait(1).to({x:291.2},0).wait(1).to({x:294.5},0).wait(1).to({x:297.7},0).wait(1).to({x:301},0).wait(1).to({x:304.3},0).wait(1).to({x:307.6},0).wait(1).to({x:310.8},0).wait(1).to({x:314.1},0).wait(1).to({x:317.4},0).wait(1).to({x:320.6},0).wait(1).to({x:323.9},0).wait(1).to({x:327.2},0).wait(1).to({x:330.5},0).wait(1).to({x:333.7},0).wait(1).to({x:337},0).wait(1).to({x:340.3},0).wait(1).to({x:343.5},0).wait(1).to({x:346.8},0).wait(1).to({x:350.1},0).wait(1).to({x:353.4},0).wait(1).to({x:356.6},0).wait(1).to({x:359.9},0).wait(1).to({x:363.2},0).wait(1).to({x:366.4},0).wait(1).to({x:369.7},0).wait(1).to({x:373},0).wait(1).to({x:376.3},0).wait(1));

	// one2
	this.text_3 = new cjs.Text("0", "96px 'Times'", "#0099FF");
	this.text_3.lineHeight = 98;
	this.text_3.parent = this;
	this.text_3.setTransform(-114.8,51.5);

	this.timeline.addTween(cjs.Tween.get(this.text_3).wait(1).to({x:-111.8},0).wait(1).to({x:-108.8},0).wait(1).to({x:-105.8},0).wait(1).to({x:-102.8},0).wait(1).to({x:-99.8},0).wait(1).to({x:-96.8},0).wait(1).to({x:-93.8},0).wait(1).to({x:-90.8},0).wait(1).to({x:-87.8},0).wait(1).to({x:-84.8},0).wait(1).to({x:-81.8},0).wait(1).to({x:-78.8},0).wait(1).to({x:-75.8},0).wait(1).to({x:-72.8},0).wait(1).to({x:-69.8},0).wait(1).to({x:-66.8},0).wait(1).to({x:-63.8},0).wait(1).to({x:-60.8},0).wait(1).to({x:-57.8},0).wait(1).to({x:-54.8},0).wait(1).to({x:-51.8},0).wait(1).to({x:-48.8},0).wait(1).to({x:-45.8},0).wait(1).to({x:-42.7},0).wait(1).to({x:-39.7},0).wait(1).to({x:-36.7},0).wait(1).to({x:-33.7},0).wait(1).to({x:-30.7},0).wait(1).to({x:-27.7},0).wait(1).to({x:-24.7},0).wait(1).to({x:-21.7},0).wait(1).to({x:-18.7},0).wait(1).to({x:-15.7},0).wait(1).to({x:-12.7},0).wait(1).to({x:-9.7},0).wait(1).to({x:-6.7},0).wait(1).to({x:-3.7},0).wait(1).to({x:-0.7},0).wait(1).to({x:2.3},0).wait(1).to({x:5.3},0).wait(1).to({x:8.3},0).wait(1).to({x:11.3},0).wait(1).to({x:14.3},0).wait(1).to({x:17.3},0).wait(1).to({x:20.3},0).wait(1).to({x:23.3},0).wait(1).to({x:26.3},0).wait(1).to({x:29.4},0).wait(1).to({x:32.4},0).wait(1).to({x:35.4},0).wait(1).to({x:38.4},0).wait(1).to({x:41.4},0).wait(1).to({x:44.4},0).wait(1).to({x:47.4},0).wait(1).to({x:50.4},0).wait(1).to({x:53.4},0).wait(1).to({x:56.4},0).wait(1).to({x:59.4},0).wait(1).to({x:62.4},0).wait(1).to({x:65.4},0).wait(1).to({x:68.4},0).wait(1).to({x:71.4},0).wait(1).to({x:74.4},0).wait(1).to({x:77.4},0).wait(1).to({x:80.4},0).wait(1).to({x:83.4},0).wait(1).to({x:86.4},0).wait(1).to({x:89.4},0).wait(1).to({x:92.4},0).wait(1).to({x:95.5},0).wait(1));

	// one1
	this.text_4 = new cjs.Text("0", "96px 'Times'", "#0099FF");
	this.text_4.lineHeight = 98;
	this.text_4.parent = this;
	this.text_4.setTransform(40.6,51.5);

	this.timeline.addTween(cjs.Tween.get(this.text_4).wait(1).to({x:43.6},0).wait(1).to({x:46.6},0).wait(1).to({x:49.6},0).wait(1).to({x:52.6},0).wait(1).to({x:55.6},0).wait(1).to({x:58.7},0).wait(1).to({x:61.7},0).wait(1).to({x:64.7},0).wait(1).to({x:67.7},0).wait(1).to({x:70.7},0).wait(1).to({x:73.7},0).wait(1).to({x:76.8},0).wait(1).to({x:79.8},0).wait(1).to({x:82.8},0).wait(1).to({x:85.8},0).wait(1).to({x:88.8},0).wait(1).to({x:91.8},0).wait(1).to({x:94.9},0).wait(1).to({x:97.9},0).wait(1).to({x:100.9},0).wait(1).to({x:103.9},0).wait(1).to({x:106.9},0).wait(1).to({x:109.9},0).wait(1).to({x:113},0).wait(1).to({x:116},0).wait(1).to({x:119},0).wait(1).to({x:122},0).wait(1).to({x:125},0).wait(1).to({x:128},0).wait(1).to({x:131.1},0).wait(1).to({x:134.1},0).wait(1).to({x:137.1},0).wait(1).to({x:140.1},0).wait(1).to({x:143.1},0).wait(1).to({x:146.2},0).wait(1).to({x:149.2},0).wait(1).to({x:152.2},0).wait(1).to({x:155.2},0).wait(1).to({x:158.2},0).wait(1).to({x:161.2},0).wait(1).to({x:164.3},0).wait(1).to({x:167.3},0).wait(1).to({x:170.3},0).wait(1).to({x:173.3},0).wait(1).to({x:176.3},0).wait(1).to({x:179.3},0).wait(1).to({x:182.4},0).wait(1).to({x:185.4},0).wait(1).to({x:188.4},0).wait(1).to({x:191.4},0).wait(1).to({x:194.4},0).wait(1).to({x:197.4},0).wait(1).to({x:200.5},0).wait(1).to({x:203.5},0).wait(1).to({x:206.5},0).wait(1).to({x:209.5},0).wait(1).to({x:212.5},0).wait(1).to({x:215.5},0).wait(1).to({x:218.6},0).wait(1).to({x:221.6},0).wait(1).to({x:224.6},0).wait(1).to({x:227.6},0).wait(1).to({x:230.6},0).wait(1).to({x:233.6},0).wait(1).to({x:236.7},0).wait(1).to({x:239.7},0).wait(1).to({x:242.7},0).wait(1).to({x:245.7},0).wait(1).to({x:248.7},0).wait(1).to({x:251.8},0).wait(1));

	// zero4
	this.text_5 = new cjs.Text("0", "96px 'Times'", "#0099FF");
	this.text_5.lineHeight = 98;
	this.text_5.parent = this;
	this.text_5.setTransform(251.7,51.5);

	this.timeline.addTween(cjs.Tween.get(this.text_5).wait(1).to({x:255},0).wait(1).to({x:258.4},0).wait(1).to({x:261.7},0).wait(1).to({x:265.1},0).wait(1).to({x:268.4},0).wait(1).to({x:271.8},0).wait(1).to({x:275.1},0).wait(1).to({x:278.5},0).wait(1).to({x:281.8},0).wait(1).to({x:285.2},0).wait(1).to({x:288.5},0).wait(1).to({x:291.9},0).wait(1).to({x:295.2},0).wait(1).to({x:298.6},0).wait(1).to({x:301.9},0).wait(1).to({x:305.3},0).wait(1).to({x:308.6},0).wait(1).to({x:312},0).wait(1).to({x:315.3},0).wait(1).to({x:318.7},0).wait(1).to({x:322},0).wait(1).to({x:325.4},0).wait(1).to({x:328.7},0).wait(1).to({x:332.1},0).wait(1).to({x:335.4},0).wait(1).to({x:338.8},0).wait(1).to({x:342.1},0).wait(1).to({x:345.5},0).wait(1).to({x:348.8},0).wait(1).to({x:352.2},0).wait(1).to({x:355.5},0).wait(1).to({x:358.9},0).wait(1).to({x:362.2},0).wait(1).to({x:365.6},0).wait(1).to({x:369},0).wait(1).to({x:372.3},0).wait(1).to({x:375.7},0).wait(1).to({x:379},0).wait(1).to({x:382.4},0).wait(1).to({x:385.7},0).wait(1).to({x:389.1},0).wait(1).to({x:392.4},0).wait(1).to({x:395.8},0).wait(1).to({x:399.1},0).wait(1).to({x:402.5},0).wait(1).to({x:405.8},0).wait(1).to({x:409.2},0).wait(1).to({x:412.5},0).wait(1).to({x:415.9},0).wait(1).to({x:419.2},0).wait(1).to({x:422.6},0).wait(1).to({x:425.9},0).wait(1).to({x:429.3},0).wait(1).to({x:432.6},0).wait(1).to({x:436},0).wait(1).to({x:439.3},0).wait(1).to({x:442.7},0).wait(1).to({x:446},0).wait(1).to({x:449.4},0).wait(1).to({x:452.7},0).wait(1).to({x:456.1},0).wait(1).to({x:459.4},0).wait(1).to({x:462.8},0).wait(1).to({x:466.1},0).wait(1).to({x:469.5},0).wait(1).to({x:472.8},0).wait(1).to({x:476.2},0).wait(1).to({x:479.5},0).wait(1).to({x:482.9},0).wait(1).to({x:486.3},0).wait(1));

	// zero3
	this.text_6 = new cjs.Text("1", "96px 'Times'", "#0099FF");
	this.text_6.lineHeight = 98;
	this.text_6.parent = this;
	this.text_6.setTransform(-62.6,51.5);

	this.timeline.addTween(cjs.Tween.get(this.text_6).wait(1).to({x:-59.7},0).wait(1).to({x:-56.7},0).wait(1).to({x:-53.7},0).wait(1).to({x:-50.7},0).wait(1).to({x:-47.7},0).wait(1).to({x:-44.7},0).wait(1).to({x:-41.7},0).wait(1).to({x:-38.7},0).wait(1).to({x:-35.7},0).wait(1).to({x:-32.7},0).wait(1).to({x:-29.7},0).wait(1).to({x:-26.7},0).wait(1).to({x:-23.7},0).wait(1).to({x:-20.7},0).wait(1).to({x:-17.7},0).wait(1).to({x:-14.7},0).wait(1).to({x:-11.7},0).wait(1).to({x:-8.7},0).wait(1).to({x:-5.7},0).wait(1).to({x:-2.7},0).wait(1).to({x:0.3},0).wait(1).to({x:3.3},0).wait(1).to({x:6.3},0).wait(1).to({x:9.3},0).wait(1).to({x:12.3},0).wait(1).to({x:15.3},0).wait(1).to({x:18.3},0).wait(1).to({x:21.3},0).wait(1).to({x:24.2},0).wait(1).to({x:27.2},0).wait(1).to({x:30.2},0).wait(1).to({x:33.2},0).wait(1).to({x:36.2},0).wait(1).to({x:39.2},0).wait(1).to({x:42.2},0).wait(1).to({x:45.2},0).wait(1).to({x:48.2},0).wait(1).to({x:51.2},0).wait(1).to({x:54.2},0).wait(1).to({x:57.2},0).wait(1).to({x:60.2},0).wait(1).to({x:63.2},0).wait(1).to({x:66.2},0).wait(1).to({x:69.2},0).wait(1).to({x:72.2},0).wait(1).to({x:75.2},0).wait(1).to({x:78.2},0).wait(1).to({x:81.2},0).wait(1).to({x:84.2},0).wait(1).to({x:87.2},0).wait(1).to({x:90.2},0).wait(1).to({x:93.2},0).wait(1).to({x:96.2},0).wait(1).to({x:99.2},0).wait(1).to({x:102.2},0).wait(1).to({x:105.2},0).wait(1).to({x:108.1},0).wait(1).to({x:111.1},0).wait(1).to({x:114.1},0).wait(1).to({x:117.1},0).wait(1).to({x:120.1},0).wait(1).to({x:123.1},0).wait(1).to({x:126.1},0).wait(1).to({x:129.1},0).wait(1).to({x:132.1},0).wait(1).to({x:135.1},0).wait(1).to({x:138.1},0).wait(1).to({x:141.1},0).wait(1).to({x:144.1},0).wait(1).to({x:147.1},0).wait(1));

	// zero2
	this.text_7 = new cjs.Text("1", "96px 'Times'", "#0099FF");
	this.text_7.lineHeight = 98;
	this.text_7.parent = this;
	this.text_7.setTransform(-14.6,51.5);

	this.timeline.addTween(cjs.Tween.get(this.text_7).wait(1).to({x:-11.6},0).wait(1).to({x:-8.5},0).wait(1).to({x:-5.5},0).wait(1).to({x:-2.4},0).wait(1).to({x:0.7},0).wait(1).to({x:3.7},0).wait(1).to({x:6.8},0).wait(1).to({x:9.8},0).wait(1).to({x:12.9},0).wait(1).to({x:16},0).wait(1).to({x:19},0).wait(1).to({x:22.1},0).wait(1).to({x:25.1},0).wait(1).to({x:28.2},0).wait(1).to({x:31.2},0).wait(1).to({x:34.3},0).wait(1).to({x:37.4},0).wait(1).to({x:40.4},0).wait(1).to({x:43.5},0).wait(1).to({x:46.6},0).wait(1).to({x:49.6},0).wait(1).to({x:52.7},0).wait(1).to({x:55.7},0).wait(1).to({x:58.8},0).wait(1).to({x:61.9},0).wait(1).to({x:64.9},0).wait(1).to({x:68},0).wait(1).to({x:71},0).wait(1).to({x:74.1},0).wait(1).to({x:77.1},0).wait(1).to({x:80.2},0).wait(1).to({x:83.3},0).wait(1).to({x:86.3},0).wait(1).to({x:89.4},0).wait(1).to({x:92.5},0).wait(1).to({x:95.5},0).wait(1).to({x:98.6},0).wait(1).to({x:101.6},0).wait(1).to({x:104.7},0).wait(1).to({x:107.8},0).wait(1).to({x:110.8},0).wait(1).to({x:113.9},0).wait(1).to({x:116.9},0).wait(1).to({x:120},0).wait(1).to({x:123.1},0).wait(1).to({x:126.1},0).wait(1).to({x:129.2},0).wait(1).to({x:132.2},0).wait(1).to({x:135.3},0).wait(1).to({x:138.4},0).wait(1).to({x:141.4},0).wait(1).to({x:144.5},0).wait(1).to({x:147.5},0).wait(1).to({x:150.6},0).wait(1).to({x:153.7},0).wait(1).to({x:156.7},0).wait(1).to({x:159.8},0).wait(1).to({x:162.8},0).wait(1).to({x:165.9},0).wait(1).to({x:168.9},0).wait(1).to({x:172},0).wait(1).to({x:175.1},0).wait(1).to({x:178.1},0).wait(1).to({x:181.2},0).wait(1).to({x:184.3},0).wait(1).to({x:187.3},0).wait(1).to({x:190.4},0).wait(1).to({x:193.4},0).wait(1).to({x:196.5},0).wait(1).to({x:199.6},0).wait(1));

	// zero1
	this.text_8 = new cjs.Text("0", "96px 'Times'", "#0099FF");
	this.text_8.lineHeight = 98;
	this.text_8.parent = this;
	this.text_8.setTransform(95.1,51.5);

	this.timeline.addTween(cjs.Tween.get(this.text_8).wait(1).to({x:98.3},0).wait(1).to({x:101.6},0).wait(1).to({x:104.9},0).wait(1).to({x:108.1},0).wait(1).to({x:111.4},0).wait(1).to({x:114.7},0).wait(1).to({x:118},0).wait(1).to({x:121.2},0).wait(1).to({x:124.5},0).wait(1).to({x:127.8},0).wait(1).to({x:131},0).wait(1).to({x:134.3},0).wait(1).to({x:137.6},0).wait(1).to({x:140.9},0).wait(1).to({x:144.1},0).wait(1).to({x:147.4},0).wait(1).to({x:150.7},0).wait(1).to({x:153.9},0).wait(1).to({x:157.2},0).wait(1).to({x:160.5},0).wait(1).to({x:163.7},0).wait(1).to({x:167},0).wait(1).to({x:170.3},0).wait(1).to({x:173.6},0).wait(1).to({x:176.8},0).wait(1).to({x:180.1},0).wait(1).to({x:183.4},0).wait(1).to({x:186.7},0).wait(1).to({x:189.9},0).wait(1).to({x:193.2},0).wait(1).to({x:196.5},0).wait(1).to({x:199.7},0).wait(1).to({x:203},0).wait(1).to({x:206.3},0).wait(1).to({x:209.6},0).wait(1).to({x:212.8},0).wait(1).to({x:216.1},0).wait(1).to({x:219.4},0).wait(1).to({x:222.6},0).wait(1).to({x:225.9},0).wait(1).to({x:229.2},0).wait(1).to({x:232.4},0).wait(1).to({x:235.7},0).wait(1).to({x:239},0).wait(1).to({x:242.3},0).wait(1).to({x:245.5},0).wait(1).to({x:248.8},0).wait(1).to({x:252.1},0).wait(1).to({x:255.4},0).wait(1).to({x:258.6},0).wait(1).to({x:261.9},0).wait(1).to({x:265.2},0).wait(1).to({x:268.4},0).wait(1).to({x:271.7},0).wait(1).to({x:275},0).wait(1).to({x:278.3},0).wait(1).to({x:281.5},0).wait(1).to({x:284.8},0).wait(1).to({x:288.1},0).wait(1).to({x:291.3},0).wait(1).to({x:294.6},0).wait(1).to({x:297.9},0).wait(1).to({x:301.2},0).wait(1).to({x:304.4},0).wait(1).to({x:307.7},0).wait(1).to({x:311},0).wait(1).to({x:314.2},0).wait(1).to({x:317.5},0).wait(1).to({x:320.8},0).wait(1).to({x:324.1},0).wait(1));

	// one4
	this.text_9 = new cjs.Text("1", "96px 'Times'", "#0099FF");
	this.text_9.lineHeight = 98;
	this.text_9.parent = this;
	this.text_9.setTransform(-60.4,132.1);

	this.timeline.addTween(cjs.Tween.get(this.text_9).wait(1).to({x:-57.5,y:132},0).wait(1).to({x:-54.5,y:131.9},0).wait(1).to({x:-51.5},0).wait(1).to({x:-48.6,y:131.8},0).wait(1).to({x:-45.6},0).wait(1).to({x:-42.6,y:131.7},0).wait(1).to({x:-39.7},0).wait(1).to({x:-36.7,y:131.6},0).wait(1).to({x:-33.7,y:131.5},0).wait(1).to({x:-30.8},0).wait(1).to({x:-27.8,y:131.4},0).wait(1).to({x:-24.8},0).wait(1).to({x:-21.9,y:131.3},0).wait(1).to({x:-18.9},0).wait(1).to({x:-15.9,y:131.2},0).wait(1).to({x:-13,y:131.1},0).wait(1).to({x:-10},0).wait(1).to({x:-7,y:131},0).wait(1).to({x:-4.1},0).wait(1).to({x:-1.1,y:130.9},0).wait(1).to({x:1.9},0).wait(1).to({x:4.9,y:130.8},0).wait(1).to({x:7.8,y:130.7},0).wait(1).to({x:10.8},0).wait(1).to({x:13.8,y:130.6},0).wait(1).to({x:16.7},0).wait(1).to({x:19.7,y:130.5},0).wait(1).to({x:22.7},0).wait(1).to({x:25.6,y:130.4},0).wait(1).to({x:28.6,y:130.3},0).wait(1).to({x:31.6},0).wait(1).to({x:34.5,y:130.2},0).wait(1).to({x:37.5},0).wait(1).to({x:40.5,y:130.1},0).wait(1).to({x:43.5},0).wait(1).to({x:46.4,y:130},0).wait(1).to({x:49.4,y:129.9},0).wait(1).to({x:52.4},0).wait(1).to({x:55.3,y:129.8},0).wait(1).to({x:58.3},0).wait(1).to({x:61.3,y:129.7},0).wait(1).to({x:64.2},0).wait(1).to({x:67.2,y:129.6},0).wait(1).to({x:70.2,y:129.5},0).wait(1).to({x:73.1},0).wait(1).to({x:76.1,y:129.4},0).wait(1).to({x:79.1},0).wait(1).to({x:82,y:129.3},0).wait(1).to({x:85},0).wait(1).to({x:88,y:129.2},0).wait(1).to({x:90.9,y:129.1},0).wait(1).to({x:93.9},0).wait(1).to({x:96.9,y:129},0).wait(1).to({x:99.9},0).wait(1).to({x:102.8,y:128.9},0).wait(1).to({x:105.8},0).wait(1).to({x:108.8,y:128.8},0).wait(1).to({x:111.7,y:128.7},0).wait(1).to({x:114.7},0).wait(1).to({x:117.7,y:128.6},0).wait(1).to({x:120.6},0).wait(1).to({x:123.6,y:128.5},0).wait(1).to({x:126.6},0).wait(1).to({x:129.5,y:128.4},0).wait(1).to({x:132.5,y:128.3},0).wait(1).to({x:135.5},0).wait(1).to({x:138.4,y:128.2},0).wait(1).to({x:141.4},0).wait(1).to({x:144.4,y:128.1},0).wait(1).to({x:147.4},0).wait(1));

	// one3
	this.text_10 = new cjs.Text("1", "96px 'Times'", "#0099FF");
	this.text_10.lineHeight = 98;
	this.text_10.parent = this;
	this.text_10.setTransform(40.6,132.1);

	this.timeline.addTween(cjs.Tween.get(this.text_10).wait(1).to({x:43.6,y:132},0).wait(1).to({x:46.7},0).wait(1).to({x:49.7,y:131.9},0).wait(1).to({x:52.8},0).wait(1).to({x:55.8,y:131.8},0).wait(1).to({x:58.9},0).wait(1).to({x:61.9,y:131.7},0).wait(1).to({x:65},0).wait(1).to({x:68.1,y:131.6},0).wait(1).to({x:71.1},0).wait(1).to({x:74.2,y:131.5},0).wait(1).to({x:77.2},0).wait(1).to({x:80.3,y:131.4},0).wait(1).to({x:83.3},0).wait(1).to({x:86.4,y:131.3},0).wait(1).to({x:89.5},0).wait(1).to({x:92.5,y:131.2},0).wait(1).to({x:95.6},0).wait(1).to({x:98.6,y:131.1},0).wait(1).to({x:101.7},0).wait(1).to({x:104.7,y:131},0).wait(1).to({x:107.8},0).wait(1).to({x:110.8,y:130.9},0).wait(1).to({x:113.9},0).wait(1).to({x:117,y:130.8},0).wait(1).to({x:120},0).wait(1).to({x:123.1,y:130.7},0).wait(1).to({x:126.1},0).wait(1).to({x:129.2,y:130.6},0).wait(1).to({x:132.2},0).wait(1).to({x:135.3,y:130.5},0).wait(1).to({x:138.4},0).wait(1).to({x:141.4,y:130.4},0).wait(1).to({x:144.5},0).wait(1).to({x:147.5,y:130.3},0).wait(1).to({x:150.6},0).wait(1).to({x:153.6,y:130.2},0).wait(1).to({x:156.7},0).wait(1).to({x:159.8,y:130.1},0).wait(1).to({x:162.8},0).wait(1).to({x:165.9,y:130},0).wait(1).to({x:168.9},0).wait(1).to({x:172,y:129.9},0).wait(1).to({x:175},0).wait(1).to({x:178.1,y:129.8},0).wait(1).to({x:181.1},0).wait(1).to({x:184.2,y:129.7},0).wait(1).to({x:187.3},0).wait(1).to({x:190.3,y:129.6},0).wait(1).to({x:193.4},0).wait(1).to({x:196.4,y:129.5},0).wait(1).to({x:199.5},0).wait(1).to({x:202.5,y:129.4},0).wait(1).to({x:205.6},0).wait(1).to({x:208.7,y:129.3},0).wait(1).to({x:211.7},0).wait(1).to({x:214.8,y:129.2},0).wait(1).to({x:217.8},0).wait(1).to({x:220.9,y:129.1},0).wait(1).to({x:223.9},0).wait(1).to({x:227,y:129},0).wait(1).to({x:230},0).wait(1).to({x:233.1,y:128.9},0).wait(1).to({x:236.2},0).wait(1).to({x:239.2,y:128.8},0).wait(1).to({x:242.3},0).wait(1).to({x:245.3,y:128.7},0).wait(1).to({x:248.4},0).wait(1).to({x:251.4,y:128.6},0).wait(1).to({x:254.5},0).wait(1));

	// one2
	this.text_11 = new cjs.Text("1", "96px 'Times'", "#0099FF");
	this.text_11.lineHeight = 98;
	this.text_11.parent = this;
	this.text_11.setTransform(254.7,128.6);

	this.timeline.addTween(cjs.Tween.get(this.text_11).wait(1).to({x:258.1},0).wait(1).to({x:261.4},0).wait(1).to({x:264.8,y:128.7},0).wait(1).to({x:268.1},0).wait(1).to({x:271.5},0).wait(1).to({x:274.8,y:128.8},0).wait(1).to({x:278.2},0).wait(1).to({x:281.6},0).wait(1).to({x:284.9,y:128.9},0).wait(1).to({x:288.3},0).wait(1).to({x:291.6},0).wait(1).to({x:295,y:129},0).wait(1).to({x:298.4},0).wait(1).to({x:301.7,y:129.1},0).wait(1).to({x:305.1},0).wait(1).to({x:308.4},0).wait(1).to({x:311.8,y:129.2},0).wait(1).to({x:315.1},0).wait(1).to({x:318.5},0).wait(1).to({x:321.9,y:129.3},0).wait(1).to({x:325.2},0).wait(1).to({x:328.6},0).wait(1).to({x:331.9,y:129.4},0).wait(1).to({x:335.3},0).wait(1).to({x:338.6},0).wait(1).to({x:342,y:129.5},0).wait(1).to({x:345.4},0).wait(1).to({x:348.7,y:129.6},0).wait(1).to({x:352.1},0).wait(1).to({x:355.4},0).wait(1).to({x:358.8,y:129.7},0).wait(1).to({x:362.2},0).wait(1).to({x:365.5},0).wait(1).to({x:368.9,y:129.8},0).wait(1).to({x:372.2},0).wait(1).to({x:375.6},0).wait(1).to({x:378.9,y:129.9},0).wait(1).to({x:382.3},0).wait(1).to({x:385.7},0).wait(1).to({x:389,y:130},0).wait(1).to({x:392.4},0).wait(1).to({x:395.7},0).wait(1).to({x:399.1,y:130.1},0).wait(1).to({x:402.4},0).wait(1).to({x:405.8,y:130.2},0).wait(1).to({x:409.2},0).wait(1).to({x:412.5},0).wait(1).to({x:415.9,y:130.3},0).wait(1).to({x:419.2},0).wait(1).to({x:422.6},0).wait(1).to({x:426,y:130.4},0).wait(1).to({x:429.3},0).wait(1).to({x:432.7},0).wait(1).to({x:436,y:130.5},0).wait(1).to({x:439.4},0).wait(1).to({x:442.7,y:130.6},0).wait(1).to({x:446.1},0).wait(1).to({x:449.5},0).wait(1).to({x:452.8,y:130.7},0).wait(1).to({x:456.2},0).wait(1).to({x:459.5},0).wait(1).to({x:462.9,y:130.8},0).wait(1).to({x:466.2},0).wait(1).to({x:469.6},0).wait(1).to({x:473,y:130.9},0).wait(1).to({x:476.3},0).wait(1).to({x:479.7},0).wait(1).to({x:483,y:131},0).wait(1).to({x:486.4},0).wait(1).to({x:489.8,y:131.1},0).wait(1));

	// one1
	this.text_12 = new cjs.Text("1", "96px 'Times'", "#0099FF");
	this.text_12.lineHeight = 98;
	this.text_12.parent = this;
	this.text_12.setTransform(147.3,128.6);

	this.timeline.addTween(cjs.Tween.get(this.text_12).wait(1).to({x:150.5},0).wait(1).to({x:153.8},0).wait(1).to({x:157.1,y:128.7},0).wait(1).to({x:160.3},0).wait(1).to({x:163.6},0).wait(1).to({x:166.9,y:128.8},0).wait(1).to({x:170.2},0).wait(1).to({x:173.4},0).wait(1).to({x:176.7,y:128.9},0).wait(1).to({x:180},0).wait(1).to({x:183.2},0).wait(1).to({x:186.5,y:129},0).wait(1).to({x:189.8},0).wait(1).to({x:193.1,y:129.1},0).wait(1).to({x:196.3},0).wait(1).to({x:199.6},0).wait(1).to({x:202.9,y:129.2},0).wait(1).to({x:206.1},0).wait(1).to({x:209.4},0).wait(1).to({x:212.7,y:129.3},0).wait(1).to({x:215.9},0).wait(1).to({x:219.2},0).wait(1).to({x:222.5,y:129.4},0).wait(1).to({x:225.8},0).wait(1).to({x:229},0).wait(1).to({x:232.3,y:129.5},0).wait(1).to({x:235.6},0).wait(1).to({x:238.9,y:129.6},0).wait(1).to({x:242.1},0).wait(1).to({x:245.4},0).wait(1).to({x:248.7,y:129.7},0).wait(1).to({x:251.9},0).wait(1).to({x:255.2},0).wait(1).to({x:258.5,y:129.8},0).wait(1).to({x:261.8},0).wait(1).to({x:265},0).wait(1).to({x:268.3,y:129.9},0).wait(1).to({x:271.6},0).wait(1).to({x:274.8},0).wait(1).to({x:278.1,y:130},0).wait(1).to({x:281.4},0).wait(1).to({x:284.6},0).wait(1).to({x:287.9,y:130.1},0).wait(1).to({x:291.2},0).wait(1).to({x:294.5,y:130.2},0).wait(1).to({x:297.7},0).wait(1).to({x:301},0).wait(1).to({x:304.3,y:130.3},0).wait(1).to({x:307.6},0).wait(1).to({x:310.8},0).wait(1).to({x:314.1,y:130.4},0).wait(1).to({x:317.4},0).wait(1).to({x:320.6},0).wait(1).to({x:323.9,y:130.5},0).wait(1).to({x:327.2},0).wait(1).to({x:330.5,y:130.6},0).wait(1).to({x:333.7},0).wait(1).to({x:337},0).wait(1).to({x:340.3,y:130.7},0).wait(1).to({x:343.5},0).wait(1).to({x:346.8},0).wait(1).to({x:350.1,y:130.8},0).wait(1).to({x:353.4},0).wait(1).to({x:356.6},0).wait(1).to({x:359.9,y:130.9},0).wait(1).to({x:363.2},0).wait(1).to({x:366.4},0).wait(1).to({x:369.7,y:131},0).wait(1).to({x:373},0).wait(1).to({x:376.3,y:131.1},0).wait(1));

	// zero5
	this.text_13 = new cjs.Text("0", "96px 'Times'", "#0099FF");
	this.text_13.lineHeight = 98;
	this.text_13.parent = this;
	this.text_13.setTransform(-114.8,128.6);

	this.timeline.addTween(cjs.Tween.get(this.text_13).wait(1).to({x:-111.8},0).wait(1).to({x:-108.8},0).wait(1).to({x:-105.8},0).wait(1).to({x:-102.8},0).wait(1).to({x:-99.8},0).wait(1).to({x:-96.8},0).wait(1).to({x:-93.8},0).wait(1).to({x:-90.8},0).wait(1).to({x:-87.8},0).wait(1).to({x:-84.8},0).wait(1).to({x:-81.8},0).wait(1).to({x:-78.8},0).wait(1).to({x:-75.8},0).wait(1).to({x:-72.8},0).wait(1).to({x:-69.8},0).wait(1).to({x:-66.8},0).wait(1).to({x:-63.8},0).wait(1).to({x:-60.8},0).wait(1).to({x:-57.8},0).wait(1).to({x:-54.8},0).wait(1).to({x:-51.8},0).wait(1).to({x:-48.8},0).wait(1).to({x:-45.8},0).wait(1).to({x:-42.8},0).wait(1).to({x:-39.8},0).wait(1).to({x:-36.8},0).wait(1).to({x:-33.8},0).wait(1).to({x:-30.7},0).wait(1).to({x:-27.7},0).wait(1).to({x:-24.7},0).wait(1).to({x:-21.7},0).wait(1).to({x:-18.7},0).wait(1).to({x:-15.7},0).wait(1).to({x:-12.7},0).wait(1).to({x:-9.7},0).wait(1).to({x:-6.7},0).wait(1).to({x:-3.7},0).wait(1).to({x:-0.7},0).wait(1).to({x:2.3},0).wait(1).to({x:5.3},0).wait(1).to({x:8.3},0).wait(1).to({x:11.3},0).wait(1).to({x:14.3},0).wait(1).to({x:17.3},0).wait(1).to({x:20.3},0).wait(1).to({x:23.3},0).wait(1).to({x:26.3},0).wait(1).to({x:29.3},0).wait(1).to({x:32.3},0).wait(1).to({x:35.3},0).wait(1).to({x:38.3},0).wait(1).to({x:41.3},0).wait(1).to({x:44.3},0).wait(1).to({x:47.3},0).wait(1).to({x:50.3},0).wait(1).to({x:53.4},0).wait(1).to({x:56.4},0).wait(1).to({x:59.4},0).wait(1).to({x:62.4},0).wait(1).to({x:65.4},0).wait(1).to({x:68.4},0).wait(1).to({x:71.4},0).wait(1).to({x:74.4},0).wait(1).to({x:77.4},0).wait(1).to({x:80.4},0).wait(1).to({x:83.4},0).wait(1).to({x:86.4},0).wait(1).to({x:89.4},0).wait(1).to({x:92.4},0).wait(1).to({x:95.4,y:128.7},0).wait(1));

	// zero4
	this.text_14 = new cjs.Text("0", "96px 'Times'", "#0099FF");
	this.text_14.lineHeight = 98;
	this.text_14.parent = this;
	this.text_14.setTransform(-4.9,128.6);

	this.timeline.addTween(cjs.Tween.get(this.text_14).wait(1).to({x:-2},0).wait(1).to({x:1},0).wait(1).to({x:3.9},0).wait(1).to({x:6.9},0).wait(1).to({x:9.9},0).wait(1).to({x:12.8},0).wait(1).to({x:15.8},0).wait(1).to({x:18.8},0).wait(1).to({x:21.7},0).wait(1).to({x:24.7},0).wait(1).to({x:27.7},0).wait(1).to({x:30.6},0).wait(1).to({x:33.6},0).wait(1).to({x:36.6},0).wait(1).to({x:39.5},0).wait(1).to({x:42.5},0).wait(1).to({x:45.4},0).wait(1).to({x:48.4},0).wait(1).to({x:51.4},0).wait(1).to({x:54.3},0).wait(1).to({x:57.3},0).wait(1).to({x:60.3},0).wait(1).to({x:63.2},0).wait(1).to({x:66.2},0).wait(1).to({x:69.2},0).wait(1).to({x:72.1},0).wait(1).to({x:75.1},0).wait(1).to({x:78.1},0).wait(1).to({x:81},0).wait(1).to({x:84},0).wait(1).to({x:86.9},0).wait(1).to({x:89.9},0).wait(1).to({x:92.9},0).wait(1).to({x:95.8},0).wait(1).to({x:98.8},0).wait(1).to({x:101.8},0).wait(1).to({x:104.7},0).wait(1).to({x:107.7},0).wait(1).to({x:110.7},0).wait(1).to({x:113.6},0).wait(1).to({x:116.6},0).wait(1).to({x:119.5},0).wait(1).to({x:122.5},0).wait(1).to({x:125.5},0).wait(1).to({x:128.4},0).wait(1).to({x:131.4},0).wait(1).to({x:134.4},0).wait(1).to({x:137.3},0).wait(1).to({x:140.3},0).wait(1).to({x:143.3},0).wait(1).to({x:146.2},0).wait(1).to({x:149.2},0).wait(1).to({x:152.2},0).wait(1).to({x:155.1},0).wait(1).to({x:158.1},0).wait(1).to({x:161.1},0).wait(1).to({x:164},0).wait(1).to({x:167},0).wait(1).to({x:169.9},0).wait(1).to({x:172.9},0).wait(1).to({x:175.9},0).wait(1).to({x:178.8},0).wait(1).to({x:181.8},0).wait(1).to({x:184.8},0).wait(1).to({x:187.7},0).wait(1).to({x:190.7},0).wait(1).to({x:193.7},0).wait(1).to({x:196.6},0).wait(1).to({x:199.6},0).wait(1).to({x:202.6},0).wait(1));

	// zero3
	this.text_15 = new cjs.Text("0", "96px 'Times'", "#0099FF");
	this.text_15.lineHeight = 98;
	this.text_15.parent = this;
	this.text_15.setTransform(304.5,128.6);

	this.timeline.addTween(cjs.Tween.get(this.text_15).wait(1).to({x:307.9},0).wait(1).to({x:311.3},0).wait(1).to({x:314.7,y:128.7},0).wait(1).to({x:318.1},0).wait(1).to({x:321.5},0).wait(1).to({x:324.9,y:128.8},0).wait(1).to({x:328.2},0).wait(1).to({x:331.6},0).wait(1).to({x:335,y:128.9},0).wait(1).to({x:338.4},0).wait(1).to({x:341.8},0).wait(1).to({x:345.2,y:129},0).wait(1).to({x:348.6},0).wait(1).to({x:352,y:129.1},0).wait(1).to({x:355.4},0).wait(1).to({x:358.8},0).wait(1).to({x:362.2,y:129.2},0).wait(1).to({x:365.6},0).wait(1).to({x:368.9},0).wait(1).to({x:372.3,y:129.3},0).wait(1).to({x:375.7},0).wait(1).to({x:379.1},0).wait(1).to({x:382.5,y:129.4},0).wait(1).to({x:385.9},0).wait(1).to({x:389.3},0).wait(1).to({x:392.7,y:129.5},0).wait(1).to({x:396.1},0).wait(1).to({x:399.5,y:129.6},0).wait(1).to({x:402.9},0).wait(1).to({x:406.3},0).wait(1).to({x:409.7,y:129.7},0).wait(1).to({x:413},0).wait(1).to({x:416.4},0).wait(1).to({x:419.8,y:129.8},0).wait(1).to({x:423.2},0).wait(1).to({x:426.6},0).wait(1).to({x:430,y:129.9},0).wait(1).to({x:433.4},0).wait(1).to({x:436.8},0).wait(1).to({x:440.2,y:130},0).wait(1).to({x:443.6},0).wait(1).to({x:447},0).wait(1).to({x:450.4,y:130.1},0).wait(1).to({x:453.8},0).wait(1).to({x:457.1,y:130.2},0).wait(1).to({x:460.5},0).wait(1).to({x:463.9},0).wait(1).to({x:467.3,y:130.3},0).wait(1).to({x:470.7},0).wait(1).to({x:474.1},0).wait(1).to({x:477.5,y:130.4},0).wait(1).to({x:480.9},0).wait(1).to({x:484.3},0).wait(1).to({x:487.7,y:130.5},0).wait(1).to({x:491.1},0).wait(1).to({x:494.5,y:130.6},0).wait(1).to({x:497.9},0).wait(1).to({x:501.2},0).wait(1).to({x:504.6,y:130.7},0).wait(1).to({x:508},0).wait(1).to({x:511.4},0).wait(1).to({x:514.8,y:130.8},0).wait(1).to({x:518.2},0).wait(1).to({x:521.6},0).wait(1).to({x:525,y:130.9},0).wait(1).to({x:528.4},0).wait(1).to({x:531.8},0).wait(1).to({x:535.2,y:131},0).wait(1).to({x:538.6},0).wait(1).to({x:542,y:131.1},0).wait(1));

	// zero2
	this.text_16 = new cjs.Text("0", "96px 'Times'", "#0099FF");
	this.text_16.lineHeight = 98;
	this.text_16.parent = this;
	this.text_16.setTransform(95.1,128.6);

	this.timeline.addTween(cjs.Tween.get(this.text_16).wait(1).to({x:98.4},0).wait(1).to({x:101.7},0).wait(1).to({x:105,y:128.7},0).wait(1).to({x:108.3},0).wait(1).to({x:111.6},0).wait(1).to({x:114.9,y:128.8},0).wait(1).to({x:118.3},0).wait(1).to({x:121.6},0).wait(1).to({x:124.9,y:128.9},0).wait(1).to({x:128.2},0).wait(1).to({x:131.5},0).wait(1).to({x:134.8,y:129},0).wait(1).to({x:138.1},0).wait(1).to({x:141.5,y:129.1},0).wait(1).to({x:144.8},0).wait(1).to({x:148.1},0).wait(1).to({x:151.4,y:129.2},0).wait(1).to({x:154.7},0).wait(1).to({x:158},0).wait(1).to({x:161.3,y:129.3},0).wait(1).to({x:164.6},0).wait(1).to({x:168},0).wait(1).to({x:171.3,y:129.4},0).wait(1).to({x:174.6},0).wait(1).to({x:177.9},0).wait(1).to({x:181.2,y:129.5},0).wait(1).to({x:184.5},0).wait(1).to({x:187.9,y:129.6},0).wait(1).to({x:191.2},0).wait(1).to({x:194.5},0).wait(1).to({x:197.8,y:129.7},0).wait(1).to({x:201.1},0).wait(1).to({x:204.4},0).wait(1).to({x:207.7,y:129.8},0).wait(1).to({x:211.1},0).wait(1).to({x:214.4},0).wait(1).to({x:217.7,y:129.9},0).wait(1).to({x:221},0).wait(1).to({x:224.3},0).wait(1).to({x:227.6,y:130},0).wait(1).to({x:230.9},0).wait(1).to({x:234.2},0).wait(1).to({x:237.6,y:130.1},0).wait(1).to({x:240.9},0).wait(1).to({x:244.2,y:130.2},0).wait(1).to({x:247.5},0).wait(1).to({x:250.8},0).wait(1).to({x:254.1,y:130.3},0).wait(1).to({x:257.5},0).wait(1).to({x:260.8},0).wait(1).to({x:264.1,y:130.4},0).wait(1).to({x:267.4},0).wait(1).to({x:270.7},0).wait(1).to({x:274,y:130.5},0).wait(1).to({x:277.3},0).wait(1).to({x:280.7,y:130.6},0).wait(1).to({x:284},0).wait(1).to({x:287.3},0).wait(1).to({x:290.6,y:130.7},0).wait(1).to({x:293.9},0).wait(1).to({x:297.2},0).wait(1).to({x:300.5,y:130.8},0).wait(1).to({x:303.9},0).wait(1).to({x:307.2},0).wait(1).to({x:310.5,y:130.9},0).wait(1).to({x:313.8},0).wait(1).to({x:317.1},0).wait(1).to({x:320.4,y:131},0).wait(1).to({x:323.7},0).wait(1).to({x:327.1,y:131.1},0).wait(1));

	// zero1
	this.text_17 = new cjs.Text("0", "96px 'Times'", "#0099FF");
	this.text_17.lineHeight = 98;
	this.text_17.parent = this;
	this.text_17.setTransform(202.5,128.6);

	this.timeline.addTween(cjs.Tween.get(this.text_17).wait(1).to({x:205.8},0).wait(1).to({x:209},0).wait(1).to({x:212.3,y:128.7},0).wait(1).to({x:215.6},0).wait(1).to({x:218.9},0).wait(1).to({x:222.1,y:128.8},0).wait(1).to({x:225.4},0).wait(1).to({x:228.7},0).wait(1).to({x:231.9,y:128.9},0).wait(1).to({x:235.2},0).wait(1).to({x:238.5},0).wait(1).to({x:241.8,y:129},0).wait(1).to({x:245},0).wait(1).to({x:248.3,y:129.1},0).wait(1).to({x:251.6},0).wait(1).to({x:254.8},0).wait(1).to({x:258.1,y:129.2},0).wait(1).to({x:261.4},0).wait(1).to({x:264.7},0).wait(1).to({x:267.9,y:129.3},0).wait(1).to({x:271.2},0).wait(1).to({x:274.5},0).wait(1).to({x:277.7,y:129.4},0).wait(1).to({x:281},0).wait(1).to({x:284.3},0).wait(1).to({x:287.6,y:129.5},0).wait(1).to({x:290.8},0).wait(1).to({x:294.1,y:129.6},0).wait(1).to({x:297.4},0).wait(1).to({x:300.6},0).wait(1).to({x:303.9,y:129.7},0).wait(1).to({x:307.2},0).wait(1).to({x:310.5},0).wait(1).to({x:313.7,y:129.8},0).wait(1).to({x:317},0).wait(1).to({x:320.3},0).wait(1).to({x:323.5,y:129.9},0).wait(1).to({x:326.8},0).wait(1).to({x:330.1},0).wait(1).to({x:333.4,y:130},0).wait(1).to({x:336.6},0).wait(1).to({x:339.9},0).wait(1).to({x:343.2,y:130.1},0).wait(1).to({x:346.4},0).wait(1).to({x:349.7,y:130.2},0).wait(1).to({x:353},0).wait(1).to({x:356.3},0).wait(1).to({x:359.5,y:130.3},0).wait(1).to({x:362.8},0).wait(1).to({x:366.1},0).wait(1).to({x:369.3,y:130.4},0).wait(1).to({x:372.6},0).wait(1).to({x:375.9},0).wait(1).to({x:379.2,y:130.5},0).wait(1).to({x:382.4},0).wait(1).to({x:385.7,y:130.6},0).wait(1).to({x:389},0).wait(1).to({x:392.2},0).wait(1).to({x:395.5,y:130.7},0).wait(1).to({x:398.8},0).wait(1).to({x:402.1},0).wait(1).to({x:405.3,y:130.8},0).wait(1).to({x:408.6},0).wait(1).to({x:411.9},0).wait(1).to({x:415.1,y:130.9},0).wait(1).to({x:418.4},0).wait(1).to({x:421.7},0).wait(1).to({x:425,y:131},0).wait(1).to({x:428.2},0).wait(1).to({x:431.5,y:131.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127,0,585,400.2);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.c();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.164,0.168);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,90,64), null);


(lib.sql_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.sql();
	this.instance.parent = this;
	this.instance.setTransform(42.6,0,0.071,0.062,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sql_1, new cjs.Rectangle(0,0,111,113.2), null);


(lib.python1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.python();
	this.instance.parent = this;
	this.instance.setTransform(-40,-37.1,0.04,0.037);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.python1, new cjs.Rectangle(-40,-37.1,80,74.2), null);


(lib.program_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.program();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.42,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.program_1, new cjs.Rectangle(0,0,84,100), null);


(lib.java1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.java();
	this.instance.parent = this;
	this.instance.setTransform(-52,-47,0.201,0.181);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-47,104,94);


(lib.http_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.http();
	this.instance.parent = this;
	this.instance.setTransform(0,81.8,0.226,0.191,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.http_1, new cjs.Rectangle(0,0,150.8,150.8), null);


(lib.c_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.cprogramming();
	this.instance.parent = this;
	this.instance.setTransform(-41,-40,0.051,0.05);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.c_1, new cjs.Rectangle(-41,-40,82,80.1), null);


// stage content:
(lib.background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// python
	this.instance = new lib.python1();
	this.instance.parent = this;
	this.instance.setTransform(-236,142.1);
	this.instance.alpha = 0.5;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(48).to({_off:false},0).wait(1).to({x:-226,y:142.2},0).wait(1).to({x:-216.1,y:142.4},0).wait(1).to({x:-206.2,y:142.5},0).wait(1).to({x:-196.2,y:142.7},0).wait(1).to({x:-186.2,y:142.8},0).wait(1).to({x:-176.3,y:142.9},0).wait(1).to({x:-166.3,y:143.1},0).wait(1).to({x:-156.4,y:143.2},0).wait(1).to({x:-146.4,y:143.4},0).wait(1).to({x:-136.5,y:143.5},0).wait(1).to({x:-126.5,y:143.7},0).wait(1).to({x:-116.6,y:143.8},0).wait(1).to({x:-106.6,y:143.9},0).wait(1).to({x:-96.7,y:144.1},0).wait(1).to({x:-86.7,y:144.2},0).wait(1).to({x:-76.8,y:144.4},0).wait(1).to({x:-66.8,y:144.5},0).wait(1).to({x:-56.9,y:144.6},0).wait(1).to({x:-46.9,y:144.8},0).wait(1).to({x:-37,y:144.9},0).wait(1).to({x:-27,y:145.1},0).wait(1).to({x:-17,y:145.2},0).wait(1).to({x:-7.1,y:145.3},0).wait(1).to({x:2.8,y:145.5},0).wait(1).to({x:12.8,y:145.6},0).wait(1).to({x:22.8,y:145.8},0).wait(1).to({x:32.7,y:145.9},0).wait(1).to({x:42.7,y:146.1},0).wait(1).to({x:52.6,y:146.2},0).wait(1).to({x:62.6,y:146.3},0).wait(1).to({x:72.5,y:146.5},0).wait(1).to({x:82.5,y:146.6},0).wait(1).to({x:92.4,y:146.8},0).wait(1).to({x:102.4,y:146.9},0).wait(1).to({x:112.3,y:147},0).wait(1).to({x:122.3,y:147.2},0).wait(1).to({x:132.2,y:147.3},0).wait(1).to({x:142.2,y:147.5},0).wait(1).to({x:152.1,y:147.6},0).wait(1).to({x:162.1,y:147.7},0).wait(1).to({x:172,y:147.9},0).wait(1).to({x:182,y:148},0).wait(1).to({x:192,y:148.2},0).wait(1).to({x:201.9,y:148.3},0).wait(1).to({x:211.9,y:148.5},0).wait(1).to({x:221.8,y:148.6},0).wait(1).to({x:231.8,y:148.7},0).wait(1).to({x:241.7,y:148.9},0).wait(1).to({x:251.7,y:149},0).wait(1).to({x:261.6,y:149.2},0).wait(1).to({x:271.6,y:149.3},0).wait(1).to({x:281.5,y:149.4},0).wait(1).to({x:291.5,y:149.6},0).wait(1).to({x:301.4,y:149.7},0).wait(1).to({x:311.4,y:149.9},0).wait(1).to({x:321.3,y:150},0).wait(1).to({x:331.3,y:150.1},0).wait(1).to({x:341.2,y:150.3},0).wait(1).to({x:351.2,y:150.4},0).wait(1).to({x:361.1,y:150.6},0).wait(1).to({x:371.1,y:150.7},0).wait(1).to({x:381,y:150.9},0).wait(1).to({x:391,y:151},0).wait(1).to({x:401,y:151.1},0).wait(1).to({x:410.9,y:151.3},0).wait(1).to({x:420.9,y:151.4},0).wait(1).to({x:430.8,y:151.6},0).wait(1).to({x:440.8,y:151.7},0).wait(1).to({x:450.7,y:151.8},0).wait(1).to({x:460.7,y:152},0).wait(1).to({x:470.6,y:152.1},0).wait(1).to({x:480.6,y:152.3},0).wait(1).to({x:490.5,y:152.4},0).wait(1).to({x:500.5,y:152.5},0).wait(1).to({x:510.4,y:152.7},0).wait(1).to({x:520.4,y:152.8},0).wait(1).to({x:530.3,y:153},0).wait(1).to({x:540.3,y:153.1},0).wait(1).to({x:550.2,y:153.3},0).wait(1).to({x:560.2,y:153.4},0).wait(1).to({x:570.1,y:153.5},0).wait(1).to({x:580.1,y:153.7},0).wait(1).to({x:590,y:153.8},0).wait(1).to({x:600,y:154},0).wait(1).to({x:610,y:154.1},0).wait(1));

	// c++
	this.instance_1 = new lib.Symbol3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-290,60,1,1,0,0,0,45,32);
	this.instance_1.alpha = 0.5;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(33).to({_off:false},0).wait(1).to({x:-276.9,y:60.2},0).wait(1).to({x:-263.9,y:60.4},0).wait(1).to({x:-250.9,y:60.5},0).wait(1).to({x:-237.8,y:60.7},0).wait(1).to({x:-224.8,y:60.9},0).wait(1).to({x:-211.8,y:61.1},0).wait(1).to({x:-198.8,y:61.3},0).wait(1).to({x:-185.7,y:61.5},0).wait(1).to({x:-172.7,y:61.6},0).wait(1).to({x:-159.7,y:61.8},0).wait(1).to({x:-146.6,y:62},0).wait(1).to({x:-133.6,y:62.2},0).wait(1).to({x:-120.6,y:62.4},0).wait(1).to({x:-107.6,y:62.5},0).wait(1).to({x:-94.5,y:62.7},0).wait(1).to({x:-81.5,y:62.9},0).wait(1).to({x:-68.5,y:63.1},0).wait(1).to({x:-55.5,y:63.3},0).wait(1).to({x:-42.4,y:63.4},0).wait(1).to({x:-29.4,y:63.6},0).wait(1).to({x:-16.4,y:63.8},0).wait(1).to({x:-3.3,y:64},0).wait(1).to({x:9.7,y:64.2},0).wait(1).to({x:22.7,y:64.4},0).wait(1).to({x:35.7,y:64.5},0).wait(1).to({x:48.7,y:64.7},0).wait(1).to({x:61.8,y:64.9},0).wait(1).to({x:74.8,y:65.1},0).wait(1).to({x:87.8,y:65.3},0).wait(1).to({x:100.8,y:65.4},0).wait(1).to({x:113.9,y:65.6},0).wait(1).to({x:126.9,y:65.8},0).wait(1).to({x:139.9,y:66},0).wait(1).to({x:152.9,y:66.2},0).wait(1).to({x:166,y:66.4},0).wait(1).to({x:179,y:66.5},0).wait(1).to({x:192,y:66.7},0).wait(1).to({x:205,y:66.9},0).wait(1).to({x:218.1,y:67.1},0).wait(1).to({x:231.1,y:67.3},0).wait(1).to({x:244.1,y:67.4},0).wait(1).to({x:257.2,y:67.6},0).wait(1).to({x:270.2,y:67.8},0).wait(1).to({x:283.2,y:68},0).wait(1).to({x:296.3,y:68.2},0).wait(1).to({x:309.3,y:68.3},0).wait(1).to({x:322.3,y:68.5},0).wait(1).to({x:335.3,y:68.7},0).wait(1).to({x:348.4,y:68.9},0).wait(1).to({x:361.4,y:69.1},0).wait(1).to({x:374.4,y:69.3},0).wait(1).to({x:387.4,y:69.4},0).wait(1).to({x:400.5,y:69.6},0).wait(1).to({x:413.5,y:69.8},0).wait(1).to({x:426.5,y:70},0).wait(1).to({x:439.6,y:70.2},0).wait(1).to({x:452.6,y:70.3},0).wait(1).to({x:465.6,y:70.5},0).wait(1).to({x:478.6,y:70.7},0).wait(1).to({x:491.7,y:70.9},0).wait(1).to({x:504.7,y:71.1},0).wait(1).to({x:517.7,y:71.2},0).wait(1).to({x:530.8,y:71.4},0).wait(1).to({x:543.8,y:71.6},0).wait(1).to({x:556.8,y:71.8},0).wait(1).to({x:569.8,y:72},0).wait(1).to({x:582.9,y:72.2},0).wait(1).to({x:595.9,y:72.3},0).wait(1).to({x:608.9,y:72.5},0).wait(1).to({x:622,y:72.7},0).to({_off:true},1).wait(30));

	// java
	this.instance_2 = new lib.java1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-408.9,319);
	this.instance_2.alpha = 0.5;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(17).to({_off:false},0).wait(1).to({x:-394.6},0).wait(1).to({x:-380.3},0).wait(1).to({x:-366.1},0).wait(1).to({x:-351.8},0).wait(1).to({x:-337.5},0).wait(1).to({x:-323.2},0).wait(1).to({x:-308.9},0).wait(1).to({x:-294.6},0).wait(1).to({x:-280.4},0).wait(1).to({x:-266.1},0).wait(1).to({x:-251.8},0).wait(1).to({x:-237.5},0).wait(1).to({x:-223.2},0).wait(1).to({x:-209},0).wait(1).to({x:-194.7},0).wait(1).to({x:-180.4},0).wait(1).to({x:-166.1},0).wait(1).to({x:-151.8},0).wait(1).to({x:-137.5},0).wait(1).to({x:-123.3},0).wait(1).to({x:-109},0).wait(1).to({x:-94.7},0).wait(1).to({x:-80.4},0).wait(1).to({x:-66.1},0).wait(1).to({x:-51.9},0).wait(1).to({x:-37.6},0).wait(1).to({x:-23.3},0).wait(1).to({x:-9},0).wait(1).to({x:5.3},0).wait(1).to({x:19.6},0).wait(1).to({x:33.8},0).wait(1).to({x:48.1},0).wait(1).to({x:62.4},0).wait(1).to({x:76.7},0).wait(1).to({x:91},0).wait(1).to({x:105.3},0).wait(1).to({x:119.5},0).wait(1).to({x:133.8},0).wait(1).to({x:148.1},0).wait(1).to({x:162.4},0).wait(1).to({x:176.7},0).wait(1).to({x:190.9},0).wait(1).to({x:205.2},0).wait(1).to({x:219.5},0).wait(1).to({x:233.8},0).wait(1).to({x:248.1},0).wait(1).to({x:262.4},0).wait(1).to({x:276.6},0).wait(1).to({x:290.9},0).wait(1).to({x:305.2},0).wait(1).to({x:319.5},0).wait(1).to({x:333.8},0).wait(1).to({x:348.1},0).wait(1).to({x:362.3},0).wait(1).to({x:376.6},0).wait(1).to({x:390.9},0).wait(1).to({x:405.2},0).wait(1).to({x:419.5},0).wait(1).to({x:433.7},0).wait(1).to({x:448},0).wait(1).to({x:462.3},0).wait(1).to({x:476.6},0).wait(1).to({x:490.9},0).wait(1).to({x:505.2},0).wait(1).to({x:519.4},0).wait(1).to({x:533.7},0).wait(1).to({x:548},0).wait(1).to({x:562.3},0).wait(1).to({x:576.6},0).wait(1).to({x:590.8},0).wait(1).to({x:605.1},0).wait(1).to({x:619.4},0).to({_off:true},1).wait(44));

	// c
	this.instance_3 = new lib.c_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-73,219.1);
	this.instance_3.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({x:-62.7,y:219},0).wait(1).to({x:-52.5},0).wait(1).to({x:-42.2},0).wait(1).to({x:-32},0).wait(1).to({x:-21.7},0).wait(1).to({x:-11.5},0).wait(1).to({x:-1.2},0).wait(1).to({x:9},0).wait(1).to({x:19.3},0).wait(1).to({x:29.5},0).wait(1).to({x:39.8},0).wait(1).to({x:50},0).wait(1).to({x:60.3},0).wait(1).to({x:70.5},0).wait(1).to({x:80.8},0).wait(1).to({x:91},0).wait(1).to({x:101.3},0).wait(1).to({x:111.5},0).wait(1).to({x:121.8},0).wait(1).to({x:132},0).wait(1).to({x:142.3},0).wait(1).to({x:152.5},0).wait(1).to({x:162.8},0).wait(1).to({x:173},0).wait(1).to({x:183.2},0).wait(1).to({x:193.5},0).wait(1).to({x:203.8},0).wait(1).to({x:214},0).wait(1).to({x:224.3},0).wait(1).to({x:234.5},0).wait(1).to({x:244.8},0).wait(1).to({x:255},0).wait(1).to({x:265.3},0).wait(1).to({x:275.5},0).wait(1).to({x:285.8},0).wait(1).to({x:296},0).wait(1).to({x:306.3},0).wait(1).to({x:316.5},0).wait(1).to({x:326.8},0).wait(1).to({x:337},0).wait(1).to({x:347.3},0).wait(1).to({x:357.5},0).wait(1).to({x:367.8},0).wait(1).to({x:378},0).wait(1).to({x:388.3},0).wait(1).to({x:398.5},0).wait(1).to({x:408.8},0).wait(1).to({x:419},0).wait(1).to({x:429.3},0).wait(1).to({x:439.5},0).wait(1).to({x:449.8},0).wait(1).to({x:460},0).wait(1).to({x:470.3},0).wait(1).to({x:480.5},0).wait(1).to({x:490.8},0).wait(1).to({x:501},0).wait(1).to({x:511.3},0).wait(1).to({x:521.5},0).wait(1).to({x:531.7},0).wait(1).to({x:542},0).wait(1).to({x:552.3},0).wait(1).to({x:562.5},0).wait(1).to({x:572.8},0).wait(1).to({x:583},0).wait(1).to({x:593.3},0).wait(1).to({x:603.5},0).wait(1).to({x:613.8},0).wait(1).to({x:624},0).wait(1).to({x:634.3},0).wait(1).to({x:644.5},0).wait(1).to({x:654.8},0).wait(1).to({x:665},0).to({_off:true},1).wait(61));

	// pic
	this.instance_4 = new lib.thought_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(466,71.1,1,1,0,0,0,67,60.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({alpha:0.984},0).wait(1).to({alpha:0.968},0).wait(1).to({alpha:0.952},0).wait(1).to({alpha:0.935},0).wait(1).to({alpha:0.919},0).wait(1).to({alpha:0.903},0).wait(1).to({alpha:0.887},0).wait(1).to({alpha:0.871},0).wait(1).to({alpha:0.855},0).wait(1).to({alpha:0.839},0).wait(1).to({alpha:0.823},0).wait(1).to({alpha:0.806},0).wait(1).to({alpha:0.79},0).wait(1).to({alpha:0.774},0).wait(1).to({alpha:0.758},0).wait(1).to({alpha:0.742},0).wait(1).to({alpha:0.726},0).wait(1).to({alpha:0.71},0).wait(1).to({alpha:0.694},0).wait(1).to({alpha:0.677},0).wait(1).to({alpha:0.661},0).wait(1).to({alpha:0.645},0).wait(1).to({alpha:0.629},0).wait(1).to({alpha:0.613},0).wait(1).to({alpha:0.597},0).wait(1).to({alpha:0.581},0).wait(1).to({alpha:0.565},0).wait(1).to({alpha:0.548},0).wait(1).to({alpha:0.532},0).wait(1).to({alpha:0.516},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.484},0).wait(1).to({alpha:0.468},0).wait(1).to({alpha:0.452},0).wait(1).to({alpha:0.435},0).wait(1).to({alpha:0.419},0).wait(1).to({alpha:0.403},0).wait(1).to({alpha:0.387},0).wait(1).to({alpha:0.371},0).wait(1).to({alpha:0.355},0).wait(1).to({alpha:0.339},0).wait(1).to({alpha:0.323},0).wait(1).to({alpha:0.306},0).wait(1).to({alpha:0.29},0).wait(1).to({alpha:0.274},0).wait(1).to({alpha:0.258},0).wait(1).to({alpha:0.242},0).wait(1).to({alpha:0.226},0).wait(1).to({alpha:0.21},0).wait(1).to({alpha:0.194},0).wait(1).to({alpha:0.177},0).wait(1).to({alpha:0.161},0).wait(1).to({alpha:0.145},0).wait(1).to({alpha:0.129},0).wait(1).to({alpha:0.113},0).wait(1).to({alpha:0.097},0).wait(1).to({alpha:0.081},0).wait(1).to({alpha:0.065},0).wait(1).to({alpha:0.048},0).wait(1).to({alpha:0.032},0).wait(1).to({alpha:0.016},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.014},0).wait(1).to({alpha:0.028},0).wait(1).to({alpha:0.042},0).wait(1).to({alpha:0.056},0).wait(1).to({alpha:0.07},0).wait(1).to({alpha:0.085},0).wait(1).to({alpha:0.099},0).wait(1).to({alpha:0.113},0).wait(1).to({alpha:0.127},0).wait(1).to({alpha:0.141},0).wait(1).to({alpha:0.155},0).wait(1).to({alpha:0.169},0).wait(1).to({alpha:0.183},0).wait(1).to({alpha:0.197},0).wait(1).to({alpha:0.211},0).wait(1).to({alpha:0.225},0).wait(1).to({alpha:0.239},0).wait(1).to({alpha:0.254},0).wait(1).to({alpha:0.268},0).wait(1).to({alpha:0.282},0).wait(1).to({alpha:0.296},0).wait(1).to({alpha:0.31},0).wait(1).to({alpha:0.324},0).wait(1).to({alpha:0.338},0).wait(1).to({alpha:0.352},0).wait(1).to({alpha:0.366},0).wait(1).to({alpha:0.38},0).wait(1).to({alpha:0.394},0).wait(1).to({alpha:0.408},0).wait(1).to({alpha:0.423},0).wait(1).to({alpha:0.437},0).wait(1).to({alpha:0.451},0).wait(1).to({alpha:0.465},0).wait(1).to({alpha:0.479},0).wait(1).to({alpha:0.493},0).wait(1).to({alpha:0.507},0).wait(1).to({alpha:0.521},0).wait(1).to({alpha:0.535},0).wait(1).to({alpha:0.549},0).wait(1).to({alpha:0.563},0).wait(1).to({alpha:0.577},0).wait(1).to({alpha:0.592},0).wait(1).to({alpha:0.606},0).wait(1).to({alpha:0.62},0).wait(1).to({alpha:0.634},0).wait(1).to({alpha:0.648},0).wait(1).to({alpha:0.662},0).wait(1).to({alpha:0.676},0).wait(1).to({alpha:0.69},0).wait(1).to({alpha:0.704},0).wait(1).to({alpha:0.718},0).wait(1).to({alpha:0.732},0).wait(1).to({alpha:0.746},0).wait(1).to({alpha:0.761},0).wait(1).to({alpha:0.775},0).wait(1).to({alpha:0.789},0).wait(1).to({alpha:0.803},0).wait(1).to({alpha:0.817},0).wait(1).to({alpha:0.831},0).wait(1).to({alpha:0.845},0).wait(1).to({alpha:0.859},0).wait(1).to({alpha:0.873},0).wait(1).to({alpha:0.887},0).wait(1).to({alpha:0.901},0).wait(1).to({alpha:0.915},0).wait(1).to({alpha:0.93},0).wait(1).to({alpha:0.944},0).wait(1).to({alpha:0.958},0).wait(1).to({alpha:0.972},0).wait(1).to({alpha:0.986},0).wait(1).to({alpha:1},0).wait(1));

	// sql
	this.instance_5 = new lib.sql_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(74.5,343.7,1,1,0,0,0,55.5,56.6);
	this.instance_5.alpha = 0.25;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({alpha:0.243},0).wait(1).to({alpha:0.237},0).wait(1).to({alpha:0.23},0).wait(1).to({alpha:0.224},0).wait(1).to({alpha:0.217},0).wait(1).to({alpha:0.211},0).wait(1).to({alpha:0.204},0).wait(1).to({alpha:0.197},0).wait(1).to({alpha:0.191},0).wait(1).to({alpha:0.184},0).wait(1).to({alpha:0.178},0).wait(1).to({alpha:0.171},0).wait(1).to({alpha:0.164},0).wait(1).to({alpha:0.158},0).wait(1).to({alpha:0.151},0).wait(1).to({alpha:0.145},0).wait(1).to({alpha:0.138},0).wait(1).to({alpha:0.132},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.118},0).wait(1).to({alpha:0.112},0).wait(1).to({alpha:0.105},0).wait(1).to({alpha:0.099},0).wait(1).to({alpha:0.092},0).wait(1).to({alpha:0.086},0).wait(1).to({alpha:0.079},0).wait(1).to({alpha:0.072},0).wait(1).to({alpha:0.066},0).wait(1).to({alpha:0.059},0).wait(1).to({alpha:0.053},0).wait(1).to({alpha:0.046},0).wait(1).to({alpha:0.039},0).wait(1).to({alpha:0.033},0).wait(1).to({alpha:0.026},0).wait(1).to({alpha:0.02},0).wait(1).to({alpha:0.013},0).wait(1).to({alpha:0.007},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.021},0).wait(1).to({alpha:0.043},0).wait(1).to({alpha:0.064},0).wait(1).to({alpha:0.085},0).wait(1).to({alpha:0.106},0).wait(1).to({alpha:0.128},0).wait(1).to({alpha:0.149},0).wait(1).to({alpha:0.17},0).wait(1).to({alpha:0.191},0).wait(1).to({alpha:0.213},0).wait(1).to({alpha:0.234},0).wait(1).to({alpha:0.255},0).wait(1).to({alpha:0.277},0).wait(1).to({alpha:0.298},0).wait(1).to({alpha:0.319},0).wait(1).to({alpha:0.34},0).wait(1).to({alpha:0.362},0).wait(1).to({alpha:0.383},0).wait(1).to({alpha:0.404},0).wait(1).to({alpha:0.426},0).wait(1).to({alpha:0.447},0).wait(1).to({alpha:0.468},0).wait(1).to({alpha:0.489},0).wait(1).to({alpha:0.511},0).wait(1).to({alpha:0.532},0).wait(1).to({alpha:0.553},0).wait(1).to({alpha:0.574},0).wait(1).to({alpha:0.596},0).wait(1).to({alpha:0.617},0).wait(1).to({alpha:0.638},0).wait(1).to({alpha:0.66},0).wait(1).to({alpha:0.681},0).wait(1).to({alpha:0.702},0).wait(1).to({alpha:0.723},0).wait(1).to({alpha:0.745},0).wait(1).to({alpha:0.766},0).wait(1).to({alpha:0.787},0).wait(1).to({alpha:0.809},0).wait(1).to({alpha:0.83},0).wait(1).to({alpha:0.851},0).wait(1).to({alpha:0.872},0).wait(1).to({alpha:0.894},0).wait(1).to({alpha:0.915},0).wait(1).to({alpha:0.936},0).wait(1).to({alpha:0.957},0).wait(1).to({alpha:0.979},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.984},0).wait(1).to({alpha:0.969},0).wait(1).to({alpha:0.953},0).wait(1).to({alpha:0.938},0).wait(1).to({alpha:0.922},0).wait(1).to({alpha:0.906},0).wait(1).to({alpha:0.891},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.859},0).wait(1).to({alpha:0.844},0).wait(1).to({alpha:0.828},0).wait(1).to({alpha:0.813},0).wait(1).to({alpha:0.797},0).wait(1).to({alpha:0.781},0).wait(1).to({alpha:0.766},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.734},0).wait(1).to({alpha:0.719},0).wait(1).to({alpha:0.703},0).wait(1).to({alpha:0.688},0).wait(1).to({alpha:0.672},0).wait(1).to({alpha:0.656},0).wait(1).to({alpha:0.641},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.609},0).wait(1).to({alpha:0.594},0).wait(1).to({alpha:0.578},0).wait(1).to({alpha:0.563},0).wait(1).to({alpha:0.547},0).wait(1).to({alpha:0.531},0).wait(1).to({alpha:0.516},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.484},0).wait(1).to({alpha:0.469},0).wait(1).to({alpha:0.453},0).wait(1).to({alpha:0.438},0).wait(1).to({alpha:0.422},0).wait(1).to({alpha:0.406},0).wait(1).to({alpha:0.391},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.359},0).wait(1).to({alpha:0.344},0).wait(1).to({alpha:0.328},0).wait(1).to({alpha:0.313},0).wait(1).to({alpha:0.297},0).wait(1).to({alpha:0.281},0).wait(1).to({alpha:0.266},0).wait(1).to({alpha:0.25},0).wait(1));

	// http
	this.instance_6 = new lib.http_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(464.1,308.9,1,1,0,0,0,75.4,75.4);
	this.instance_6.alpha = 0.75;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({alpha:0.757},0).wait(1).to({alpha:0.763},0).wait(1).to({alpha:0.77},0).wait(1).to({alpha:0.776},0).wait(1).to({alpha:0.783},0).wait(1).to({alpha:0.789},0).wait(1).to({alpha:0.796},0).wait(1).to({alpha:0.803},0).wait(1).to({alpha:0.809},0).wait(1).to({alpha:0.816},0).wait(1).to({alpha:0.822},0).wait(1).to({alpha:0.829},0).wait(1).to({alpha:0.836},0).wait(1).to({alpha:0.842},0).wait(1).to({alpha:0.849},0).wait(1).to({alpha:0.855},0).wait(1).to({alpha:0.862},0).wait(1).to({alpha:0.868},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.882},0).wait(1).to({alpha:0.888},0).wait(1).to({alpha:0.895},0).wait(1).to({alpha:0.901},0).wait(1).to({alpha:0.908},0).wait(1).to({alpha:0.914},0).wait(1).to({alpha:0.921},0).wait(1).to({alpha:0.928},0).wait(1).to({alpha:0.934},0).wait(1).to({alpha:0.941},0).wait(1).to({alpha:0.947},0).wait(1).to({alpha:0.954},0).wait(1).to({alpha:0.961},0).wait(1).to({alpha:0.967},0).wait(1).to({alpha:0.974},0).wait(1).to({alpha:0.98},0).wait(1).to({alpha:0.987},0).wait(1).to({alpha:0.993},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.979},0).wait(1).to({alpha:0.957},0).wait(1).to({alpha:0.936},0).wait(1).to({alpha:0.915},0).wait(1).to({alpha:0.894},0).wait(1).to({alpha:0.872},0).wait(1).to({alpha:0.851},0).wait(1).to({alpha:0.83},0).wait(1).to({alpha:0.809},0).wait(1).to({alpha:0.787},0).wait(1).to({alpha:0.766},0).wait(1).to({alpha:0.745},0).wait(1).to({alpha:0.723},0).wait(1).to({alpha:0.702},0).wait(1).to({alpha:0.681},0).wait(1).to({alpha:0.66},0).wait(1).to({alpha:0.638},0).wait(1).to({alpha:0.617},0).wait(1).to({alpha:0.596},0).wait(1).to({alpha:0.574},0).wait(1).to({alpha:0.553},0).wait(1).to({alpha:0.532},0).wait(1).to({alpha:0.511},0).wait(1).to({alpha:0.489},0).wait(1).to({alpha:0.468},0).wait(1).to({alpha:0.447},0).wait(1).to({alpha:0.426},0).wait(1).to({alpha:0.404},0).wait(1).to({alpha:0.383},0).wait(1).to({alpha:0.362},0).wait(1).to({alpha:0.34},0).wait(1).to({alpha:0.319},0).wait(1).to({alpha:0.298},0).wait(1).to({alpha:0.277},0).wait(1).to({alpha:0.255},0).wait(1).to({alpha:0.234},0).wait(1).to({alpha:0.213},0).wait(1).to({alpha:0.191},0).wait(1).to({alpha:0.17},0).wait(1).to({alpha:0.149},0).wait(1).to({alpha:0.128},0).wait(1).to({alpha:0.106},0).wait(1).to({alpha:0.085},0).wait(1).to({alpha:0.064},0).wait(1).to({alpha:0.043},0).wait(1).to({alpha:0.021},0).wait(1).to({alpha:0},0).wait(1).to({alpha:0.016},0).wait(1).to({alpha:0.031},0).wait(1).to({alpha:0.047},0).wait(1).to({alpha:0.063},0).wait(1).to({alpha:0.078},0).wait(1).to({alpha:0.094},0).wait(1).to({alpha:0.109},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.141},0).wait(1).to({alpha:0.156},0).wait(1).to({alpha:0.172},0).wait(1).to({alpha:0.188},0).wait(1).to({alpha:0.203},0).wait(1).to({alpha:0.219},0).wait(1).to({alpha:0.234},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.266},0).wait(1).to({alpha:0.281},0).wait(1).to({alpha:0.297},0).wait(1).to({alpha:0.313},0).wait(1).to({alpha:0.328},0).wait(1).to({alpha:0.344},0).wait(1).to({alpha:0.359},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.391},0).wait(1).to({alpha:0.406},0).wait(1).to({alpha:0.422},0).wait(1).to({alpha:0.438},0).wait(1).to({alpha:0.453},0).wait(1).to({alpha:0.469},0).wait(1).to({alpha:0.484},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.516},0).wait(1).to({alpha:0.531},0).wait(1).to({alpha:0.547},0).wait(1).to({alpha:0.563},0).wait(1).to({alpha:0.578},0).wait(1).to({alpha:0.594},0).wait(1).to({alpha:0.609},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.641},0).wait(1).to({alpha:0.656},0).wait(1).to({alpha:0.672},0).wait(1).to({alpha:0.688},0).wait(1).to({alpha:0.703},0).wait(1).to({alpha:0.719},0).wait(1).to({alpha:0.734},0).wait(1).to({alpha:0.75},0).wait(1));

	// program
	this.instance_7 = new lib.program_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(88.1,66.8,0.999,0.999,-29.9,0,0,41.9,49.9);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:42,regY:50,scaleX:1,scaleY:1,rotation:-30,x:88.2,y:66.9,alpha:0.016},0).wait(1).to({alpha:0.032},0).wait(1).to({alpha:0.048},0).wait(1).to({alpha:0.065},0).wait(1).to({alpha:0.081},0).wait(1).to({alpha:0.097},0).wait(1).to({alpha:0.113},0).wait(1).to({alpha:0.129},0).wait(1).to({alpha:0.145},0).wait(1).to({alpha:0.161},0).wait(1).to({alpha:0.177},0).wait(1).to({alpha:0.194},0).wait(1).to({alpha:0.21},0).wait(1).to({alpha:0.226},0).wait(1).to({alpha:0.242},0).wait(1).to({alpha:0.258},0).wait(1).to({alpha:0.274},0).wait(1).to({alpha:0.29},0).wait(1).to({alpha:0.306},0).wait(1).to({alpha:0.323},0).wait(1).to({alpha:0.339},0).wait(1).to({alpha:0.355},0).wait(1).to({alpha:0.371},0).wait(1).to({alpha:0.387},0).wait(1).to({alpha:0.403},0).wait(1).to({alpha:0.419},0).wait(1).to({alpha:0.435},0).wait(1).to({alpha:0.452},0).wait(1).to({alpha:0.468},0).wait(1).to({alpha:0.484},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.516},0).wait(1).to({alpha:0.532},0).wait(1).to({alpha:0.548},0).wait(1).to({alpha:0.565},0).wait(1).to({alpha:0.581},0).wait(1).to({alpha:0.597},0).wait(1).to({alpha:0.613},0).wait(1).to({alpha:0.629},0).wait(1).to({alpha:0.645},0).wait(1).to({alpha:0.661},0).wait(1).to({alpha:0.677},0).wait(1).to({alpha:0.694},0).wait(1).to({alpha:0.71},0).wait(1).to({alpha:0.726},0).wait(1).to({alpha:0.742},0).wait(1).to({alpha:0.758},0).wait(1).to({alpha:0.774},0).wait(1).to({alpha:0.79},0).wait(1).to({alpha:0.806},0).wait(1).to({alpha:0.823},0).wait(1).to({alpha:0.839},0).wait(1).to({alpha:0.855},0).wait(1).to({alpha:0.871},0).wait(1).to({alpha:0.887},0).wait(1).to({alpha:0.903},0).wait(1).to({alpha:0.919},0).wait(1).to({alpha:0.935},0).wait(1).to({alpha:0.952},0).wait(1).to({alpha:0.968},0).wait(1).to({alpha:0.984},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.986},0).wait(1).to({alpha:0.972},0).wait(1).to({alpha:0.958},0).wait(1).to({alpha:0.944},0).wait(1).to({alpha:0.93},0).wait(1).to({alpha:0.915},0).wait(1).to({alpha:0.901},0).wait(1).to({alpha:0.887},0).wait(1).to({alpha:0.873},0).wait(1).to({alpha:0.859},0).wait(1).to({alpha:0.845},0).wait(1).to({alpha:0.831},0).wait(1).to({alpha:0.817},0).wait(1).to({alpha:0.803},0).wait(1).to({alpha:0.789},0).wait(1).to({alpha:0.775},0).wait(1).to({alpha:0.761},0).wait(1).to({alpha:0.746},0).wait(1).to({alpha:0.732},0).wait(1).to({alpha:0.718},0).wait(1).to({alpha:0.704},0).wait(1).to({alpha:0.69},0).wait(1).to({alpha:0.676},0).wait(1).to({alpha:0.662},0).wait(1).to({alpha:0.648},0).wait(1).to({alpha:0.634},0).wait(1).to({alpha:0.62},0).wait(1).to({alpha:0.606},0).wait(1).to({alpha:0.592},0).wait(1).to({alpha:0.577},0).wait(1).to({alpha:0.563},0).wait(1).to({alpha:0.549},0).wait(1).to({alpha:0.535},0).wait(1).to({alpha:0.521},0).wait(1).to({alpha:0.507},0).wait(1).to({alpha:0.493},0).wait(1).to({alpha:0.479},0).wait(1).to({alpha:0.465},0).wait(1).to({alpha:0.451},0).wait(1).to({alpha:0.437},0).wait(1).to({alpha:0.423},0).wait(1).to({alpha:0.408},0).wait(1).to({alpha:0.394},0).wait(1).to({alpha:0.38},0).wait(1).to({alpha:0.366},0).wait(1).to({alpha:0.352},0).wait(1).to({alpha:0.338},0).wait(1).to({alpha:0.324},0).wait(1).to({alpha:0.31},0).wait(1).to({alpha:0.296},0).wait(1).to({alpha:0.282},0).wait(1).to({alpha:0.268},0).wait(1).to({alpha:0.254},0).wait(1).to({alpha:0.239},0).wait(1).to({alpha:0.225},0).wait(1).to({alpha:0.211},0).wait(1).to({alpha:0.197},0).wait(1).to({alpha:0.183},0).wait(1).to({alpha:0.169},0).wait(1).to({alpha:0.155},0).wait(1).to({alpha:0.141},0).wait(1).to({alpha:0.127},0).wait(1).to({alpha:0.113},0).wait(1).to({alpha:0.099},0).wait(1).to({alpha:0.085},0).wait(1).to({alpha:0.07},0).wait(1).to({alpha:0.056},0).wait(1).to({alpha:0.042},0).wait(1).to({alpha:0.028},0).wait(1).to({alpha:0.014},0).wait(1).to({alpha:0},0).wait(1));

	// brain
	this.instance_8 = new lib.Symbol4();
	this.instance_8.parent = this;
	this.instance_8.setTransform(274,200.1,1,1,0,0,0,181,200.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:231.5,x:324.5},0).wait(133));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(161,200,664.5,400.2);
// library properties:
lib.properties = {
	id: 'E8C1BE0A39F35F44B68B4E7AC83CEAFF',
	width: 550,
	height: 400,
	fps: 24,
	color: "#999999",
	opacity: 1.00,
	manifest: [
		{src:"images/background_atlas_.png", id:"background_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['E8C1BE0A39F35F44B68B4E7AC83CEAFF'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;