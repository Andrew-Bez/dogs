import Swiper from 'swiper'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import '/src/sass/style.scss'

new Swiper('.reviews__slider', {
	modules: [Autoplay],
	slidesPerView: 'auto',
	centeredSlides: true,
	spaceBetween: 80,
	speed: 800,
	initialSlide: 1,

	autoplay: {
		delay: 4000,
		disableOnInteraction: false,
	},
})





