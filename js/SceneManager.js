function SceneManager(canvas) {

    const screenDimensions = {
        width: canvas.width,
        height: canvas.height
    };
    
    const scene = buildScene();
    const renderer = buildRender(screenDimensions);
    const camera = buildCamera(screenDimensions);

    lightcolor = '#ff7510';

    const lightRightUp = new THREE.PointLight(lightcolor, 4, 20, 2);
    lightRightUp.position.set(-13.0, 5.5+7.5, 1);
    scene.add(lightRightUp);

    const lightLeftUp = new THREE.PointLight(lightcolor, 4, 20, 2);
    lightLeftUp.position.set(13.0, 5.5+7.5, 1);
    scene.add(lightLeftUp);

    const lightRightDown = new THREE.PointLight(lightcolor, 4, 20, 2);
    lightRightDown.position.set(-13.0, 5.5-7.5, 1);
    scene.add(lightRightDown);

    const lightLeftDown = new THREE.PointLight(lightcolor, 4, 20, 2);
    lightLeftDown.position.set(13.0, 5.5-7.5, 1);
    scene.add(lightLeftDown);    
    
    const lightUpRight = new THREE.PointLight(lightcolor, 4, 20, 2);
    lightUpRight.position.set(7.5, 5.5+13.0, 1);
    scene.add(lightUpRight);

    const lightUpLeft = new THREE.PointLight(lightcolor, 4, 20, 2);
    lightUpLeft.position.set(-7.5, 5.5+13.0, 1);
    scene.add(lightUpLeft);

    const lightDownRight = new THREE.PointLight(lightcolor, 4, 20, 2);
    lightDownRight.position.set(7.5, 5.5-13.0, 1);
    scene.add(lightDownRight);

    const lightDownLeft = new THREE.PointLight(lightcolor, 4, 20, 2);
    lightDownLeft.position.set(-7.5, 5.5-13.0, 1);
    scene.add(lightDownLeft);

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
        camera.position.set(0.0, 0.0, 19.0);
        camera.lookAt(0, 4, -2.5);

        return camera;
    }

    function createSceneSubjects() {
        theRoom = new room(scene, screenDimensions);
        //theSpaceship  = new Spaceship(scene);
        //dynamicSubjects.push(theSpaceship);
    }

    this.update = function() {
        renderer.render(scene, camera);
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
}