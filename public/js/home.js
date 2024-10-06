const scene=new THREE.Scene();
const camera = new THREE.OrthographicCamera(
    -5 * (window.innerWidth / window.innerHeight),
    5 * (window.innerWidth / window.innerHeight),   
    5,             
    -5,               
    0.1,            
    1000               
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(20, 20);
document.body.appendChild(renderer.domElement);
const textureLoader = new THREE.TextureLoader();
const neptuneTexture2=textureLoader.load('./../js/warm.jpg');
const exoTexture=textureLoader.load('./../js/ke.jpg');
const earthGeometry = new THREE.SphereGeometry(2,32,32);
const earthMaterial = new THREE.MeshStandardMaterial({ map:neptuneTexture2 });
const Earth = new THREE.Mesh(earthGeometry, earthMaterial);
Earth.position.set(-2,0,0);
Earth.scale.set(1,1,1); 
scene.add(Earth);
const ambientLight = new THREE.AmbientLight(0xffffff, 1);  
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 1); 
directionalLight.position.set(5, 5, 5)
directionalLight.castShadow = true;     
scene.add(directionalLight);
camera.position.z = 5;
function animate() {
    requestAnimationFrame(animate);
    Earth.rotation.y += 0.001;
    renderer.render(scene, camera);
}
animate();
window.addEventListener('resize', () => {
    const aspectRatio = window.innerWidth / window.innerHeight;
    camera.left = -5 * aspectRatio;   
    camera.right = 5 * aspectRatio;   
    camera.top = 5;                    
    camera.bottom = -5;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});