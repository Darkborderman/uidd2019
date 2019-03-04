var camera, scene, renderer, controls;

var objects = [];

var raycaster;

var moveForward = false;
var moveBackward = false;
var moveLeft = false;
var moveRight = false;
var canJump = false;

var prevTime = performance.now();
var velocity = new THREE.Vector3();
var direction = new THREE.Vector3();
var vertex = new THREE.Vector3();
var color = new THREE.Color();

init();
animate();
initModel();

function init() {

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);

    //Generate scene and add background,fog
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    scene.fog = new THREE.Fog(0xffffff, 0, 300);

    //add light to the scene
    let light = new THREE.HemisphereLight(0xeeeeff, 0x777788, 1);
    light.position.set(10, 10, 10);
    scene.add(light);


    controls = new THREE.PointerLockControls(camera);

    var blocker = document.getElementById('blocker');
    var instructions = document.getElementById('instructions');

    instructions.addEventListener('click', function () {
        controls.lock();
    }, false);

    controls.addEventListener('lock', function () {
        instructions.style.display = 'none';
        blocker.style.display = 'none';
    });

    controls.addEventListener('unlock', function () {
        blocker.style.display = 'block';
        instructions.style.display = '';
    });

    scene.add(controls.getObject());

    raycaster = new THREE.Raycaster(new THREE.Vector3(), new THREE.Vector3(0, - 1, 0), 0, 10);

    // floor

    var floorGeometry = new THREE.PlaneBufferGeometry(200, 200, 100, 10);
    floorGeometry.rotateX(- Math.PI / 2);

    // vertex displacement

    var position = floorGeometry.attributes.position;

    for (var i = 0, l = position.count; i < l; i++) {

        vertex.fromBufferAttribute(position, i);

        vertex.x += Math.random() * 20 - 10;
        vertex.y += Math.random() * 2;
        vertex.z += Math.random() * 20 - 10;

        position.setXYZ(i, vertex.x, vertex.y, vertex.z);

    }

    floorGeometry = floorGeometry.toNonIndexed(); // ensure each face has unique vertices

    position = floorGeometry.attributes.position;
    var colors = [];

    for (var i = 0, l = position.count; i < l; i++) {

        color.setHSL(Math.random() * 0.3 + 0.5, 0.75, Math.random() * 0.25 + 0.75);
        colors.push(color.r, color.g, color.b);

    }

    floorGeometry.addAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    var floorMaterial = new THREE.MeshBasicMaterial({ vertexColors: THREE.VertexColors });

    var floor = new THREE.Mesh(floorGeometry, floorMaterial);
    scene.add(floor);

    ;
    // objects
    //

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    //

    window.addEventListener('resize', onWindowResize, false);

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

}

function animate() {

    requestAnimationFrame(animate);

    if (controls.isLocked === true) {

        raycaster.ray.origin.copy(controls.getObject().position);
        raycaster.ray.origin.y -= 10;

        var intersections = raycaster.intersectObjects(objects);

        var onObject = intersections.length > 0;

        var time = performance.now();
        var delta = (time - prevTime) / 1000;

        velocity.x -= velocity.x * 10.0 * delta;
        velocity.z -= velocity.z * 10.0 * delta;

        velocity.y -= 9.8 * 100.0 * delta; // 100.0 = mass

        direction.z = Number(moveForward) - Number(moveBackward);
        direction.x = Number(moveLeft) - Number(moveRight);
        direction.normalize(); // this ensures consistent movements in all directions

        if (moveForward || moveBackward) velocity.z -= direction.z * 400.0 * delta;
        if (moveLeft || moveRight) velocity.x -= direction.x * 400.0 * delta;

        if (onObject === true) {

            velocity.y = Math.max(0, velocity.y);
            canJump = true;

        }

        controls.getObject().translateX(velocity.x * delta);
        controls.getObject().translateY(velocity.y * delta);
        controls.getObject().translateZ(velocity.z * delta);

        if (controls.getObject().position.y < 10) {

            velocity.y = 0;
            controls.getObject().position.y = 10;

            canJump = true;

        }

        prevTime = time;

    }

    renderer.render(scene, camera);

}


var fontModel;
function initModel() {
    var font;
    var loader = new THREE.FontLoader();
    loader.load("gentilis_regular.typeface.json", function (res) {
        font = new THREE.TextBufferGeometry("EXERCISE", {
            font: res,
            size: 100,
            height: 60
        });
        font.computeBoundingBox(); // 執行以後設定font的boundingBox屬性物件，如果不執行無法獲得。 
        //font.computeVertexNormals(); 
        var map = new THREE.TextureLoader().load("examples/textures/UV_Grid_Sm.jpg");
        var material = new THREE.MeshLambertMaterial({ map: map, side: THREE.DoubleSide });
        fontModel = new THREE.Mesh(font, material);
        //設定位置 
        fontModel.position.x = - (font.boundingBox.max.x - font.boundingBox.min.x) / 2; //計算出整個模型的寬度的一半 
        fontModel.position.y = 0;
        fontModel.position.z = -200;
        scene.add(fontModel);
    });
} 