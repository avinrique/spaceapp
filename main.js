// import * as THREE from 'three';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// const renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.outputColorSpace = THREE.SRGBColorSpace;

// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setClearColor(0x000000);
// renderer.setPixelRatio(window.devicePixelRatio);

// renderer.shadowMap.enabled = true;
// renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// document.body.appendChild(renderer.domElement);

// const scene = new THREE.Scene();

// const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
// camera.position.set(4, 5, 11);

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.enablePan = false;
// controls.minDistance = 5;
// controls.maxDistance = 20;
// controls.minPolarAngle = 0.5;
// controls.maxPolarAngle = 1.5;
// controls.autoRotate = false;
// controls.target = new THREE.Vector3(0, 1, 0);
// controls.update();

// const groundGeometry = new THREE.PlaneGeometry(20, 20, 32, 32);
// groundGeometry.rotateX(-Math.PI / 2);
// const groundMaterial = new THREE.MeshStandardMaterial({
//   color: 0x555555,
//   side: THREE.DoubleSide
// });
// const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
// groundMesh.castShadow = false;
// groundMesh.receiveShadow = true;
// scene.add(groundMesh);

// const spotLight = new THREE.SpotLight(0xffffff, 3000, 100, 0.22, 1);
// spotLight.position.set(0, 25, 0);
// spotLight.castShadow = true;
// spotLight.shadow.bias = -0.0001;
// scene.add(spotLight);

// const loader = new GLTFLoader().setPath('public/millennium_falcon/');
// loader.load('scene.gltf', (gltf) => {
//   console.log('loading model');
//   const mesh = gltf.scene;

//   mesh.traverse((child) => {
//     if (child.isMesh) {
//       child.castShadow = true;
//       child.receiveShadow = true;
//     }
//   });

//   mesh.position.set(0, 1.05, -1);
//   scene.add(mesh);

//   document.getElementById('pr+ogress-container').style.display = 'none';
// }, (xhr) => {
//   console.log(`loading ${xhr.loaded / xhr.total * 100}%`);
// }, (error) => {
//   console.error(error);
// });

// window.addEventListener('resize', () => {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// });

// function animate() {
//   requestAnimationFrame(animate);
//   controls.update();
//   renderer.render(scene, camera);
// }

// animate();




// import * as THREE from 'three';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// const renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.outputColorSpace = THREE.SRGBColorSpace;

// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setClearColor(0x000000);
// renderer.setPixelRatio(window.devicePixelRatio);
// renderer.shadowMap.enabled = true;
// renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// document.body.appendChild(renderer.domElement);

// const scene = new THREE.Scene();

// const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
// camera.position.set(4, 5, 11);

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.enablePan = false;
// controls.minDistance = 5;
// controls.maxDistance = 20;
// controls.minPolarAngle = 0.5;
// controls.maxPolarAngle = 1.5;
// controls.autoRotate = false;
// controls.target = new THREE.Vector3(0, 1, 0);
// controls.update();

// const groundGeometry = new THREE.PlaneGeometry(20, 20, 32, 32);
// groundGeometry.rotateX(-Math.PI / 2);
// const groundMaterial = new THREE.MeshStandardMaterial({
//   color: 0x555555,
//   side: THREE.DoubleSide
// });
// const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
// groundMesh.castShadow = false;
// groundMesh.receiveShadow = true;
// scene.add(groundMesh);

// const spotLight = new THREE.SpotLight(0xffffff, 3000, 100, 0.22, 1);
// spotLight.position.set(0, 25, 0);
// spotLight.castShadow = true;
// spotLight.shadow.bias = -0.0001;
// scene.add(spotLight);

// let falconMesh; // Variable to hold the Millennium Falcon mesh

// const loader = new GLTFLoader().setPath('public/millennium_falcon/');
// loader.load('scene.gltf', (gltf) => {
//   console.log('Loading model...');
//   falconMesh = gltf.scene; // Assign loaded model to the variable

