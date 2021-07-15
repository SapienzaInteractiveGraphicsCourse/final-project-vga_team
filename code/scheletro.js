

// let lifeE=0;
// let loade = new GLTFLoader(loadingManager);
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
var speed_sk=0.05;
// let sk1  = new Physijs.Scene();

function loadSkeleton(loade, indx){
	loade.load(
		'./skeleton_rig/scene.gltf',
		function (gltf) {
			sk1[indx] = gltf.scene;
			sk1[indx].position.set(0, -0.5,-1);
			sk1[indx].scale.x *= 1.4;
			sk1[indx].scale.y *= 1.4;
			sk1[indx].scale.z *= 1.4;
			sk1[indx].traverse(function (object) {
				if (object.isMesh) object.castShadow = true;
			});
			sk1[indx].castShadow = true;
			sk1[indx].receiveShadow = true;
			THREE.sRGB;
			skeleton_bones[indx] = new THREE.SkeletonHelper(sk1[indx]);
			skeleton_bones[indx].visible = false;
			scene.add(sk1[indx]);
			sk_bones[indx] = skeleton_bones[indx].bones;
			sk_bones[indx][0].rotation.y =  (-90*Math.PI)/180;
			sk_bones[indx][8].rotation.y =  (0*Math.PI)/180; //mano destra 
			sk_bones[indx][24].rotation.y = (0*Math.PI)/180;
			sk_bones[indx][27].rotation.z = (-90*Math.PI)/180; // braccio sinistro
			sk_bones[indx][28].rotation.z = (0*Math.PI)/180; //avambraccio sinistro
			sk_bones[indx][44].rotation.x = (200*Math.PI)/180; // gamba destra
			sk_bones[indx][45].rotation.y = (180*Math.PI)/180;
			sk_bones[indx][46].rotation.z = (-90*Math.PI)/180;
			sk_bones[indx][48].rotation.x = (-164*Math.PI)/180;
			sk_bones[indx][49].rotation.y = (180*Math.PI)/180;
			sk_bones[indx][50].rotation.z = (90*Math.PI)/180;
			//sk_bones[indx][46].rotation.x = (30*Math.PI)/180;
			

			sk_bones[indx][6].rotation.z = (90*Math.PI)/180;; // braccio destro 
			sk_bones[indx][6].rotation.x = (-90*Math.PI)/180;; // braccio destro 
			sk_bones[indx][6].rotation.y = -sk_bones[indx][27].rotation.y; // braccio destro 
			sk_bones[indx][7].rotation.x = (0*Math.PI)/180; // avambraccio destro 
			// console.log(sk_bones[indx]);
			var i;
			for(i=9;i<23;i+=1){
				sk_bones[indx][i].rotation.x =  (0*Math.PI)/180;
				sk_bones[indx][i].rotation.x =  sk_bones[indx][i+21].rotation.x;
			}
		}
	);
}

