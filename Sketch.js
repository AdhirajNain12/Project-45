var player,playerImg,playerC
var jf,jfImg
var hf,hfImg
var back,backImg
var play,playImg,pause,pauseImg
var winSound
var up 
var down
var PLAY = 1
var END = 0
var gameState = PLAY
var score  = 0

function preload(){
	backImg = loadImage("jungle.jpg");
	playerImg = loadAnimation("a.png","b.png","c.png");
	playerC = loadAnimation("player_collided.png");
	jfImg = loadImage("jf-removebg-preview.png");
	hfImg = loadImage("hf-removebg-preview.png");
	playImg = loadImage("play.png");
	
}