//   falconMesh.traverse((child) => {
//     if (child.isMesh) {
//       child.castShadow = true;
//       child.receiveShadow = true;
//     }
//   });

//   // Set initial position at the center
//   falconMesh.position.set(0, 0, 0);
//   scene.add(falconMesh);

//   document.getElementById('progress-container').style.display = 'none';
// }, (xhr) => {
//   console.log(`Loading ${xhr.loaded / xhr.total * 100}%`);
// }, (error) => {
//   console.error(error);
// });

// window.addEventListener('resize', () => {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// });

// function animate() {
//   requestAnimationFrame(animate);
//   controls.update();
  
//   // Move the Millennium Falcon model upward
//   if (falconMesh) {
//     falconMesh.position.y += 0.01; // Adjust speed of upward movement here
//   }

//   renderer.render(scene, camera);
// }

// animate();





















































// import * as THREE from 'three';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// const renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.outputColorSpace = THREE.SRGBColorSpace;

// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setClearColor(0x000000);
// renderer.setPixelRatio(window.devicePixelRatio);
// renderer.shadowMap.enabled = true;
// renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// document.body.appendChild(renderer.domElement);

// const scene = new THREE.Scene();

// const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
// camera.position.set(4, 5, 11);

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.enablePan = false;
// controls.minDistance = 5;
// controls.maxDistance = 20;
// controls.minPolarAngle = 0.5;
// controls.maxPolarAngle = 1.5;
// controls.autoRotate = false;
// controls.target = new THREE.Vector3(0, 1, 0);
// controls.update();

// const groundGeometry = new THREE.PlaneGeometry(20, 20, 32, 32);
// groundGeometry.rotateX(-Math.PI / 2);
// const groundMaterial = new THREE.MeshStandardMaterial({
//   color: 0x555555,
//   side: THREE.DoubleSide
// });
// const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
// groundMesh.castShadow = false;
// groundMesh.receiveShadow = true;
// scene.add(groundMesh);

// const spotLight = new THREE.SpotLight(0xffffff, 3000, 100, 0.22, 1);
// spotLight.position.set(0, 25, 0);
// spotLight.castShadow = true;
// spotLight.shadow.bias = -0.0001;
// scene.add(spotLight);

// let falconMesh; // Variable to hold the Millennium Falcon mesh
// let isShrinking = false; // Flag to track if model is shrinking
// let isInCorner = false; // Flag to track if model is in the corner

// const loader = new GLTFLoader().setPath('public/millennium_falcon/');
// loader.load('scene.gltf', (gltf) => {
//   console.log('Loading model...');
//   falconMesh = gltf.scene; // Assign loaded model to the variable

//   falconMesh.traverse((child) => {
//     if (child.isMesh) {
//       child.castShadow = true;
//       child.receiveShadow = true;
//     }
//   });

//   // Set initial position at the center
//   falconMesh.position.set(0, 0, 0);
//   scene.add(falconMesh);

//   document.getElementById('progress-container').style.display = 'none';
// }, (xhr) => {
//   console.log(`Loading ${xhr.loaded / xhr.total * 100}%`);
// }, (error) => {
//   console.error(error);
// });

// window.addEventListener('resize', () => {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// });

// function animate() {
//   requestAnimationFrame(animate);
//   controls.update();
  
//   // Move the Millennium Falcon model upward
//   if (falconMesh && !isInCorner) {
//     if (falconMesh.position.y < 5 && !isShrinking) {
//       falconMesh.position.y += 0.01; // Adjust speed of upward movement here
//     } else {
//       isShrinking = true; // Start shrinking when it reaches the top
//     }
    
//     if (isShrinking) {
//       falconMesh.scale.multiplyScalar(0.98); // Shrink the model gradually
//       falconMesh.position.x += 0.05; // Move to the right
//       falconMesh.position.y -= 0.02; // Move to the bottom
      
