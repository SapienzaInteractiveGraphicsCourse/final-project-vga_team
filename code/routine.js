var vt;

function gameRoutine(){
	flagcontright = false;
	flagcontleft = false;
	vel = new THREE.Vector3(0, 0, 0);

	if(walk_flag){
		if(torso_dir){
			charBox.position.z += 0.2;
			// var vel0 = new THREE.Vector3(0, charBox.getLinearVelocity().y, charBox.getLinearVelocity().z+0.3);
			// charBox.setLinearVelocity(vel0);
			vel.z += 0.3;
		}
		else{
			charBox.position.z -= 0.2;
			// var vel0 = new THREE.Vector3(0, charBox.getLinearVelocity().y, charBox.getLinearVelocity().z-0.3);
			// charBox.setLinearVelocity(vel0);
			vel.z -= 0.3;
		}
		charBox.__dirtyPosition = true;
	}

	charJump(vel);
	
	vt = charBox.getLinearVelocity().z+vel.z;
	if(vt>5){
		// vel.z = 0;
		vt = 5;
	}
	else if(vt<-5){
		// vel.z = 0;
		vt = -5;
	}
	charBox.setLinearVelocity(new THREE.Vector3( 0, charBox.getLinearVelocity().y+vel.y, vt));

	if(charBox._physijs.touches.length == 0) flagair = true;

	if(flagatt){
		flagatt = false;
		attack();
	}
	
	enemyAI();
	for (let j = 0; j < enemyBox.length; j++) {
		enemyBox[j].setLinearVelocity(new THREE.Vector3(0, enemyBox[j].getLinearVelocity().y, 0));
		enemyBox[j].rotation.set(0,0,0);
		enemyBox[j].__dirtyRotation = true;
	}

	
}