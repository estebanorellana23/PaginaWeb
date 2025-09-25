import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Seleccionar el contenedor del globo
const container = document.getElementById('globe-container');

// Crear la escena
const scene = new THREE.Scene();

// Crear la cámara
const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
camera.position.z = 3;

// Crear el renderizador
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

// Crear la esfera (globo terráqueo)
const geometry = new THREE.SphereGeometry(1, 64, 64);
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('https://threejs.org/examples/textures/land_ocean_ice_cloud_2048.jpg');
const material = new THREE.MeshStandardMaterial({ map: texture });
const globe = new THREE.Mesh(geometry, material);
scene.add(globe);

// Agregar luz ambiental
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

// Agregar luz direccional
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(2, 2, 2);
scene.add(directionalLight);

// Agregar controles de órbita (rotación con el mouse)
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Animación
function animate() {
    requestAnimationFrame(animate);
    globe.rotation.y += 0.002;
    controls.update();
    renderer.render(scene, camera);
}
animate();

// Ajustar el tamaño al cambiar la ventana
window.addEventListener('resize', () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
});
