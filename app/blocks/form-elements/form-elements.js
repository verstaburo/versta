/* eslint-disable */
import {burgerClose} from "../../components/header/header";

const $ = window.$;
const grecaptcha = window.grecaptcha;

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

export function forms() {
  const form = $('.js-form');

  form.submit(function (e) {
    e.preventDefault();

    const thisForm = $(this);

    // Recaptcha
    grecaptcha.ready(function() {
      grecaptcha.execute('6LeE-p0UAAAAAPbdoOFxb3nScdUQk11s8M080Bwt', {
        action: 'startproject',
      }).then(function (token) {

        // Добавляем инпут с токеном проверки
        if (thisForm.find('input[name="token"]').length > 0) {
          thisForm.find('input[name="token"]').val(token);
        } else {
          thisForm.prepend(`<input type="hidden" name="token" value="${token}">`);
        }

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
                  window.yaCounter52590535.reachGoal('formSubmit');

                  // Перенести в попап успеха
                  $.fancybox.open($('#success'), fancyOptions);
                },
              });

            } else {
              alert('Seems like you are robot. Try again.');
            }
          },
        });
      });
    });

    return false;
  });
}
/* eslint-enable */
