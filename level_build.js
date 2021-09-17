
function createGroup1() { // creazione del primo gruppo di mattoncini

  var brick = new THREE.Scene();
  {
    const url_brick = "./brick_textures/single_brick.gltf";
    gltfLoader.load(url_brick, (gltf) => {
      brick = gltf.scene;
      brick.name = "brick";
      brick.scale.set(0.1, 0.009, 0.03);
      // brick.castShadow = true;
      // brick.traverse(function (child) {
      //   // if (child instanceof THREE.Mesh) {
      //   //   child.castShadow = true;
      //   //   child.receiveShadow = true;
      //   // }
      //   child.castShadow = true;
      // });


      // PRIMO SET DI MATTONCINI
      for (var i = 0; i < 10; i++) { // numero di mattoncini
        brick.position.set(10, 1, i * 6) // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
        brickClone = brick.clone();
        scene.add(brickClone);
        setPlateHB(brickClone.position.x, brickClone.position.y, brickClone.position.z);
        loading += 1;
      }
      // SECONDO SET DI MATTONCINI sopra il primo
      for (var i = 0; i < 10; i++) { // numero di mattoncini
        brick.position.set(10, 14, i * 6 + 60) // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
        brickClone = brick.clone();
        scene.add(brickClone);
        setPlateHB(brickClone.position.x, brickClone.position.y, brickClone.position.z);
        loading += 1;
      }

      // TERZO SET DI MATTONCINI sopra il secondo
      for (var i = 0; i < 10; i++) { // numero di mattoncini
        brick.position.set(10, 2, i * 6 + 120) // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
        brickClone = brick.clone();
        scene.add(brickClone);
        setPlateHB(brickClone.position.x, brickClone.position.y, brickClone.position.z);
        loading += 1;
      }

      // QUARTO MINI SET DI MATTONCINI sopra il secondo
      for (var i = 0; i < 1; i++) { // numero di mattoncini
        brick.position.set(10, 0, i * 6 + 242) // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
        brickClone = brick.clone();
        scene.add(brickClone);
        setPlateHB(brickClone.position.x, brickClone.position.y, brickClone.position.z);
        loading += 1;
      }

      // QUINTO SET DI MATTONCINI DOPO SALTO

      for (var i = 0; i < 10; i++) { // numero di mattoncini
        brick.position.set(10, 2, i * 6 + 300) // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
        brickClone = brick.clone();
        scene.add(brickClone);
        setPlateHB(brickClone.position.x, brickClone.position.y, brickClone.position.z);
        loading += 1;
      }

      for (var i = 0; i < 10; i++) { // numero di mattoncini
        brick.position.set(10, 16, i * 6 + 340) // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
        brickClone = brick.clone();
        scene.add(brickClone);
        setPlateHB(brickClone.position.x, brickClone.position.y, brickClone.position.z);
        loading += 1;
      }


      for (var i = 0; i < 10; i++) { // numero di mattoncini
        brick.position.set(10, 30, i * 6 + 380) // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
        brickClone = brick.clone();
        scene.add(brickClone);
        setPlateHB(brickClone.position.x, brickClone.position.y, brickClone.position.z);
        loading += 1;
      }


      // SESTO MINI SET DI MATTONCINI per il salto
      for (var i = 0; i < 4; i++) { // numero di mattoncini
        brick.position.set(10, 30, i * 6 + 458) // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
        brickClone = brick.clone();
        scene.add(brickClone);
        setPlateHB(brickClone.position.x, brickClone.position.y, brickClone.position.z);
        loading += 1;
      }


      for (var i = 0; i < 10; i++) { // numero di mattoncini
        brick.position.set(10, 30, i * 6 + 500) // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
        brickClone = brick.clone();
        scene.add(brickClone);
        setPlateHB(brickClone.position.x, brickClone.position.y, brickClone.position.z);
        loading += 1;
      }


      // MINI SET DI MATTONCINI per il atterrare
      for (var i = 0; i < 2; i++) { // numero di mattoncini
        brick.position.set(10, 13, i * 6 + 570) // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
        brickClone = brick.clone();
        scene.add(brickClone);
        setPlateHB(brickClone.position.x, brickClone.position.y, brickClone.position.z);
        loading += 1;
      }

      

      // brick.traverse(function (child) {
      //   if (child instanceof THREE.Mesh) {
      //     child.castShadow = true;
      //     child.receiveShadow = true;

      //   }
      //   if (child.material) child.material.metalness = 0;
      // });
      // brick.castShadow = true;
      // brick.receiveShadow = true;
      brickLoaded = true;
    });
  }
}

