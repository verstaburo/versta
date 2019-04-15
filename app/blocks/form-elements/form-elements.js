/* eslint-disable */
const $ = window.$;
const grecaptcha = window.grecaptcha;
const fancyOptions = {
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
};

// https://www.npmjs.com/package/sumoselect
import autosize from 'autosize';

// https://www.npmjs.com/package/parsleyjs
import parsley from '../../../node_modules/parsleyjs/dist/parsley.min';

// http://fancyapps.com/fancybox/3/
import '@fancyapps/fancybox';

import { freeze, unfreeze } from '../js-functions/freeze';

export function textarea() {
  autosize($('.js-autosize'));
}

export function validation() {
  parsley;
}

// function validate (form) {
//   const el = form;
//
//   $('#form').parsley();
// }

export function forms() {
  const form = $('.js-form');

  // Капча
  grecaptcha.ready(function() {
    grecaptcha.execute('6LeE-p0UAAAAAPbdoOFxb3nScdUQk11s8M080Bwt', {
      action: 'startproject',
    }).then(function (token) {

      form.prepend(`<input type="hidden" name="token" value="${token}">`);
      form.submit(function (e) {
        e.preventDefault();

        const thisForm = $(this);

        // Проверка капчи
        $.ajax({
          method: 'post',
          url: 'assets/php/recaptcha.php',
          data: {
            'token': thisForm.find('[name="token"]').val(),
          },
          success: function (data) {
            // При успешной капче отправляем форму
            if (data.success === 'true') {
              // Отправка формы
              $.ajax({
                method: 'post',
                url: 'assets/php/send.php',
                data: thisForm.serializeArray(),
                success: function (data) {

                  // Перенести в попап успеха
                  $.fancybox.open($('#success'), fancyOptions);
                },
              });

            } else {
              console.log('Тест на капчу не пройден');
            }
          },
        });

        return false;
      });
    });
  });
}
/* eslint-enable */