//       // When the model is small enough, position it in the bottom-right corner
//       if (falconMesh.scale.x < 0.1) {
//         falconMesh.position.set(window.innerWidth / 2 - 1.5, -1, window.innerHeight / 2 - 1.5);
//         falconMesh.scale.set(0.1, 0.1, 0.1);
//         isInCorner = true; // Stop moving after placing it in the corner
//       }
//     }
//   }

//   renderer.render(scene, camera);
// }

// animate();














































// import * as THREE from 'three';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// const renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.outputColorSpace = THREE.SRGBColorSpace;

// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setClearColor(0x000000);
// renderer.setPixelRatio(window.devicePixelRatio);
// renderer.shadowMap.enabled = true;
// renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// document.body.appendChild(renderer.domElement);

// const scene = new THREE.Scene();

// const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
// camera.position.set(4, 5, 11);

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.enablePan = false;
// controls.minDistance = 5;
// controls.maxDistance = 20;
// controls.minPolarAngle = 0.5;
// controls.maxPolarAngle = 1.5;
// controls.autoRotate = false;
// controls.target = new THREE.Vector3(0, 1, 0);
// controls.update();

// const groundGeometry = new THREE.PlaneGeometry(20, 20, 32, 32);
// groundGeometry.rotateX(-Math.PI / 2);
// const groundMaterial = new THREE.MeshStandardMaterial({
//   color: 0x555555,
//   side: THREE.DoubleSide
// });
// const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
// groundMesh.castShadow = false;
// groundMesh.receiveShadow = true;
// scene.add(groundMesh);

// const spotLight = new THREE.SpotLight(0xffffff, 3000, 100, 0.22, 1);
// spotLight.position.set(0, 25, 0);
// spotLight.castShadow = true;
// spotLight.shadow.bias = -0.0001;
// scene.add(spotLight);

// let falconMesh; // Variable to hold the Millennium Falcon mesh
// let isScaledDown = false; // Flag to track if scene is scaled down and moved to corner

// const loader = new GLTFLoader().setPath('public/millennium_falcon/');
// loader.load('scene.gltf', (gltf) => {
//   console.log('Loading model...');
//   falconMesh = gltf.scene; // Assign loaded model to the variable

//   falconMesh.traverse((child) => {
//     if (child.isMesh) {
//       child.castShadow = true;
//       child.receiveShadow = true;
//     }
//   });

//   // Set initial position at the center
//   falconMesh.position.set(0, 0, 0);
//   scene.add(falconMesh);

//   document.getElementById('progress-container').style.display = 'none';
// }, (xhr) => {
//   console.log(`Loading ${xhr.loaded / xhr.total * 100}%`);
// }, (error) => {
//   console.error(error);
// });

// window.addEventListener('resize', () => {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// });

// function moveSceneToCorner() {
//   // Scale down the entire scene and move it to the bottom-right corner
//   scene.scale.set(0.2, 0.2, 0.2); // Scale down the scene (adjust scale as needed)
  
//   // Adjust the scene's position to the bottom-right corner of the screen
//   scene.position.set(window.innerWidth / 4, -window.innerHeight / 3.5, 0);
  
//   camera.position.set(0, 3, 10); // Adjust camera position for the smaller scene
//   camera.lookAt(0, 0, 0);
  
//   isScaledDown = true;
// }

// function animate() {
//   requestAnimationFrame(animate);
//   controls.update();

//   // Initially move the Millennium Falcon model upward
//   if (falconMesh && !isScaledDown) {
//     if (falconMesh.position.y < 5) {
//       falconMesh.position.y += 0.01; // Adjust speed of upward movement here
//     } else {
//       moveSceneToCorner(); // Once the model moves up, scale down the scene and move to corner
//     }
//   }

//   renderer.render(scene, camera);
// }

// animate();



// import * as THREE from 'three';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// // Create the renderer
// const renderer = new THREE.WebGLRenderer({ antialias: true, canvas: document.getElementById('canvas') }); // Use the new canvas
// renderer.outputColorSpace = THREE.SRGBColorSpace;

