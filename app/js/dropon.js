var viewUserData = (function(){

var imgSource = document.getElementById('image1'),
	DropBox = document.getElementById('box'),
	dropbox1 = document.getElementById('altbox'),
	dropbox2 = document.getElementById('subject');

	var init = function() {
		_setUpListners();
	};
	
	var _setUpListners = function() {
		imgSource.addEventListener('dragstart',dragged);
		DropBox.addEventListener('dragenter',function(e){e.preventDefault();console.log('dragenter');});
		DropBox.addEventListener('dragover',function(e){e.preventDefault();console.log('dragover');});
		DropBox.addEventListener('drop',dropped);

		dropbox2.addEventListener('dragstart',setDrop);
	};
	var dragged = function(e) {
		var code = '<img src="'+imgSource.getAttribute('src')+'">';
		console.log('dragstart!');
		e.dataTransfer.setData('Text',code);
	};
	var dropped = function(e) {
		e.preventDefault();
		DropBox.innerHTML = e.dataTransfer.getData('Text');

	};
	var getSrc = function(e) {
		e.preventDefault();

	};
	var setDrop = function(e) {
		e.preventDefault();
		console.log('dragstart!');
	};
	
	
	

	
	return { 
		init:init
	};
})();
viewUserData.init();