function loadBoss(loade){
	loade.load(
		'./skeleton_rig/scene.gltf',
		function (gltf) {
			var indx = enNum-1;
			sk1[indx] = gltf.scene;
			sk1[indx].position.set(0, -4.5,-1);
			sk1[indx].scale.x *= 3.4;
			sk1[indx].scale.y *= 3.4;
			sk1[indx].scale.z *= 3.4;
			sk1[indx].traverse(function (object) {
				if (object.isMesh) object.castShadow = true;
			});
			sk1[indx].castShadow = true;
			sk1[indx].receiveShadow = true;
			THREE.sRGB;
			skeleton_bones[indx] = new THREE.SkeletonHelper(sk1[indx]);
			skeleton_bones[indx].visible = false;
			scene.add(sk1[indx]);
			sk_bones[indx] = skeleton_bones[indx].bones;
			sk_bones[indx][0].rotation.y =  (-90*Math.PI)/180;
			sk_bones[indx][8].rotation.y =  (0*Math.PI)/180; //mano destra 
			sk_bones[indx][24].rotation.y = (0*Math.PI)/180;
			sk_bones[indx][27].rotation.z = (-90*Math.PI)/180; // braccio sinistro
			sk_bones[indx][28].rotation.z = (0*Math.PI)/180; //avambraccio sinistro
			sk_bones[indx][44].rotation.x = (200*Math.PI)/180; // gamba destra
			sk_bones[indx][45].rotation.y = (180*Math.PI)/180;
			sk_bones[indx][46].rotation.z = (-90*Math.PI)/180;
			sk_bones[indx][48].rotation.x = (-164*Math.PI)/180;
			sk_bones[indx][49].rotation.y = (180*Math.PI)/180;
			sk_bones[indx][50].rotation.z = (90*Math.PI)/180;
			//sk_bones[indx][46].rotation.x = (30*Math.PI)/180;
			

			sk_bones[indx][6].rotation.z = (90*Math.PI)/180;; // braccio destro 
			sk_bones[indx][6].rotation.x = (-90*Math.PI)/180;; // braccio destro 
			sk_bones[indx][6].rotation.y = -sk_bones[indx][27].rotation.y; // braccio destro 
			sk_bones[indx][7].rotation.x = (0*Math.PI)/180; // avambraccio destro 
			// console.log(sk_bones[indx]);
			var i;
			for(i=9;i<23;i+=1){
				sk_bones[indx][i].rotation.x =  (0*Math.PI)/180;
				sk_bones[indx][i].rotation.x =  sk_bones[indx][i+21].rotation.x;
			}
		}
	);
}

// function sleep(miliseconds) {
// 	var currentTime = new Date().getTime();
 
// 	while (currentTime + miliseconds >= new Date().getTime()) {
// 	}
//  }

function skeleton_walk(indx){
    var id;
	id = 0;
	
	if(sk_bones[indx][44].rotation.x > (245*Math.PI)/180 && flagAnim[id] == true){ flagAnim[id] = false;}
	else if(sk_bones[indx][44].rotation.x < (150*Math.PI)/180 && flagAnim[id] == false) flagAnim[id] = true;
		
	if(flagAnim[id]){
		sk_bones[indx][44].rotation.x += speed_sk;
		
		if(sk_bones[indx][45].rotation.z>0){
			sk_bones[indx][45].rotation.z -= speed_sk;
		}
		else{
			sk_bones[indx][45].rotation.z = 0;
		}
		
	}
	
	else {
		sk_bones[indx][44].rotation.x -= speed_sk;

		if(sk_bones[indx][44].rotation.x > (200*Math.PI)/180){
			sk_bones[indx][45].rotation.z +=speed_sk*(3/2);
		}
		else{
			sk_bones[indx][45].rotation.z -=speed_sk;
		}

		
	}
	
	
	id = 1;
	if(sk_bones[indx][48].rotation.x > ((-114*Math.PI)/180) && flagAnim[id] == false) flagAnim[id] = true;
	else if(sk_bones[indx][48].rotation.x < ((-209*Math.PI)/180) && flagAnim[id] == true) flagAnim[id] = false;

	if(flagAnim[id]){
		sk_bones[indx][48].rotation.x -= speed_sk;
		if(sk_bones[indx][48].rotation.x > (-164*Math.PI)/180){
			sk_bones[indx][49].rotation.z -=speed_sk*(3/2);
		}
		else{
			if(sk_bones[indx][49].rotation.z<0){
				sk_bones[indx][49].rotation.z += speed_sk;
			}
		}
		
	}

	else {
		sk_bones[indx][48].rotation.x += speed_sk;

		if(sk_bones[indx][49].rotation.z<0){
			sk_bones[indx][49].rotation.z += speed_sk;
		}
		else{
			sk_bones[indx][49].rotation.z = 0;
		}
		
	}
	

	
}
// var i = 70;

