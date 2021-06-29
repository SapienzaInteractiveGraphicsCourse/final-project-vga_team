import * as THREE from 'https://cdn.skypack.dev/three@0.129.0';
import { MTLLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/MTLLoader.js';
import { OBJLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/OBJLoader.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
// renderer.outputEncoding = THREE.sRGBEncoding;
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

//const loader = new GLTFLoader();

var OBJtank = "./obj.obj";
var MTLtank = "./obj.mtl";
var JPGtank = "./mimetica.jpg";
let tank1 = new THREE.Object3D();
let loadingManager = new THREE.LoadingManager();

let light2 = new THREE.DirectionalLight(0xFFFFFF);
light2.position.set(0,1,1);
scene.add(light2);

// new MTLLoader(loadingManager).load(MTLtank, function (materials) {
// 	materials.preload();
// 	new OBJLoader(loadingManager).setMaterials(materials)
// 		.load(OBJtank, function (tankk) {
// 			var texture = new THREE.TextureLoader(loadingManager).load(JPGtank);
// 			tankk.traverse(function (child) {
// 				if (child instanceof THREE.Mesh) {
// 					child.material.map = texture;
// 				}
// 			});
// 			tank1 = tankk;
// 			console.log(tank1.children[33]);
// 			tank1.scale.x /= 5;
// 			tank1.scale.y /= 5;
// 			tank1.scale.z /= 5;
// 			tank1.position.z = -55;
// 			scene.add(tank1);
// 		});
// });

// let skeleton, model_mario;
// let bones = [];
// let lifeE=0;
// let loade = new GLTFLoader(loadingManager);
// loade.load(
// 	'./marco.glb',
// 	function (gltf) {
// 		model_mario = gltf.scene;
// 		// model_mario.rotation.y = 1.5708 * 2;
// 		model_mario.rotation.y = 2;
// 		model_mario.scale.x *= 3;
// 		model_mario.scale.y *= 3;
// 		model_mario.scale.z *= 3;
// 		scene.add(model_mario);
// 		model_mario.traverse(function (object) {
// 			if (object.isMesh) object.castShadow = true;
// 		});
// 		skeleton = new THREE.SkeletonHelper(model_mario);
// 		skeleton.visible = false;
// 		scene.add(skeleton);
// 		bones = skeleton.bones;
// 		console.log(bones);
// 		console.log(bones[46].rotation.x);
// 	}
// );

// let skeleton, model_mario;
// let bones = [];
// let lifeE=0;
// let loade = new GLTFLoader(loadingManager);
// loade.load(
// 	'./rigged_and_textured_mid-poly_soldier/scene.gltf',
// 	function (gltf) {
// 		model_mario = gltf.scene;
// 		// model_mario.rotation.y = 1.5708 * 2;
// 		// model_mario.rotation.y = 2;
// 		model_mario.position.y = -5;
// 		model_mario.scale.x *= 0.05;
// 		model_mario.scale.y *= 0.05;
// 		model_mario.scale.z *= 0.05;
// 		scene.add(model_mario);
// 		model_mario.traverse(function (object) {
// 			if (object.isMesh) object.castShadow = true;
// 		});
// 		THREE.sRGB
// 		skeleton = new THREE.SkeletonHelper(model_mario);
// 		skeleton.visible = false;
// 		scene.add(skeleton);
// 		bones = skeleton.bones;
// 		console.log(bones);
// 		//console.log(model_mario);
// 		// console.log(bones[46].rotation.x);
// 	}
// );

let skeleton, model_mario;
let bones = [];
let lifeE=0;
let loade = new GLTFLoader(loadingManager);
loade.load(
	'./skeleton_rig/scene.gltf',
	function (gltf) {
		model_mario = gltf.scene;
		// model_mario.rotation.y = 1.5708 * 2;
		// model_mario.rotation.y = 2;
		model_mario.position.y = -5;
		model_mario.scale.x *= 0.2;
		model_mario.scale.y *= 0.2;
		model_mario.scale.z *= 0.2;
		scene.add(model_mario);
		model_mario.traverse(function (object) {
			if (object.isMesh) object.castShadow = true;
		});
		THREE.sRGB
		skeleton = new THREE.SkeletonHelper(model_mario);
		skeleton.visible = false;
		scene.add(skeleton);
		bones = skeleton.bones;
		console.log(bones);
		//console.log(model_mario);
		// console.log(bones[46].rotation.x);
	}
);

// var flagAnim = [true, true];
// function anim(){
// 	var id;
// 	for(var i = 0; i < bones.length; i++){


// 		if(bones[i].name == 'J_Bip_R_UpperLeg'){
			
// 			id = 0;
// 			if(bones[i].rotation.x > 4.14 && flagAnim[id] == true) flagAnim[id] = false;
// 			else if(bones[i].rotation.x < 2.14 && flagAnim[id] == false) flagAnim[id] = true;

// 			if(flagAnim[id]) bones[i].rotation.x += 0.01;
// 			else bones[i].rotation.x += -0.01;
// 		}
// 		else if(bones[i].name == 'J_Bip_L_UpperLeg'){
			
// 			id = 1;
// 			if(bones[i].rotation.x > 4.14 && flagAnim[id] == false) flagAnim[id] = true;
// 			else if(bones[i].rotation.x < 2.14 && flagAnim[id] == true) flagAnim[id] = false;

// 			if(flagAnim[id]) bones[i].rotation.x += -0.01;
// 			else bones[i].rotation.x += 0.01;
// 		}
// 	}
// }



camera.position.z = 10;

const animate = function () {
	requestAnimationFrame( animate );
	// cube.rotation.x += 0.01;
	// cube.rotation.y += 0.01;
	// tank1.rotation.x += 0.01;
	// tank1.rotation.y += 0.01;
	// tank1.children[33].rotation.x += 0.01;
	// anim();

	renderer.render( scene, camera );
};

animate();