
function initiate() {
	
	var img = document.createElement('img');

	img.setAttribute('src','img/cube.jpg');
	img.addEventListener('load',createworld);

	function createworld() {
			var canvas = document.getElementById('canvas');
			var width = canvas.width;
			var height = canvas.height;
			var renderer = new THREE.WebGLRenderer(
			{
				canvas: canvas,
				antialias:true
			}
			);
			renderer.setClearColor(0xFFFFFF);

			var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 1000);

			camera.position.set(0,0,150);

			var geometry = new THREE.CubeGeometry(50,50,50);
			var texture = new THREE.Texture(img);
			texture.needsUpdate = true;

			var material = new THREE.MeshPhongMaterial({
				map:texture
			});

			var mesh = new THREE.Mesh(geometry, material);

			scene.add(mesh);

			mesh.rotation.set(10,10,0);

			var light = new THREE.SpotLight(0xFFFFFF);

			light.position.set(50,50,150);

			scene.add(light);

			renderer.render(scene,camera);
	}
}


addEventListener('load',initiate);