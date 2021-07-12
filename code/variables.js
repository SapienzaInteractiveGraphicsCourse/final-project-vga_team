var camera, container, renderer, container, scene, dirLight, charBox, ambientLight, boxMaterial, ground, grnd;
var flagair = false;
let keysPressed = {'d':false,'a':false,'Shift':false,'w':false,'s':false};
var walk_flag = false, torso_dir = false, jump_flag = false, flagatt = false;
var flagcontleft = false, flagcontright = false;
var vel;

var enemyBox = [];
var ex = [10, 10];
var ey = [-8, -8];
var ez = [200, 210];
var enemyLifes = [2, 2];

var lifes = 3;