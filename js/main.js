"use strict";

document.addEventListener('DOMContentLoaded', function(){
	btn.addEventListener("click", e => {
		modal.classList.add("show")
	})

	btn_close.addEventListener("click", (e) => {
		e.target.closest(".modal").classList.remove("show");
	});

	let swiper = new Swiper(".modal__slider", {
		slidesPerView: 3,
		spaceBetween: -30,
		centeredSlides: true,
		slideToClickedSlide: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	});

});