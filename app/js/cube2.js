var CubeRotation = (function(){
	var img = document.createElement('img'),
	
	 canvas = document.getElementById('canvas'),
	 width = canvas.width,
	 height = canvas.height,
	 renderer = new THREE.WebGLRenderer(
			{
				canvas: canvas,
				antialias:true
			}
		),
	 	 scene = new THREE.Scene(),
		 camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 1000),
		 geometry = new THREE.CubeGeometry(50,50,50),
		 texture = new THREE.Texture(img),
		 material = new THREE.MeshPhongMaterial({
				map:texture
			}),
		 mesh = new THREE.Mesh(geometry, material),
		 light = new THREE.SpotLight(0xFFFFFF);

		
		var init = function() {
				_setUpListners();
			
		};
	var _setUpListners = function() {
		//прослушка событий 
		/*
			Здесь пишут то, что должно произойти сразу!
		*/
		$('#rott').on('click',_render);//
		$('#stop').on('click',_stop);
		img.setAttribute('src','img/cube.jpg');
		img.addEventListener('load',_createworld);
	};
	var _createworld = function() {
		renderer.setClearColor(0xFFFFFF);
		camera.position.set(0,0,150);
		texture.needsUpdate = true;
		scene.add(mesh);
		mesh.rotation.set(10,10,0);
		light.position.set(50,50,150);
		scene.add(light);
		renderer.render(scene,camera);
	};
	var _render = function () {
				requestAnimationFrame( _render );

				//mesh.rotation.x += 0.01;
				mesh.rotation.y += 0.01;

				renderer.render(scene, camera);
	};
	var _stop = function () {
				requestAnimationFrame( stop );

				
				mesh.rotation.y = 0;

				renderer.render(scene, camera);
	};
	return { // тут находятся публичные методы или поля
		init:init
		
	};
})();
CubeRotation.init();