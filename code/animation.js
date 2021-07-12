import * as knight_s from "./knight.js";

let loadingManager = new THREE.LoadingManager();

let skeleton;
let bones = [];
let loade = new GLTFLoader(loadingManager);

var init_jump_positions = {
	leftarmx  : (-60*Math.PI)/180,
	rightarmx : (-60*Math.PI)/180,
	leftupperlegx : (-80*Math.PI)/180,
	leftlegx : (100*Math.PI)/180,
	rightupperlegx : (-60*Math.PI)/180,
	rightlegx : (100*Math.PI)/180,
}
var startingpositions= {
	torso : (90*Math.PI)/180,
	leftarmz : (-70*Math.PI)/180,
	leftarmx : 0,
	leftforearmy : (-70*Math.PI)/180,
	leftforearmz : (-15*Math.PI)/180,
	rightarm : (70*Math.PI)/180,
	rightarmx : 0,
	rightforearmy : (70*Math.PI)/180,
	rightforearmz : (15*Math.PI)/180,
	leftupperlegx : 0,
	leftlegx : 0,
	rightupperlegx : 0,
	rightlegx : 0,
	upperSpine : 0,
}

// let paladin  = new Physijs.Scene();
let paladin = new THREE.Scene();
{
	loade.load(
		'./models/paladin/scene.gltf',
		function (gltf) {
			paladin = gltf.scene;
			paladin.position.set(0, -5,0);
			paladin.scale.x *= 0.02;
			paladin.scale.y *= 0.02;
			paladin.scale.z *= 0.02;
			paladin.traverse(function (object) {
				if (object.isMesh) object.castShadow = true;
			});
			paladin.castShadow = true;
			paladin.receiveShadow = true;
			THREE.sRGB;
			skeleton = new THREE.SkeletonHelper(paladin);
			skeleton.visible = false;
			scene.add(paladin);
			bones = skeleton.bones;
			bones[knight_s.knight_bones.torso].rotation.y = startingpositions.torso;//rotazione del corpo
			bones[knight_s.knight_bones.leftArm].rotation.z = startingpositions.leftarmz; //leftarm
			bones[knight_s.knight_bones.leftForeArm].rotation.y = startingpositions.leftforearmy; //leftforearm
			bones[knight_s.knight_bones.leftForeArm].rotation.z = startingpositions.leftforearmz; //leftforearm
			bones[knight_s.knight_bones.rightArm].rotation.z = startingpositions.rightarm; // rightarm
			bones[knight_s.knight_bones.rightForeArm].rotation.y = startingpositions.rightforearmy; //rightforearm
			bones[knight_s.knight_bones.rightForeArm].rotation.z = startingpositions.rightforearmz; //rightforearm
			console.log(bones)
			for(var i = 0; i < bones.length; i++){

				if (i>=41 && i<=56 || i>=15 && i<=31){
					if (i<40){
						bones[i].rotation.z = (-80*Math.PI)/180;
					}
					else{bones[i].rotation.z = (60*Math.PI)/180;}
				}
			}
		}
	);
}

var flagAnim = [true, true];

var bool = true
var speed = 0.08;

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

var pre_jump_position = {
	leftarmx : 0,
	rightarmx : 0,
	leftupperlegx : 0,
	leftlegx : 0,
	rightupperlegx : 0,
	rightlegx : 0,

}
var fase1 = [true,false]
function hit(){
	if(flags_1.hit_flag){
		if (fase1[0]){
			if (bones[knight_s.knight_bones.rightArm].rotation.x<-2){
				fase1[0]=false;
				fase1[1] = true;
			}
		
		bones[knight_s.knight_bones.rightArm].rotation.x -= 0.4;
		if(bones[knight_s.knight_bones.rightForeArm].rotation.y>0.2){
			bones[knight_s.knight_bones.rightForeArm].rotation.y -=0.2;
		}
	}
		//bones[36].rotation.y = 0.5;
		//bones[36].rotation.z += 0.2;
		//flags_1.hit_flag = false;
		if(fase1[1]){
			if(bones[knight_s.knight_bones.rightArm].rotation.x <0){
				bones[knight_s.knight_bones.rightArm].rotation.x += 0.4;	
			}
			else{
				starting_pos();
				flags_1.hit_flag = false;
				fase1 = [true,false]
			}
		}
	}
}

