var vt;

function gameRoutine(){
	vel = new THREE.Vector3(0, 0, 0);

	if(walk_flag){
		//walk displacement
		if(torso_dir){
			charBox.position.z += speed*3;
			// var vel0 = new THREE.Vector3(0, charBox.getLinearVelocity().y, charBox.getLinearVelocity().z+0.3);
			// charBox.setLinearVelocity(vel0);
			vel.z += 0.3;
		}
		else{
			charBox.position.z -= speed*3;
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
	// charBox.applyCentralImpulse(new THREE.Vector3( 0, charBox.getLinearVelocity().y+vel.y, vt));

	if(charBox._physijs.touches.length == 0) flagair = true;

	// if(flagatt){
	// 	flagatt = false;
	// 	attack();
	// }
	
	enemyAI();
	sk_walk();
	for (let j = 0; j < enNum; j++) {
		if(enemyBox[j] != null){
			enemyBox[j].setLinearVelocity(new THREE.Vector3(0, enemyBox[j].getLinearVelocity().y, 0));
			enemyBox[j].rotation.set(0,0,0);
			enemyBox[j].__dirtyRotation = true;
		}
	}

	paladin.position.set(charBox.position.x, charBox.position.y-4.5, charBox.position.z);

	for (let j = 0; j < enNum-1; j++) {
		if(sk1[j]) sk1[j].position.set(enemyBox[j].position.x, enemyBox[j].position.y-4.4, enemyBox[j].position.z);
	}
	if(sk1[enNum-1]) sk1[enNum-1].position.set(enemyBox[enNum-1].position.x, enemyBox[enNum-1].position.y-11, enemyBox[enNum-1].position.z);
	if(enemyBox[enNum-1] == null && charBox.position.z >= 1248 && gameover == false){
		document.getElementById("game").classList = "invisible";
		document.getElementById("win").classList = "visible container";
		win = true;
		onelife_audio.muted = true;
		damage_received.muted = true;
		back_sound.muted = true;
		if(playflag){
			if(lives==2){
				flawless_victory.play();
			}
			else{
				victory_sound.play();
			}
		}
	}
}