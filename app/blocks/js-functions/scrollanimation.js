/* eslint-disable no-unused-vars */
// https://github.com/jlmakes/scrollreveal
import ScrollReveal from 'scrollreveal';

const $ = window.$;

export default function scrollanimation() {
  // Стандартные настройки
  const sr = ScrollReveal({
    origin: 'bottom',
    reset: false,
    mobile: true,
    scale: 1,
    delay: 0,
    easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
    duration: 800,
    distance: '30px',
    cleanup: true,
  });

  // Top
  if ($('.js-sr_header').length) {
    sr.reveal('.js-sr_header', {
      origin: 'top',
    });
  }

  // Bottom
  if ($('.js-sr_1').length) {
    sr.reveal('.js-sr_1', {
      delay: 0,
      interval: 100,
    });
  }

  if ($('.js-sr_2').length) {
    sr.reveal('.js-sr_2', {
      delay: 100,
    });
  }

  if ($('.js-sr_3').length) {
    sr.reveal('.js-sr_3', {
      delay: 200,
    });
  }

  if ($('.js-sr_4').length) {
    sr.reveal('.js-sr_4', {
      delay: 300,
    });
  }

  // Right
  if ($('.js-sr_right_1').length) {
    sr.reveal('.js-sr_right_1', {
      delay: 0,
      origin: 'right',
    });
  }

  // Cycle
  if ($('.js-sr_cycle_1').length) {
    sr.reveal('.js-sr_cycle_1', {
      delay: 0,
      interval: 50,
    });
  }

  if ($('.js-sr_cycle_2').length) {
    sr.reveal('.js-sr_cycle_2', {
      delay: 100,
      interval: 50,
    });
  }

  if ($('.js-sr_cycle_3').length) {
    sr.reveal('.js-sr_cycle_3', {
      delay: 200,
      interval: 50,
    });
  }

  // Показываем элементы, если ScrollReveal не поддерживается
  if (ScrollReveal().noop) {
    $(document).find('.js-sr').removeClass('.js-sr');
  }
}
/* eslint-enable no-unused-vars */
