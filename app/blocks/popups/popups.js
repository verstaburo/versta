/* eslint-disable */
// http://fancyapps.com/fancybox/3/
import '@fancyapps/fancybox';

import { freeze, unfreeze } from '../js-functions/freeze';
import { burgerClose } from '../../components/header/header';

const $ = window.$;

export default function popups() {
  window.fancyOptions = {
    afterLoad: function (instance, current) {
      if ($(document).find('.js-burger-menu').hasClass('is-active')) burgerClose();
      freeze();
      $('.header').addClass('is-popup-active');
    },
    afterShow: function (instance, current) {
      $(current.src).addClass('is-animated');
    },
    beforeClose: function (instance, current) {
    },
    afterClose: function (instance, current) {
      unfreeze();
      $(current.src).removeClass('is-animated');
      $('.header').removeClass('is-popup-active');
    },
    touch: false,
    closeExisting: true,
    animationDuration: 200,
    transitionDuration: 200,
  };

  $('.js-fancybox').fancybox(fancyOptions);

  $('.js-fancybox-image').fancybox({
    afterLoad: function (instance, current) {
      freeze();
      $('.header').addClass('is-popup-active');
    },
    afterClose: function (instance, current) {
      unfreeze();
      $('.header').removeClass('is-popup-active');
    },
    touch: false,
    closeExisting: true,
    animationDuration: 400,
    transitionDuration: 400,
  });

  $(document).on('click', '.js-burger-button', function () {
    $.fancybox.close();
  });
}
/* eslint-enable */
