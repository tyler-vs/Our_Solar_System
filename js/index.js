
var apps = [];

  init();
  animate();

			function init() {

				var w = 460;	// max width for planet Views
				var h = 460;	// max height, predetermined to work w/ 960gs
        
        var container1 = document.getElementById('container1');
        var container2 = document.getElementById('container2');
        var container3 = document.getElementById('container3');
        var container4 = document.getElementById('container4');
        var container5 = document.getElementById('container5');
        var container6 = document.getElementById('container6');
        var container7 = document.getElementById('container7');
        var container8 = document.getElementById('container8');
        var container9 = document.getElementById('container9');
        
//         fov = 20;

				var fullWidth = w * 2;
				var fullHeight = h * 2;

				apps.push( new App( 'container1', fullWidth, fullHeight, w * 0, h * 0, container1.clientWidth, container1.clientHeight ) );
				apps.push( new App( 'container2', fullWidth, fullHeight, w * 1, h * 0, container2.clientWidth, container2.clientHeight ) );
				apps.push( new App( 'container3', fullWidth, fullHeight, w * 0, h * 1, container3.clientWidth, container3.clientHeight ) );
				apps.push( new App( 'container4', fullWidth, fullHeight, w * 1, h * 1, container4.clientWidth, container4.clientHeight ) );
        apps.push( new App( 'container5', fullWidth, fullHeight, w * 1, h * 1, container5.clientWidth, container5.clientHeight ) );
        apps.push( new App( 'container6', fullWidth, fullHeight, w * 1, h * 1, container6.clientWidth, container6.clientHeight ) );
        apps.push( new App( 'container7', fullWidth, fullHeight, w * 1, h * 1, container7.clientWidth, container7.clientHeight ) );
        apps.push( new App( 'container8', fullWidth, fullHeight, w * 1, h * 1, container8.clientWidth, container8.clientHeight ) );
        apps.push( new App( 'container9', fullWidth, fullHeight, w * 1, h * 1, container9.clientWidth, container9.clientHeight ) );

			}

			function animate() {

				for ( var i = 0; i < apps.length; ++i ) {

					apps[ i ].animate();

				}

				requestAnimationFrame( animate );

			}