function walk(){
    var id;
    if(flags_1.walk_flag){
		if(flags_1.torso_dir){
			flags_1.bool = true;
			bones[knight_s.knight_bones.torso].rotation.y = (90*Math.PI)/180;
		}
		if(!flags_1.torso_dir){
			flags_1.bool = false;
			bones[knight_s.knight_bones.torso].rotation.y = (-90*Math.PI)/180;

		}
		if(flags_1.bool){
			paladin.position.x+=speed;
		}
		else{
			paladin.position.x-=speed;
		}

		if(flags_1.not_jump){
			id = 0;
			
			if(bones[knight_s.knight_bones.rightLeg].rotation.x > 0.8 && flagAnim[id] == true){ flagAnim[id] = false;}
			else if(bones[knight_s.knight_bones.rightLeg].rotation.x < -0.8 && flagAnim[id] == false) flagAnim[id] = true;
				
			if(flagAnim[id]){
				bones[knight_s.knight_bones.rightLeg].rotation.x += speed;
				bones[knight_s.knight_bones.leftArm].rotation.x+=speed*(2/3);
				bones[knight_s.knight_bones.upperSpine].rotation.y+=speed*(1/3);
				bones[knight_s.knight_bones.leftForeArm].rotation.z+=speed*(1/6);
				bones[knight_s.knight_bones.leftForeArm].rotation.y+=speed*(1/6);
				if(bones[knight_s.knight_bones.rightLowerLeg].rotation.x > 0){
					bones[knight_s.knight_bones.rightLowerLeg].rotation.x -=speed;
				}
				else{
					bones[knight_s.knight_bones.rightLowerLeg].rotation.x = 0;
				}
			}
			else {
				bones[knight_s.knight_bones.rightLeg].rotation.x += -speed;
				bones[knight_s.knight_bones.leftArm].rotation.x-=speed*(2/3);
				bones[knight_s.knight_bones.upperSpine].rotation.y-=speed*(1/3);
				bones[knight_s.knight_bones.leftForeArm].rotation.z-=speed*(1/6);
				bones[knight_s.knight_bones.leftForeArm].rotation.y-=speed*(1/6);
				if(bones[knight_s.knight_bones.rightLeg].rotation.x>0){
					bones[knight_s.knight_bones.rightLowerLeg].rotation.x += speed*(3/2);
				}
				else{
					bones[knight_s.knight_bones.rightLowerLeg].rotation.x -= speed;
				}
				
			}
			
			id = 1;
			if(bones[knight_s.knight_bones.leftLeg].rotation.x > 0.8 && flagAnim[id] == false) flagAnim[id] = true;
			else if(bones[knight_s.knight_bones.leftLeg].rotation.x < -0.8 && flagAnim[id] == true) flagAnim[id] = false;

			if(flagAnim[id]){
				bones[knight_s.knight_bones.leftLeg].rotation.x -= speed;
				bones[knight_s.knight_bones.rightArm].rotation.x-=speed*(2/3);
				bones[knight_s.knight_bones.rightForeArm].rotation.z+=speed*(1/6);
				bones[knight_s.knight_bones.rightForeArm].rotation.y+=speed*(1/6);
				if(bones[knight_s.knight_bones.leftLeg].rotation.x>0){
					bones[knight_s.knight_bones.leftLowerLeg].rotation.x += speed*(3/2);
				}
				else{
					if(bones[knight_s.knight_bones.leftLowerLeg].rotation.x > 0){
						bones[knight_s.knight_bones.leftLowerLeg].rotation.x -= speed;
					}
					
				}
				
			}
			else {
				bones[knight_s.knight_bones.leftLeg].rotation.x += speed;
				bones[knight_s.knight_bones.rightArm].rotation.x+=speed*(2/3);
				bones[knight_s.knight_bones.rightForeArm].rotation.z-=speed*(1/6);
				bones[knight_s.knight_bones.rightForeArm].rotation.y-=speed*(1/6);
				if(bones[knight_s.knight_bones.leftLowerLeg].rotation.x > 0){
					bones[knight_s.knight_bones.leftLowerLeg].rotation.x -=speed;
				}
				else{
					bones[knight_s.knight_bones.leftLowerLeg].rotation.x = 0;
				}
				
			}
		}
    }

}
var complete = 0
function starting_pos(){
	if(flags_1.rest){
		var tmp = 0.001;
		if(Math.abs(bones[knight_s.knight_bones.leftArm].rotation.x - startingpositions.leftarmx > 0)){
			if(bones[knight_s.knight_bones.leftArm].rotation.x - startingpositions.leftarmx > 0){
				bones[knight_s.knight_bones.leftArm].rotation.x -=tmp;
			}
			else{
				bones[knight_s.knight_bones.leftArm].rotation.x -=tmp;
			}
			
		}
		else{
			bones[knight_s.knight_bones.leftArm].rotation.x += tmp;
		}
	
		if(Math.abs(bones[knight_s.knight_bones.upperSpine].rotation.y -startingpositions.upperSpine > 0)){
			bones[knight_s.knight_bones.upperSpine].rotation.y -= tmp;	
		}
		else{
			bones[knight_s.knight_bones.upperSpine].rotation.y += tmp;
		}
	
		if(Math.abs(bones[knight_s.knight_bones.leftForeArm].rotation.z - startingpositions.leftforearmz >0)){
			bones[knight_s.knight_bones.leftForeArm].rotation.z -= tmp;	
		}
		else{
			bones[knight_s.knight_bones.leftForeArm].rotation.z +=tmp;
		}
	
		if(Math.abs(bones[knight_s.knight_bones.leftForeArm].rotation.z - startingpositions.leftforearmz >0)){
			bones[knight_s.knight_bones.leftForeArm].rotation.z -=tmp;
		}
		else{
			bones[knight_s.knight_bones.leftForeArm].rotation.z +=tmp;
		}
	
		if(Math.abs(bones[knight_s.knight_bones.leftForeArm].rotation.y - startingpositions.leftforearmy>0)){
			bones[knight_s.knight_bones.leftForeArm].rotation.y -= tmp;
		}
		else{
			bones[knight_s.knight_bones.leftForeArm].rotation.y += tmp;
		}
	
		if(Math.abs(bones[knight_s.knight_bones.rightArm].rotation.x - startingpositions.rightarmx>0)){
			bones[knight_s.knight_bones.rightArm].rotation.x -=tmp;
		}
		else{
			bones[knight_s.knight_bones.rightArm].rotation.x +=tmp;
		}
	
		if(Math.abs(bones[knight_s.knight_bones.rightForeArm].rotation.z - startingpositions.rightforearmz>0)){
			bones[knight_s.knight_bones.rightForeArm].rotation.z -=tmp;
		}
		else{
			bones[knight_s.knight_bones.rightForeArm].rotation.z +=tmp;
		}
	
		if(Math.abs(bones[knight_s.knight_bones.rightForeArm].rotation.y - startingpositions.rightforearmy>0)){
			bones[knight_s.knight_bones.rightForeArm].rotation.y -=tmp;
		}
		else{
			bones[knight_s.knight_bones.rightForeArm].rotation.y +=tmp;
		}
		
		if(flags_1.total_body){
			if(bones[knight_s.knight_bones.leftLeg].rotation.x >0){
				bones[knight_s.knight_bones.leftLeg].rotation.x -= tmp;
			}
			else{
				bones[knight_s.knight_bones.leftLeg].rotation.x =0;
			}
	
			if(bones[knight_s.knight_bones.leftLeg].rotation.x >0){
				bones[knight_s.knight_bones.leftLeg].rotation.x -= tmp;
			}
			else{
				bones[knight_s.knight_bones.leftLeg].rotation.x = 0;
			}
			if(bones[knight_s.knight_bones.leftLowerLeg].rotation.x >0){
				bones[knight_s.knight_bones.leftLowerLeg].rotation.x -= tmp;
			}
			else{
				bones[knight_s.knight_bones.leftLowerLeg].rotation.x = 0;
			}
			
			if(bones[knight_s.knight_bones.rightLeg].rotation.x > 0){
				bones[knight_s.knight_bones.rightLeg].rotation.x -= tmp;
			}
			else{
				bones[knight_s.knight_bones.rightLeg].rotation.x = 0;
			}
			if(bones[knight_s.knight_bones.rightLowerLeg].rotation.x >0){
				bones[knight_s.knight_bones.rightLowerLeg].rotation.x -=tmp;
			}
			else{
				bones[knight_s.knight_bones.rightLowerLeg].rotation.x = 0;
			}		
		}
		
		flags_1.total_body = false;
		if(flags_1.total_body){
			flagAnim = [true,true];
		}
	}
}

