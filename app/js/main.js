
function initiate() {
	var renderer, scene, camera, mesh;
	var canvas = document.getElementById('canvas');
	var width = canvas.width;
	var height = canvas.height;

	var renderer = new THREE.WebGLRenderer({canvas:canvas});
	renderer.setClearColor(0xFFFFFF);


	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera(75, width/height, 0.1, 1000);

	camera.position.set(0,0,150);


	var geometry = new THREE.SphereGeometry(80,15,15);
	var material = new THREE.MeshPhongMaterial({color:0x0000FF});
	//MeshBasicMaterial({color:0x000000, wireframe:true}); просто каркас сферы;


// задать источник света:

var light = new THREE.SpotLight(0xFFFFFF);
light.position.set(50,50,150);
	var mesh = new THREE.Mesh(geometry,material);

	scene.add(mesh);
	scene.add(light);
function move(e) {
	mesh.rotation.x = e.pageY*0.01;
	mesh.rotation.z = -e.pageX*0.01;
	renderer.render(scene,camera);
}
	//renderer.render(scene,camera);
	canvas.addEventListener('mousemove',move);
}


addEventListener('load',initiate);