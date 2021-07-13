
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
      
      
      // SESTO MINI SET DI MATTONCINI per il salto
    for(var i=0;i<4;i++){ // numero di mattoncini
      brick.position.set(10,30,i*6+458) // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
      brickClone = brick.clone();
      scene.add(brickClone);
      setPlateHB(brickClone.position.x, brickClone.position.y, brickClone.position.z);
      }


      for(var i=0;i<10;i++){ // numero di mattoncini
        brick.position.set(10,30,i*6+500) // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
        brickClone = brick.clone();
        scene.add(brickClone);
        setPlateHB(brickClone.position.x, brickClone.position.y, brickClone.position.z);
        }
      
    
    // MINI SET DI MATTONCINI per il atterrare
    for(var i=0;i<2;i++){ // numero di mattoncini
      brick.position.set(10,13,i*6+570) // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
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

    for(var i=0;i<40;i++){ // numero di torce da inserire
      if (i<4){
        console.log("primo set")
      torch.rotation.set(0,4.75,0); // rotation of the torch
      torch.position.set(25,20,i*15-6); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
      torchClone = torch.clone();
      scene.add(torchClone);
      }
      else if (i<8){
        console.log("secondo set")
        console.log(i)
        torch.rotation.set(0,4.75,0); // rotation of the torch
        torch.position.set(25,30,i*15); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
        torchClone = torch.clone();
        scene.add(torchClone);
      }
      else if (i<11){

        console.log("terzo set")
        torch.rotation.set(0,4.75,0); // rotation of the torch
        torch.position.set(25,20,i*15+5); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
        torchClone = torch.clone();
        scene.add(torchClone);
      }

      else if (i<14){
        console.log("quarto set")
        torch.rotation.set(0,4.75,0); // rotation of the torch
        torch.position.set(25,10,i*15+20); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
        torchClone = torch.clone();
        scene.add(torchClone);

      }

      else if (i<18){
        torch.rotation.set(0,4.75,0); // rotation of the torch
        torch.position.set(25,20,i*15+14); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
        torchClone = torch.clone();
        scene.add(torchClone);

      }
    
      else if (i<24){
        torch.rotation.set(0,4.75,0); // rotation of the torch
        torch.position.set(25,35,i*15+10); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
        torchClone = torch.clone();
        scene.add(torchClone);

      }

      else if (i<36){
        torch.rotation.set(0,4.75,0); // rotation of the torch
        torch.position.set(25,50,i*15+10); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
        torchClone = torch.clone();
        scene.add(torchClone);

      }
        torchLoaded = true;
        
        
      };
    }


    );


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
      
      //SCATOLA QUINTA
      box.rotation.set(0,4.75,0); // rotation of the torch
      box.position.set(10,-7,550); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
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
      setSpearHHB(spearClone.position.x, spearClone.position.y, spearClone.position.z);

      // Third spear

      spear.rotation.set(0,0,0); // rotation of the spear
      spear.position.set(19,-1,40+209.5); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
      spearClone = spear.clone();
      scene.add(spearClone);
      setSpearHB(spearClone.position.x, spearClone.position.y, spearClone.position.z);//da ruotare
      
      // Fourth spear

      spear.rotation.set(0,0,0); // rotation of the spear
      spear.position.set(19,-1,550); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
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


// SECONDA PARTE DEL LIVELLO !!!