function createTorch() {

  var torch = new THREE.Scene();
  {
    const url_torch = "./torch/scene.gltf";
    gltfLoader.load(url_torch, (gltf) => {
      torch = gltf.scene;
      torch.name = "torch";
      torch.scale.set(0.05, 0.05, 0.05);

      for (var i = 0; i < 40; i++) { // numero di torce da inserire
        if (i < 2) {
          // console.log("primo set")
          torch.rotation.set(0, 4.75, 0); // rotation of the torch
          torch.position.set(35, 20, i * 25 - 1); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
          torchClone = torch.clone();
          scene.add(torchClone);
          loading += 1;
        }
        else if (i < 4) {
          // console.log("secondo set")
          // console.log(i)
          torch.rotation.set(0, 4.75, 0); // rotation of the torch
          torch.position.set(35, 30, i * 25 + 15); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
          torchClone = torch.clone();
          scene.add(torchClone);
          loading += 1;
        }
        else if (i < 6) {

          // console.log("terzo set")
          torch.rotation.set(0, 4.75, 0); // rotation of the torch
          torch.position.set(35, 20, i * 25 + 20); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
          torchClone = torch.clone();
          scene.add(torchClone);
          loading += 1;
        }

        else if (i < 8) {
          // console.log("quarto set")
          torch.rotation.set(0, 4.75, 0); // rotation of the torch
          torch.position.set(35, 10, i * 25 + 40); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
          torchClone = torch.clone();
          scene.add(torchClone);
          loading += 1;
        }

        else if (i < 10) {
          torch.rotation.set(0, 4.75, 0); // rotation of the torch
          torch.position.set(35, 20, i * 25 + 40); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
          torchClone = torch.clone();
          scene.add(torchClone);
          loading += 1;
        }

        else if (i < 20) {
          torch.rotation.set(0, 4.75, 0); // rotation of the torch
          torch.position.set(35, 50, i * 25 + 55); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
          torchClone = torch.clone();
          scene.add(torchClone);
          loading += 1;

        }
        torchLoaded = true;
      };
    }
    );
  }
}

function createBox() {

  var box = new THREE.Scene();
  {
    const url_box = "./box_obstacle/scene.gltf";
    gltfLoader.load(url_box, (gltf) => {
      box = gltf.scene;
      box.name = "box";
      box.scale.set(0.07, 0.07, 0.07);
      // console.log(box);
      // box.traverse(function (child) {
      //   // if (child instanceof THREE.Mesh) {
      //     child.castShadow = true;
      //   //   child.receiveShadow = true;
      //   // }
      //   if (child.material) child.material.metalness = 0;
      // });

      for (var i = 0; i < 2; i++) { // numero di mattoncini
        box.rotation.set(0, 4.75, 0); // rotation of the torch
        box.position.set(16.5, -7, i * 40 + 42); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
        boxClone = box.clone();
        scene.add(boxClone);
        setBoxHB(boxClone.position.x, boxClone.position.y, boxClone.position.z);
        loading += 1;
      }
      //       SCATOLA SINGOLA TERZA
      box.rotation.set(0, 4.75, 0); // rotation of the torch
      box.position.set(16.5, 11, 163); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
      boxClone = box.clone();
      scene.add(boxClone);
      setBoxHB(boxClone.position.x, boxClone.position.y, boxClone.position.z);
      loading += 1;

      //SCATOLA SINGOLA QUARTA
      box.rotation.set(0, 4.75, 0); // rotation of the torch
      box.position.set(16.5, -7, 250); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
      boxClone = box.clone();
      scene.add(boxClone);
      setBoxHB(boxClone.position.x, boxClone.position.y, boxClone.position.z);
      loading += 1;

      //SCATOLA QUINTA
      box.rotation.set(0, 4.75, 0); // rotation of the torch
      box.position.set(16.5, -7, 550); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
      boxClone = box.clone();
      scene.add(boxClone);
      setBoxHB(boxClone.position.x, boxClone.position.y, boxClone.position.z);
      loading += 1;

      // box.castShadow = true;
      // box.receiveShadow = true;
      boxLoaded = true;
    });
  }
}


