var swiper = new Swiper('.swiper-container', {
	slidesPerView: 4,
	spaceBetween: 10,
	loop: true,
	// init: false,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		prevEl: '.button-prev',
		nextEl: '.button-next',
	},
	// breakpoints: {
	// 	640: {
	// 		slidesPerView: 2,
	// 		spaceBetween: 20,
	// 	},
	// 	768: {
	// 		slidesPerView: 4,
	// 		spaceBetween: 40,
	// 	},
	// 	1024: {
	// 		slidesPerView: 5,
	// 		spaceBetween: 50,
	// 	},
	// }
});