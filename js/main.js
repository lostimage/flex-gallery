;(function(){
	'use strict';
		var panels = document.querySelectorAll('.ba-panel');
		panels.forEach(panel => panel.addEventListener('click', toggleOpen));

		panels.forEach(panel => panel.addEventListener('transitionend',toggleActive));
	function toggleOpen() {

		this.classList.contains('open') ? this.classList.remove('open') : this.classList.add('open');

	}

	function toggleActive (e) {
		console.log(e);
		if (e.propertyName.includes('flex')){

		this.classList.contains('open-active') ? this.classList.remove('open-active') : this.classList.add('open-active');
		}
	}

})();
