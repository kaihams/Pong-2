var canvasWidth = 500, canvasHeight = 400;
var myBall;
var ballSize = 20;
var myBall_xPos = canvasWidth/2, myBall_yPos = canvasHeight/2,
	myBall_xVel = 0, myBall_yVel = 0,
	myBall_top    = myBall_yPos - ballSize/2,
	myBall_bottom = myBall_yPos + ballSize/2,
	myBall_left   = myBall_xPos - ballSize/2,
	myBall_right  = myBall_xPos + ballSize/2;
var paddleWidth = 10, paddleLength = canvasHeight/6, paddleVel = 5,
	paddleL_xPos = ballSize, paddleR_xPos = canvasWidth - ballSize,
	paddleL_yPos = canvasHeight / 2, paddleR_yPos = canvasHeight / 2;
  paddleL_top    = paddleL_yPos - paddleLength/2,
	paddleL_bottom = paddleL_yPos + paddleLength/2,
	paddleR_top    = paddleR_yPos - paddleLength/2,
	paddleR_bottom = paddleR_yPos + paddleLength/2;
var r = 0, g = 0, b = 0;

function setup() {
	createCanvas(canvasWidth, canvasHeight);
	background(color(r,g,b));
	rectMode(CENTER);
	myBall_xVel = random(-3,4);
	myBall_yVel = random(-3,4);
}

function draw() {
	background(color(r,g,b));
	rect(paddleL_xPos,paddleL_yPos,paddleWidth,paddleLength);
	rect(paddleR_xPos,paddleR_yPos,paddleWidth,paddleLength);
	movePaddles();
	moveAndBounceWall();
	rect(myBall_xPos,myBall_yPos,ballSize,ballSize);
}

function moveAndBounceWall() {
	myBall_xPos  = myBall_xPos + myBall_xVel;
	myBall_left  = myBall_xPos - ballSize/2;
	myBall_right = myBall_xPos + ballSize/2;
	if ( (myBall_right > canvasWidth) || (myBall_left < 0) ) {
		myBall_xVel = -myBall_xVel;
		colorChange();
	}

	myBall_yPos   = myBall_yPos + myBall_yVel;
	myBall_top    = myBall_yPos - ballSize/2;
	myBall_bottom = myBall_yPos + ballSize/2;
	if ( (myBall_bottom > canvasHeight) || (myBall_top < 0) ) {
		myBall_yVel = -myBall_yVel;
		colorChange();
	}
}

function colorChange() {
	r = random(255);
	g = random(255);
	b = random(255);
}

function keyPressed() {
	
}

function movePaddles() {
	if (keyIsDown(87)) {
		paddleL_yPos -= paddleVel;
	} else if (keyIsDown(83)) {
		paddleL_yPos += paddleVel;
	}

	if (keyIsDown(79)) {
		paddleR_yPos -= paddleVel;
	} else if (keyIsDown(76)) {
		paddleR_yPos += paddleVel;
	}
}

// make shapes (game paddles, ball)
// keeping score
// motion								DONE
// ball bouncing						DONE
// check if ball hits wall barriers
// reset ball in middle