// renderer.setSize(400, 300); // Set the size to match the card dimensions
// renderer.setClearColor(0x000000);
// renderer.setPixelRatio(window.devicePixelRatio);

// // Create the scene
// const scene = new THREE.Scene();

// // Set up the camera
// const camera = new THREE.PerspectiveCamera(45, 400 / 300, 1, 1000);
// camera.position.set(0, 2, 5); // Adjust camera position to see the model clearly

// // Add orbit controls
// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.enablePan = true; // Enable pan if you want to move around
// controls.target.set(0, 0, 0); // Set the target point to look at
// controls.update();

// // Add lighting
// const ambientLight = new THREE.AmbientLight(0x404040); // Soft white light
// scene.add(ambientLight);

// const spotLight = new THREE.SpotLight(0xffffff, 2);
// spotLight.position.set(10, 10, 10);
// spotLight.castShadow = true;
// scene.add(spotLight);

// // Load the Millennium Falcon model
// const loader = new GLTFLoader().setPath('public/millennium_falcon/');
// loader.load('scene.gltf', (gltf) => {
//     console.log('Loading model...');
//     const falconMesh = gltf.scene; // Get the loaded model

//     // Set the model's position (X, Y, Z)
//     falconMesh.position.set(0, 0, 0); // Center of the scene (change as needed)

//     falconMesh.traverse((child) => {
//         if (child.isMesh) {
//             child.castShadow = true;
//             child.receiveShadow = true;
//         }
//     });

//     scene.add(falconMesh); // Add the model to the scene

//     document.getElementById('progress-container').style.display = 'none'; // Hide progress indicator
// }, (xhr) => {
//     console.log(`Loading ${xhr.loaded / xhr.total * 100}%`);
// }, (error) => {
//     console.error(error);
// });

// // Handle window resizing
// window.addEventListener('resize', () => {
//     // Adjust camera and renderer size based on the card dimensions
//     camera.aspect = 400 / 300;
//     camera.updateProjectionMatrix();
//     renderer.setSize(400, 300);
// });

// // Animation loop
// function animate() {
//     requestAnimationFrame(animate);
//     controls.update();
//     renderer.render(scene, camera);
// }

// animate();




// import * as THREE from 'three';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// // Create the renderer
// const renderer = new THREE.WebGLRenderer({ antialias: true, canvas: document.getElementById('canvas'), alpha: true }); // Set alpha to true for transparency
// renderer.outputColorSpace = THREE.SRGBColorSpace;

// renderer.setSize(400, 300); // Set the size to match the card dimensions
// renderer.setClearColor(0x000000, 0); // Set the background to be transparent
// renderer.setPixelRatio(window.devicePixelRatio);

// // Create the scene
// const scene = new THREE.Scene();

// // Set up the camera
// const camera = new THREE.PerspectiveCamera(45, 400 / 300, 1, 1000);
// camera.position.set(0, 2, 5); // Adjust camera position to see the model clearly

// // Add orbit controls
// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.enablePan = true; // Enable pan if you want to move around
// controls.target.set(0, 0, 0); // Set the target point to look at
// controls.update();

// // Add lighting
// const ambientLight = new THREE.AmbientLight(0x404040); // Soft white light
// scene.add(ambientLight);

// const spotLight = new THREE.SpotLight(0xffffff, 2);
// spotLight.position.set(10, 10, 10);
// spotLight.castShadow = true;
// scene.add(spotLight);

// // Load the Millennium Falcon model
// const loader = new GLTFLoader().setPath('public/millennium_falcon/');
// loader.load('scene.gltf', (gltf) => {
//     console.log('Loading model...');
//     const falconMesh = gltf.scene; // Get the loaded model

//     // Set the model's position (X, Y, Z)
//     falconMesh.position.set(0, 0, 0); // Center of the scene (change as needed)

//     falconMesh.traverse((child) => {
//         if (child.isMesh) {
//             child.castShadow = true;
//             child.receiveShadow = true;
//         }
//     });