function createSpear() {

  var spear = new THREE.Scene();
  {
    const url_spear = "./spear/scene.gltf";
    gltfLoader.load(url_spear, (gltf) => {
      spear = gltf.scene;
      spear.name = "spear";
      spear.scale.set(100, 100, 100);
      //First spear
      spear.rotation.set(0, 4.75, 0); // rotation of the spear
      spear.position.set(19, -2, 40 + 42); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
      spearClone = spear.clone();
      scene.add(spearClone);
      setSpearHB(spearClone.position.x, spearClone.position.y, spearClone.position.z);
      loading += 1;
      // Second spear

      spear.rotation.set(1.6, 0, 0); // rotation of the spear
      spear.position.set(19, 12.5, 40 + 129); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
      spearClone = spear.clone();
      scene.add(spearClone);
      setSpearHHB(spearClone.position.x, spearClone.position.y, spearClone.position.z);
      loading += 1;

      // Third spear

      spear.rotation.set(0, 0, 0); // rotation of the spear
      spear.position.set(19, -1, 40 + 209.5); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
      spearClone = spear.clone();
      scene.add(spearClone);
      setSpearHB(spearClone.position.x, spearClone.position.y, spearClone.position.z);//da ruotare
      loading += 1;

      // Fourth spear

      spear.rotation.set(0, 0, 0); // rotation of the spear
      spear.position.set(19, -1, 550); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
      spearClone = spear.clone();
      scene.add(spearClone);
      setSpearHB(spearClone.position.x, spearClone.position.y, spearClone.position.z);//da ruotare
      loading += 1;

      // spear.traverse(function (child) {
      //       if (child instanceof THREE.Mesh) {
      //         child.castShadow = true;
      //         child.receiveShadow = true;

      //       }
      //       if (child.material) child.material.metalness = 0;
      //     });
      //     box.castShadow = true;
      //     box.receiveShadow = true;
      boxLoaded = true;


    });
  }
}


// SECONDA PARTE DEL LIVELLO !!!

