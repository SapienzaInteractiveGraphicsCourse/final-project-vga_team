var camera, container, renderer, container, scene, dirLight, charBox, ambientLight, boxMaterial, ground, grnd;
var flagair = false;
let keysPressed = {'d':false,'a':false,'shift':false,'k':false,' ':false};
var walk_flag = false, torso_dir = false, jump_flag = false, flagatt = false;
var vel;
const light4 = new THREE.AmbientLight(0x8B0000);
light4.intensity = 0.0;

var enemyBox = [];
var ex = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
var ey = [-8, -8, 23.70, -9, -9, -9, 9.30, 9,30, -9, -9, -9];
var ez = [200, 210, 360, 434, 465, 480, 615, 917, 1000, 1020, 1200];
var enemyLives = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5];
var charpos = [10, -8, -5];

// var bosspos = [10, -9, 1200];
// var bossBox;
// var bossLives = 5;

var lives = 2;

var paladin;
var speed = 0.04;

var enNum = 11;
var mute = false;
var win = false;
var playflag = true;
var gameover = false;
var audio = new Audio('./sound/Start.mp3');
var back_sound = new Audio('./sound/backsound.mp3');
var gameover_audio = new Audio('./sound/GameOver.mp3');
var onelife_audio = new Audio('./sound/OneLife.mp3');
var victory_sound = new Audio('./sound/victory.mp3');
var flawless_victory = new Audio('./sound/flawless_victory.mp3');
var damage_received =  new Audio('./sound/damage.mp3');
var sword_hit =  new Audio('./sound/sword_hit.mp3');
audio.volume = 1.0;
back_sound.volume = 0.6;
gameover_audio.volume = 1.0;
onelife_audio.volume = 1.0;
victory_sound.volume = 1.0;
flawless_victory.volume = 1.0;
damage_received.volume = 1.0;
sword_hit.volume = 1.0;
onelife_audio.loop = true;
back_sound.loop = true;
var flash;
var sk1 = [];
let skeleton_bones = [];
let sk_bones = [];
var sk_dir = [false, false, false, false, false, false, false, false, false, false, false];
var sk_fg = [false, false, false, false, false, false, false, false, false, false, false];

var ok_array = [];
for (let u = 0; u < enNum; u++) {
	ok_array[u] = [0,0,0,0];
}

var flagAnim = [];
for (let u = 0; u < enNum; u++) {
	flagAnim[u] = [false, false];
}

