import * as THREE from "./build/three.js-master/build/three.module.js";
//import { MTLLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/MTLLoader.js';
//import { OBJLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/OBJLoader.js';
import { GLTFLoader } from "./build/three.js-master/examples/jsm/loaders/GLTFLoader.js";
//import * as functions from "./movements.js";
import TWEEN from "./build/tween.js-master/dist/tween.esm.js";
import * as knight_s from "./knight.js";
Physijs.scripts.worker = "physijs_worker.js";
Physijs.scripts.ammo = "ammo.js";
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.outputEncoding = THREE.sRGBEncoding;
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
light2.position.set(-5,1,1);
scene.add(light2);
let light3 = new THREE.DirectionalLight(0xFFFFFF);
light3.position.set(4,1,1);
scene.add(light3);

let skeleton_bones;
let sk_bones = [];
let lifeE=0;
let loade = new GLTFLoader(loadingManager);
let flagAnim = [true,true];
var flags_1 = {
	walk_flag : false,
	torso_dir : false,
	bool : false,
	not_jump : true,
	jump_flag : false,
	hit_flag : false,
	total_body : false,
	rest : false,
}
var speed=0.08;
let sk1  = new Physijs.Scene();
{
	loade.load(
		'./models/skeleton_rig/scene.gltf',
		function (gltf) {
			sk1 = gltf.scene;
			sk1.position.set(0, -0.5,-1);
			sk1.scale.x *= 0.1;
			sk1.scale.y *= 0.1;
			sk1.scale.z *= 0.1;
			sk1.traverse(function (object) {
				if (object.isMesh) object.castShadow = true;
			});
			sk1.castShadow = true;
			sk1.receiveShadow = true;
			THREE.sRGB
			skeleton_bones = new THREE.SkeletonHelper(sk1);
			skeleton_bones.visible = false;
			scene.add(sk1);
			sk_bones = skeleton_bones.bones;
			sk_bones[0].rotation.y =  (-90*Math.PI)/180;
			sk_bones[8].rotation.y =  (0*Math.PI)/180; //mano destra 
			sk_bones[24].rotation.y = (0*Math.PI)/180;
			sk_bones[27].rotation.z = (-90*Math.PI)/180; // braccio sinistro
			sk_bones[28].rotation.z = (0*Math.PI)/180; //avambraccio sinistro
			sk_bones[44].rotation.x = (200*Math.PI)/180; // gamba destra
			sk_bones[45].rotation.y = (180*Math.PI)/180;
			sk_bones[46].rotation.z = (-90*Math.PI)/180;
			sk_bones[48].rotation.x = (-164*Math.PI)/180;
			sk_bones[49].rotation.y = (180*Math.PI)/180;
			sk_bones[50].rotation.z = (90*Math.PI)/180;
			//sk_bones[46].rotation.x = (30*Math.PI)/180;
			

			sk_bones[6].rotation.z = (90*Math.PI)/180;; // braccio destro 
			sk_bones[6].rotation.x = (-90*Math.PI)/180;; // braccio destro 
			sk_bones[6].rotation.y = -sk_bones[27].rotation.y; // braccio destro 
			sk_bones[7].rotation.x = (0*Math.PI)/180; // avambraccio destro 
			console.log(sk_bones);
			var i;
			for(i=9;i<23;i+=1){
				sk_bones[i].rotation.x =  (0*Math.PI)/180;
				sk_bones[i].rotation.x =  sk_bones[i+21].rotation.x;
			}
		}
	);
}

function sleep(miliseconds) {
	var currentTime = new Date().getTime();
 
	while (currentTime + miliseconds >= new Date().getTime()) {
	}
 }