export function createGroup2() { // creazione del primo gruppo di mattoncini
  
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
  brick.position.set(10,1,i*6+600) // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
  brickClone = brick.clone();
  scene.add(brickClone)
  setPlateHB(brickClone.position.x, brickClone.position.y, brickClone.position.z);
  }
  // SECONDO SET DI MATTONCINI sopra il primo
  for(var i=0;i<10;i++){ // numero di mattoncini
    brick.position.set(10,14,i*6+60+600) // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
    brickClone = brick.clone();
    scene.add(brickClone)
    setPlateHB(brickClone.position.x, brickClone.position.y, brickClone.position.z);
    }
  
    // TERZO SET DI MATTONCINI sopra il secondo
  for(var i=0;i<10;i++){ // numero di mattoncini
    brick.position.set(10,2,i*6+120+600) // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
    brickClone = brick.clone();
    scene.add(brickClone)
    setPlateHB(brickClone.position.x, brickClone.position.y, brickClone.position.z);
    }

    // QUARTO MINI SET DI MATTONCINI 
  for(var i=0;i<1;i++){ // numero di mattoncini
    brick.position.set(10,-4,i*6+242+600) // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
    brickClone = brick.clone();
    scene.add(brickClone)
    setPlateHB(brickClone.position.x, brickClone.position.y, brickClone.position.z);
    }
  
    for(var i=0;i<1;i++){ // numero di mattoncini
      brick.position.set(10,-4,i*6+200+600) // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
      brickClone = brick.clone();
      scene.add(brickClone)
      setPlateHB(brickClone.position.x, brickClone.position.y, brickClone.position.z);
      }

    // QUINTO SET DI MATTONI IN SALITA SCALETTA

    for(var i=0;i<10;i++){ // numero di mattoncini
      brick.position.set(10,2,i*6+300+600) // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
      brickClone = brick.clone();
      scene.add(brickClone);
      setPlateHB(brickClone.position.x, brickClone.position.y, brickClone.position.z);
      }

      for(var i=0;i<10;i++){ // numero di mattoncini
        brick.position.set(10,16,i*6+340+600) // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
        brickClone = brick.clone();
        scene.add(brickClone);
        setPlateHB(brickClone.position.x, brickClone.position.y, brickClone.position.z);
        }

        for(var i=0;i<10;i++){ // numero di mattoncini
          brick.position.set(10,30,i*6+380+600) // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
          brickClone = brick.clone();
          scene.add(brickClone);
          setPlateHB(brickClone.position.x, brickClone.position.y, brickClone.position.z);
          }

    // SESTO MINI SET DI MATTONCINI per il salto
  for(var i=0;i<4;i++){ // numero di mattoncini
    brick.position.set(10,30,i*6+458+600) // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
    brickClone = brick.clone();
    scene.add(brickClone)
    }


    for(var i=0;i<10;i++){ // numero di mattoncini
      brick.position.set(10,30,i*6+500+600) // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
      brickClone = brick.clone();
      scene.add(brickClone)
      }

      for(var i=0;i<10;i++){ // numero di mattoncini
        brick.position.set(10,12,i*6+440+600) // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
        brickClone = brick.clone();
        scene.add(brickClone)
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

export function createTorch2(){

torch = new THREE.Scene();
  {
    const url_torch = "./torch/scene.gltf";
    gltfLoader.load(url_torch, (gltf) => {
    torch = gltf.scene;
      torch.name = "torch";
      torch.scale.set(0.05, 0.05, 0.05);

  for(var i=0;i<40;i++){ // numero di torce da inserire
    if (i<4){
      console.log("primo set")
    torch.rotation.set(0,4.75,0); // rotation of the torch
    torch.position.set(25,20,i*15-6+600); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
    torchClone = torch.clone();
    scene.add(torchClone);
    }
    else if (i<8){
      console.log("secondo set")
      console.log(i)
      torch.rotation.set(0,4.75,0); // rotation of the torch
      torch.position.set(25,30,i*15+600); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
      torchClone = torch.clone();
      scene.add(torchClone);
    }
    else if (i<18){

      console.log("terzo set")
      torch.rotation.set(0,4.75,0); // rotation of the torch
      torch.position.set(25,25,i*15+5+600); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
      torchClone = torch.clone();
      scene.add(torchClone);
    }

    
  
    else if (i<24){
      torch.rotation.set(0,4.75,0); // rotation of the torch
      torch.position.set(25,30,i*15+10+600); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
      torchClone = torch.clone();
      scene.add(torchClone);

    }

    else if (i<36){
      torch.rotation.set(0,4.75,0); // rotation of the torch
      torch.position.set(25,50,i*15+10+600); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
      torchClone = torch.clone();
      scene.add(torchClone);

    }
      torchLoaded = true;
      
      
    };
  }


  );


}
}

export function createBox2(){

box = new THREE.Scene();
  {
    const url_box = "./box_obstacle/scene.gltf";
    gltfLoader.load(url_box, (gltf) => {
      box = gltf.scene;
      box.name = "box";
      box.scale.set(0.07, 0.07,0.07);
      box.traverse(function (child) {
        // if (child instanceof THREE.Mesh) {
          child.castShadow = true;
        //   child.receiveShadow = true;
        // }
        if (child.material) child.material.metalness = 0;
      });
  for(var i=0;i<2;i++){ // numero di mattoncini
      box.rotation.set(0,4.75,0); // rotation of the torch
      box.position.set(16.5,-7,i*40+42+600); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
      boxClone = box.clone();
      scene.add(boxClone);
      setBoxHB(boxClone.position.x, boxClone.position.y, boxClone.position.z);
  }
//       SCATOLA SINGOLA TERZA
  box.rotation.set(0,4.75,0); // rotation of the torch
      box.position.set(16.5,11,163+600); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
      boxClone = box.clone();
      scene.add(boxClone);
      setBoxHB(boxClone.position.x, boxClone.position.y, boxClone.position.z);

    //SCATOLA SINGOLA QUARTA
  box.rotation.set(0,4.75,0); // rotation of the torch
  box.position.set(16.5,-7,250+600); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
  boxClone = box.clone();
  scene.add(boxClone);
  setBoxHB(boxClone.position.x, boxClone.position.y, boxClone.position.z);
  
  
  // SCATOLA SINGOLA QUINTA
  box.rotation.set(0,4.75,0); // rotation of the torch
  box.position.set(16.5,-7,205+600); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
  boxClone = box.clone();
  scene.add(boxClone);
  setBoxHB(boxClone.position.x, boxClone.position.y, boxClone.position.z);
  
  // SCATOLA SINGOLA SESTA
  box.rotation.set(0,4.75,0); // rotation of the torch
  box.position.set(16.5,39,458+600); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
  boxClone = box.clone();
  setBoxHB(boxClone.position.x, boxClone.position.y, boxClone.position.z);
  scene.add(boxClone);

  // SCATOLA SINGOLA SETTTIMA a terra
  box.rotation.set(0,4.75,0); // rotation of the torch
  box.position.set(16.5,-7,500+600); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
  boxClone = box.clone();
  scene.add(boxClone);
  
  
  
  
      box.traverse(function (child) {
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


export function createSpear2(){

  spear = new THREE.Scene();
    {
      const url_spear = "./spear/scene.gltf";
      gltfLoader.load(url_spear, (gltf) => {
        spear = gltf.scene;
        spear.name = "spear";
        spear.scale.set(100, 100,100);   
        //First spear
      spear.rotation.set(0,4.75,0); // rotation of the spear
      spear.position.set(19,-2,40+42+600); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
      spearClone = spear.clone();
      scene.add(spearClone);
      setSpearHB(spearClone.position.x, spearClone.position.y, spearClone.position.z);

       // Second spear

      spear.rotation.set(1.6,0,0); // rotation of the spear
      spear.position.set(19,12.5,40+129+600); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
      spearClone = spear.clone();
      scene.add(spearClone);
      setSpearHHB(spearClone.position.x, spearClone.position.y, spearClone.position.z);

      // Third spear

      spear.rotation.set(0,0,0); // rotation of the spear
      spear.position.set(19,-1,40+209.5+600); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
      spearClone = spear.clone();
      scene.add(spearClone);
      setSpearHB(spearClone.position.x, spearClone.position.y, spearClone.position.z);
    
    // fOURTH SPEAR
      spear.rotation.set(0,0,0); // rotation of the spear
      spear.position.set(19,-1,205+600); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
      spearClone = spear.clone();
      scene.add(spearClone);
      setSpearHB(spearClone.position.x, spearClone.position.y, spearClone.position.z);
      
      // FIFTH SPEAR
      spear.rotation.set(-1.5,0,0); // rotation of the spear
      spear.position.set(16.2,39,455+600); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
      spearClone = spear.clone();
      scene.add(spearClone);
      setSpearHB(spearClone.position.x, spearClone.position.y, spearClone.position.z);
      
      // SIXTH SPEAR
      spear.rotation.set(0,0,0); // rotation of the spear
      spear.position.set(16.2,-1,500+600); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
      spearClone = spear.clone();
      scene.add(spearClone);
      setSpearHB(spearClone.position.x, spearClone.position.y, spearClone.position.z);
    
    spear.traverse(function (child) {
          if (child instanceof THREE.Mesh) {
            child.castShadow = true;
            child.receiveShadow = true;
        
          }
          if (child.material) child.material.metalness = 0;
        });
        spear.castShadow = true;
        spear.receiveShadow = true;
        spearLoaded = true;
        
        
      });
    }

  }

    export function createFlag(){

      flag = new THREE.Scene();
        {
          const url_flag = "./flag_with_pole/scene.gltf";
          gltfLoader.load(url_flag, (gltf) => {
            flag = gltf.scene;
            flag.name = "flag";
            flag.scale.set(0.1,0.1,0.1);
          flag.rotation.set(4.71,0,0); // rotation of the torch
          flag.position.set(25,20,1300); // posizione in profondità (=1) , posizione y, distanza tra loro + distanza da 0
          flagClone = flag.clone();
            scene.add(flagClone);
               
        flag.traverse(function (child) {
              if (child instanceof THREE.Mesh) {
                child.castShadow = true;
                child.receiveShadow = true;
            
              }
              if (child.material) child.material.metalness = 0;
            });
            flag.castShadow = true;
            flag.receiveShadow = true;
            flagLoaded = true;
            
            
          });
        }
    
    
  
    
    
      }
    

    