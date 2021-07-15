var camera, container, renderer, container, scene, dirLight, charBox, ambientLight, boxMaterial, ground, grnd;
var flagair = false;
let keysPressed = {'d':false,'a':false,'shift':false,'k':false,' ':false};
var walk_flag = false, torso_dir = false, jump_flag = false, flagatt = false;
var vel;

var enemyBox = [];
var ex = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
var ey = [-8, -8, 23.70, -9, -9, -9, 9.30, 9,30, -9, -9, -9];
var ez = [200, 210, 360, 434, 465, 480, 615, 917, 1005, 1015, 1200];
var enemyLives = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5];
var charpos = [10, -8, -5];

// var bosspos = [10, -9, 1200];
// var bossBox;
// var bossLives = 5;

var lives = 2;

var paladin;
var speed = 0.04;

var enNum = 11;

var win = false;
var gameover = false;