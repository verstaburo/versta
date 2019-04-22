/* eslint-disable */
const $ = window.$;

import 'overlayscrollbars/js/OverlayScrollbars';

export default function scrollbar() {
  OverlayScrollbars(document.querySelectorAll(".popup"), {
    className: 'os-theme-light',
    overflowBehavior: {
      x: 'hidden',
      y: 'scroll'
    },
  });
};
/* eslint-enable */

