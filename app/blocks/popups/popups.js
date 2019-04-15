/* eslint-disable */
// http://fancyapps.com/fancybox/3/
import '@fancyapps/fancybox';

import { freeze, unfreeze } from '../js-functions/freeze';

const $ = window.$;

export default function popups() {
  window.fancyOptions = {
    afterLoad: function () {
      freeze();
      $('.header').addClass('is-popup-active');
      $('.grecaptcha-badge').addClass('is-visible');
    },
    beforeClose: function () {
      unfreeze();
      $('.header').removeClass('is-popup-active');
      $('.grecaptcha-badge').removeClass('is-visible');
    },
    touch: false,
    closeExisting: true,
    transitionEffect: 'zoom-in-out',
    transitionDuration: 500,
  };

  $('.js-fancybox').fancybox(fancyOptions);

  $(document).on('click', '.js-burger-button', function () {
    $.fancybox.close();
  });
}
/* eslint-enable */
