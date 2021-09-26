function SceneManager(canvas) {

    const screenDimensions = {
        width: canvas.width,
        height: canvas.height
    };

    let keyMap = [];
    const rockMap = [
        0.0, -2.0,
        -10.0, -5.0,
        -8.0, 7.5,
        10.0, 4.5,
        8.0, 19.0,
        0.0, 15.0,
        -3.0, 19.0,
        13.5, -4.5,
        3.0, -7.5,
        5.5, 0.0
    ];
    theRocks = [];

    const scene = buildScene();
    const renderer = buildRender(screenDimensions);
    const camera = buildCamera(screenDimensions);

    lightcolor = '#ffeeee';

    const lightCentral = new THREE.AmbientLight(lightcolor, 2);
    scene.add(lightCentral);

    const lightShades = new THREE.PointLight(lightcolor, 1);
    lightShades.position.set(0, 5.5, 10);
    scene.add(lightShades);

    createSceneSubjects();



    function buildScene() {
        const scene = new THREE.Scene();

        return scene;
    }

    function buildRender({ width, height }) {
        const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true }); 

        renderer.setClearColor("#222222") 
        renderer.setSize(width, height);

        return renderer;
    }

    function buildCamera({ width, height }) {
        
        const fov = 80;
        const aspect = width/height;
        const near = 0.1;
        const far = 500;
        const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        camera.position.set(0.0, -12.0, 0.0);
        camera.position.set(0.0, 0.0, 19.0);
        camera.lookAt(0.0, -7.5, 0);
        camera.lookAt(0, 4, -2.5);
        return camera;
    }

    function createSceneSubjects() {
        theRoom = new room(scene);
        for(let i = 0; i < rockMap.length; i+=2){
            if(i == 0 || i==4 || i==8 || i == 10) theRocks.push(new rock1(scene, rockMap[i], rockMap[i+1]));
            else theRocks.push(new rock2(scene, rockMap[i], rockMap[i+1]));
        }
        thePlayer  = new player(scene, rockMap, rockMap.length);
    }

    this.onWindowResize = function() {
        const { width, height } = canvas;

        screenDimensions.width = width;
        screenDimensions.height = height;

        renderer.setSize(width, height);

        camera.left = -width / 2;
        camera.right = width / 2;
        camera.top = height / 2;
        camera.bottom = -height / 2;
        camera.updateProjectionMatrix();      
    }

    this.update = function() {
            thePlayer.handleInput(keyMap);
            renderer.render(scene, camera);
    }
    
    this.handleInput = function(keyCode, isDown) {
        keyMap[keyCode] = isDown;
    }


}