var time = 0;
function jump(){
	if(flags_1.jump_flag){
		if(time == 0){
			/*
			pre_jump_position.leftarmx = bones[9].rotation.x;
			pre_jump_position.rightarmx  = bones[34].rotation.x;
			pre_jump_position.leftupperlegx = bones[58].rotation.x;
			pre_jump_position.leftlegx = bones[59].rotation.x;
			pre_jump_position.rightupperlegx = bones[63].rotation.x;
			pre_jump_position.rightlegx = bones[64].rotation.x;
			*/
		}
		if(time < 30){
			bones[knight_s.knight_bones.leftArm].rotation.x += init_jump_positions.leftarmx/30; //leftarm
			bones[knight_s.knight_bones.rightArm].rotation.x += init_jump_positions.rightarmx/30; // rightarm
			bones[knight_s.knight_bones.leftLeg].rotation.x += init_jump_positions.leftupperlegx/30;//leftupperleg
			bones[knight_s.knight_bones.leftLowerLeg].rotation.x += init_jump_positions.leftlegx/30;//leftleg
			bones[knight_s.knight_bones.rightLeg].rotation.x += init_jump_positions.rightupperlegx/30;//rightupper
			bones[knight_s.knight_bones.rightLowerLeg].rotation.x += init_jump_positions.rightlegx/30;//rightleg
			time +=1;
		}
		else{
			if (time <60){
				bones[knight_s.knight_bones.leftArm].rotation.x -= init_jump_positions.leftarmx/30; //leftarm
				bones[knight_s.knight_bones.rightArm].rotation.x -= init_jump_positions.rightarmx/30; // rightarm
				bones[knight_s.knight_bones.leftLeg].rotation.x -= init_jump_positions.leftupperlegx/30;//leftupperleg
				bones[knight_s.knight_bones.leftLowerLeg].rotation.x -= init_jump_positions.leftlegx/30;//leftleg
				bones[knight_s.knight_bones.rightLeg].rotation.x -= init_jump_positions.rightupperlegx/30;//rightupper
				bones[knight_s.knight_bones.rightLowerLeg].rotation.x -= init_jump_positions.rightlegx/30;//rightleg
				time +=1;
			}
			else{
				flags_1.total_body = true;
				starting_pos();
				flags_1.jump_flag = false;
				flags_1.not_jump = true;
				time = 0;
			}
		}
	}
}


