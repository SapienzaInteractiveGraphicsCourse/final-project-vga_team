import * as THREE from "./build/three.js-master/build/three.module.js";
import { GLTFLoader } from "./build/three.js-master/examples/jsm/loaders/GLTFLoader.js";
import * as build from "./level_build.js";
// import * as knight_s from "./code/knight.js";
import * as animation from "./code/animation.js";

var coord_x = -200;
var coord_y = 10;
var coord_z = 0;

Physijs.scripts.worker = "./build/Physijs-master/physijs_worker.js";
Physijs.scripts.ammo = "./examples/js/ammo.js";

gltfLoader = new GLTFLoader();

container = document.getElementById("game");

const camera = new THREE.PerspectiveCamera( 20, window.innerWidth / (window.innerHeight-20), 0.1, 1000 );
camera.position.set(coord_x, coord_y, coord_z);
camera.lookAt(10, 1, 0);
camera.updateProjectionMatrix();

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, (window.innerHeight-20) );
renderer.outputEncoding = THREE.sRGBEncoding;

function init(){
	window.addEventListener(
		"resize",
		function () {
			camera.aspect = window.innerWidth / (window.innerHeight-20);
			camera.updateProjectionMatrix();
			renderer.setSize(window.innerWidth, (window.innerHeight-20));
		},
		false
	);
	
	scene = new Physijs.Scene();

	container.appendChild(renderer.domElement);
	
	scene.setGravity(new THREE.Vector3( 0, -30, 0 ));
	
	geometryMaterial1 = new THREE.MeshBasicMaterial({
			transparent: true,
			opacity: 0,
			color: 0xeb4034,
		});
	let light2 = new THREE.DirectionalLight(0xFFFFFF);
	light2.position.set(0,1,1);
	scene.add(light2);
	
	let light1 = new THREE.DirectionalLight(0xFFFFFF);
	light1.position.set(-3,1,1);
	scene.add(light1);
	
	paladin = new THREE.Scene();
	animation.loadPaladin(gltfLoader);
	
	charGeometry(10, -8.5, -5);
	
	createLandscape();
	createBgSky();
	createLevel();
	setConstraint(charBox);
	for (let index = 0; index < enNum-1; index++) {
		enemyBox[index] = enemyGeometry(index, ex[index], ey[index], ez[index]);
	}
	enemyBox[enNum-1] = bossGeometry(ex[enNum-1], ey[enNum-1], ez[enNum-1]);
	for (let index = 0; index < enNum; index++) {
		setConstraint(enemyBox[index]);
	}
	setTimeout(function () {animate();}, 1500);
}

function createLevel() {
	build.createGroup1();
	build.createTorch();
	build.createBox();
	build.createSpear();
	
	build.createGroup2();
	build.createTorch2();
	build.createBox2();
	build.createSpear2();
	build.createCup();
}

const animate = function () {
	
	gameRoutine();

	charBox.rotation.set(0,0,0);
	charBox.__dirtyRotation = true;

	camera.position.set(coord_x, coord_y + charBox.position.y, coord_z + charBox.position.z);
	camera.lookAt(charBox.position.x, charBox.position.y, charBox.position.z);
	camera.updateProjectionMatrix();

	animation.jump();
	animation.walk();
	animation.hit();
	animation.starting_pos();

	// document.getElementById("text").innerHTML = charBox.getLinearVelocity().x.toFixed(3)+" , "+charBox.getLinearVelocity().y.toFixed(3)+" , "+charBox.getLinearVelocity().z.toFixed(3);
	document.getElementById("text").innerHTML = charBox.position.x.toFixed(3)+" , "+charBox.position.y.toFixed(3)+" , "+charBox.position.z.toFixed(3);
	// document.getElementById("text0").innerHTML = speed;
	// document.getElementById("text1").innerHTML = flagair;
	// document.getElementById("butn").innerHTML = charBox._physijs.touches.length;

	scene.simulate();
	renderer.render( scene, camera );
	//requestAnimationFrame( animate );
};


init();

