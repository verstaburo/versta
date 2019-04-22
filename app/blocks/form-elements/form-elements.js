/* eslint-disable */
import {burgerClose} from "../../components/header/header";

const $ = window.$;
const grecaptcha = window.grecaptcha;

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
    let hasEmpty = false;

    thisForm.find('[required]').each(function () {
      if ($(this).val().length < 1 || undefined) hasEmpty = true;
      if ($(this).attr('type') === "checkbox" && !$(this).prop('checked')) hasEmpty = true;
      if ($(this).hasClass('parsley-error')) hasEmpty = true;
    });

    if (hasEmpty) return;

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
                  $.fancybox.open($('#success'), window.fancyOptions);
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
