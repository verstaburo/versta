/* eslint-disable */
// http://idangero.us/swiper/#.WcIu5oy0OHs
import * as Swiper from 'swiper/dist/js/swiper';

const $ = window.$;

export default function agencies () {
  const slider = new Swiper('.js-slider-agencies', {
    loop: false,
    speed: 500,
    autoplay: false,
    slidesPerView: 'auto',
    roundLengths: true,
    spaceBetween: 60,
    centeredSlides: true,
    slideToClickedSlide: true,
  });
};
/* eslint-enable */
