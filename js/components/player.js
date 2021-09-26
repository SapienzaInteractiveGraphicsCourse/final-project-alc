function player(scene, rockMap, l){
    
    const cColor = 0xff5e50 - 0x333333; 
    const sColor = 0xffaaa7 - 0x3f3f3f;
    const fColor = 0x4f3817 - 0x333317;

    const torsoGeo = new THREE.CylinderGeometry(1.75, 1.5, 4, 4);
    const torsoMat = new THREE.MeshPhongMaterial({color: cColor});
    const torso = new THREE.Mesh(torsoGeo, torsoMat);
    torso.position.set(0.0, -7.5, 0.65);
    torso.rotation.set(Math.PI/2, Math.PI/4, 0.0);
    torso.scale.set(0.52, 0.4, 0.4);
    scene.add(torso);

    const lowerGeo = new THREE.CylinderGeometry(1.5, 0.5, 1.0, 4);
    const lowerMat = new THREE.MeshPhongMaterial({color: cColor});
    const lower = new THREE.Mesh(lowerGeo, lowerMat);
    lower.position.y = -2.5;
    torso.add(lower);

    //------------------------------------------------------------------------------------------------------------------------------

    const leftJuncGeo = new THREE.SphereGeometry(0.3, 32, 32);
    const leftJunclMat = new THREE.MeshPhongMaterial({color: cColor});
    const leftJunc = new THREE.Mesh(leftJuncGeo, leftJunclMat);
    leftJunc.position.set(-0.45, 0.0, -0.45);
    lower.add(leftJunc);

    const upperLegLeftBGeo = new THREE.CylinderGeometry(0.35, 0.3, 0.1, 7);
    const upperLegLeftBMat = new THREE.MeshPhongMaterial({color: cColor});
    const upperLegLeftB = new THREE.Mesh(upperLegLeftBGeo, upperLegLeftBMat);
    upperLegLeftB.position.set(0.0, -0.15, 0.0);
    leftJunc.add(upperLegLeftB);
    
    const upperLegLeftGeo = new THREE.CylinderGeometry(0.35, 0.3, 2.0, 7);
    const upperLegLeftMat = new THREE.MeshPhongMaterial({color: cColor});
    const upperLegLeft = new THREE.Mesh(upperLegLeftGeo, upperLegLeftMat);
    upperLegLeft.position.set(0.0, -1.0, 0.0);
    upperLegLeftB.add(upperLegLeft);

    const leftKneeGeo = new THREE.SphereGeometry(0.3, 32, 32);
    const leftKneeMat = new THREE.MeshPhongMaterial({color: cColor});
    const leftKnee = new THREE.Mesh(leftKneeGeo, leftKneeMat);
    leftKnee.position.set(0.0, -0.9, 0.0);
    upperLegLeft.add(leftKnee);

    const lowerLegLeftBGeo = new THREE.CylinderGeometry(0.3, 0.25, 0.1, 7);
    const lowerLegLeftBMat = new THREE.MeshPhongMaterial({color: cColor});
    const lowerLegLeftB = new THREE.Mesh(lowerLegLeftBGeo, lowerLegLeftBMat);
    lowerLegLeftB.position.set(0.0, -0.15, 0.0);
    leftKnee.add(lowerLegLeftB);
    
    const lowerLegLeftGeo = new THREE.CylinderGeometry(0.3, 0.25, 2.0, 7);
    const lowerLegLeftMat = new THREE.MeshPhongMaterial({color: cColor});
    const lowerLegLeft = new THREE.Mesh(lowerLegLeftGeo, lowerLegLeftMat);
    lowerLegLeft.position.set(0.0, -1, 0.0);
    lowerLegLeftB.add(lowerLegLeft);

    const leftFootGeo = new THREE.BoxGeometry(0.6, 0.6, 1.8);
    const leftFootMat = new THREE.MeshPhongMaterial({color: fColor});
    const leftFoot = new THREE.Mesh(leftFootGeo, leftFootMat);
    leftFoot.position.set(0.15, -1, -0.15);
    leftFoot.rotation.y = -Math.PI/4;
    lowerLegLeft.add(leftFoot);

    //--------------------------------------------------------------------------------------------------------------------------

    const rightJuncGeo = new THREE.SphereGeometry(0.3, 32, 32);
    const rightJunclMat = new THREE.MeshPhongMaterial({color: cColor});
    const rightJunc = new THREE.Mesh(rightJuncGeo, rightJunclMat);
    rightJunc.position.set(0.45, 0.0, 0.45);
    lower.add(rightJunc);

    const upperLegRightBGeo = new THREE.CylinderGeometry(0.35, 0.3, 0.1, 7);
    const upperLegRightBMat = new THREE.MeshPhongMaterial({color: cColor});
    const upperLegRightB = new THREE.Mesh(upperLegRightBGeo, upperLegRightBMat);
    upperLegRightB.position.set(0.0, -0.15, 0.0);
    rightJunc.add(upperLegRightB);

    const upperLegRightGeo = new THREE.CylinderGeometry(0.35, 0.3, 2.0, 7);
    const upperLegRightMat = new THREE.MeshPhongMaterial({color: cColor});
    const upperLegRight = new THREE.Mesh(upperLegRightGeo, upperLegRightMat);
    upperLegRight.position.y = -1.0;
    upperLegRightB.add(upperLegRight);

    const rightKneeGeo = new THREE.SphereGeometry(0.3, 32, 32);
    const rightKneeMat = new THREE.MeshPhongMaterial({color: cColor});
    const rightKnee = new THREE.Mesh(rightKneeGeo, rightKneeMat);
    rightKnee.position.set(0.0, -0.9, 0.0);
    upperLegRight.add(rightKnee);
    
    const lowerLegRightBGeo = new THREE.CylinderGeometry(0.3, 0.25, 0.1, 7);
    const lowerLegRightBMat = new THREE.MeshPhongMaterial({color: cColor});
    const lowerLegRightB = new THREE.Mesh(lowerLegRightBGeo, lowerLegRightBMat);
    lowerLegRightB.position.set(0.0, -0.15, 0.0);
    rightKnee.add(lowerLegRightB);

    const lowerLegRightGeo = new THREE.CylinderGeometry(0.3, 0.25, 2.0, 7);
    const lowerLegRightMat = new THREE.MeshPhongMaterial({color: cColor});
    const lowerLegRight = new THREE.Mesh(lowerLegRightGeo, lowerLegRightMat);
    lowerLegRight.position.set(0.0, -1, 0.0);
    lowerLegRightB.add(lowerLegRight);

    const rightFootGeo = new THREE.BoxGeometry(0.6, 0.6, 1.8);
    const rightFootMat = new THREE.MeshPhongMaterial({color: fColor});
    const rightFoot = new THREE.Mesh(rightFootGeo, rightFootMat);
    rightFoot.position.set(0.15, -1, -0.15);
    rightFoot.rotation.y = -Math.PI/4;
    lowerLegRight.add(rightFoot);

    //----------------------------------------------------------------------------------------------------------------------

    const rightShoulGeo = new THREE.SphereGeometry(0.3, 32, 32);
    const rightShoulMat = new THREE.MeshPhongMaterial({color: cColor});
    const rightShoul = new THREE.Mesh(rightShoulGeo, rightShoulMat);
    rightShoul.position.set(0.9, 1.5, 0.9);
    torso.add(rightShoul);

    const upperArmRightBGeo = new THREE.CylinderGeometry(0.33, 0.3, 0.1, 7);
    const upperArmRightBMat = new THREE.MeshPhongMaterial({color: cColor});
    const upperArmRightB = new THREE.Mesh(upperArmRightBGeo, upperArmRightBMat);
    upperArmRightB.position.set(0.15, 0.0, 0.15);
    upperArmRightB.rotation.set(-Math.PI/2, Math.PI/10, Math.PI/4);
    rightShoul.add(upperArmRightB)

    const upperArmRightGeo = new THREE.CylinderGeometry(0.35, 0.3, 1.25, 7);
    const upperArmRightMat = new THREE.MeshPhongMaterial({color: cColor});
    const upperArmRight = new THREE.Mesh(upperArmRightGeo, upperArmRightMat);
    upperArmRight.position.set(0.0, -0.675, 0.0);
    upperArmRightB.add(upperArmRight)

    const rightElbGeo = new THREE.SphereGeometry(0.3, 32, 32);
    const rightElbMat = new THREE.MeshPhongMaterial({color: cColor});
    const rightElb = new THREE.Mesh(rightElbGeo, rightElbMat);
    rightElb.position.set(0.0, -0.65, 0.0);
    upperArmRight.add(rightElb);
    
    const lowerArmRightGeo = new THREE.CylinderGeometry(0.3, 0.25, 2.0, 7);
    const lowerArmRightMat = new THREE.MeshPhongMaterial({color: cColor});
    const lowerArmRight = new THREE.Mesh(lowerArmRightGeo, lowerArmRightMat);
    lowerArmRight.position.set(0.0, -1, 0.0);
    rightElb.add(lowerArmRight);

    const rightHandGeo = new THREE.SphereGeometry(0.4, 32, 32);
    const rightHandMat = new THREE.MeshPhongMaterial({color: sColor});
    const rightHand = new THREE.Mesh(rightHandGeo, rightHandMat);
    rightHand.position.set(0.0, -0.75, 0.0);
    lowerArmRight.add(rightHand);

    //-----------------------------------------------------------------------------------------------------------------------

    const leftShoulGeo = new THREE.SphereGeometry(0.3, 32, 32);
    const leftShoulMat = new THREE.MeshPhongMaterial({color: cColor});
    const leftShoul = new THREE.Mesh(leftShoulGeo, leftShoulMat);
    leftShoul.position.set(-0.9, 1.5, -0.9);
    torso.add(leftShoul);

    const upperArmLeftBGeo = new THREE.CylinderGeometry(0.33, 0.3, 0.1, 7);
    const upperArmLeftBMat = new THREE.MeshPhongMaterial({color: cColor});
    const upperArmLeftB = new THREE.Mesh(upperArmLeftBGeo, upperArmLeftBMat);
    upperArmLeftB.position.set(-0.15, 0.0, -0.15);
    upperArmLeftB.rotation.set(Math.PI/2, Math.PI/10, -Math.PI/4);
    leftShoul.add(upperArmLeftB)

    const upperArmLeftGeo = new THREE.CylinderGeometry(0.35, 0.3, 1.25, 7);
    const upperArmLeftMat = new THREE.MeshPhongMaterial({color: cColor});
    const upperArmLeft = new THREE.Mesh(upperArmLeftGeo, upperArmLeftMat);
    upperArmLeft.position.set(0.0, -0.675, 0.0);
    upperArmLeftB.add(upperArmLeft)

    const leftElbGeo = new THREE.SphereGeometry(0.3, 32, 32);
    const leftElbMat = new THREE.MeshPhongMaterial({color: cColor});
    const leftElb = new THREE.Mesh(leftElbGeo, leftElbMat);
    leftElb.position.set(0.0, -0.65, 0.0);
    upperArmLeft.add(leftElb);
    
    const lowerArmLeftGeo = new THREE.CylinderGeometry(0.3, 0.25, 2.0, 7);
    const lowerArmLeftMat = new THREE.MeshPhongMaterial({color: cColor});
    const lowerArmLeft = new THREE.Mesh(lowerArmLeftGeo, lowerArmLeftMat);
    lowerArmLeft.position.set(0.0, -1, 0.0);
    leftElb.add(lowerArmLeft);

    const leftHandGeo = new THREE.SphereGeometry(0.4, 32, 32);
    const leftHandMat = new THREE.MeshPhongMaterial({color: sColor});
    const leftHand = new THREE.Mesh(leftHandGeo, leftHandMat);
    leftHand.position.set(0.0, -0.75, 0.0);
    lowerArmLeft.add(leftHand);

    
//---------------------------------------------------------------------------------------------------------------------------------

    const neckGeo = new THREE.CylinderGeometry(0.6, 0.8, 1.0, 12);
    const neckMat = new THREE.MeshPhongMaterial({color: sColor});
    const neck = new THREE.Mesh(neckGeo, neckMat);
    neck.position.y = 2.0;
    torso.add(neck);

    const headGeo = new THREE.SphereGeometry(0.825, 16, 16 );
    headGeo.applyMatrix4( new THREE.Matrix4().makeScale( 1.0, 1.375, 1.0 ) );
    const headMat = new THREE.MeshPhongMaterial({color: sColor});
    const head = new THREE.Mesh(headGeo, headMat);
    head.position.y = 1.3;
    neck.add(head);

    //-------------------------------------------------------------------------------------------------------------------------------------------------------

    let isMovingU = false;
    let isMovingD = false;
    let isMovingL = false;
    let isMovingR = false;
    let flag = false;
    let orientation = "up";
    let completeOn = true;
    let completeBk = true;
    let complete = true;
    let startRight = true;
    let notFirst = false;
    let rest = true;
    const axis = new THREE.Vector3(1.0, 0.0, 1.0).normalize();
    const moveSpeedL = new THREE.Vector3(Math.PI/10*axis.x, -Math.PI/80, Math.PI/10*axis.z);
    const moveSpeedR = new THREE.Vector3(Math.PI/10*axis.x, Math.PI/80, Math.PI/10*axis.z);

    function win(flag) {
            if(flag){
            setTimeout(function() {
                window.location.href = "././victory.html";
            }, 500);
        }
    }


    this.handleInput = function(keyMap) { 
        let i = 0;
        let isColliding = false;

        function slidingAnim(){
            if(isMovingR || isMovingU || isMovingL || isMovingD){
                if(rest){
                    if(rightShoul.rotation.x > 0.0){
                        leftShoul.rotation.x += moveSpeedL.x; 
                        leftShoul.rotation.y += moveSpeedL.y; 
                        leftShoul.rotation.z += moveSpeedL.z; 
                        rightShoul.rotation.x -= moveSpeedR.x;
                        rightShoul.rotation.y -= moveSpeedR.y;
                        rightShoul.rotation.z -= moveSpeedR.z;
                    }
                    if(rightShoul.rotation.x <=0){
                        leftShoul.rotation.set(0.0, 0.0, 0.0);
                        rightShoul.rotation.set(0.0, 0.0, 0.0);
                        rest = false;
                    }
                }
                else{
                    leftShoul.rotateOnAxis(axis, Math.PI/13.5);
                    rightShoul.rotateOnAxis(axis, Math.PI/13.5);
                }
            }
            else{
                rest = true;
                if(rightShoul.rotation.x < Math.PI*axis.x){
                    leftShoul.rotation.x -= moveSpeedL.x; 
                    leftShoul.rotation.y -= moveSpeedL.y; 
                    leftShoul.rotation.z -= moveSpeedL.z; 
                    rightShoul.rotation.x += moveSpeedR.x;
                    rightShoul.rotation.y += moveSpeedR.y;
                    rightShoul.rotation.z += moveSpeedR.z;
                }
                if(rightShoul.rotation.x >= Math.PI*axis.x){
                    leftShoul.rotation.set(-Math.PI*axis.x, Math.PI/8, -Math.PI*axis.z);
                    rightShoul.rotation.set(Math.PI*axis.x, Math.PI/8, Math.PI*axis.z);
                }
            }
            if(keyMap[87]||keyMap[83]||keyMap[68]||keyMap[65]||!complete){
                completeOn = notFirst && completeOn;
                notFirst = true;
                if(startRight){
                    if(leftJunc.rotation.x >= Math.PI/30 && completeBk){completeOn=true; completeBk = false;}
                    if(leftJunc.rotation.x < 0.0 && completeOn){completeBk = true;}
                    if(!completeOn){
                        leftJunc.rotateOnAxis(axis, Math.PI/120/4);
                        leftKnee.rotateOnAxis(axis, -Math.PI/60/4);
                        rightJunc.rotateOnAxis(axis, -Math.PI/30/4);
                    }
                    if(!completeBk){
                        leftJunc.rotateOnAxis(axis, -Math.PI/120/4);
                        leftKnee.rotateOnAxis(axis, Math.PI/60/4);
                        rightJunc.rotateOnAxis(axis, Math.PI/30/4);
                    }
                }
                else{
                    if(rightJunc.rotation.x >= Math.PI/30 && completeBk){completeOn=true; completeBk = false;}
                    if(rightJunc.rotation.x < 0.0 && completeOn){completeBk = true;}
                    if(!completeOn){
                        rightJunc.rotateOnAxis(axis, Math.PI/120/4);
                        rightKnee.rotateOnAxis(axis, -Math.PI/60/4);
                        leftJunc.rotateOnAxis(axis, -Math.PI/30/4);
                    }
                    if(!completeBk){
                        rightJunc.rotateOnAxis(axis, -Math.PI/120/4);
                        rightKnee.rotateOnAxis(axis, Math.PI/60/4);
                        leftJunc.rotateOnAxis(axis, Math.PI/30/4);
                    }
                }

                complete = completeOn && completeBk;
                notFirst = !complete;
                if(complete){
                    startRight = !startRight; 
                    rightJunc.rotation.set(0.0, 0.0, 0.0);
                    rightKnee.rotation.set(0.0, 0.0, 0.0);
                    leftJunc.rotation.set(0.0, 0.0, 0.0);
                    leftKnee.rotation.set(0.0, 0.0, 0.0);
                }
            }
        }

        while(!isColliding && i < l){
                if(((isMovingU || keyMap[87]) && ( (((torso.position.x - rockMap[i])**2) + ((torso.position.y + 0.3 - rockMap[i+1])**2)) <= 7.0625)) ||
                ((isMovingD || keyMap[83]) && ( (((torso.position.x - rockMap[i])**2) + ((torso.position.y - 0.3 - rockMap[i+1])**2)) <= 7.0625)) ||
                ((isMovingL || keyMap[65]) && ( (((torso.position.x - 0.3 - rockMap[i])**2) + ((torso.position.y - rockMap[i+1])**2)) <= 7.0625)) ||
                ((isMovingR || keyMap[68]) && ( (((torso.position.x + 0.3 - rockMap[i])**2) + ((torso.position.y - rockMap[i+1])**2)) <= 7.0625)))
                    {isColliding=true;}
                else {isColliding=false;}
            i+=2;
        }

		if (keyMap[87] && (torso.position.y <= 18.5) && !isColliding) { 
            if((keyMap[83]||keyMap[68]||keyMap[65])&&!isMovingU){keyMap[87] = false;}
            else{torso.position.y += 0.3; isMovingU = true;}
		}
		if (keyMap[83] && (torso.position.y >= -7.5) && !isColliding) {
            if((keyMap[87]||keyMap[68]||keyMap[65])&&!isMovingD){keyMap[83] = false;}
			else{torso.position.y -= 0.3; isMovingD = true;}
		}
		if (keyMap[68] && (torso.position.x <= 13) && !isColliding) {
            if((keyMap[83]||keyMap[87]||keyMap[65])&&!isMovingR){keyMap[68] = false;}
			else{torso.position.x += 0.3; isMovingR = true;}
		}
		if (keyMap[65] && (torso.position.x >= -13) && !isColliding) {
            if((keyMap[83]||keyMap[68]||keyMap[87])&&!isMovingL){keyMap[65] = false;}
            else{torso.position.x -= 0.3; isMovingL = true;}
		}

        if(torso.position.y >= 18.5 || isColliding){keyMap[87] = false; isMovingU = false;}
        if(torso.position.y <= -7.5 || isColliding){keyMap[83] = false; isMovingD = false;}
        if(torso.position.x >= 13 || isColliding){keyMap[68] = false; isMovingR = false;}
        if(torso.position.x <= -13 || isColliding){keyMap[65] = false; isMovingL = false;}

        if((torso.position.x <= 2.25 && torso.position.x >= -2.25) && (torso.position.y - 18.5 <= 2.25 && torso.position.y -18.5 >= -2.25)){flag = true;}
        
        if(orientation == "up"){
            if(isMovingR || (torso.rotation.y < Math.PI/4 && torso.rotation.y > -Math.PI/4)){
                if(torso.rotation.y > -Math.PI/4){torso.rotation.y -= Math.PI/24;}
                if(torso.rotation.y <= -Math.PI/4){orientation = "right"; torso.rotation.y = -Math.PI/4;}
            }
            if(isMovingL || (torso.rotation.y < 3*Math.PI/4 && torso.rotation.y > Math.PI/4)){
                if(torso.rotation.y < 3*Math.PI/4){torso.rotation.y += Math.PI/24;}
                if(torso.rotation.y >= 3*Math.PI/4){orientation = "left"; torso.rotation.y = 3*Math.PI/4;}
            }
            if(isMovingD || (torso.rotation.y < 5*Math.PI/4 && torso.rotation.y > 3*Math.PI/4)){
                if(torso.rotation.y < 5*Math.PI/4){torso.rotation.y += Math.PI/24;}
                if(torso.rotation.y >= 5*Math.PI/4){orientation = "down"; torso.rotation.y = 5*Math.PI/4;}
            }
        }
        if(orientation == "down"){
            if(isMovingR || (torso.rotation.y < 7*Math.PI/4 && torso.rotation.y > 5*Math.PI/4)){
                if(torso.rotation.y < 7*Math.PI/4){torso.rotation.y += Math.PI/24;}
                if(torso.rotation.y >= 7*Math.PI/4){orientation = "right"; torso.rotation.y = -Math.PI/4;}
            }
            if(isMovingL || (torso.rotation.y < 5*Math.PI/4 && torso.rotation.y > 3*Math.PI/4)){
                if(torso.rotation.y > 3*Math.PI/4){torso.rotation.y -= Math.PI/24;}
                if(torso.rotation.y <= 3*Math.PI/4){orientation = "left"; torso.rotation.y = 3*Math.PI/4;}
            }
            if(isMovingU || (torso.rotation.y < 3*Math.PI/4 && torso.rotation.y > Math.PI/4)){
                if(torso.rotation.y > Math.PI/4){torso.rotation.y -= Math.PI/24;}
                if(torso.rotation.y <= Math.PI/4){orientation = "up"; torso.rotation.y = Math.PI/4;}
            }
        }
        if(orientation == "left"){
            if(isMovingR || (torso.rotation.y < 7*Math.PI/4 && torso.rotation.y > 5*Math.PI/4)){
                if(torso.rotation.y < 7*Math.PI/4){torso.rotation.y += Math.PI/24;}
                if(torso.rotation.y >= 7*Math.PI/4){orientation = "right"; torso.rotation.y = -Math.PI/4;}
            }
            if(isMovingU || (torso.rotation.y < 3*Math.PI/4 && torso.rotation.y > Math.PI/4)){
                if(torso.rotation.y > Math.PI/4){torso.rotation.y -= Math.PI/24;}
                if(torso.rotation.y <= Math.PI/4){orientation = "up"; torso.rotation.y = Math.PI/4;}
            }
            if(isMovingD || (torso.rotation.y < 5*Math.PI/4 && torso.rotation.y > 3*Math.PI/4)){
                if(torso.rotation.y < 5*Math.PI/4){torso.rotation.y += Math.PI/24;}
                if(torso.rotation.y >= 5*Math.PI/4){orientation = "down"; torso.rotation.y = 5*Math.PI/4;}
            }
        }
        if(orientation == "right"){
            if(isMovingU || (torso.rotation.y < Math.PI/4 && torso.rotation.y > -Math.PI/4)){
                if(torso.rotation.y < Math.PI/4){torso.rotation.y += Math.PI/24;}
                if(torso.rotation.y >= Math.PI/4){orientation = "up"; torso.rotation.y = Math.PI/4;}
            }
            if(isMovingL || (torso.rotation.y < 3*Math.PI/4 && torso.rotation.y > Math.PI/4)){
                if(torso.rotation.y < 3*Math.PI/4){torso.rotation.y += Math.PI/24;}
                if(torso.rotation.y >= 3*Math.PI/4){orientation = "left"; torso.rotation.y = 3*Math.PI/4;}
            }
            if(isMovingD || (torso.rotation.y < 5*Math.PI/4 && torso.rotation.y > 3*Math.PI/4)){
                if(torso.rotation.y < 5*Math.PI/4){torso.rotation.y += Math.PI/24;}
                if(torso.rotation.y >= 5*Math.PI/4){orientation = "down"; torso.rotation.y = 5*Math.PI/4;}
            }
        }
        slidingAnim();
        win(flag);
    }

}