// main function

			function App( containerId, fullWidth, fullHeight, viewX, viewY, viewWidth, viewHeight, fov ) {

        
  // init variables 
				var container, stats;

				var camera, scene, renderer;

				var mesh, group1, group2, group3, light;
        
        var sunGroup, 
              mercuryGroup, 
              venusGroup, 
              earthGroup, 
              marsGroup,
              jupiterGroup, 
              saturnGroup, 
              uranusGroup, 
              neptuneGroup;

				var mouseX = 0, mouseY = 0;

				var windowHalfX = window.innerWidth / 2;
				var windowHalfY = window.innerHeight / 2;

				init();

				function init() {
          
          // grab container
					container = document.getElementById( containerId );

         
          
          // create our camera.
					camera = new THREE.PerspectiveCamera( 20, container.clientWidth / container.clientHeight, 1, 10000 );
// 					camera.setViewOffset( fullWidth, fullHeight, viewX, viewY, viewWidth, viewHeight );
// 					camera.position.z = 1800;
          camera.position.z = 3000;	// sets to this if fails switch statement;

					scene = new THREE.Scene();

					light = new THREE.DirectionalLight( 0xffffff );
					light.position.set( 0, 0, 1 ).normalize();
					scene.add( light );

					// shadow


      var geometrySun = new THREE.SphereGeometry(80,10,10),
          geometryMercury = new THREE.SphereGeometry(10,10,10),
          geometryVenus = new THREE.SphereGeometry(10,10,10),
          geometryEarth = new THREE.SphereGeometry(30,10,10),
          geometryMars = new THREE.SphereGeometry(30,10,10),
          geometryJupiter = new THREE.SphereGeometry(50, 10,10),
          geometrySaturn = new THREE.SphereGeometry(50,10,10),
          geometryUranus = new THREE.SphereGeometry(40,10,10),
          geometryNeptune = new THREE.SphereGeometry(40,10,10);
          
          var planetColors = {
            sun: '#F5D76E',
            mercury: '#F9690E',
            venus: '#F89406',
            earth: '#26C281',
            mars: '#EF4836',
            jupiter: '#4183D7',
            saturn: '#03A678',
            uranus: '#AEA8D3',
            neptune: '95A5A6 '
          };


/*					
var materials = [
    new THREE.MeshLambertMaterial( { color: 0x03A678, shading: THREE.FlatShading, vertexColors: THREE.VertexColors } ),
    new THREE.MeshBasicMaterial( {  wireframe: true, transparent: true } ) ];*/
          
var sunMats = [
  new THREE.MeshLambertMaterial( { color: planetColors.sun } ),
  new THREE.MeshBasicMaterial( {  wireframe: true } )
];
          
var mercuryMats = [
  new THREE.MeshLambertMaterial( { color: planetColors.mercury } ),
  new THREE.MeshBasicMaterial( {  wireframe: true, transparent: true } )
];
          
var venusMats = [
	new THREE.MeshLambertMaterial( { color: planetColors.venus, shading: THREE.FlatShading, vertexColors: THREE.VertexColors } ),
	new THREE.MeshBasicMaterial( {  wireframe: true, transparent: true } )
];
          
var earthMats = [
  new THREE.MeshLambertMaterial( { color: planetColors.earth, shading: THREE.FlatShading, vertexColors: THREE.VertexColors } ),
  new THREE.MeshBasicMaterial( {  wireframe: true, transparent: true } )
];
          
var marsMats = [
  new THREE.MeshLambertMaterial( { color: planetColors.mars, shading: THREE.FlatShading, vertexColors: THREE.VertexColors } ),
	new THREE.MeshBasicMaterial( {  wireframe: true, transparent: true } )
];
          
var jupiterMats = [
	new THREE.MeshLambertMaterial( { color: planetColors.jupiter, shading: THREE.FlatShading, vertexColors: THREE.VertexColors } ),
	new THREE.MeshBasicMaterial( {  wireframe: true, transparent: true } )
];
          
var saturnMats = [
	new THREE.MeshLambertMaterial( { color: planetColors.saturn, shading: THREE.FlatShading, vertexColors: THREE.VertexColors } ),
	new THREE.MeshBasicMaterial( {  wireframe: true, transparent: true } )
];
          
var uranusMats = [
	new THREE.MeshLambertMaterial( { color: planetColors.uranus, shading: THREE.FlatShading, vertexColors: THREE.VertexColors } ),
	new THREE.MeshBasicMaterial( {  wireframe: true, transparent: true } )
];
          
var neptuneMats = [
	new THREE.MeshLambertMaterial( { color: planetColors.neptune, shading: THREE.FlatShading, vertexColors: THREE.VertexColors } ),
	new THREE.MeshBasicMaterial( {  wireframe: true, transparent: true } )
];
          
          
          
          
/*          
save to load image maps
var planetMats = {
            sun:	new.MeshLambertMaterial({color: 0xffffff }),
          }
        
        	var sunMaterials = [
            var texture = THREE.ImageUtils.loadTexture('http://www.planetaryvisions.com/images_new/35.jpg'),
            new THREE.MeshLambertMaterial({ color: 0xffffff});
          ];
*/
          
          var solarScale = d3.scale.linear()
                    .domain([0, 100])
                    .range([10, 1600]);
          
          sunGroup = THREE.SceneUtils.createMultiMaterialObject( geometrySun, sunMats );
					sunGroup.position.x = solarScale(0);
          sunGroup.position.y = 0;
// 					sunGroup.rotation.x = -1.87;
					scene.add( sunGroup );
          
          mercuryGroup = THREE.SceneUtils.createMultiMaterialObject( geometryMercury, mercuryMats );
					mercuryGroup.position.x = solarScale(10);
					scene.add( mercuryGroup );
          
          venusGroup = THREE.SceneUtils.createMultiMaterialObject( geometryVenus, venusMats );
					venusGroup.position.x = solarScale(20);
					scene.add( venusGroup );
          
          earthGroup = THREE.SceneUtils.createMultiMaterialObject( geometryEarth, earthMats );
					earthGroup.position.x = solarScale(25)
					scene.add( earthGroup );
          
          marsGroup = THREE.SceneUtils.createMultiMaterialObject( geometryMars, marsMats );
					marsGroup.position.x = solarScale(30);
					scene.add( marsGroup );
          
          jupiterGroup = THREE.SceneUtils.createMultiMaterialObject( geometryJupiter, jupiterMats );
					jupiterGroup.position.x = solarScale(50);
					scene.add( jupiterGroup );
          
          saturnGroup = THREE.SceneUtils.createMultiMaterialObject( geometrySaturn, saturnMats );
					saturnGroup.position.x = solarScale(60);
					scene.add( saturnGroup );
          
          uranusGroup = THREE.SceneUtils.createMultiMaterialObject( geometryUranus, uranusMats );
					uranusGroup.position.x = solarScale(70);
					scene.add( uranusGroup );
          
          neptuneGroup = THREE.SceneUtils.createMultiMaterialObject( geometryNeptune, neptuneMats );
					neptuneGroup.position.x = solarScale(77);
					scene.add( neptuneGroup );
          
          


					renderer = new THREE.WebGLRenderer( { antialias: true } );
					renderer.setClearColor( 0xffffff );
					renderer.setPixelRatio( window.devicePixelRatio );
					renderer.setSize( container.clientWidth, container.clientHeight );
					container.appendChild( renderer.domElement );

					stats = new Stats();
					stats.domElement.style.position = 'absolute';
					stats.domElement.style.top = '0px';
					container.appendChild( stats.domElement );
					
          
          // does not apply yet
					document.addEventListener( 'mousemove', onDocumentMouseMove, false );

				}
        
        
        // does not apply yet.

				function onDocumentMouseMove( event ) {

					mouseX = ( event.clientX - windowHalfX );
					mouseY = ( event.clientY - windowHalfY );

				}

				// calls render();

				this.animate = function() {

					render();
					stats.update();

				};

				function render() {
          
//           var thisScene = scene.position;

/*					camera.position.x += ( mouseX - camera.position.x ) * 0.05;
					camera.position.y += ( - mouseY - camera.position.y ) * 0.05;*/
          camera.position.x = 90;
          camera.position.y = 90;
          
          
          
          sunGroup.rotation.y += 0.001;
          mercuryGroup.rotation.y += 0.003;
          venusGroup.rotation.y += 0.01;
          earthGroup.rotation.y += 0.02;
          marsGroup.rotation.y += 0.002;
          jupiterGroup.rotation.y += 0.002;
          saturnGroup.rotation.y += 0.003;
          uranusGroup.rotation.y += 0.002;
          neptuneGroup.rotation.y += 0.03;
          
          switch(containerId){
            case 'container1':
              camera.position.x = sunGroup.position.x * 1;
              camera.position.y = sunGroup.position.x * -.1;
              camera.position.z = 600;
              camera.lookAt( sunGroup.position );
              break;
            case 'container2':
              camera.position.x = mercuryGroup.position.x * 1;
              camera.position.y = mercuryGroup.position.x * .01;
              camera.position.z = 100;
              camera.lookAt( mercuryGroup.position );
              break;
            case 'container3':
              camera.position.x = venusGroup.position.x * 1;
              camera.position.y = venusGroup.position.x * .01;
              camera.position.z = 100;
              camera.lookAt( venusGroup.position );
              break;
            case 'container4':
              camera.position.x = earthGroup.position.x * 1;
              camera.position.y = earthGroup.position.x * .01;
              camera.position.z = 200;
              camera.lookAt( earthGroup.position );
              break;
            case 'container5':
              camera.position.x = marsGroup.position.x * 1;
              camera.position.y = marsGroup.position.x * .01;
              camera.position.z = 200;
              camera.lookAt( marsGroup.position );
              break;
            case 'container6':
              camera.position.x = jupiterGroup.position.x * 1;
              camera.position.y = jupiterGroup.position.x * .01;
              camera.position.z = 600;
              camera.lookAt( jupiterGroup.position );
              break;
            case 'container7':
              camera.position.x = saturnGroup.position.x * 1;
              camera.position.y = saturnGroup.position.x * .01;
              camera.position.z = 400;
              camera.lookAt( saturnGroup.position );
              break;
            case 'container8':
              camera.position.x = uranusGroup.position.x * 1;
              camera.position.y = uranusGroup.position.x * .01;
              camera.position.z = 400;
              camera.lookAt( uranusGroup.position );
              break;
            case 'container9':
              camera.position.x = neptuneGroup.position.x * 1;
              camera.position.y = neptuneGroup.position.x * .01;
              camera.position.z = 400;
              camera.lookAt( neptuneGroup.position );
              break;
            default:
              camera.lookAt(scene.position);
          }

					renderer.render( scene, camera );

				}

			}