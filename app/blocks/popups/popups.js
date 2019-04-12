/* eslint-disable */
// http://fancyapps.com/fancybox/3/
import '@fancyapps/fancybox';

import { freeze, unfreeze } from '../js-functions/freeze';

const $ = window.$;

export default function popups() {
  const options = {
    afterLoad: function () {
      freeze();
      $('.header').addClass('is-popup-active');
    },
    beforeClose: function () {
      unfreeze();
      $('.header').removeClass('is-popup-active');
    },
    touch: false,
  };

  $('.js-fancybox').fancybox(options);

  $.fancybox.open({
    src: '#start',
    opts: options,
  });

  $(document).on('click', '.js-burger-button', function () {
    $.fancybox.close();
  });
}
/* eslint-enable */
