

function setConstraint(mesh) {
	//Set limits to player's movements
	var constraint = new Physijs.DOFConstraint(
		mesh, // First object to be constrained
		// physijs_mesh_b, // OPTIONAL second object - if omitted then physijs_mesh_1 
				// will be constrained to the scene
		// new THREE.Vector3( 0, -4, -45 ) // point in the scene to apply the constraint
		new THREE.Vector3( 10, -9, 120 )
	);
	scene.addConstraint( constraint );
	constraint.setLinearLowerLimit( new THREE.Vector3( 5, -mesh.position.y+2, -mesh.position.z-25 ) );
	// sets the lower end of the linear movement along the x, y, and z axes.
	constraint.setLinearUpperLimit( new THREE.Vector3( 5, -mesh.position.y-25, -mesh.position.z+1260) );
	// sets the upper end of the linear movement along the x, y, and z axes.
	constraint.setAngularLowerLimit( new THREE.Vector3( 0, 0, 0 ) );
	// sets the lower end of the angular movement, in radians, along the x, y, and z axes.
	constraint.setAngularUpperLimit( new THREE.Vector3( 0, 0, 0 ) );
}

function setGround(){
	//hitbox of the ground
	var ground_geometry = new THREE.BoxGeometry(200, 20, 3000);
	var ground_material = Physijs.createMaterial(
		new THREE.MeshBasicMaterial({ 
			color: 0x0000ff,
			opacity: 0,
			transparent: true
		}),
		0.9,
		0.0
	);

	var ground = new Physijs.BoxMesh(
		ground_geometry,
		ground_material,
		0 // mass
	);
	ground.position.set(0, -24, 0);
	scene.add( ground );
}

function charGeometry(x, y, z){
	//hitbox of the player
	var chr = new THREE.BoxGeometry(5, 9, 3);
	boxMaterial = Physijs.createMaterial(
		new THREE.MeshBasicMaterial({ 
			color: 0x00ff00,
			opacity: 0,
			transparent: true
		}),
		1.0,		//friction
		0.0			//return
	);

	charBox = new Physijs.BoxMesh(chr, boxMaterial, 50);
	charBox.name = "character";
	charBox.position.set(x, y, z);
	charBox.setCcdMotionThreshold(1);
  charBox.setCcdSweptSphereRadius(0.2);
	charBox.setAngularFactor(new THREE.Vector3(0,0,0));

	scene.add(charBox);
	charBox.addEventListener("collision", function (collided_with, linearVelocity, angularVelocity, contactNormal) {
		if(collided_with.material.color.r == 1){
			//collision with enemy/spikes
			collEnemy(contactNormal);
		}
		else if(collided_with.material.color.b == 1){
			//collision with ground
			collGround(contactNormal);
		}
	});
	charBox.__dirtyPosition = true;
	charBox.__dirtyRotation = true;
}

function enemyGeometry(i, x, y, z){
	//hitbox of the enemy
	var chr = new THREE.BoxGeometry(5, 9, 5);
	boxMaterial = Physijs.createMaterial(
		new THREE.MeshBasicMaterial({
			color: 0xff0000,
			opacity: 0,
			transparent: true
		}),
		1.0,		//friction
		0.01	//return
	);
	var eBox = new Physijs.BoxMesh(chr, boxMaterial, 50);
	eBox.name = "enemy";
	eBox.position.set(x, y, z);
	eBox.setCcdMotionThreshold(1);
	eBox.setCcdSweptSphereRadius(0.2);
	eBox.setAngularFactor(new THREE.Vector3(0,0,0));
	scene.add(eBox);
	eBox.addEventListener("collision", function (collided_with, linearVelocity, angularVelocity, contactNormal) {
		if(collided_with.material.r == null);
		else if(collided_with.material.color.g == 1){
			collChar(i);
		}
	});
	eBox.__dirtyPosition = true;
	return eBox;
}

