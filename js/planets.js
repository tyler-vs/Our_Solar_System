/*

this script allows our app to setup our THREE.js
renderers and planets.                                                          */

// this will hold all the planets
var apps = [];
// calls our main, overworld functions
init();
animate();


// function to grab containers and set up planets
function init() {


// sets up variables
var w = 460;  // max width for planet Views
var h = 460;  // max height, predetermined to work w/ 960gs

//
// grabs 9 differently located containers per planet.
var container1 = document.getElementById('container1');
var container2 = document.getElementById('container2');
var container3 = document.getElementById('container3');
var container4 = document.getElementById('container4');
// var container5 = document.getElementById('container5');
// var container6 = document.getElementById('container6');
// var container7 = document.getElementById('container7');
// var container8 = document.getElementById('container8');
// var container9 = document.getElementById('container9');


//
// field of vision variables, to pass into function for camera positioning
//
// fov = 20;
//


// we multiply the canvas size for our renderer by 2,
// this will help the camera get a good shot as most
// things coordinate origins are top left (0,0) , we need to
// multiply to make it center center (.5,.5).
//
// pass into the planet making function.
var fullWidth = w * 2;
var fullHeight = h * 2;


//
// pushing into our array variable `apps` each time
// we push it into the array we create a new planet
//
// function arguments are:
//                  containerId, fullWidth, fullHeight, viewX, viewY, viewWidth, viewHeight
apps.push( new App( 'container1', fullWidth, fullHeight, w * 0, h * 0, container1.clientWidth, container1.clientHeight ) );
apps.push( new App( 'container2', fullWidth, fullHeight, w * 1, h * 0, container2.clientWidth, container2.clientHeight ) );
apps.push( new App( 'container3', fullWidth, fullHeight, w * 0, h * 1, container3.clientWidth, container3.clientHeight ) );
apps.push( new App( 'container4', fullWidth, fullHeight, w * 1, h * 1, container4.clientWidth, container4.clientHeight ) );
// apps.push( new App( 'container5', fullWidth, fullHeight, w * 1, h * 1, container5.clientWidth, container5.clientHeight ) );
// apps.push( new App( 'container6', fullWidth, fullHeight, w * 1, h * 1, container6.clientWidth, container6.clientHeight ) );
// apps.push( new App( 'container7', fullWidth, fullHeight, w * 1, h * 1, container7.clientWidth, container7.clientHeight ) );
// apps.push( new App( 'container8', fullWidth, fullHeight, w * 1, h * 1, container8.clientWidth, container8.clientHeight ) );
// apps.push( new App( 'container9', fullWidth, fullHeight, w * 1, h * 1, container9.clientWidth, container9.clientHeight ) );
}
function animate() {
for ( var i = 0; i < apps.length; ++i ) {
apps[ i ].animate();
}
requestAnimationFrame( animate );
}
//
// main function, most argument are for camera
function App( containerId, fullWidth, fullHeight, viewX, viewY, viewWidth, viewHeight ) {

// init variables
var container, stats;
var camera, scene, renderer;
// not used.
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


// not used
var mouseX = 0, mouseY = 0;

// not really used
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;


init();

function init() {

// grab container
container = document.getElementById( containerId );


// create our camera.
camera = new THREE.PerspectiveCamera( 20, container.clientWidth / container.clientHeight, 1, 10000 );
// this gives a whole view perspective, the whole solar system scene.
// works against our up-close individual view of each planet.
//          camera.setViewOffset( fullWidth, fullHeight, viewX, viewY, viewWidth, viewHeight );
//          camera.position.z = 1800;
camera.position.z = 3000; // sets to this if fails switch statement;
scene = new THREE.Scene();
light = new THREE.DirectionalLight( 0xffffff );
light.position.set( 0, 0, 1 ).normalize();
scene.add( light );


//
// skipped shadowing part
//


/*  planet shapes, 
    
    add d3 planet sizing scales here.

=================== */

// size, horiz segments, verticle segments; more = smoother
var geometrySun =       new THREE.SphereGeometry( 80, 64, 64),
    geometryMercury =   new THREE.SphereGeometry( 10, 64, 64),
    geometryVenus =     new THREE.SphereGeometry( 10, 64, 64),
    geometryEarth =     new THREE.SphereGeometry( 30, 64, 64),
    geometryMars =      new THREE.SphereGeometry( 30, 64, 64),
    geometryJupiter =   new THREE.SphereGeometry( 50, 64, 64),
    geometrySaturn =    new THREE.SphereGeometry( 50, 64, 64),
    geometryUranus =    new THREE.SphereGeometry( 40, 64, 64),
    geometryNeptune =   new THREE.SphereGeometry( 40, 64, 64);
/*
not using we have textures now.
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
};*/
//
// planet textures
//
var planetTexture = {
sun:      THREE.ImageUtils.loadTexture('img/planets/sun.jpg'),
earth:    THREE.ImageUtils.loadTexture('img/planets/earth.jpg'),
jupiter:  THREE.ImageUtils.loadTexture('img/planets/jupiter.jpg'),
mars:     THREE.ImageUtils.loadTexture('img/planets/mars.jpg'),
mercury:  THREE.ImageUtils.loadTexture('img/planets/mercury.jpg'),
neptune:  THREE.ImageUtils.loadTexture('img/planets/neptune.jpg'),
pluto:    THREE.ImageUtils.loadTexture('img/planets/pluto.jpg'),
saturn:   THREE.ImageUtils.loadTexture('img/planets/saturn.jpg'),
uranus:   THREE.ImageUtils.loadTexture('img/planets/uranus.jpg'),
venus:    THREE.ImageUtils.loadTexture('img/planets/venus.jpg')
};

var planetBumps = {
  earth:   THREE.ImageUtils.loadTexture('images/earthbump1k.jpg'),
  mercury: THREE.ImageUtils.loadTexture('images/mercurybump1.jpg'),
  venus:   THREE.ImageUtils.loadTexture('images/venusbump.jpg'),
  mars:    THREE.ImageUtils.loadTexture('images/marsbump.jpg')
}
/*
var materials = [
new THREE.MeshLambertMaterial( { color: 0x03A678, shading: THREE.FlatShading, vertexColors: THREE.VertexColors } ),
new THREE.MeshBasicMaterial( {  wireframe: true, transparent: true } ) ];*/

var sunMats = [
new THREE.MeshPhongMaterial({map: planetTexture.sun }),
// new THREE.MeshLambertMaterial( { color: planetColors.sun } ),
// new THREE.MeshBasicMaterial( {  wireframe: true } )
];

var mercuryMats = [
// new THREE.MeshLambertMaterial( { color: planetColors.mercury } ),
new THREE.MeshPhongMaterial({map: planetTexture.mercury, bump: planetBumps.mercury }),
// new THREE.MeshBasicMaterial( {  wireframe: true, transparent: true } )
];

var venusMats = [
// new THREE.MeshLambertMaterial( { color: planetColors.venus, shading: THREE.FlatShading, vertexColors: THREE.VertexColors } ),
new THREE.MeshPhongMaterial({map: planetTexture.venus , bump: planetBumps.venus}),
// new THREE.MeshBasicMaterial( {  wireframe: true, transparent: true } )
];

var earthMats = [
// new THREE.MeshLambertMaterial( { color: planetColors.earth, shading: THREE.FlatShading, vertexColors: THREE.VertexColors } ),
new THREE.MeshPhongMaterial({map: planetTexture.earth , bump: planetBumps.earth}),
// new THREE.MeshBasicMaterial( {  wireframe: true, transparent: true } )
];

var marsMats = [
// new THREE.MeshLambertMaterial( { color: planetColors.mars, shading: THREE.FlatShading, vertexColors: THREE.VertexColors } ),
new THREE.MeshPhongMaterial({map: planetTexture.mars , bump: planetBumps.mars}),
// new THREE.MeshBasicMaterial( {  wireframe: true, transparent: true } )
];

var jupiterMats = [
new THREE.MeshPhongMaterial({map: planetTexture.jupiter }),
// new THREE.MeshLambertMaterial( { color: planetColors.jupiter, shading: THREE.FlatShading, vertexColors: THREE.VertexColors } ),
// new THREE.MeshBasicMaterial( {  wireframe: true, transparent: true } )
];

var saturnMats = [
new THREE.MeshPhongMaterial({map: planetTexture.saturn }),
// new THREE.MeshLambertMaterial( { color: planetColors.saturn, shading: THREE.FlatShading, vertexColors: THREE.VertexColors } ),
// new THREE.MeshBasicMaterial( {  wireframe: true, transparent: true } )
];

var uranusMats = [
new THREE.MeshPhongMaterial({map: planetTexture.uranus }),
// new THREE.MeshLambertMaterial( { color: planetColors.uranus, shading: THREE.FlatShading, vertexColors: THREE.VertexColors } ),
// new THREE.MeshBasicMaterial( {  wireframe: true, transparent: true } )
];

var neptuneMats = [
new THREE.MeshPhongMaterial({map: planetTexture.neptune }),
// new THREE.MeshLambertMaterial( { color: planetColors.neptune, shading: THREE.FlatShading, vertexColors: THREE.VertexColors } ),
// new THREE.MeshBasicMaterial( {  wireframe: true, transparent: true } )
];




/*

-already completed, can omit

save to load image maps
var planetMats = {
sun:  new.MeshLambertMaterial({color: 0xffffff }),
}

var sunMaterials = [
var texture = THREE.ImageUtils.loadTexture('http://www.planetaryvisions.com/images_new/35.jpg'),
new THREE.MeshLambertMaterial({ color: 0xffffff});
];
*/


// using d3 scales to easily scale distances of planets from the sun,
// the sun starts 0,0 and planets extend outward in x direction, not y.
var solarScale = d3.scale.linear()
.domain([0, 100])
.range([10, 1600]);


// 
// planet groups will create the planet geometry and apply the textures
// then position them using a d3 scale, scale is not accurate!
sunGroup = THREE.SceneUtils.createMultiMaterialObject( geometrySun, sunMats );
sunGroup.position.x = solarScale(0);
sunGroup.position.y = 0;  // y is defaulted fot other planets to 0, and not included.
//          sunGroup.rotation.x = -1.87;
scene.add( sunGroup );

// 
// mercury
// 
mercuryGroup = THREE.SceneUtils.createMultiMaterialObject( geometryMercury, mercuryMats );
mercuryGroup.position.x = solarScale(10);
scene.add( mercuryGroup );

//
// venus
// 
venusGroup = THREE.SceneUtils.createMultiMaterialObject( geometryVenus, venusMats );
venusGroup.position.x = solarScale(20);
scene.add( venusGroup );

// 
// earth
// 
earthGroup = THREE.SceneUtils.createMultiMaterialObject( geometryEarth, earthMats );
earthGroup.position.x = solarScale(25)
scene.add( earthGroup );

//
// mars
// 
marsGroup = THREE.SceneUtils.createMultiMaterialObject( geometryMars, marsMats );
marsGroup.position.x = solarScale(30);
scene.add( marsGroup );

// 
// jupiter
// 
jupiterGroup = THREE.SceneUtils.createMultiMaterialObject( geometryJupiter, jupiterMats );
jupiterGroup.position.x = solarScale(50);
scene.add( jupiterGroup );

// 
// saturn
// 
saturnGroup = THREE.SceneUtils.createMultiMaterialObject( geometrySaturn, saturnMats );
saturnGroup.position.x = solarScale(60);
scene.add( saturnGroup );

// 
// uranus
// 
uranusGroup = THREE.SceneUtils.createMultiMaterialObject( geometryUranus, uranusMats );
uranusGroup.position.x = solarScale(70);
scene.add( uranusGroup );

//
// neptune
// 
neptuneGroup = THREE.SceneUtils.createMultiMaterialObject( geometryNeptune, neptuneMats );
neptuneGroup.position.x = solarScale(77);
scene.add( neptuneGroup );


//
// setups up some renderer setting,
// every scene consists of a camera, renderer and lighting
renderer = new THREE.WebGLRenderer({ 
  antialias: true,
  alpha: true
});
// renderer.setClearColor( 0xffffff );
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( container.clientWidth, container.clientHeight );
container.appendChild( renderer.domElement );

//
// allows us to see the rendering stats.
//
stats = new Stats();
stats.domElement.style.position = 'absolute';
stats.domElement.style.top = '0px';
// container.appendChild( stats.domElement ); UNCOMMENT TO SEE STATS AGAIN


// does not apply yet, for mouse-camera animation
// document.addEventListener( 'mousemove', onDocumentMouseMove, false );

};


// does not apply yet.
// this is not really used for us,
// this is if we applied animations
// to our scene camera.
//
// function onDocumentMouseMove( event ) {
//  mouseX = ( event.clientX - windowHalfX );
//  mouseY = ( event.clientY - windowHalfY );
// }
//
// calls render() function
//
this.animate = function() {
render();
stats.update();
};
//
//
// our render function
//
//
function render() {

//
// unused scene position variable
//
// var thisScene = scene.position;
//
// camera views for animations, if using animation
//
//camera.position.x += ( mouseX - camera.position.x ) * 0.05;
//camera.position.y += ( - mouseY - camera.position.y ) * 0.05;
//
// default camera positioning, non-animated
//
camera.position.x = 90;
camera.position.y = 90;

//
// controls planet rotation speeds
//


sunGroup.rotation.y += 0.001;
mercuryGroup.rotation.y += 0.003;
venusGroup.rotation.y += 0.01;
earthGroup.rotation.y += 0.02;
marsGroup.rotation.y += 0.002;
jupiterGroup.rotation.y += 0.002;
saturnGroup.rotation.y += 0.003;
uranusGroup.rotation.y += 0.002;
neptuneGroup.rotation.y += 0.03;


//
// this will set up the different camera positionings for eeach planet
// which is useful when something like the sun which is
// much larger than all the other planets.
//

switch(containerId){
case 'container1':
camera.position.x = sunGroup.position.x * 1;
camera.position.y = sunGroup.position.x * -.1;
camera.position.z = 600;  // setup for the sun. we have to zoom out a lot.
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
camera.position.z = 400;
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
};
//
// function, renders our scene
//
renderer.render( scene, camera );
}
}