function createGroup2() { // creazione del primo gruppo di mattoncini

  var brick = new THREE.Scene();
  {
    const url_brick = "./brick_textures/single_brick.gltf";
    gltfLoader.load(url_brick, (gltf) => {
      brick = gltf.scene;
      brick.name = "brick";
      brick.scale.set(0.1, 0.009, 0.03);
      // brick.castShadow = true;
      //   brick.traverse(function (child) {
      //     // if (child instanceof THREE.Mesh) {
      //     //   child.castShadow = true;
      //     //   child.receiveShadow = true;
      //     // }
      //     child.castShadow = true;
      //   });

      // PRIMO SET DI MATTONCINI
      for (var i = 0; i < 10; i++) { // numero di mattoncini
        brick.position.set(10, 1, i * 6 + 600) // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
        brickClone = brick.clone();
        scene.add(brickClone)
        setPlateHB(brickClone.position.x, brickClone.position.y, brickClone.position.z);
        loading += 1;
      }
      // SECONDO SET DI MATTONCINI sopra il primo
      for (var i = 0; i < 10; i++) { // numero di mattoncini
        brick.position.set(10, 14, i * 6 + 60 + 600) // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
        brickClone = brick.clone();
        scene.add(brickClone)
        setPlateHB(brickClone.position.x, brickClone.position.y, brickClone.position.z);
        loading += 1;
      }

      // TERZO SET DI MATTONCINI sopra il secondo
      for (var i = 0; i < 10; i++) { // numero di mattoncini
        brick.position.set(10, 2, i * 6 + 120 + 600) // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
        brickClone = brick.clone();
        scene.add(brickClone)
        setPlateHB(brickClone.position.x, brickClone.position.y, brickClone.position.z);
        loading += 1;
      }

      // QUARTO MINI SET DI MATTONCINI 
      for (var i = 0; i < 1; i++) { // numero di mattoncini
        brick.position.set(10, 0, i * 6 + 242 + 600) // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
        brickClone = brick.clone();
        scene.add(brickClone)
        setPlateHB(brickClone.position.x, brickClone.position.y, brickClone.position.z);
        loading += 1;
      }

      for (var i = 0; i < 1; i++) { // numero di mattoncini
        brick.position.set(10, 0, i * 6 + 200 + 600) // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
        brickClone = brick.clone();
        scene.add(brickClone)
        setPlateHB(brickClone.position.x, brickClone.position.y, brickClone.position.z);
        loading += 1;
      }

      // QUINTO SET DI MATTONI IN SALITA SCALETTA

      for (var i = 0; i < 10; i++) { // numero di mattoncini
        brick.position.set(10, 2, i * 6 + 300 + 600) // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
        brickClone = brick.clone();
        scene.add(brickClone);
        setPlateHB(brickClone.position.x, brickClone.position.y, brickClone.position.z);
        loading += 1;
      }

      for (var i = 0; i < 10; i++) { // numero di mattoncini
        brick.position.set(10, 16, i * 6 + 340 + 600) // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
        brickClone = brick.clone();
        scene.add(brickClone);
        setPlateHB(brickClone.position.x, brickClone.position.y, brickClone.position.z);
        loading += 1;
      }

      for (var i = 0; i < 10; i++) { // numero di mattoncini
        brick.position.set(10, 30, i * 6 + 380 + 600) // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
        brickClone = brick.clone();
        scene.add(brickClone);
        setPlateHB(brickClone.position.x, brickClone.position.y, brickClone.position.z);
        loading += 1;
      }

      // // SESTO MINI SET DI MATTONCINI per il salto
      // for (var i = 0; i < 4; i++) { // numero di mattoncini
      //   brick.position.set(10, 30, i * 6 + 458 + 600) // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
      //   brickClone = brick.clone();
      //   scene.add(brickClone)
      //   setPlateHB(brickClone.position.x, brickClone.position.y, brickClone.position.z);
      //   loading += 1;
      // }


      // for (var i = 0; i < 10; i++) { // numero di mattoncini
      //   brick.position.set(10, 30, i * 6 + 500 + 600) // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
      //   brickClone = brick.clone();
      //   scene.add(brickClone)
      //   setPlateHB(brickClone.position.x, brickClone.position.y, brickClone.position.z);
      //   loading += 1;
      // }

      // for (var i = 0; i < 10; i++) { // numero di mattoncini
      //   brick.position.set(10, 12, i * 6 + 440 + 600) // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
      //   brickClone = brick.clone();
      //   scene.add(brickClone)
      //   setPlateHB(brickClone.position.x, brickClone.position.y, brickClone.position.z);
      //   loading += 1;
      // }

      //   brick.traverse(function (child) {
      //     if (child instanceof THREE.Mesh) {
      //       child.castShadow = true;
      //       child.receiveShadow = true;

      //     }
      //     if (child.material) child.material.metalness = 0;
      //   });
      // brick.castShadow = true;
      //   brick.receiveShadow = true;
      brickLoaded2 = true;


    });
  }

}

