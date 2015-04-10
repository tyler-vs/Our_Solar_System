		var bitmap = new Image();
		bitmap.src = 'img/jupiter.jpg'; // Pre-load the bitmap, in conjunction with the Start button, to avoid any potential THREE.ImageUtils.loadTexture async issues.
		bitmap.onerror = function () {
		  console.error("Error loading: " + bitmap.src);
		}

		var scene = new THREE.Scene(); // Create a Three.js scene object.
		var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000); // Define the perspective camera's attributes.

		var renderer = window.WebGLRenderingContext ? new THREE.WebGLRenderer({ alpha: true }) : new THREE.CanvasRenderer(); // Fallback to canvas renderer, if necessary.
		renderer.setClearColor( 0x000000, 0);
		
		renderer.setSize(window.innerWidth/1.2, window.innerHeight/1.2); // Set the size of the WebGL viewport.
		// renderer.setSize($test.innerWidth, $test.innerHeight); -->
		// document.body.appendChild(renderer.domElement);  -->// Append the WebGL viewport to the DOM.
		document.getElementById("3Dsun").appendChild(renderer.domElement);
		
		// Be aware that a light source is required for MeshPhongMaterial to work:
		var pointLight = new THREE.PointLight(0xFFFFFF); // Set the color of the light source (white).
		pointLight.position.set(100, 100, 250); // Position the light source at (x, y, z).
		scene.add(pointLight); // Add the light source to the scene.

		var texture = THREE.ImageUtils.loadTexture(bitmap.src); // Create texture object based on the given bitmap path.
		var material = new THREE.MeshPhongMaterial({ map: texture }); // Create a material (for the spherical mesh) that reflects light, potentially causing sphere surface shadows.
		var geometry = new THREE.SphereGeometry(50, 64, 64); // Radius size, number of vertical segments, number of horizontal rings.

		var sphere = new THREE.Mesh(geometry, material); // Create a mesh based on the specified geometry (cube) and material (blue skin).
		scene.add(sphere); // Add the sphere at (0, 0, 0).

		camera.position.z = 150; // Move the camera away from the origin, down the positive z-axis.

		var render = function () {
		  sphere.rotation.x += 0.000; // Rotate the sphere by a small amount about the x- and y-axes.
		  sphere.rotation.y += 0.005;

		  renderer.render(scene, camera); // Each time we change the position of the cube object, we must re-render it.
		  requestAnimationFrame(render); // Call the render() function up to 60 times per second (i.e., up to 60 animation frames per second).
		};

	   // document.getElementById('startButton').addEventListener('click', function () {  -->
		 render(); // Start the rendering of the animation frames.
		// }, false);  
		
	//}; 