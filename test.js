import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Create a function to initialize the 3D scene
function init3DScene() {
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Make the background transparent
    renderer.setPixelRatio(window.devicePixelRatio);

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    const sceneOverlay = document.getElementById('3d-overlay');
    sceneOverlay.appendChild(renderer.domElement); // Append the renderer to the overlay

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.set(4, 5, 11);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.minDistance = 5;
    controls.maxDistance = 20;
    controls.minPolarAngle = 0.5;
    controls.maxPolarAngle = 1.5;
    controls.autoRotate = false;
    controls.target = new THREE.Vector3(0, 1, 0);
    controls.update();

    const groundGeometry = new THREE.PlaneGeometry(20, 20, 32, 32);
    groundGeometry.rotateX(-Math.PI / 2);
    const groundMaterial = new THREE.MeshStandardMaterial({
        color: 0x555555,
        side: THREE.DoubleSide
    });
    const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
    groundMesh.castShadow = false;
    groundMesh.receiveShadow = true;
    scene.add(groundMesh);

    const spotLight = new THREE.SpotLight(0xffffff, 3000, 100, 0.22, 1);
    spotLight.position.set(0, 25, 0);
    spotLight.castShadow = true;
    spotLight.shadow.bias = -0.0001;
    scene.add(spotLight);

    const loader = new GLTFLoader().setPath('public/millennium_falcon/');
    loader.load('scene.gltf', (gltf) => {
        console.log('loading model');
        const mesh = gltf.scene;

        mesh.traverse((child) => {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
            }
        });

        mesh.position.set(0, 1.05, -1);
        scene.add(mesh);
    }, (xhr) => {
        console.log(`loading ${xhr.loaded / xhr.total * 100}%`);
    }, (error) => {
        console.error(error);
    });

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    }

    animate();
}

// Function to remove the video elements and display the 3D scene
function display3DModel() {
    // Initialize the 3D scene
    init3DScene();
}

// Create video container and load video
function createVideoContainer() {
    const videoContainer = document.createElement('div');
    videoContainer.className = 'video-container';
    document.body.appendChild(videoContainer);

    const video = document.createElement('video');
    video.id = 'bigBangVideo';
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;

    const source = document.createElement('source');
    source.src = 'videoplayback.mp4';
    source.type = 'video/mp4';
  
    video.appendChild(source);
    videoContainer.appendChild(video);

    const overlayText = document.createElement('div');
    overlayText.className = 'overlay-text';
    overlayText.id = 'overlayText';
    overlayText.innerText = 'The Big Bang';
    videoContainer.appendChild(overlayText);

    // Pause the video initially
    video.pause();

    // Set a 2-second delay before playing the video
    setTimeout(() => {
        video.play(); // Start the video after 2 seconds
    }, 2000);

    // Set a timeout to remove the video and overlay text after 15 seconds
    setTimeout(() => {
        video.pause(); // Pause the video
        console.log("Removing video and overlay text...");

        // Remove video elements and display 3D model
        videoContainer.remove();
        display3DModel();
    }, 15000); // Remove elements after 15 seconds
}

// Create a transparent overlay for the 3D scene
function createOverlay() {
    const overlay = document.createElement('div');
    overlay.id = '3d-overlay';
    overlay.style.position = 'absolute';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.pointerEvents = 'none'; // Allow clicks to pass through
    overlay.style.zIndex = '1'; // Ensure it's above the video
    document.body.appendChild(overlay);
}

// Start the process by creating the overlay and the video container
createOverlay();
createVideoContainer();
