/* eslint-disable */
const $ = window.$;
const
  headerBlock = $('.header'),
  burgerButton = $('.js-burger-button'),
  burgerMenu = $('.js-burger-menu');

import { freeze, unfreeze } from '../../blocks/js-functions/freeze';

export function burgerOpen () {
  freeze();
  burgerButton.addClass('is-active');
  burgerMenu.show(0, function () {
    $(this).css({ display: 'flex' }).addClass('is-active');
  });
}

export function burgerClose () {
  unfreeze();
  burgerButton.removeClass('is-active');
  burgerMenu.removeClass('is-active');

  setTimeout(function () {
    burgerMenu.hide();
  }, globalOptions.animationDuration);
}

export default function header () {
  // Бургер-кнопка
  $(document).on('click', '.js-burger-button', function () {
    if (!$(this).parents('.header').hasClass('is-popup-active') && $(document).find('.popup.fancybox-content').length === 0 || undefined) {
      $(this).hasClass('is-active') ? burgerClose() : burgerOpen();
    }
  });

  // Работа ссылок при скролле
  $('.header').find('.js-anchor').each(function () {
    const
      link = $(this),
      target = $(`#${$(this).attr('href').split('#')[1]}`);

    if (target.length === 0 || undefined) return;

    const
      targetTop = target.offset().top,
      targetBottom = targetTop + target.outerHeight();

    $(window).scroll(function () {
      const
        sT = $(this).scrollTop();

      if (sT > targetTop - $(window).height() / 2 && sT < targetBottom - $(window).height() / 2) {
        link.addClass('is-active').siblings().removeClass('is-active');
      } else {
        link.removeClass('is-active');
      }
    });
  });

  // Закрываем бургер при ресайзе
  $(window).resize(function () {
    if (burgerMenu.hasClass('is-active') && $(window).width() > globalOptions.sizes.md) burgerClose();
  });
};
/* eslint-enable */