// let keysPressed = {'d':false,'a':false,'shift':false,'w':false,'s':false};
// camera.position.z = 10;

// const animate = function () {
// 	requestAnimationFrame( animate );

// 	document.addEventListener('keydown',Event=>{
		
// 		keysPressed[Event.key.toLowerCase()] = true;
// 	});

// 	document.addEventListener('keydown',Event=>{
// 		switch (Event.key.toLowerCase()) {
// 			case 'e' : 
// 				flags_1.hit_flag = true;
// 				break;
// 			case ' '  :
// 				flags_1.jump_flag = true;
// 				flags_1.not_jump = false;
// 				break;

// 			case keysPressed['d'] && 'shift' :
// 				flags_1.torso_dir = true;
// 				speed = 0.1;
// 				break;

// 			case keysPressed['a'] && 'shift' :
// 				flags_1.torso_dir = false;
// 				speed = 0.1;
// 				break;

// 			case 'd':
// 				flags_1.walk_flag = true;
// 				flags_1.torso_dir = true;
// 				break;
			
// 			case 'a':
// 				flags_1.walk_flag = true;
// 				flags_1.torso_dir = false;
// 				break;		
		

// 			case 's':
// 				break;
// 		}
		


// 	});
// 	document.addEventListener('keyup', Event => {
// 		 keysPressed[(Event.key).toLowerCase()]=false;

		 
// 	});
// 	document.addEventListener('keyup',Event=>{
// 		switch (Event.key.toLowerCase()){
// 			case 'd':
// 				flags_1.walk_flag = false;
// 				flags_1.total_body = true;
// 				flags_1.rest = true;
				
// 				break;
// 			case 'a':
// 				flags_1.walk_flag = false;
// 				flags_1.total_body = true;
// 				flags_1.rest = true;
				
// 				break;
			
// 			case ' ':
				
// 				break;
			
// 			case 's':
// 				break;
// 			case 'shift':
// 				speed = 0.08;
				
// 				break;
			
// 		}
// 	});
// 	//anim(paladin);
// 	TWEEN.update();
// 	jump();
// 	walk();
// 	hit();
// 	starting_pos();
// 	renderer.render( scene, camera );
// };

// animate();