function createTorch2() {

  var torch = new THREE.Scene();
  {
    const url_torch = "./torch/scene.gltf";
    gltfLoader.load(url_torch, (gltf) => {
      torch = gltf.scene;
      torch.name = "torch";
      torch.scale.set(0.05, 0.05, 0.05);

      for (var i = 0; i < 40; i++) { // numero di torce da inserire
        if (i < 2) {
          // console.log("primo set")
          torch.rotation.set(0, 4.75, 0); // rotation of the torch
          torch.position.set(35, 20, i * 25 - 1 + 600); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
          torchClone = torch.clone();
          scene.add(torchClone);
          loading += 1;
        }
        else if (i < 4) {
          // console.log("secondo set")
          // console.log(i)
          torch.rotation.set(0, 4.75, 0); // rotation of the torch
          torch.position.set(35, 30, i * 25 + 15 + 600); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
          torchClone = torch.clone();
          scene.add(torchClone);
          loading += 1;
        }
        else if (i < 6) {

          // console.log("terzo set")
          torch.rotation.set(0, 4.75, 0); // rotation of the torch
          torch.position.set(35, 20, i * 25 + 20 + 600); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
          torchClone = torch.clone();
          scene.add(torchClone);
          loading += 1;
        }

        else if (i < 8) {
          // console.log("quarto set")
          torch.rotation.set(0, 4.75, 0); // rotation of the torch
          torch.position.set(35, 10, i * 25 + 40 + 600); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
          torchClone = torch.clone();
          scene.add(torchClone);
          loading += 1;
        }

        else if (i < 10) {
          torch.rotation.set(0, 4.75, 0); // rotation of the torch
          torch.position.set(35, 20, i * 25 + 40 + 600); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
          torchClone = torch.clone();
          scene.add(torchClone);
          loading += 1;
        }

        else if (i < 20) {
          torch.rotation.set(0, 4.75, 0); // rotation of the torch
          torch.position.set(35, 50, i * 25 + 55 + 600); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
          torchClone = torch.clone();
          scene.add(torchClone);
          loading += 1;
        }
        torchLoaded2 = true;
      };
    });
  }
}

function createBox2() {

  var box = new THREE.Scene();
  {
    const url_box = "./box_obstacle/scene.gltf";
    gltfLoader.load(url_box, (gltf) => {
      box = gltf.scene;
      box.name = "box";
      box.scale.set(0.07, 0.07, 0.07);
      // box.traverse(function (child) {
      //   // if (child instanceof THREE.Mesh) {
      //     child.castShadow = true;
      //   //   child.receiveShadow = true;
      //   // }
      //   if (child.material) child.material.metalness = 0;
      // });
      for (var i = 0; i < 2; i++) { // numero di mattoncini
        box.rotation.set(0, 4.75, 0); // rotation of the torch
        box.position.set(16.5, -7, i * 40 + 42 + 600); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
        boxClone = box.clone();
        scene.add(boxClone);
        setBoxHB(boxClone.position.x, boxClone.position.y, boxClone.position.z);
        loading += 1;
      }
      //       SCATOLA SINGOLA TERZA
      box.rotation.set(0, 4.75, 0); // rotation of the torch
      box.position.set(16.5, 11, 163 + 600); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
      boxClone = box.clone();
      scene.add(boxClone);
      setBoxHB(boxClone.position.x, boxClone.position.y, boxClone.position.z);
      loading += 1;

      //SCATOLA SINGOLA QUARTA
      box.rotation.set(0, 4.75, 0); // rotation of the torch
      box.position.set(16.5, -7, 250 + 600); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
      boxClone = box.clone();
      scene.add(boxClone);
      setBoxHB(boxClone.position.x, boxClone.position.y, boxClone.position.z);
      loading += 1;


      // SCATOLA SINGOLA QUINTA
      box.rotation.set(0, 4.75, 0); // rotation of the torch
      box.position.set(16.5, -7, 205 + 600); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
      boxClone = box.clone();
      scene.add(boxClone);
      setBoxHB(boxClone.position.x, boxClone.position.y, boxClone.position.z);
      loading += 1;

      // SCATOLA SINGOLA SESTA
      box.rotation.set(0, 4.75, 0); // rotation of the torch
      box.position.set(16.5, 39, 400 + 600); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
      boxClone = box.clone();
      setBoxHB(boxClone.position.x, boxClone.position.y, boxClone.position.z);
      scene.add(boxClone);
      loading += 1;

      // SCATOLA SINGOLA SETTTIMA a terra
      box.rotation.set(0, 4.75, 0); // rotation of the torch
      box.position.set(16.5, -7, 430 + 600); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
      boxClone = box.clone();
      setBoxHB(boxClone.position.x, boxClone.position.y, boxClone.position.z);
      scene.add(boxClone);
      loading += 1;




      // box.traverse(function (child) {
      //   if (child instanceof THREE.Mesh) {
      //     child.castShadow = true;
      //     child.receiveShadow = true;

      //   }
      //   if (child.material) child.material.metalness = 0;
      // });
      // box.castShadow = true;
      // box.receiveShadow = true;
      boxLoaded2 = true;


    });
  }





}


