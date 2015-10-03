function initiate() {
	var canvas = document.getElementById('canvas');
	var width = canvas.width;
	var height = canvas.height;

	var renderer = new THREE.WebGLRenderer({canvas:canvas});
	renderer.setClearColor(0xFFFFFF);


	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera(75, width/height, 0.1, 1000);

	camera.position.set(0,0,150);


	var geometry = new THREE.SphereGeometry(80,15,15);
	var material = new THREE.MeshBasicMaterial({color:0x000000, wireframe:true});

	var mesh = new THREE.Mesh(geometry,material);

	scene.add(mesh);

	renderer.render(scene,camera);
}
addEventListener('load',initiate);