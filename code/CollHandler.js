

function collEnemy(contactNormal) {
	// funzione danno
	charHit();
	if(contactNormal.z > 0.9){
		charBox.position.set(charBox.position.x, charBox.position.y+1, charBox.position.z-3);
		var vel0 = new THREE.Vector3(0, charBox.getLinearVelocity().y+3, -3);
		charBox.setLinearVelocity(vel0);
		charBox.__dirtyPosition = true;
	}
	else if (contactNormal.z < -0.9){
		charBox.position.set(charBox.position.x, charBox.position.y+1, charBox.position.z+3);
		var vel0 = new THREE.Vector3(0, charBox.getLinearVelocity().y+3, 3);
		charBox.setLinearVelocity(vel0);
		charBox.__dirtyPosition = true;
	}
	else if(contactNormal.y < -0.8){
		charBox.position.set(charBox.position.x, charBox.position.y+4, charBox.position.z-0.5);
		charBox.__dirtyPosition = true;
		var vel0 = new THREE.Vector3(0, charBox.getLinearVelocity().y+18, 0);
		charBox.setLinearVelocity(vel0)
	}
}

function collGround(contactNormal) {
	if(contactNormal.y == -1) flagair = false;
	else if(contactNormal.z < 0.9 && contactNormal.y > -0.8){
		charBox.position.z += 1;
		charBox.__dirtyPosition = true;
	}
	else if(contactNormal.z > 0.9 && contactNormal.y > -0.8){
		charBox.position.z -= 1;
		charBox.__dirtyPosition = true;
	}
	// var vel0 = new THREE.Vector3(0, charBox.getLinearVelocity().y, 0);
	// charBox.setLinearVelocity(vel0);
}

function collChar(i) {
	enemyBox[i].position.set(enemyBox[i].position.x, enemyBox[i].position.y, enemyBox[i].position.z);
	var vel0 = new THREE.Vector3(0, 0, 0);
	enemyBox[i].setLinearVelocity(vel0);
	enemyBox[i].__dirtyPosition = true;
}