/* eslint-disable */
const $ = window.$;

export default function checkie() {
  function msieversion() {

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
    {
      $('body').addClass('is-ie');
    }

    return false;
  }

  msieversion();
}
/* eslint-enable */