//     scene.add(falconMesh); // Add the model to the scene

//     document.getElementById('progress-container').style.display = 'none'; // Hide progress indicator
// }, (xhr) => {
//     console.log(`Loading ${xhr.loaded / xhr.total * 100}%`);
// }, (error) => {
//     console.error(error);
// });

// // Handle window resizing
// window.addEventListener('resize', () => {
//     // Adjust camera and renderer size based on the card dimensions
//     camera.aspect = 400 / 300;
//     camera.updateProjectionMatrix();
//     renderer.setSize(400, 300);
// });

// // Animation loop
// function animate() {
//     requestAnimationFrame(animate);
//     controls.update();
//     renderer.render(scene, camera);
// }

// animate();





































// import * as THREE from 'three';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// // Create the renderer
// const renderer = new THREE.WebGLRenderer({ antialias: true, canvas: document.getElementById('canvas'), alpha: true }); // Set alpha to true for transparency
// renderer.outputColorSpace = THREE.SRGBColorSpace;

// renderer.setSize(400, 300); // Set the size to match the card dimensions
// renderer.setClearColor(0x000000, 0); // Set the background to be transparent
// renderer.setPixelRatio(window.devicePixelRatio);

// // Create the scene
// const scene = new THREE.Scene();

// // Set up the camera
// const camera = new THREE.PerspectiveCamera(45, 400 / 300, 1, 1000);
// camera.position.set(0, 2, 5); // Adjust camera position to see the model clearly

// // Add orbit controls
// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.enablePan = true; // Enable pan if you want to move around
// controls.target.set(0, 0, 0); // Set the target point to look at
// controls.update();

// // Add lighting
// const ambientLight = new THREE.AmbientLight(0x404040); // Soft white light
// scene.add(ambientLight);

// const spotLight = new THREE.SpotLight(0xffffff, 2);
// spotLight.position.set(10, 10, 10);
// spotLight.castShadow = true;
// scene.add(spotLight);

// // Load the Millennium Falcon model
// const loader = new GLTFLoader().setPath('public/millennium_falcon/');
// loader.load('scene.gltf', (gltf) => {
//     console.log('Loading model...');
//     const falconMesh = gltf.scene; // Get the loaded model

//     // Set the model's position (X, Y, Z)
//     falconMesh.position.set(0, 0, 0); // Center of the scene (change as needed)

//     falconMesh.traverse((child) => {
//         if (child.isMesh) {
//             child.castShadow = true;
//             child.receiveShadow = true;
//         }
//     });

//     scene.add(falconMesh); // Add the model to the scene

//     document.getElementById('progress-container').style.display = 'none'; // Hide progress indicator
//     document.getElementById('card').style.transform = 'translateY(0)'; // Slide the card up
// }, (xhr) => {
//     console.log(`Loading ${xhr.loaded / xhr.total * 100}%`);
// }, (error) => {
//     console.error(error);
// });

// // Handle window resizing
// window.addEventListener('resize', () => {
//     // Adjust camera and renderer size based on the card dimensions
//     camera.aspect = 400 / 300;
//     camera.updateProjectionMatrix();
//     renderer.setSize(400, 300);
// });

// // Animation loop
// function animate() {
//     requestAnimationFrame(animate);
//     controls.update();
//     renderer.render(scene, camera);
// }

// animate();



// import * as THREE from 'three';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// // Create the renderer
// const renderer = new THREE.WebGLRenderer({ antialias: true, canvas: document.getElementById('canvas'), alpha: true }); // Set alpha to true for transparency
// renderer.outputColorSpace = THREE.SRGBColorSpace;

// renderer.setSize(400, 300); // Set the size to match the card dimensions
// renderer.setClearColor(0x000000, 0); // Set the background to be transparent
// renderer.setPixelRatio(window.devicePixelRatio);

// // Create the scene
// const scene = new THREE.Scene();