function bossGeometry(x, y, z){
	//hitbox of the enemy
	var chr = new THREE.BoxGeometry(5, 21, 8);
	boxMaterial = Physijs.createMaterial(
		new THREE.MeshBasicMaterial({
			color: 0xff0000,
			opacity: 0,
			transparent: true
		}),
		1.0,		//friction
		0.01	//return
	);
	var eBox = new Physijs.BoxMesh(chr, boxMaterial, 50);
	eBox.name = "enemy";
	eBox.position.set(x, y, z);
	eBox.setCcdMotionThreshold(1);
	eBox.setCcdSweptSphereRadius(0.2);
	eBox.setAngularFactor(new THREE.Vector3(0,0,0));
	scene.add(eBox);
	eBox.addEventListener("collision", function (collided_with, linearVelocity, angularVelocity, contactNormal) {
		if(collided_with.material.r == null);
		else if(collided_with.material.color.g == 1){
			collChar(enNum);
		}
	});
	eBox.__dirtyPosition = true;
	return eBox;
}

function setPlateHB(x, y, z){
	//hitbox of the plates for mid air ground
	var ground_material = Physijs.createMaterial(
		new THREE.MeshBasicMaterial({
			color: 0x0000ff,
			opacity: 0,
			transparent: true
		}),
		0.9,
		0.0
	);
	var grnd_geometry = new THREE.BoxGeometry( 19.4, 1.8, 5.93);

	var grnd = new Physijs.BoxMesh(
		grnd_geometry,
		ground_material,
		0 // mass
	);
	grnd.position.set(x+5.1, y+0.9, z-9.23);     //ref (10,1,0) => +5.1, +0.9, -9.23
	// grnd.position.set(15.1, 1, -9.23); 
	// grnd.position.set(15.1, 2.9, -15.23);
	scene.add( grnd );
}

function setBoxHB(x, y, z){
	//hitbox of the box obstacle
	var ground_material = Physijs.createMaterial(
		new THREE.MeshBasicMaterial({
			color: 0x0000ff,
			opacity: 0,
			transparent: true
		}),
		0.9,
		0.0
	);
	var grnd_geometry = new THREE.BoxGeometry( 14, 14, 14);

	var grnd = new Physijs.BoxMesh(
		grnd_geometry,
		ground_material,
		0 // mass
	);
	grnd.position.set(x+0.2, y, z);
	scene.add( grnd );
}

function setSpearHB(x, y, z){
	//spear's hitbox
	var ground_material = Physijs.createMaterial(
		new THREE.MeshBasicMaterial({
			color: 0xff0000,
			opacity: 0,
			transparent: true
		}),
		1,
		0.0
	);
	var grnd_geometry = new THREE.BoxGeometry( 9, 12, 9);

	var grnd = new Physijs.BoxMesh(
		grnd_geometry,
		ground_material,
		0 // mass
	);
	grnd.position.set(x, y+4.2, z);
	scene.add( grnd );
}

function setSpearHHB(x, y, z){
	//spear's hitbox
	var ground_material = Physijs.createMaterial(
		new THREE.MeshBasicMaterial({
			color: 0xff0000,
			opacity: 0,
			transparent: true
		}),
		1,
		0.0
	);
	var grnd_geometry = new THREE.BoxGeometry( 9, 12, 9);

	var grnd = new Physijs.BoxMesh(
		grnd_geometry,
		ground_material,
		0 // mass
	);
	grnd.position.set(x, y, z+4.2);
	grnd.rotation.x = (90*Math.PI)/180;
	grnd.__dirtyRotation = true;
	scene.add( grnd );
}

function setSpearHHHB(x, y, z){
	//spear's hitbox
	var ground_material = Physijs.createMaterial(
		new THREE.MeshBasicMaterial({
			color: 0xff0000,
			opacity: 0,
			transparent: true
		}),
		1,
		0.0
	);
	var grnd_geometry = new THREE.BoxGeometry( 9, 12, 9);

	var grnd = new Physijs.BoxMesh(
		grnd_geometry,
		ground_material,
		0 // mass
	);
	grnd.position.set(x, y, z-4.2);
	grnd.rotation.x = (-90*Math.PI)/180;
	grnd.__dirtyRotation = true;
	scene.add( grnd );
}

function setEnemyPosition(){
	for (let i = 0; i < enNum; i++) {
		enemyBox[i].position.set(ex[i], ey[i], ez[i]);
		enemyBox[i].__dirtyPosition = true;
	}
}