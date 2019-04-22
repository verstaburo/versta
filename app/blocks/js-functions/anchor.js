/* eslint-disable */
// При клике на .js-anchor страница плавно скроллится к блоку, указанному в его href
const $ = window.$;

import { burgerClose } from '../../components/header/header';

export default function anchor() {
  $(document).on('click', '.js-anchor', function (e) {
    const target = $('#' + $(this).attr('href').split('#')[1]);

    if (target.length > 0) {
      e.preventDefault();

      if ($(document).find('.js-burger-menu').hasClass('is-active')) {
        burgerClose();
      }

      setTimeout(function () {
        $('body, html').stop().animate({
          scrollTop: target.offset().top,
        }, 1000, 'swing');
      }, 1);
    }
  });
}
/* eslint-enable */