function createSpear2() {

  var spear = new THREE.Scene();
  {
    const url_spear = "./spear/scene.gltf";
    gltfLoader.load(url_spear, (gltf) => {
      spear = gltf.scene;
      spear.name = "spear";
      spear.scale.set(100, 100, 100);
      //First spear
      spear.rotation.set(0, 4.75, 0); // rotation of the spear
      spear.position.set(19, -2, 40 + 42 + 600); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
      spearClone = spear.clone();
      scene.add(spearClone);
      setSpearHB(spearClone.position.x, spearClone.position.y, spearClone.position.z);
      loading += 1;

      // Second spear

      spear.rotation.set(1.6, 0, 0); // rotation of the spear
      spear.position.set(19, 12.5, 40 + 129 + 600); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
      spearClone = spear.clone();
      scene.add(spearClone);
      setSpearHHB(spearClone.position.x, spearClone.position.y, spearClone.position.z);
      loading += 1;

      // Third spear

      spear.rotation.set(0, 0, 0); // rotation of the spear
      spear.position.set(19, -1, 40 + 209.5 + 600); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
      spearClone = spear.clone();
      scene.add(spearClone);
      setSpearHB(spearClone.position.x, spearClone.position.y, spearClone.position.z);
      loading += 1;

      // fOURTH SPEAR
      spear.rotation.set(0, 0, 0); // rotation of the spear
      spear.position.set(19, -1, 205 + 600); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
      spearClone = spear.clone();
      scene.add(spearClone);
      setSpearHB(spearClone.position.x, spearClone.position.y, spearClone.position.z);
      loading += 1;

      // FIFTH SPEAR
      spear.rotation.set(-1.5, 0, 0); // rotation of the spear
      spear.position.set(16.2, 39, 397 + 600); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
      spearClone = spear.clone();
      scene.add(spearClone);
      setSpearHHHB(spearClone.position.x, spearClone.position.y, spearClone.position.z);
      loading += 1;

      // SIXTH SPEAR
      spear.rotation.set(0, 0, 0); // rotation of the spear
      spear.position.set(16.2, -1, 430 + 600); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
      spearClone = spear.clone();
      scene.add(spearClone);
      setSpearHB(spearClone.position.x, spearClone.position.y, spearClone.position.z);
      loading += 1;

      // spear.traverse(function (child) {
      //       if (child instanceof THREE.Mesh) {
      //         child.castShadow = true;
      //         child.receiveShadow = true;

      //       }
      //       if (child.material) child.material.metalness = 0;
      //     });
      //     spear.castShadow = true;
      //     spear.receiveShadow = true;
      spearLoaded2 = true;


    });
  }

}

function createCup() {

  var cup = new THREE.Scene();
  {
    const url_cup = "./cup/scene.gltf";
    gltfLoader.load(url_cup, (gltf) => {
      cup = gltf.scene;
      cup.name = "cup";
      cup.scale.set(2, 2, 2);
      cup.rotation.set(0, 0, 0); // rotation of the torch
      cup.position.set(25, -14, 1130); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
      cupClone = cup.clone();
      scene.add(cupClone);

      // cup.traverse(function (child) {
      //   if (child instanceof THREE.Mesh) {
      //     child.castShadow = true;
      //     child.receiveShadow = true;

      //   }
      //   if (child.material) child.material.metalness = 0;
      // });
      // cup.castShadow = true;
      // cup.receiveShadow = true;
      cupLoaded = true;


    });
  }





}


