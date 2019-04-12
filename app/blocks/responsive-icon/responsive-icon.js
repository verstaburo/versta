/* eslint-disable */
const $ = window.$;

export default function responsiveIcon () {
  const
    icon = $(document).find('.responsive-icon'),
    tabletClass = 'responsive-icon_tablet',
    mobileClass = 'responsive-icon_mobile',
    w = $(window);

  function checkPosition() {
    const
      sT = w.scrollTop(),
      topPos = icon.offset().top;

    if (sT >= topPos - w.height() && sT <= topPos + icon.height()) return true;
  }

  function animate() {
    setTimeout(function () {
      if (!checkPosition()) return;
      icon.addClass(tabletClass);
    }, 1000);

    setTimeout(function () {
      if (!checkPosition()) return;
      icon.addClass(`${tabletClass} ${mobileClass}`);
    }, 2000);

    setTimeout(function () {
      if (!checkPosition()) return;
      icon.removeClass(`${tabletClass} ${mobileClass}`);
    }, 3000);
  }

  animate();
  setInterval(animate, 3000);
};
/* eslint-enable */
