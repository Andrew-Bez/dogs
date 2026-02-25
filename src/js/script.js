import Swiper from 'swiper'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import '/src/sass/style.scss'

const swiper = new Swiper('.swiper', {
	modules: [Autoplay],
	autoplay: {
		delay: 3000, // 3 секунди
		disableOnInteraction: false,
	},
	loop: true,
	slidesPerView: 1,
	spaceBetween: 80,
})
