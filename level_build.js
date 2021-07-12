import {
    setBrickGeometry,setGroupGeometry
  } from "./bricks.js";

  export function createGroup1() { // creazione del primo gruppo di mattoncini
    
    brick = new THREE.Scene();
    {
      const url_brick = "./brick_textures/single_brick.gltf";
      gltfLoader.load(url_brick, (gltf) => {
        brick = gltf.scene;
        brick.name = "brick";
        brick.scale.set(0.1, 0.009, 0.03);
        brick.castShadow = true;
        brick.traverse(function (child) {
          // if (child instanceof THREE.Mesh) {
          //   child.castShadow = true;
          //   child.receiveShadow = true;
          // }
          child.castShadow = true;
        });


        // PRIMO SET DI MATTONCINI
        for(var i=0;i<10;i++){ // numero di mattoncini
          brick.position.set(10,1,i*6) // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
          brickClone = brick.clone();
          scene.add(brickClone);
          setPlateHB(brickClone.position.x, brickClone.position.y, brickClone.position.z);
        }
        // SECONDO SET DI MATTONCINI sopra il primo
        for(var i=0;i<10;i++){ // numero di mattoncini
          brick.position.set(10,14,i*6+60) // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
          brickClone = brick.clone();
          scene.add(brickClone);
          setPlateHB(brickClone.position.x, brickClone.position.y, brickClone.position.z);
        }
        
          // TERZO SET DI MATTONCINI sopra il secondo
        for(var i=0;i<10;i++){ // numero di mattoncini
          brick.position.set(10,2,i*6+120) // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
          brickClone = brick.clone();
          scene.add(brickClone);
          setPlateHB(brickClone.position.x, brickClone.position.y, brickClone.position.z);
        }

          // QUARTO MINI SET DI MATTONCINI sopra il secondo
        for(var i=0;i<1;i++){ // numero di mattoncini
          brick.position.set(10,-4,i*6+242) // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
          brickClone = brick.clone();
          scene.add(brickClone);
          setPlateHB(brickClone.position.x, brickClone.position.y, brickClone.position.z);
        }

          // QUINTO SET DI MATTONCINI DOPO SALTO

        for(var i=0;i<10;i++){ // numero di mattoncini
          brick.position.set(10,2,i*6+300) // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
          brickClone = brick.clone();
          scene.add(brickClone);
          setPlateHB(brickClone.position.x, brickClone.position.y, brickClone.position.z);
        }

        for(var i=0;i<10;i++){ // numero di mattoncini
          brick.position.set(10,16,i*6+340) // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
          brickClone = brick.clone();
          scene.add(brickClone);
          setPlateHB(brickClone.position.x, brickClone.position.y, brickClone.position.z);
        }

        for(var i=0;i<10;i++){ // numero di mattoncini
          brick.position.set(10,30,i*6+380) // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
          brickClone = brick.clone();
          scene.add(brickClone);
          setPlateHB(brickClone.position.x, brickClone.position.y, brickClone.position.z);
        }
    
        brick.traverse(function (child) {
          if (child instanceof THREE.Mesh) {
            child.castShadow = true;
            child.receiveShadow = true;
        
          }
          if (child.material) child.material.metalness = 0;
        });
        brick.castShadow = true;
        brick.receiveShadow = true;
        brickLoaded = true;
      });
    }
  }

  export function createTorch(){

    torch = new THREE.Scene();
      {
        const url_torch = "./torch/scene.gltf";
        gltfLoader.load(url_torch, (gltf) => {
        torch = gltf.scene;
          torch.name = "torch";
          torch.scale.set(0.05, 0.05, 0.05);
  
      for(var i=0;i<16;i++){ // numero di torce da inserire
        if (i<4){
        torch.rotation.set(0,4.75,0); // rotation of the torch
        torch.position.set(25,20,i*15-6); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
        torchClone = torch.clone();
        scene.add(torchClone);
        }
        else if (i=>4 && i<8){
        
          torch.rotation.set(0,4.75,0); // rotation of the torch
          torch.position.set(25,30,i*15); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
          torchClone = torch.clone();
          scene.add(torchClone);
        }
        else if (i=>8 && i<11){
          torch.rotation.set(0,4.75,0); // rotation of the torch
          torch.position.set(25,20,i*15+5); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
          torchClone = torch.clone();
          scene.add(torchClone);
        }
  
        else if (i=>11 && i<15){
          torch.rotation.set(0,4.75,0); // rotation of the torch
          torch.position.set(25,20,i*15+10); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
          torchClone = torch.clone();
          scene.add(torchClone);
        }
          torch.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
              child.castShadow = true;
              child.receiveShadow = true;
          
            }
            if (child.material) child.material.metalness = 0;
          });
          torch.castShadow = true;
          torch.receiveShadow = true;
          torchLoaded = true; 
        };
      });
    }
  }

  export function createBox(){

    box = new THREE.Scene();
    {
      const url_box = "./box_obstacle/scene.gltf";
      gltfLoader.load(url_box, (gltf) => {
        box = gltf.scene;
        box.name = "box";
        box.scale.set(0.07, 0.07, 0.07);
        console.log(box);
        box.traverse(function (child) {
          // if (child instanceof THREE.Mesh) {
            child.castShadow = true;
          //   child.receiveShadow = true;
          // }
          if (child.material) child.material.metalness = 0;
        });

        for(var i=0;i<2;i++){ // numero di mattoncini
          box.rotation.set(0,4.75,0); // rotation of the torch
          box.position.set(16.5,-7,i*40+42); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
          boxClone = box.clone();
          scene.add(boxClone);
          setBoxHB(boxClone.position.x, boxClone.position.y, boxClone.position.z);
        }
          //       SCATOLA SINGOLA TERZA
        box.rotation.set(0,4.75,0); // rotation of the torch
        box.position.set(16.5,11,163); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
        boxClone = box.clone();
        scene.add(boxClone);
        setBoxHB(boxClone.position.x, boxClone.position.y, boxClone.position.z);

          //SCATOLA SINGOLA QUARTA
        box.rotation.set(0,4.75,0); // rotation of the torch
        box.position.set(16.5,-7,250); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
        boxClone = box.clone();
        scene.add(boxClone);
        setBoxHB(boxClone.position.x, boxClone.position.y, boxClone.position.z);

        
        box.castShadow = true;
        box.receiveShadow = true;
        boxLoaded = true;
      });
    }
  }
  

  export function createSpear(){

    spear = new THREE.Scene();
      {
        const url_spear = "./spear/scene.gltf";
        gltfLoader.load(url_spear, (gltf) => {
          spear = gltf.scene;
          spear.name = "spear";
          spear.scale.set(100, 100,100);   
          //First spear
        spear.rotation.set(0,4.75,0); // rotation of the spear
        spear.position.set(19,-2,40+42); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
        spearClone = spear.clone();
        scene.add(spearClone);
        setSpearHB(spearClone.position.x, spearClone.position.y, spearClone.position.z);

          // Second spear

        spear.rotation.set(1.6,0,0); // rotation of the spear
        spear.position.set(19,12.5,40+129); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
        spearClone = spear.clone();
        scene.add(spearClone);
        setSpearHB(spearClone.position.x, spearClone.position.y, spearClone.position.z);

        // Third spear

        spear.rotation.set(0,0,0); // rotation of the spear
        spear.position.set(19,-1,40+209.5); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
        spearClone = spear.clone();
        scene.add(spearClone);
        setSpearHB(spearClone.position.x, spearClone.position.y, spearClone.position.z);//da ruotare
      
        
  
      
      spear.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
              child.castShadow = true;
              child.receiveShadow = true;
          
            }
            if (child.material) child.material.metalness = 0;
          });
          box.castShadow = true;
          box.receiveShadow = true;
          boxLoaded = true;
          
          
        });
      }
    }



      