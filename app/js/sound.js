var viewUserData = (function(){

	var play = document.getElementById('play-btn'),
		soundTrack = document.getElementById('soundtrack'),
		volControll = document.getElementById('vol'),
		progress = document.getElementById('progress'),
		max = 400,
		loop,
		bar = document.getElementById('bar');
		
		
	
	//Инициализация. Инициализирует модуль
	var init = function() {
		_setUpListners();
		

	};
	//прослушивает события
	var _setUpListners = function() {
		//прослушка событий 
		/*
			Здесь пишут то, что должно произойти сразу!
		*/
		//кнопка/проиграть-пауза:
		play.addEventListener('click',_ActionTrack);
		//индикатор проигрывателя:
		bar.addEventListener('click', move);
		//позунок с громкостью:	
		volControll.addEventListener('change',_VolCon);

		
		
	};
	var _ActionTrack = function() {
		if (!soundTrack.paused && !soundTrack.ended) {
			soundTrack.pause();
			//play.value = "Play";
			clearInterval(loop);

		}else {
			soundTrack.play();
			loop = setInterval(status,1000);
		}
	};
	var _VolCon = function(){
		soundTrack.volume = volControll.value;
	};
	var _ProgressSound = function() {
		if (!soundTrack.ended) {
			var size2 = parseInt(soundTrack.currentTime * max / soundTrack.duration);
			progress.style.width = size2 + 'px';
		}
		else {
			progress.style.width = '0px';
			clearInterval(loop);
		}
	};
	var move = function(e) {
		if (!soundTrack.paused && !soundTrack.ended) {
			var mouseX = e.pageX - bar.offsetLeft;
			var newtime = mouseX * soundTrack.duration / max;
			soundTrack.currentTime = newtime;
			progress.style.width = mouseX + 'px';
		}
	};

	return { // тут находятся публичные методы или поля
		init:init

	};
})();
viewUserData.init();
