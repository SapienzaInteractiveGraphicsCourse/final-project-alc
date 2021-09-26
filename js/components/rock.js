

function rock1(scene, xPos, yPos){

    const rockColor = new THREE.TextureLoader().load("./assets/textures/rock1C.jpg");
    rockColor.minFilter = THREE.LinearMipmapNearestFilter;
    rockColor.magFilter = THREE.LinearFilter;
    rockColor.wrapS = THREE.RepeatWrapping;
    rockColor.wrapT = THREE.RepeatWrapping;

    const rockNormal = new THREE.TextureLoader().load("./assets/textures/roomN.jpg");
    rockNormal.minFilter = THREE.LinearMipmapNearestFilter;
    rockNormal.magFilter = THREE.LinearFilter;
    rockNormal.wrapS = THREE.RepeatWrapping;
    rockNormal.wrapT = THREE.RepeatWrapping;

    const rockDisplacement = new THREE.TextureLoader().load("./assets/textures/roomD.jpg");
    rockDisplacement.minFilter = THREE.LinearMipmapNearestFilter;
    rockDisplacement.magFilter = THREE.LinearFilter;
    rockDisplacement.wrapS = THREE.RepeatWrapping;
    rockDisplacement.wrapT = THREE.RepeatWrapping;

    const rockGeo = new THREE.CylinderGeometry(1.75, 0.675, 2.5, 32);
    const rockMat = new THREE.MeshPhongMaterial({
        map: rockColor,
        normalMap: rockNormal,
        shininess: 2,
        displacementMap: rockDisplacement,
    });
    const rock = new THREE.Mesh(rockGeo, rockMat);
    rock.rotation.x = -Math.PI/2;
    rock.position.set(xPos, yPos, -2.0);
    scene.add(rock);
}

function rock2(scene, xPos, yPos){
    
    const rockColor = new THREE.TextureLoader().load("./assets/textures/rock2C.jpg");
    rockColor.minFilter = THREE.LinearMipmapNearestFilter;
    rockColor.magFilter = THREE.LinearFilter;
    rockColor.wrapS = THREE.RepeatWrapping;
    rockColor.wrapT = THREE.RepeatWrapping;

    const rockNormal = new THREE.TextureLoader().load("./assets/textures/rockN.jpg");
    rockNormal.minFilter = THREE.LinearMipmapNearestFilter;
    rockNormal.magFilter = THREE.LinearFilter;
    rockNormal.wrapS = THREE.RepeatWrapping;
    rockNormal.wrapT = THREE.RepeatWrapping;

    const rockDisplacement = new THREE.TextureLoader().load("./assets/textures/rockD.jpg");
    rockDisplacement.minFilter = THREE.LinearMipmapNearestFilter;
    rockDisplacement.magFilter = THREE.LinearFilter;
    rockDisplacement.wrapS = THREE.RepeatWrapping;
    rockDisplacement.wrapT = THREE.RepeatWrapping;

    const rockGeo = new THREE.CylinderGeometry(1.75, 0.675, 2.5, 32);
    const rockMat = new THREE.MeshPhongMaterial({
        map: rockColor,
        normalMap: rockNormal,
        shininess: 2,
        displacementMap: rockDisplacement,
    });

    const rock = new THREE.Mesh(rockGeo, rockMat);
    rock.rotation.x = -Math.PI/2;
    rock.position.set(xPos, yPos, -2.0);
    scene.add(rock);
}