function skeleton_walk(){
    var id;
	id = 0;
	
	if(sk_bones[44].rotation.x > (245*Math.PI)/180 && flagAnim[id] == true){ flagAnim[id] = false;}
	else if(sk_bones[44].rotation.x < (150*Math.PI)/180 && flagAnim[id] == false) flagAnim[id] = true;
		
	if(flagAnim[id]){
		sk_bones[44].rotation.x += speed;
		
		if(sk_bones[45].rotation.z>0){
			sk_bones[45].rotation.z -= speed;
		}
		else{
			sk_bones[45].rotation.z = 0;
		}
		
	}
	
	else {
		sk_bones[44].rotation.x -= speed;

		if(sk_bones[44].rotation.x > (200*Math.PI)/180){
			sk_bones[45].rotation.z +=speed*(3/2);
		}
		else{
			sk_bones[45].rotation.z -=speed;
		}

		
	}
	
	
	id = 1;
	if(sk_bones[48].rotation.x > ((-114*Math.PI)/180) && flagAnim[id] == false) flagAnim[id] = true;
	else if(sk_bones[48].rotation.x < ((-209*Math.PI)/180) && flagAnim[id] == true) flagAnim[id] = false;

	if(flagAnim[id]){
		sk_bones[48].rotation.x -= speed;
		if(sk_bones[48].rotation.x > (-164*Math.PI)/180){
			sk_bones[49].rotation.z -=speed*(3/2);
		}
		else{
			if(sk_bones[49].rotation.z<0){
				sk_bones[49].rotation.z += speed;
			}
		}
		
	}

	else {
		sk_bones[48].rotation.x += speed;

		if(sk_bones[49].rotation.z<0){
			sk_bones[49].rotation.z += speed;
		}
		else{
			sk_bones[49].rotation.z = 0;
		}
		
	}
	

	
}
var i = 70;

//160 gamba destra - 199 gamba sinistra
async function find_bones(){
	var init_p = sk_bones[i].rotation.x;
	if(i<bones.length){
		sk_bones[i].rotation.x =(90*Math.PI)/180;
	}
	sleep(2000);
	
	i=i+1;

}
var ok_array = [0,0,0,0];
function hands_up(){
	if(sk_bones[27].rotation.z>=(-180*Math.PI)/180){
		sk_bones[27].rotation.z -= (2*Math.PI)/180; // braccio sinistro
	}
	else{
		ok_array[0] = 1;
	}
	if(sk_bones[6].rotation.z<(175*Math.PI)/180){
		sk_bones[6].rotation.z += (2*Math.PI)/180; // braccio destro
	}
	else{
		ok_array[1] = 1;
	}
	if(sk_bones[8].rotation.y > (-90*Math.PI)/180){
		sk_bones[8].rotation.y -= (2*Math.PI)/180;
	}
	else{
		ok_array[2] = 1;
	}
	if(sk_bones[29].rotation.y < (90*Math.PI)/180){
		sk_bones[29].rotation.y += (2*Math.PI)/180;
	}
	else{
		ok_array[3] = 1;
	}
}

function skeleton_start(){
	sk_bones[8].rotation.y =  (0*Math.PI)/180; //mano destra 
	sk_bones[24].rotation.y = (0*Math.PI)/180;
	sk_bones[27].rotation.z = (-90*Math.PI)/180; // braccio sinistro
	sk_bones[28].rotation.z = (0*Math.PI)/180; //avambraccio sinistro
	sk_bones[29].rotation.y = (0*Math.PI)/180;
	sk_bones[44].rotation.x = (200*Math.PI)/180; // gamba destra
	sk_bones[45].rotation.y = (180*Math.PI)/180;
	sk_bones[45].rotation.z = (0*Math.PI)/180;
	sk_bones[46].rotation.z = (-90*Math.PI)/180;
	sk_bones[48].rotation.x = (-164*Math.PI)/180;
	sk_bones[49].rotation.y = (180*Math.PI)/180;
	sk_bones[49].rotation.z = (0*Math.PI)/180;
	sk_bones[50].rotation.z = (90*Math.PI)/180;
	//sk_bones[46].rotation.x = (30*Math.PI)/180;
	

	sk_bones[6].rotation.z = (90*Math.PI)/180;; // braccio destro 
	sk_bones[6].rotation.x = (-90*Math.PI)/180;; // braccio destro 
	sk_bones[6].rotation.y = -sk_bones[27].rotation.y; // braccio destro 
	sk_bones[7].rotation.x = (0*Math.PI)/180; // avambraccio destro 
	
	var i;
	for(i=9;i<23;i+=1){
		sk_bones[i].rotation.x =  (0*Math.PI)/180;
		sk_bones[i].rotation.x =  sk_bones[i+21].rotation.x;
	}

}

var currentTime = new Date().getTime();
const animate = function () {
	var newTime = new Date().getTime();
	requestAnimationFrame( animate );
	if(newTime > currentTime + 10000){
		skeleton_start();
	}
	else{
		hands_up();
		if(ok_array.length == ok_array.reduce((a, b) => a + b, 0)){
			skeleton_walk();
		}
	}

	
	
	renderer.render( scene, camera );
};

animate();