// // Set up the camera
// const camera = new THREE.PerspectiveCamera(45, 400 / 300, 1, 1000);
// camera.position.set(0, 2, 5); // Adjust camera position to see the model clearly

// // Add orbit controls
// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.enablePan = true; // Enable pan if you want to move around
// controls.target.set(0, 0, 0); // Set the target point to look at
// controls.update();

// // Add lighting
// const ambientLight = new THREE.AmbientLight(0x404040); // Soft white light
// scene.add(ambientLight);

// const spotLight = new THREE.SpotLight(0xffffff, 2);
// spotLight.position.set(10, 10, 10);
// spotLight.castShadow = true;
// scene.add(spotLight);

// // Load the Millennium Falcon model
// const loader = new GLTFLoader().setPath('public/millennium_falcon/');
// loader.load('scene.gltf', (gltf) => {
//     console.log('Loading model...');
//     const falconMesh = gltf.scene; // Get the loaded model

//     // Set the model's position (X, Y, Z)
//     falconMesh.position.set(0, 0, 0); // Center of the scene (change as needed)

//     falconMesh.traverse((child) => {
//         if (child.isMesh) {
//             child.castShadow = true;
//             child.receiveShadow = true;
//         }
//     });

//     scene.add(falconMesh); // Add the model to the scene

//     document.getElementById('card').style.bottom = 'calc(100vh - 300px)'; // Slide the card to the top of the screen
// }, (xhr) => {
//     console.log(`Loading ${xhr.loaded / xhr.total * 100}%`);
// }, (error) => {
//     console.error(error);
// });

// // Handle window resizing
// window.addEventListener('resize', () => {
//     // Adjust camera and renderer size based on the card dimensions
//     camera.aspect = 400 / 300;
//     camera.updateProjectionMatrix();
//     renderer.setSize(400, 300);
// });

// // Animation loop
// function animate() {
//     requestAnimationFrame(animate);
    
//     controls.update();
//     renderer.render(scene, camera);
// }

// animate();


// import * as THREE from 'three';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// // Create the renderer
// const renderer = new THREE.WebGLRenderer({ antialias: true, canvas: document.getElementById('canvas'), alpha: true }); // Set alpha to true for transparency
// renderer.outputColorSpace = THREE.SRGBColorSpace;

// renderer.setSize(400, 300); // Set the size to match the card dimensions
// renderer.setClearColor(0x000000, 0); // Set the background to be transparent
// renderer.setPixelRatio(window.devicePixelRatio);

// // Create the scene
// const scene = new THREE.Scene();

// // Set up the camera
// const camera = new THREE.PerspectiveCamera(45, 400 / 300, 1, 1000);
// camera.position.set(0, 2, 5); // Adjust camera position to see the model clearly

// // Add orbit controls
// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.enablePan = true; // Enable pan if you want to move around
// controls.target.set(0, 0, 0); // Set the target point to look at
// controls.update();

// // Add lighting
// const ambientLight = new THREE.AmbientLight(0x404040); // Soft white light
// scene.add(ambientLight);

// const spotLight = new THREE.SpotLight(0xffffff, 2);
// spotLight.position.set(10, 10, 10);
// spotLight.castShadow = true;
// scene.add(spotLight);

// // Variable to control rotation state
// let isRotating = false; // Rotation state
// let falconMesh; // Declare falconMesh outside the loader scope for accessibility

// // Load the Millennium Falcon model
// const loader = new GLTFLoader().setPath('public/millennium_falcon/');
// loader.load('scene.gltf', (gltf) => {
//     console.log('Loading model...');
//     falconMesh = gltf.scene; // Get the loaded model

//     // Set the model's position (X, Y, Z)
//     falconMesh.position.set(0, 0, 0); // Center of the scene (change as needed)

//     falconMesh.traverse((child) => {
//         if (child.isMesh) {
//             child.castShadow = true;
//             child.receiveShadow = true;
//         }
//     });

//     scene.add(falconMesh); // Add the model to the scene