scene.addEventListener( 'update', function() {
	// the scene's physics have finished updating
	requestAnimationFrame( animate );
});
function addKeysListener(){
	document.addEventListener('keydown',Event=>{
		
		keysPressed[Event.key.toLowerCase()] = true;
	});

	document.addEventListener('keydown',Event=>{
		switch (Event.key.toLowerCase()) {
			case 'k' : 
				animation.flags_1.hit_flag = true;
				flagatt = true;
				break;
			case ' '  :
				animation.flags_1.jump_flag = true;
				animation.flags_1.not_jump = false;
				jump_flag = true;
				break;

			case keysPressed['d'] && 'shift' :
				animation.flags_1.walk_flag = true;
				animation.flags_1.torso_dir = true;
				speed = 0.08;
				walk_flag = true;
				torso_dir = true;
				break;

			case keysPressed['a'] && 'shift' :
				animation.flags_1.walk_flag = true;
				animation.flags_1.torso_dir = false;
				speed = 0.08;
				walk_flag = true;
				torso_dir = false;
				break;

			case 'd':
				animation.flags_1.walk_flag = true;
				animation.flags_1.torso_dir = true;
				walk_flag = true;
				torso_dir = true;
				break;
			
			case 'a':
				animation.flags_1.walk_flag = true;
				animation.flags_1.torso_dir = false;
				walk_flag = true;
				torso_dir = false;
				break;		
		
			case 's':
				break;
		}

	});
	document.addEventListener('keyup', Event => {
			keysPressed[(Event.key).toLowerCase()]=false;

			
	});
	document.addEventListener('keyup',Event=>{
		switch (Event.key.toLowerCase()){
			case 'd':
				animation.flags_1.walk_flag = false;
				animation.flags_1.rest = true;
				walk_flag = false;
				break;
			case 'a':
				animation.flags_1.walk_flag = false;
				animation.flags_1.rest = true;
				walk_flag = false;
				break;
			
			case ' ':
				jump_flag = false;
				break;
			
			case 's':
				break;
			case 'shift':
				speed = 0.04;
				break;
		}
	});
}
	

function createBgSky() {
	var bgSky = new THREE.PlaneGeometry(3000, 200);
	var skyTexture = new THREE.TextureLoader().load("bg.png");
	skyTexture.wrapS = THREE.RepeatWrapping;
	skyTexture.wrapT = THREE.RepeatWrapping;
	skyTexture.repeat.set(56, 8);
  
	var bgSkyMaterial = new THREE.MeshPhongMaterial({
	  map: skyTexture,
	  flatShading : THREE.FlatShading,
	});
	var bg = new THREE.Mesh(bgSky, bgSkyMaterial);
	bg.position.set(35, 85, 500);
	bg.rotation.y = (-90 * Math.PI) / 180;
	scene.add(bg);
}

function landscapeFunction() {
	var geometry = new THREE.BoxGeometry(200, 20, 3000);
	var texture = new THREE.TextureLoader().load("brick_ground.jpg");
	texture.wrapS = THREE.RepeatWrapping;
	texture.wrapT = THREE.RepeatWrapping;
	texture.repeat.set(6.25, window.innerWidth / 8);
  
	var terrainTexture = new THREE.TextureLoader().load("brick_ground.jpg");
	terrainTexture.wrapS = THREE.RepeatWrapping;
	terrainTexture.wrapT = THREE.RepeatWrapping;
	terrainTexture.repeat.set(window.innerWidth / 10, 2);
  
	var material = [
	  new THREE.MeshPhongMaterial({
		map: terrainTexture,
		color: 0xd2b48c,
	  }),
	  new THREE.MeshPhongMaterial({
		map: terrainTexture,
		color: 0xd2b48c,
	  }),
	  new THREE.MeshPhongMaterial({
		map: texture,
		color: 0xd2b48c,
	  }),
	  new THREE.MeshPhongMaterial({
		map: terrainTexture,
		color: 0xd2b48c,
	  }),
	  new THREE.MeshPhongMaterial({
		map: terrainTexture,
		color: 0xd2b48c,
	  }),
	  new THREE.MeshPhongMaterial({
		map: terrainTexture,
		color: 0xd2b48c,
	  })
	];
	var bg = new THREE.Mesh(geometry, material);
	bg.position.y = -24;
	bg.position.z = 500;
	scene.add(bg);
}

function createLandscape() {
	landscapeFunction();
	setGround();
}

document.getElementById("btnstart").onclick = function () {
	document.getElementById("start").classList = "invisible container";
	document.getElementById("game").classList = "visible";
	addKeysListener();
}

document.getElementById("btnend").onclick = function () {
	// location.reload();
	// return false;
	gameover = false;
	reset();
}

document.getElementById("btnwin").onclick = function () {
	reset();
	win = false;
}

var timeint = window.setInterval(showGame, 1500);

function showGame(){
	if(boxLoaded && boxLoaded2 && spearLoaded2 && cupLoaded && brickLoaded2 && torchLoaded && brickLoaded){
		setTimeout(function () {
			// document.getElementById("cont_load").innerHTML = "";
			document.getElementById("cont_load").classList = "invisible";
			document.getElementById("start").classList = "visible container";
		}, 5000);
		//Set enemy position
		setEnemyPosition();
		clearInterval(timeint);
	}
	else{
		// console.log("ok");
	}
}

