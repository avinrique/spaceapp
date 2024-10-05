// window.onload = function() {
//   const video = document.getElementById('bigBangVideo');
//   //video-containe
  

//   // Pause the video initially
//   video.pause();

//   // Set a 2-second delay before playing the video
//   setTimeout(() => {
//     video.play(); // Start the video after 2 seconds
//   }, 2000);

//   // Set a timeout to shrink the video at 15 seconds
//   setTimeout(() => {
//     video.pause(); // Pause the video at 15 seconds
//     console.log("Shrinking video...");
//     // Apply shrinking effect with a transition
//     video.remove(); // Remove the video element from the DOM
//     console.log("Video element removed from DOM.");

//   }, 15000); // Shrink the video after 15 seconds
// };


// window.onload = function() {
//   // Create video container
//   const videoContainer = document.createElement('div');
//   videoContainer.className = 'video-container';
//   document.body.appendChild(videoContainer);

//   // Create video element
//   const video = document.createElement('video');
//   video.id = 'bigBangVideo';
//   video.autoplay = true;
//   video.muted = true;
//   video.loop = true;
//   video.playsInline = true;

//   const source = document.createElement('source');
//   source.src = 'videoplayback.mp4';
//   source.type = 'video/mp4';
  
//   video.appendChild(source);
//   videoContainer.appendChild(video);

//   // Create overlay text
//   const overlayText = document.createElement('div');
//   overlayText.className = 'overlay-text';
//   overlayText.id = 'overlayText';
//   overlayText.innerText = 'The Big Bang';
//   videoContainer.appendChild(overlayText);

//   // Pause the video initially
//   video.pause();

//   // Set a 2-second delay before playing the video
//   setTimeout(() => {
//     video.play(); // Start the video after 2 seconds
//   }, 2000);

//   // Set a timeout to remove the video and overlay text after 15 seconds
//   setTimeout(() => {
//     video.pause(); // Pause the video
//     console.log("Removing video and overlay text...");

//     // Remove video element from the DOM
//     videoContainer.remove();
//     console.log("Video element and overlay text removed from DOM.");

//   }, 15000); // Remove elements after 15 seconds
// };

















import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Create a function to initialize the 3D scene
function init3DScene() {
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
  
}

// Function to remove the video elements and display the 3D scene
function display3DModel() {
    // Remove video elements
    const videoContainer = document.querySelector('.video-container');
    if (videoContainer) {
      
    }

    // Initialize the 3D scene
    init3DScene();
    setTimeout(()=>{
      videoContainer.remove();
    },2000)
    
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
    }, 4000);

    // Set a timeout to remove the video and overlay text after 15 seconds
    setTimeout(() => {
     ;
        ; // Pause the video
        console.log("Removing video and overlay text...");
        
        // Remove video elements and display 3D model
        setTimeout(()=>{
          display3DModel()
        },5000)
    }, 15000); // Remove elements after 15 seconds
}

// Start the process by creating the video container
createVideoContainer();
