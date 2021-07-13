
function attack() {
	//attack routine
	for (let j = 0; j < enemyBox.length; j++) {
		if(enemyBox[j] != null){
			if(Math.abs(enemyBox[j].position.z - charBox.position.z) < 8 && Math.abs(enemyBox[j].position.y - charBox.position.y) < 9){
				//if the enemy and the player are in range fot the hit
				if(torso_dir){
					if(enemyBox[j].position.z - charBox.position.z > 0){
						enemyBox[j].position.z += 5;
						enemyBox[j].__dirtyPosition = true;
						enemyLifes[j] -= 1;
						if(enemyLifes[j] <= 0){
							//dispose enemy
							scene.remove(enemyBox[j]);
							enemyBox[j] = null;
						}
					}
				}
				else{
					if(enemyBox[j].position.z - charBox.position.z < 0){
						enemyBox[j].position.z -= 5;
						enemyBox[j].__dirtyPosition = true;
						enemyLifes[j] -= 1;
						if(enemyLifes[j] <= 0){
							//dispose enemy
							scene.remove(enemyBox[j]);
							enemyBox[j] = null;
						}
					}
				}
			}
		}
	}
}

function enemyAI() {
	//move enemy in player direction
	for (let j = 0; j < enemyBox.length; j++) {
		if(enemyBox[j] != null){
			if(Math.abs(enemyBox[j].position.z - charBox.position.z) < 10){
				if(enemyBox[j].position.z < charBox.position.z){
					enemyBox[j].position.set(enemyBox[j].position.x, enemyBox[j].position.y, enemyBox[j].position.z+0.06);
					enemyBox[j].__dirtyPosition = true;
				}
				else{
					enemyBox[j].position.set(enemyBox[j].position.x, enemyBox[j].position.y, enemyBox[j].position.z-0.06);
					enemyBox[j].__dirtyPosition = true;
				}
			}
		}
	}
}

function charJump() {
	if(jump_flag){
		// jump_flag = false;
		if(flagair == false){
			flagair = true;
			charBox.position.y += 0.8;
			charBox.__dirtyPosition = true;
			vel.y += 30;
		}
	}
}

function charHit(){
	//player getting hit
	lifes -= 1;
	if(lifes < 0){
		//end of the game
		document.getElementById("text2").innerHTML = "Game Over";
		document.getElementById("game").classList = "invisible";
		document.getElementById("end").classList = "visible container";
	}
	else{
		document.getElementById("text2").innerHTML = "lifes: "+lifes;
	}
}