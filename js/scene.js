// Three.js Scene Setup
function initHeroScene() {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
        canvas: canvas, 
        alpha: true,
        antialias: true 
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Camera position
    camera.position.z = 5;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x00ffff, 1);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x9d4edd, 0.5);
    pointLight2.position.set(-10, -10, -10);
    scene.add(pointLight2);

    // Create floating cubes
    const cubes = [];
    const cubeGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    
    const cubeMaterial = new THREE.MeshStandardMaterial({
        color: 0x00ffff,
        emissive: 0x00ffff,
        emissiveIntensity: 0.5,
        metalness: 0.8,
        roughness: 0.2
    });

    const cubePositions = [
        [-2, 0, 0],
        [2, 1, -1],
        [1, -1, -2]
    ];

    cubePositions.forEach(pos => {
        const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cube.position.set(...pos);
        cube.userData = {
            initialY: pos[1],
            floatSpeed: 0.5 + Math.random() * 0.5,
            floatOffset: Math.random() * Math.PI * 2
        };
        cubes.push(cube);
        scene.add(cube);
    });

    // Create floating spheres
    const spheres = [];
    const sphereGeometry = new THREE.SphereGeometry(0.3, 32, 32);
    
    const sphereMaterial = new THREE.MeshStandardMaterial({
        color: 0x9d4edd,
        emissive: 0x9d4edd,
        emissiveIntensity: 0.6,
        metalness: 0.9,
        roughness: 0.1
    });

    const spherePositions = [
        [0, -1, 1],
        [3, -0.5, 0],
        [-3, 0.5, -1]
    ];

    spherePositions.forEach(pos => {
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere.position.set(...pos);
        sphere.userData = {
            initialY: pos[1],
            floatSpeed: 0.3 + Math.random() * 0.5,
            floatOffset: Math.random() * Math.PI * 2
        };
        spheres.push(sphere);
        scene.add(sphere);
    });

    // Create stars
    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.02,
        transparent: true,
        opacity: 0.8
    });

    const starsVertices = [];
    for (let i = 0; i < 5000; i++) {
        const x = (Math.random() - 0.5) * 200;
        const y = (Math.random() - 0.5) * 200;
        const z = (Math.random() - 0.5) * 200;
        starsVertices.push(x, y, z);
    }

    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3));
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (event) => {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    });

    // Animation
    let time = 0;
    function animate() {
        requestAnimationFrame(animate);
        time += 0.01;

        // Rotate and float cubes
        cubes.forEach(cube => {
            cube.rotation.x += 0.001;
            cube.rotation.y += 0.002;
            cube.position.y = cube.userData.initialY + Math.sin(time * cube.userData.floatSpeed + cube.userData.floatOffset) * 0.3;
        });

        // Rotate and float spheres
        spheres.forEach(sphere => {
            sphere.rotation.x += 0.002;
            sphere.rotation.y += 0.001;
            sphere.position.y = sphere.userData.initialY + Math.sin(time * sphere.userData.floatSpeed + sphere.userData.floatOffset) * 0.2;
        });

        // Rotate stars slowly
        stars.rotation.y += 0.0002;

        // Camera follows mouse slightly
        camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
        camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.05;
        camera.lookAt(scene.position);

        renderer.render(scene, camera);
    }

    animate();

    // Handle window resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

// Initialize scene when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHeroScene);
} else {
    initHeroScene();
}