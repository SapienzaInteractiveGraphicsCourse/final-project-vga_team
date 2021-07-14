
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
						enemyLives[j] -= 1;
						if(enemyLives[j] <= 0){
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
						enemyLives[j] -= 1;
						if(enemyLives[j] <= 0){
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
			if(Math.abs(enemyBox[j].position.z - charBox.position.z) < 25){
				if(enemyBox[j].position.z < charBox.position.z){
					enemyBox[j].position.set(enemyBox[j].position.x, enemyBox[j].position.y, enemyBox[j].position.z+0.1);
					enemyBox[j].__dirtyPosition = true;
				}
				else{
					enemyBox[j].position.set(enemyBox[j].position.x, enemyBox[j].position.y, enemyBox[j].position.z-0.1);
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
	lives -= 1;
	if(lives == 0){
		document.getElementById("text2").innerHTML = "<img src='./style/heart.png' class='image'>";
	}
	else if(lives == 1){
		document.getElementById("text2").innerHTML = "<img src='./style/heart.png' class='image'><img src='./style/heart.png' class='image'>";
	}
	else{
		//end of the game
		document.getElementById("text2").innerHTML = "Game Over";
		document.getElementById("game").classList = "invisible";
		document.getElementById("end").classList = "visible container";
		// rmKeyListener();
	}
}

function reset(){
	lives = 2;
	document.getElementById("end").classList = "invisible container";
	document.getElementById("cont_load").classList = "visible";
	charBox.position.set(charpos[0], charpos[1], charpos[2]);
	charBox.__dirtyPosition = true;
	setTimeout(() => {
		charBox.position.set(charpos[0], charpos[1], charpos[2]);
		charBox.__dirtyPosition = true;
		for (let i = 0; i < enNum; i++) {
			if(enemyBox[i] != null){
				scene.remove(enemyBox[i]);
				enemyBox[i] = null;
			}
			enemyLives[i] = 2;
			enemyBox[i] = enemyGeometry(i, ex[i], ey[i], ez[i]);
			setConstraint(enemyBox[i]);
		}
		lives = 2;
		document.getElementById("text2").innerHTML = "<img src='./style/heart.png' class='image'><img src='./style/heart.png' class='image'><img src='./style/heart.png' class='image'>";
		document.getElementById("cont_load").classList = "invisible"
		document.getElementById("game").classList = "visible";
	}, 3000);
}