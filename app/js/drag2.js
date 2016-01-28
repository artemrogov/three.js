var viewUserData = (function(){

//var DropBox = document.getElementById('box');

var ball = document.getElementById('box-con');
	var init = function() {
		_setUpListners();
	};
	
	var _setUpListners = function() {
		ball.onmousedown = function(e) { // 1. отследить нажатие

  // подготовить к перемещению
  // 2. разместить на том же месте, но в абсолютных координатах
  ball.style.position = 'absolute';
  moveAt(e);
  // переместим в body, чтобы мяч был точно не внутри position:relative
  document.body.appendChild(ball);

  ball.style.zIndex = 1000; // показывать мяч над другими элементами

  // передвинуть мяч под координаты курсора
  // и сдвинуть на половину ширины/высоты для центрирования
  function moveAt(e) {
    ball.style.left = e.pageX - ball.offsetWidth / 2 + 'px';
    ball.style.top = e.pageY - ball.offsetHeight / 2 + 'px';
  }

  // 3, перемещать по экрану
  document.onmousemove = function(e) {
    moveAt(e);
  }

  // 4. отследить окончание переноса
  ball.onmouseup = function() {
    document.onmousemove = null;
    ball.onmouseup = null;
  }
}
		


	//	DropBox.addEventListener('onmousedown',action1);
		//DropBox.addEventListener('onmousemove',moveObject);
	};
	 var  moveAt = function(e) {
				    ball.style.left = e.pageX - ball.offsetWidth / 2 + 'px';
				    ball.style.top = e.pageY - ball.offsetHeight / 2 + 'px';
	};
	var moveObject = function(e)  {
			 moveAt(e);
	};
	/*var action1 = function(e) {
		DropBox.style.position = 'absolute';
		moveAt(e);
		document.body.appendChild(DropBox);
		DropBox.style.zIndex=1000;
	};
	var moveAt = function(e) {
			DropBox.style.left = e.pageX - ball.offsetWidth / 2 + 'px';
			DropBox.style.top = e.pageY - DropBox.offsetHeight / 2 + 'px';
	};
	var moveObject = function(e) {
		moveAt(e);
	}
	*/
	
	

	
	return { 
		init:init
	};
})();
viewUserData.init();
