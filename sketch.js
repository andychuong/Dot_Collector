<<<<<<< HEAD
var myX, myY;
var r,g,b;
var myPoints;
// var drops = [];
var numDrops = 50;
var gameOver = false;
var cirX, cirY;

function preload() {
   fontOther = loadFont("assets/Oswald-Regular.ttf");
   fontHeaders = loadFont("assets/LuckiestGuy.ttf");
=======
	var myX, myY;
	var r,g,b;
	var myPoints;
	// var drops = [];
	var numDrops = 50;
	var gameOver = false;
	var cirX, cirY;
>>>>>>> afa3b4df27e1ac6c764839584bafe74f2d3089fa

}

<<<<<<< HEAD
// P5 STUFF

=======
>>>>>>> afa3b4df27e1ac6c764839584bafe74f2d3089fa
function setup() {
	createCanvas(windowWidth,windowHeight);
	background('cyan');
	
	myX = windowWidth/2;
	myY = windowHeight-80;
	myRect = new rectObj(myX, myY);
	myPoints = 0;
	cir = new circObject(50);
	cirX = windowWidth/2;
	cirY = windowHeight/2;
}

function draw() {

	background('grey');
	myRect.move();
	myRect.dispMe();
	myRect.move();
	cir.disp();
	cir.collide( myRect );

	sendDrawing({
		'x':myX,
		'y':myY
		// 'width':windowWidth,
		// 'height':windowHeight,
		// 'points':myPoints,
	});
<<<<<<< HEAD
	fill('deepskyblue');
	textFont(fontHeaders);
	textSize(40);
	text("A Simple Chase", 10,50);

	textFont(fontOther);
	fill('deepskyblue');
	textSize(20);
	// textFont(fontHeaders);
	text("Score: " + myPoints, windowWidth-70, windowHeight - 10);
=======

	fill(0);
	textSize(20);
	// textFont(fontHeaders);
	text("Score: " + myPoints, windowWidth-100, windowHeight - 30);
>>>>>>> afa3b4df27e1ac6c764839584bafe74f2d3089fa
	text("Use arrow keys to move your box (red).", 10, windowHeight-50);
	text("Touch the green circle first to get points.", 10, windowHeight -30);
	text("First to 10 points wins", 10, windowHeight -10);


	// textSize(50);
	// text("YOU LOSE!", windowWidth/2 -105, windowHeight/2);
	console.log(gameOver);
	if(gameOver){
		console.log(gameOver);
		if(myPoints == 10){
			myPoints = 0;
			gameOver = false;
			//WIN
			textSize(50);
			text("YOU WIN!", windowWidth/2 -100, windowHeight/2);
		}
		else{
			myPoints = 0;
			gameOver = false;
			//LOSE
			textSize(50);
			text("YOU LOSE!", windowWidth/2 -105, windowHeight/2);

		}
	}
}

function sendDrawing(message){
	socket.emit('drawing', message);
	console.log(message);
}
function sendCirc(message){
	socket.emit('circData',message);
}

function checkWin(){
	if(myPoints < 10){
		myPoints++;
	}
	else{
		myPoints++;
		gameOver = true;
	}
}

function circObject(dia){
	// this.x = x;
	// this.y = y;
	this.dia = dia;
	//touched => if true, orb doesn't give points
	this.touched = false;

	this.color = color(random(255),random(255),random(255));
	this.hit = false;
	this.collide = function(obj){
		this.hit = collideRectCircle(obj.x, obj.y, obj.w, obj.h, cirX, cirY, this.dia);
		if(this.hit){
			console.log('touched');
			cirX = random(50,windowWidth-50);
			cirY = random(50,windowHeight-50);
<<<<<<< HEAD
			
=======
			sendCirc({
				cX: cirX,
				cY: cirY,
				gO: gameOver
			});
>>>>>>> afa3b4df27e1ac6c764839584bafe74f2d3089fa
			if(this.touched === false){
				if(myPoints < 9){
					myPoints++;
				}
				else{
				myPoints++;
				gameOver = true;
				}
				console.log(myPoints);
				console.log(gameOver);
			}
<<<<<<< HEAD
			sendCirc({
				cX: cirX,
				cY: cirY,
				gO: gameOver
			});
=======
>>>>>>> afa3b4df27e1ac6c764839584bafe74f2d3089fa
			// this.touched = true;
			this.color = color(0);
		}
	}

	this.disp = function(){
		noStroke();
		fill('greenyellow');
		//this.y -=3;
		// if(this.y > (windowHeight + (this.h/2))){
		// 	this.y = 0;
		// }
		// if(this.touched === false){
			ellipse(cirX, cirY,this.dia);
		// }
	}
}
function rectObj(){

	this.x = myX;
	this.y = myY;
	this.w = 30;
	this.h = 60;

	this.move = function(){
		if(keyIsDown(LEFT_ARROW)){
			if(myX > 0){
				myX-=2;
				this.x = myX;
			}
		}
		if(keyIsDown(RIGHT_ARROW)){
			if(myX < windowWidth - 30){
				myX+=2;
				this.x = myX;
			}
		}
		if(keyIsDown(UP_ARROW)){
			if(myY > 0){
				myY-=2;
				this.y = myY;
			}
		}
		if(keyIsDown(DOWN_ARROW)){
			if(myY < windowHeight - (windowHeight/8)){
				myY+=2;
				this.y = myY;
			}
		}
	}

	this.dispMe = function(){
		fill('red');
		//console.log(myX + " " +myY);

		rect(myX,myY,30,60);
	}
<<<<<<< HEAD

	this.dispOth = function(x,y, someW, someH){
		this.newX  = map(x,0,someW,0,windowWidth);
		this.newY = map(y,0,someH,0,windowHeight);
		fill('grey');
		rect(newX,newY,30,60);
	}
}

function drawOther(someX, someY){
	// fill('blue');
	// // stroke('cyan');
	// strokeWeight(40);
	// var newX = map(someX,0,someW,0,windowWidth);
	// var newY = map(someY,0,someH,0,windowHeight);
	fill('blue');
	rect(someX,someY,30,60);
}

function changeCirc(x,y,go){
	cirX = x,
	cirY = y,
	gameOver = go;
}

function windowResized(){
	resizeCanvas(windowWidth,windowHeight);
=======

	this.dispOth = function(x,y, someW, someH){
		this.newX  = map(x,0,someW,0,windowWidth);
		this.newY = map(y,0,someH,0,windowHeight);
		fill('grey');
		rect(newX,newY,30,60);
	}
}

function drawOther(someX, someY){
	// fill('blue');
	// // stroke('cyan');
	// strokeWeight(40);
	// var newX = map(someX,0,someW,0,windowWidth);
	// var newY = map(someY,0,someH,0,windowHeight);
	fill('blue');
	rect(someX,someY,30,60);
}

function changeCirc(x,y,go){
	cirX = x,
	cirY = y,
	gameOver = go;
>>>>>>> afa3b4df27e1ac6c764839584bafe74f2d3089fa
}