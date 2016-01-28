var Plane = (function(){
	canvas = document.getElementById('canvas'),
	 width = canvas.width,
	 height = canvas.height,
	 renderer = new THREE.WebGLRenderer({canvas: canvas}),
	scene = new THREE.Scene(),

	camera = new THREE.PerspectiveCamera(40, width/height, 0.1, 1000),

	planeGeometry = new THREE.PlaneGeometry( 50, 1, 580 ),
	
	planeMaterial = new THREE.MeshBasicMaterial( {color: 0xffff00 /*side: THREE.DoubleSide*/} );

	geometry = new THREE.BoxGeometry(40,40,40);
	var material = new THREE.MeshBasicMaterial({color:0x00ff00, wireframe:true});
	var cube = new THREE.Mesh(geometry, material),
		plane = new THREE.Mesh( planeGeometry, planeMaterial);

	var init = function() {
		_setUpListners();
			
	};
	var _setUpListners = function() {
		//прослушка событий 
		/*
			Здесь пишут то, что должно произойти сразу!
		*/
		camera.position.set(0,0,150);
		//вращаем куб по оси y:
		//cube.rotation.y = 40;
		cube.rotation.set(0,40,0);
		cube.position.set(-20,0,0);
		plane.position.set(0,-20,0);

		//добавляем объекты на главную сцену:
		scene.add(cube);
		scene.add(plane);

		//рендерим сцену и камеру:
		renderer.render(scene, camera);
	};
	return { // тут находятся публичные методы или поля
		init:init
		
	};
})();
Plane.init();