//160 gamba destra - 199 gamba sinistra
// async function find_bones(){
// 	var init_p = sk_bones[indx][i].rotation.x;
// 	if(i<bones.length){
// 		sk_bones[indx][i].rotation.x =(90*Math.PI)/180;
// 	}
// 	sleep(2000);
	
// 	i=i+1;ì
// }


function hands_up(indx){
	if(sk_bones[indx][27].rotation.z>=(-180*Math.PI)/180){
		sk_bones[indx][27].rotation.z -= (2*Math.PI)/180; // braccio sinistro
	}
	else{
		ok_array[indx][0] = 1;
	}
	if(sk_bones[indx][6].rotation.z<(175*Math.PI)/180){
		sk_bones[indx][6].rotation.z += (2*Math.PI)/180; // braccio destro
	}
	else{
		ok_array[indx][1] = 1;
	}
	if(sk_bones[indx][8].rotation.y > (-90*Math.PI)/180){
		sk_bones[indx][8].rotation.y -= (2*Math.PI)/180;
	}
	else{
		ok_array[indx][2] = 1;
	}
	if(sk_bones[indx][29].rotation.y < (90*Math.PI)/180){
		sk_bones[indx][29].rotation.y += (2*Math.PI)/180;
	}
	else{
		ok_array[indx][3] = 1;
	}
}

function skeleton_start(indx){
	sk_bones[indx][8].rotation.y =  (0*Math.PI)/180; //mano destra 
	sk_bones[indx][24].rotation.y = (0*Math.PI)/180;
	sk_bones[indx][27].rotation.z = (-90*Math.PI)/180; // braccio sinistro
	sk_bones[indx][28].rotation.z = (0*Math.PI)/180; //avambraccio sinistro
	sk_bones[indx][29].rotation.y = (0*Math.PI)/180;
	sk_bones[indx][44].rotation.x = (200*Math.PI)/180; // gamba destra
	sk_bones[indx][45].rotation.y = (180*Math.PI)/180;
	sk_bones[indx][45].rotation.z = (0*Math.PI)/180;
	sk_bones[indx][46].rotation.z = (-90*Math.PI)/180;
	sk_bones[indx][48].rotation.x = (-164*Math.PI)/180;
	sk_bones[indx][49].rotation.y = (180*Math.PI)/180;
	sk_bones[indx][49].rotation.z = (0*Math.PI)/180;
	sk_bones[indx][50].rotation.z = (90*Math.PI)/180;
	//sk_bones[indx][46].rotation.x = (30*Math.PI)/180;
	

	sk_bones[indx][6].rotation.z = (90*Math.PI)/180;; // braccio destro 
	sk_bones[indx][6].rotation.x = (-90*Math.PI)/180;; // braccio destro 
	sk_bones[indx][6].rotation.y = -sk_bones[indx][27].rotation.y; // braccio destro 
	sk_bones[indx][7].rotation.x = (0*Math.PI)/180; // avambraccio destro 
	
	var i;
	for(i=9;i<23;i+=1){
		sk_bones[indx][i].rotation.x =  (0*Math.PI)/180;
		sk_bones[indx][i].rotation.x =  sk_bones[indx][i+21].rotation.x;
	}

}

function turn_sk(indx){
	if(sk_dir[indx]){
		sk_bones[indx][0].rotation.y =  (Math.PI)/180;
	}
	else{
		sk_bones[indx][0].rotation.y =  (-180*Math.PI)/180;
	}
}

// var currentTime = new Date().getTime();
// const animate = function () {
// 	var newTime = new Date().getTime();
// 	requestAnimationFrame( animate );
// 	if(newTime > currentTime + 10000){
// 		skeleton_start();
// 	}
// 	else{
// 		hands_up();
// 		if(ok_array[index].length == ok_array[index].reduce((a, b) => a + b, 0)){
// 			skeleton_walk();
// 		}
// 	}

	
	
// 	renderer.render( scene, camera );
// };

// animate();

