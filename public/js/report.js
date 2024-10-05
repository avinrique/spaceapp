import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

function init3DScene() {
    const renderer = new THREE.WebGLRenderer({ antialias: true, canvas: document.getElementById('canvas'), alpha: true });
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    renderer.setSize(400, 300);
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(window.devicePixelRatio);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, 400 / 300, 1, 1000);
    camera.position.set(0, 2, 5); 

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = true; 
    controls.target.set(0, 0, 0);
    controls.update();

    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xffffff, 2);
    spotLight.position.set(10, 10, 10);
    spotLight.castShadow = true;
    scene.add(spotLight);

    let isRotating = false;
    let falconMesh; 

    const loader = new GLTFLoader().setPath('millennium_falcon/');
    
    
    loader.load('scene.gltf', (gltf) => {
        console.log('Loading model...');
        falconMesh = gltf.scene;

        falconMesh.position.set(0, 0, 0); 
        falconMesh.traverse((child) => {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
            }
        });

        scene.add(falconMesh);

        
        setTimeout(() => {
           
            document.getElementById('card').style.bottom = '20px'; 
            document.getElementById('card').style.right = '20px'; 
        }, 200); 
        
    
        setTimeout(() => {
            isRotating = true;
        }, 1000);


    }, (xhr) => {
        console.log(`Loading ${xhr.loaded / xhr.total * 100}%`);
    }, (error) => {
        console.error(error);
    });

    
    window.addEventListener('resize', () => {
        camera.aspect = 400 / 300;
        camera.updateProjectionMatrix();
        renderer.setSize(400, 300);
    });

   
    function animate() {
        requestAnimationFrame(animate);
        
        if (isRotating && falconMesh) {
            falconMesh.rotation.y += 0.01;
        }

        controls.update();
        renderer.render(scene, camera);
    }

    animate();
}


window.onload = () => {
    init3DScene();
};
