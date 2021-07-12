import * as THREE from "./build/three.js-master/build/three.module.js";
import { GLTFLoader } from "./build/three.js-master/examples/jsm/loaders/GLTFLoader.js";
import * as build from "./level_build.js";

var coord_x = -300;
var coord_y = 0;
var coord_z = 0;

Physijs.scripts.worker = "./build/Physijs/physijs_worker.js";
Physijs.scripts.ammo = "./examples/js/ammo.js";

gltfLoader = new GLTFLoader();

container = document.getElementById("game");

window.addEventListener(
	"resize",
	function () {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(window.innerWidth, window.innerHeight);
	},
	false
);

scene = new Physijs.Scene();
const camera = new THREE.PerspectiveCamera( 20, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set(coord_x, coord_y, coord_z);
camera.lookAt(10, 1, 0);
camera.updateProjectionMatrix();

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.outputEncoding = THREE.sRGBEncoding;
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

let skeleton, model_mario;
let bones = [];
let lifeE=0;

let loadingManager = new THREE.LoadingManager();
let loade = new GLTFLoader(loadingManager);
loade.load(
	'./paladin/scene.gltf',
	function (gltf) {
		model_mario = gltf.scene;
		// model_mario.rotation.y = 1.5708 * 2;
		// model_mario.rotation.y = 2;
		model_mario.position.x = 5;
		model_mario.position.y = -13.5;
		model_mario.position.z = -5;
		model_mario.scale.x *= 0.05;
		model_mario.scale.y *= 0.05;
		model_mario.scale.z *= 0.05;
		scene.add(model_mario);
		model_mario.traverse(function (object) {
			if (object.isMesh) object.castShadow = true;
		});
		THREE.sRGB
		skeleton = new THREE.SkeletonHelper(model_mario);
		skeleton.visible = false;
		scene.add(skeleton);
		bones = skeleton.bones;
		
	}
);
charGeometry(10, -13.5, -5);
setConstraint(charBox);
for (let index = 0; index < 2; index++) {
	enemyBox[index] = enemyGeometry(index, ex[index], ey[index], ez[index]);;
}
for (let index = 0; index < 2; index++) {
	setConstraint(enemyBox[index]);
}

// camera.lookAt(10, 1, 0);

document.addEventListener('keydown',Event=>{
	switch (Event.key) {
		case keysPressed['d'] && 'Shift' :
			torso_dir = true;
			break;

		case keysPressed['a'] && 'Shift' :
			torso_dir = false;
			break;

		case 'd':
			walk_flag = true;
			torso_dir = true;
			break;
		
		case 'a':
			walk_flag = true;
			torso_dir = false;
			break;		
		
		case ' ':
			jump_flag = true;
			break;

		case 's':
			break;

		case 'k':
			flagatt = true;
			break;
		}


});
document.addEventListener('keyup',Event=>{
	switch (Event.key.toLowerCase()){
		case 'd':
			 walk_flag = false;
			 break;
		case 'a':
			walk_flag = false;
			break;
		
		case ' ':
			jump_flag = false;
			break;
		
		case 's':
			break;

		case 'shift':
			break;
	}
});


var flagAnim = [true, true];
var forward=0;
function anim(){
	document.getElementById("coord_x").onclick = function(){coord_x = 8+coord_x;};
	document.getElementById("coord_y").onclick = function(){coord_y = 8+coord_y;};
	document.getElementById("coord_z").onclick = function(){coord_z = 8+coord_z;};

	document.getElementById("coord_x_m").onclick = function(){coord_x = coord_x-8;};
	document.getElementById("coord_y_m").onclick = function(){coord_y = coord_y-8;};
	document.getElementById("coord_z_m").onclick = function(){coord_z = coord_z-8;};
	
	document.getElementById("forward").onclick = function(){forward = forward+4; coord_z = coord_z+4;};
	document.getElementById("back").onclick = function(){forward = forward-4; coord_z = coord_z-4};
	var cameraX = 0 + coord_x;
	var cameraY = 0 + coord_y;
	var cameraZ = 0 + coord_z;
	//console.log(coord_x)
	//console.log(coord_y)
	//console.log(coord_z)
	camera.lookAt(10, 1, 1+forward);
  
	camera.position.set(cameraX, cameraY, cameraZ);
	camera.updateProjectionMatrix();
	var id;
}

function createLevel() {
	build.createGroup1();
	build.createTorch();
	build.createBox();
	build.createSpear();
}

const animate = function () {
	
	//brick.rotation.y +=0.005;
	
	// anim();
	gameRoutine();

	charBox.rotation.set(0,0,0);
	charBox.__dirtyRotation = true;

	camera.position.set(coord_x, coord_y + charBox.position.y, coord_z + charBox.position.z);
	camera.lookAt(charBox.position.x, charBox.position.y, charBox.position.z);
	camera.updateProjectionMatrix();

	document.getElementById("text").innerHTML = charBox.getLinearVelocity().x.toFixed(3)+" , "+charBox.getLinearVelocity().y.toFixed(3)+" , "+charBox.getLinearVelocity().z.toFixed(3);
	// document.getElementById("text").innerHTML = charBox.position.x.toFixed(3)+" , "+charBox.position.y.toFixed(3)+" , "+charBox.position.z.toFixed(3);
	document.getElementById("text0").innerHTML = torso_dir;
	document.getElementById("text1").innerHTML = flagair;
	document.getElementById("butn").innerHTML = charBox._physijs.touches.length;

	scene.simulate();
	renderer.render( scene, camera );
	requestAnimationFrame( animate );
};

function createBgSky() {
	var bgSky = new THREE.PlaneGeometry(1500, 200);
	var skyTexture = THREE.ImageUtils.loadTexture("bg.png");
	skyTexture.wrapS = THREE.RepeatWrapping;
	skyTexture.wrapT = THREE.RepeatWrapping;
	skyTexture.repeat.set(56, 8);
  
	var bgSkyMaterial = new THREE.MeshPhongMaterial({
	  map: skyTexture,
	  flatShading : THREE.FlatShading,
	});
	var bg = new THREE.Mesh(bgSky, bgSkyMaterial);
	bg.position.set(35, 85, 0);
	bg.rotation.y = (-90 * Math.PI) / 180;
	scene.add(bg);
}

var landscapeFunction = function () {
	var geometry = new THREE.BoxGeometry(200, 20, 1500);
	var texture = THREE.ImageUtils.loadTexture("brick_ground.jpg");
	texture.wrapS = THREE.RepeatWrapping;
	texture.wrapT = THREE.RepeatWrapping;
	texture.repeat.set(6.25, window.innerWidth / 8);
  
	var terrainTexture = THREE.ImageUtils.loadTexture("brick_ground.jpg");
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
	scene.add(bg);
}

function createLandscape() {
	landscapeFunction();
	setGround();
}

document.getElementById("btnstart").onclick = function () {
	document.getElementById("start").classList = "invisible container";
	document.getElementById("game").classList = "visible";
}

document.getElementById("btnend").onclick = function () {
	location.reload();
	return false;
}

createLandscape();
createBgSky();
createLevel();
animate();