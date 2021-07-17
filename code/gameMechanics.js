function fadelight(){
	var timer = setInterval(function(){
		if(light4.intensity>0.0){
			light4.intensity-=2;
		}
		else{
			clearInterval(timer);
		}
	},50);

}

function flashingredlight(){
	var turn = true;
	flash = setInterval(function(){
		if (light4.intensity == 0.0) turn = false;
		if(light4.intensity == 20.0) turn = true;
		if(turn){
			light4.intensity-=2.0;
		}
		else{
			light4.intensity+=2.0;
		}
	},50);
}

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
						sword_hit.play();
						if(enemyLives[j] <= 0){
							//dispose enemy
							scene.remove(enemyBox[j]);
							enemyBox[j] = null;
							scene.remove(sk1[j]);
							sk1[j] = null;
							if(j == enNum-1 && gameover == false){
								//boss killed
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
					}
				}
				else{
					if(enemyBox[j].position.z - charBox.position.z < 0){
						enemyBox[j].position.z -= 5;
						enemyBox[j].__dirtyPosition = true;
						sword_hit.play();
						enemyLives[j] -= 1;
						if(enemyLives[j] <= 0){
							//dispose enemy
							scene.remove(enemyBox[j]);
							enemyBox[j] = null;
							scene.remove(sk1[j]);
							sk1[j] = null;
							// if(j == enNum-1 && gameover == false){
							// 	//boss killed
							// 	document.getElementById("game").classList = "invisible";
							// 	document.getElementById("win").classList = "visible container";
							// 	win = true;
							// 	onelife_audio.muted = true;
							// 	damage_received.muted = true;
							// 	back_sound.muted = true;
							// 	if(playflag){
							// 		if(lives==2){
							// 			flawless_victory.play();
							// 		}
							// 		else{
							// 			victory_sound.play();
							// 		}
							// 	}
							// }
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
			if(Math.abs(enemyBox[j].position.z - charBox.position.z) < 30){
				if(enemyBox[j].position.z < charBox.position.z){
					enemyBox[j].position.set(enemyBox[j].position.x, enemyBox[j].position.y, enemyBox[j].position.z+0.1);
					enemyBox[j].__dirtyPosition = true;
					sk_dir[j] = true;
					sk_fg[j] = true;
					hands_up(j);
				}
				else{
					enemyBox[j].position.set(enemyBox[j].position.x, enemyBox[j].position.y, enemyBox[j].position.z-0.1);
					enemyBox[j].__dirtyPosition = true;
					sk_dir[j] = false;
					sk_fg[j] = true;
					hands_up(j);
				}
			}
			else{
				sk_fg[j] = false;
				if(sk_bones[j]) skeleton_start(j);
			}
			if(sk_bones[j]) turn_sk(j);
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
	light4.intensity = 20.0;
	damage_received.play();
	if(lives == 0){

		back_sound.volume = 0.3;
		onelife_audio.play();
		flashingredlight(false);
		document.getElementById("text2").innerHTML = "<img src='./style/heart.png' class='image'>";
	}
	else if(lives == 1){

		fadelight();
		document.getElementById("text2").innerHTML = "<img src='./style/heart.png' class='image'><img src='./style/heart.png' class='image'>";
	}
	else if(win != true){
		//end of the game
		gameover = true;
		onelife_audio.muted = true;
		damage_received.muted = true;
		back_sound.muted = true;
		
		if(playflag){
			gameover_audio.play();
			playflag = false;
		}
		charBox.position.set(charpos[0], charpos[1], charpos[2]);
		charBox.__dirtyPosition = true;
		document.getElementById("text2").innerHTML = "Game Over";
		document.getElementById("game").classList = "invisible";
		document.getElementById("end").classList = "visible container";
	}
}



function set_audio_and_flash(){
	audio.muted = false;
	audio.pause();
	onelife_audio.muted = false;
	onelife_audio.pause();
	damage_received.muted = false;
	back_sound.muted = false;
	back_sound.pause();
	gameover_audio.muted = false;
	victory_sound.muted = false;
	flawless_victory.muted = false;
	sword_hit.muted = false;

	playflag = true;
	clearInterval(flash);
	light4.intensity = 0.0;

}

function reset(){
	lives = 2;
	document.getElementById("end").classList = "invisible container";
	document.getElementById("win").classList = "invisible container";
	document.getElementById("cont_load").classList = "visible";
	charBox.position.set(charpos[0], charpos[1], charpos[2]);
	charBox.__dirtyPosition = true;
	set_audio_and_flash();
	charBox.position.set(charpos[0], charpos[1], charpos[2]);
	charBox.__dirtyPosition = true;
	for (let i = 0; i < enNum-1; i++) {
		enemyLives[i] = 2;
		if(enemyBox[i] == null){
			enemyBox[i] = enemyGeometry(i, ex[i], ey[i], ez[i]);
			setConstraint(enemyBox[i]);
		}
		if(sk1[i] == null){
			sk1[i] = loadSkeleton(gltfLoader, i);
		}
		enemyBox[i].position.set(ex[i], ey[i], ez[i]);
		enemyBox[i].__dirtyPosition = true;
	}
	if(enemyBox[enNum-1] == null){
		enemyBox[enNum-1] = bossGeometry(ex[enNum-1], ey[enNum-1], ez[enNum-1]);
		setConstraint(enemyBox[enNum-1]);
		loadBoss(gltfLoader);
	}
	enemyBox[enNum-1].position.set(ex[enNum-1], ey[enNum-1], ez[enNum-1]);
	enemyBox[enNum-1].__dirtyPosition = true;
	enemyLives[enNum-1] = 5;
	lives = 2;
	win = false;
	gameover = false;
	setTimeout(() => {
		document.getElementById("text2").innerHTML = "<img src='./style/heart.png' class='image'><img src='./style/heart.png' class='image'><img src='./style/heart.png' class='image'>";
		document.getElementById("cont_load").classList = "invisible"
		document.getElementById("game").classList = "visible";
		audio.play();
		back_sound.play();
	}, 4000);
}

function sk_walk(){
	for(var i = 0; i < sk1.length; i++){
		if(sk_fg[i]){
			if(sk_dir[i]){
				skeleton_walk(i);
			}
			else{
				skeleton_walk(i);
			}
		}
	}
}