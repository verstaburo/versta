/* eslint-disable */
// http://idangero.us/swiper/#.WcIu5oy0OHs
import * as Swiper from 'swiper/dist/js/swiper';

const $ = window.$;

export default function agencies () {
  const sliderTwo = new Swiper('.js-slider-agencies-content', {
    loop: false,
    speed: 500,
    autoplay: false,
    slidesPerView: 1,
    roundLengths: true,
    simulateTouch: false,
    allowTouchMove: false,
  });

  const slider = new Swiper('.js-slider-agencies', {
    loop: false,
    speed: 500,
    autoplay: false,
    slidesPerView: 'auto',
    roundLengths: true,
    spaceBetween: 60,
    centeredSlides: true,
    slideToClickedSlide: true,
    controller: {
      control: sliderTwo,
    },
  });
};
/* eslint-enable */
