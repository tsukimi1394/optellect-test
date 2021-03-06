/* MOBILE MENU */

var menu = document.querySelector('.js--menu');
var menuBtn = document.querySelector('.js--menu-btn');

menuBtn.addEventListener('click', function () {
	if (this.parentNode.classList.contains('is-active')) {
		this.parentNode.classList.remove('is-active');
	} else {
		this.parentNode.classList.add('is-active');
	}
});

/* SLIDER */

var buttons = document.querySelectorAll('.js-btn');
var slide = document.querySelector('.js-slide');

function clear(arr) {
	arr.forEach(function(element) {
		if (element.classList.contains('active')) {
			element.classList.remove('active');
		}
	});
}

var i = 0;
var start = setInterval(function() {
	i++;
	if (i < buttons.length) {
		clear(buttons);
		buttons[i].classList.add('active');
		var w = slide.offsetWidth;
		console.log('width = ', w);
		slide.style.marginLeft = - w * i + 'px';
	} else {
		i = 0;
		clear(buttons);
		buttons[i].classList.add('active');
		var w = slide.offsetWidth;
		console.log('width = ', w);
		slide.style.marginLeft = - w * i + 'px';
	}
}, 3000)

buttons.forEach(function(element, index) {
	element.addEventListener('click', function() {
		i = index;
		console.log('index = ', i);
		clear(buttons);
		this.classList.add('active');
		var w = slide.offsetWidth;
		console.log('width = ', w);
		slide.style.marginLeft = - w * i + 'px';
		clearInterval(start);
	});
});

