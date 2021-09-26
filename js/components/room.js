function room(scene){

    const roomWidth = 30;
    const roomHeight = 30;
    const roomDepth = 5;
    
    const doorWidht = 4;
    const doorHeight = 1;
    const doorDepth = 4;

    const geometry = new THREE.BoxGeometry(roomWidth, roomHeight, roomDepth, 128, 128, 128);

    const floorTextureColor = new THREE.TextureLoader().load("./assets/textures/FloorS.jpg");
    floorTextureColor.minFilter = THREE.LinearMipmapNearestFilter;
    floorTextureColor.magFilter = THREE.LinearFilter;
    floorTextureColor.wrapS = THREE.RepeatWrapping;
    floorTextureColor.wrapT = THREE.RepeatWrapping;
    floorTextureColor.repeat.set(2, 2);

    const leftsideTextureColor = new THREE.TextureLoader().load("./assets/textures/roomC.jpg");
    leftsideTextureColor.minFilter = THREE.LinearMipmapNearestFilter;
    leftsideTextureColor.magFilter = THREE.LinearFilter;
    leftsideTextureColor.wrapS = THREE.RepeatWrapping;
    leftsideTextureColor.wrapT = THREE.RepeatWrapping;
    leftsideTextureColor.repeat.set(3, 1);
    leftsideTextureColor.rotation = Math.PI/2;

    const leftsideTextureNorm = new THREE.TextureLoader().load("./assets/textures/roomN.jpg");
    leftsideTextureNorm.minFilter = THREE.LinearMipmapNearestFilter;
    leftsideTextureNorm.magFilter = THREE.LinearFilter;
    leftsideTextureNorm.wrapS = THREE.RepeatWrapping;
    leftsideTextureNorm.wrapT = THREE.RepeatWrapping;
    leftsideTextureNorm.repeat.set(3, 1);
    leftsideTextureNorm.rotation = Math.PI/2;

    const leftsideTextureDisp = new THREE.TextureLoader().load("./assets/textures/roomD.png");
    leftsideTextureDisp.minFilter = THREE.LinearMipmapNearestFilter;
    leftsideTextureDisp.magFilter = THREE.LinearFilter;
    leftsideTextureDisp.wrapS = THREE.RepeatWrapping;
    leftsideTextureDisp.wrapT = THREE.RepeatWrapping;
    leftsideTextureDisp.repeat.set(3, 1);
    leftsideTextureDisp.rotation = Math.PI/2;

    const rightsideTextureColor = new THREE.TextureLoader().load("./assets/textures/roomC.jpg");
    rightsideTextureColor.minFilter = THREE.LinearMipmapNearestFilter;
    rightsideTextureColor.magFilter = THREE.LinearFilter;
    rightsideTextureColor.wrapS = THREE.RepeatWrapping;
    rightsideTextureColor.wrapT = THREE.RepeatWrapping;
    rightsideTextureColor.repeat.set(3, 1);
    rightsideTextureColor.rotation = -Math.PI/2;

    const rightsideTextureNorm = new THREE.TextureLoader().load("./assets/textures/roomN.jpg");
    rightsideTextureNorm.minFilter = THREE.LinearMipmapNearestFilter;
    rightsideTextureNorm.magFilter = THREE.LinearFilter;
    rightsideTextureNorm.wrapS = THREE.RepeatWrapping;
    rightsideTextureNorm.wrapT = THREE.RepeatWrapping;
    rightsideTextureNorm.repeat.set(3, 1);
    rightsideTextureNorm.rotation = -Math.PI/2;    
    
    const rightsideTextureDisp = new THREE.TextureLoader().load("./assets/textures/roomD.png");
    rightsideTextureDisp.minFilter = THREE.LinearMipmapNearestFilter;
    rightsideTextureDisp.magFilter = THREE.LinearFilter;
    rightsideTextureDisp.wrapS = THREE.RepeatWrapping;
    rightsideTextureDisp.wrapT = THREE.RepeatWrapping;
    rightsideTextureDisp.repeat.set(3, 1);
    rightsideTextureDisp.rotation = -Math.PI/2;    

    const exitTextureColor = new THREE.TextureLoader().load("./assets/textures/roomC.jpg");
    exitTextureColor.minFilter = THREE.LinearMipmapLinearFilter;
    exitTextureColor.magFilter = THREE.LinearFilter;
    exitTextureColor.wrapS = THREE.RepeatWrapping;
    exitTextureColor.wrapT = THREE.RepeatWrapping;
    exitTextureColor.repeat.set(3, 1);

    const exitTextureNormal = new THREE.TextureLoader().load("./assets/textures/roomN.jpg");
    exitTextureNormal.minFilter = THREE.LinearMipmapLinearFilter;
    exitTextureNormal.magFilter = THREE.LinearFilter;
    exitTextureNormal.wrapS = THREE.RepeatWrapping;
    exitTextureNormal.wrapT = THREE.RepeatWrapping;
    exitTextureNormal.repeat.set(3, 1);

    const exitTextureDisp = new THREE.TextureLoader().load("./assets/textures/roomD.png");
    exitTextureDisp.minFilter = THREE.LinearMipmapLinearFilter;
    exitTextureDisp.magFilter = THREE.LinearFilter;
    exitTextureDisp.wrapS = THREE.RepeatWrapping;
    exitTextureDisp.wrapT = THREE.RepeatWrapping;
    exitTextureDisp.repeat.set(3, 1);

    const entryTextureColor = new THREE.TextureLoader().load("./assets/textures/roomC.jpg");
    entryTextureColor.minFilter = THREE.LinearMipmapNearestFilter;
    entryTextureColor.magFilter = THREE.LinearFilter;
    entryTextureColor.wrapS = THREE.RepeatWrapping;
    entryTextureColor.wrapT = THREE.RepeatWrapping;
    entryTextureColor.repeat.set(3, 1);    
    
    const entryTextureNorm = new THREE.TextureLoader().load("./assets/textures/roomN.jpg");
    entryTextureNorm.minFilter = THREE.LinearMipmapNearestFilter;
    entryTextureNorm.magFilter = THREE.LinearFilter;
    entryTextureNorm.wrapS = THREE.RepeatWrapping;
    entryTextureNorm.wrapT = THREE.RepeatWrapping;
    entryTextureNorm.repeat.set(3, 1);

    const entryTextureDisp = new THREE.TextureLoader().load("./assets/textures/roomD.png");
    entryTextureDisp.minFilter = THREE.LinearMipmapNearestFilter;
    entryTextureDisp.magFilter = THREE.LinearFilter;
    entryTextureDisp.wrapS = THREE.RepeatWrapping;
    entryTextureDisp.wrapT = THREE.RepeatWrapping;
    entryTextureDisp.repeat.set(3, 1);

    const ceilingTextureColor = new THREE.TextureLoader().load("./assets/textures/roomC.jpg");
    ceilingTextureColor.minFilter = THREE.LinearMipmapNearestFilter;
    ceilingTextureColor.magFilter = THREE.LinearFilter;
    ceilingTextureColor.wrapS = THREE.RepeatWrapping;
    ceilingTextureColor.wrapT = THREE.RepeatWrapping;
    ceilingTextureColor.repeat.set(1, 1);

    const materials = [
        new THREE.MeshPhongMaterial({
            map: rightsideTextureColor,
            normalMap: leftsideTextureNorm,
            shininess: 2,
            displacementMap: rightsideTextureDisp,
            displacementBias: -0.85,
            side: THREE.BackSide}),
        new THREE.MeshPhongMaterial({
            map: leftsideTextureColor, 
            normalMap: rightsideTextureNorm,
            shininess: 2,
            displacementMap: leftsideTextureDisp,
            displacementBias: -0.85,
            side: THREE.BackSide}),
        new THREE.MeshPhongMaterial({
            map: exitTextureColor, 
            normalMap: exitTextureNormal,
            shininess: 2,
            displacementMap: exitTextureDisp,
            displacementBias: -0.85,
            side: THREE.BackSide}),
        new THREE.MeshPhongMaterial({
            map: entryTextureColor, 
            normalMap: entryTextureNorm,
            shininess: 2,
            displacementMap: entryTextureDisp,
            displacementBias: -0.85,
            side: THREE.BackSide}),
        new THREE.MeshPhongMaterial({
            map: ceilingTextureColor, 
            side: THREE.BackSide}),
        new THREE.MeshPhongMaterial({
            map: floorTextureColor,
            shininess: 2,
            side: THREE.BackSide}),
    ];

    const room = new THREE.Mesh(geometry, materials);

	room.position.y = 5.5;

	scene.add(room);
    
    doorGeo = new THREE.BoxGeometry(doorWidht, doorHeight, doorDepth);
    doorMat = new THREE.MeshBasicMaterial({color:0x000000});
    door = new THREE.Mesh(doorGeo,doorMat);
    door.position.set(0.0, 15.1, -0.5);
    room.add(door);

    winSpotGeo = new THREE.PlaneGeometry(3.0, 3.0);
    winSpotMat = new THREE.MeshBasicMaterial({color:0x00ff00});
    winSpot = new THREE.Mesh(winSpotGeo, winSpotMat);
    winSpot.position.set(0.0, 13.0, -2.4);
    room.add(winSpot);

}