import * as THREE from 'three';

// scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

// camera
const camera =new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

// object
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube); 


// lighting
const light = new THREE.DirectionalLight(0x12312f, 1);
light.position.set(0, 0, 1);
scene.add(light);

// renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// animate
function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();