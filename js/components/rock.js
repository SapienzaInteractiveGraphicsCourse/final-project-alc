function rock1(scene, xPos, yPos){
    const rockGeo = new THREE.CylinderGeometry(1.75, 0.675, 2.5, 32);
    const rockMat = new THREE.MeshPhongMaterial({color:0x946058});
    const rock = new THREE.Mesh(rockGeo, rockMat);
    rock.rotation.x = -Math.PI/2;
    rock.position.set(xPos, yPos, -2.0);
    scene.add(rock);
}

function rock2(scene, xPos, yPos){
    const rockGeo = new THREE.CylinderGeometry(1.75, 0.675, 2.5, 32);
    const rockMat = new THREE.MeshPhongMaterial({color:0x946058});
    const rock = new THREE.Mesh(rockGeo, rockMat);
    rock.rotation.x = -Math.PI/2;
    rock.position.set(xPos, yPos, -2.0);
    scene.add(rock);
}