//     // Slide the card to the top of the screen
//     document.getElementById('card').style.bottom = 'calc(100vh - 300px)'; 
    
//     // Start rotation after a brief delay
//     setTimeout(() => {
//         isRotating = true; // Enable rotation
//     }, 1000); // Adjust this delay as needed
// }, (xhr) => {
//     console.log(`Loading ${xhr.loaded / xhr.total * 100}%`);
// }, (error) => {
//     console.error(error);
// });

// // Handle window resizing
// window.addEventListener('resize', () => {
//     // Adjust camera and renderer size based on the card dimensions
//     camera.aspect = 400 / 300;
//     camera.updateProjectionMatrix();
//     renderer.setSize(400, 300);
// });

// // Animation loop
// function animate() {
//     requestAnimationFrame(animate);
    
//     // Update rotation if isRotating is true
//     if (isRotating && falconMesh) {
//         falconMesh.rotation.y += 0.01; // Rotate around the Y-axis (right)
//     }

//     controls.update();
//     renderer.render(scene, camera);
// }

// animate();





import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Create the renderer
const renderer = new THREE.WebGLRenderer({ antialias: true, canvas: document.getElementById('canvas'), alpha: true }); // Set alpha to true for transparency
renderer.outputColorSpace = THREE.SRGBColorSpace;

renderer.setSize(400, 300); // Set the size to match the card dimensions
renderer.setClearColor(0x000000, 0); // Set the background to be transparent
renderer.setPixelRatio(window.devicePixelRatio);

// Create the scene
const scene = new THREE.Scene();

// Set up the camera
const camera = new THREE.PerspectiveCamera(45, 400 / 300, 1, 1000);
camera.position.set(0, 2, 5); // Adjust camera position to see the model clearly

// Add orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enablePan = true; // Enable pan if you want to move around
controls.target.set(0, 0, 0); // Set the target point to look at
controls.update();

// Add lighting
const ambientLight = new THREE.AmbientLight(0x404040); // Soft white light
scene.add(ambientLight);

const spotLight = new THREE.SpotLight(0xffffff, 2);
spotLight.position.set(10, 10, 10);
spotLight.castShadow = true;
scene.add(spotLight);

// Variable to control rotation state
let isRotating = false; // Rotation state
let falconMesh; // Declare falconMesh outside the loader scope for accessibility

// Load the Millennium Falcon model
const loader = new GLTFLoader().setPath('public/millennium_falcon/');
loader.load('scene.gltf', (gltf) => {
    console.log('Loading model...');
    falconMesh = gltf.scene; // Get the loaded model

    // Set the model's position (X, Y, Z)
    falconMesh.position.set(0, 0, 0); // Center of the scene (change as needed)

    falconMesh.traverse((child) => {
        if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
        }
    });

    scene.add(falconMesh); // Add the model to the scene

    // Slide the card to the top of the screen
    document.getElementById('card').style.bottom = 'calc(100vh - 300px)'; 
    
    // Start rotation after a brief delay
    setTimeout(() => {
        isRotating = true; // Enable rotation
    }, 1000); // Adjust this delay as needed

    // Move the card to the bottom right after 2 seconds
    setTimeout(() => {
        document.getElementById('card').style.bottom = '20px'; // Set the bottom position
        document.getElementById('card').style.right = '20px'; // Set the right position
    }, 3000); // Move after 2 seconds at the top
}, (xhr) => {
    console.log(`Loading ${xhr.loaded / xhr.total * 100}%`);
}, (error) => {
    console.error(error);
});

// Handle window resizing
window.addEventListener('resize', () => {
    // Adjust camera and renderer size based on the card dimensions
    camera.aspect = 400 / 300;
    camera.updateProjectionMatrix();
    renderer.setSize(400, 300);
});

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    
    // Update rotation if isRotating is true
    if (isRotating && falconMesh) {
        falconMesh.rotation.y += 0.01; // Rotate around the Y-axis (right)
    }

    controls.update();
    renderer.render(scene, camera);
}

animate();
