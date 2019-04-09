/* eslint-disable */
const $ = window.$;

export default function header () {
  $('.header').find('.js-anchor').each(function () {
    const
      link = $(this),
      target = $($(this).attr('href')),
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
};
/* eslint-enable */
