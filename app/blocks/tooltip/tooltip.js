/* eslint-disable no-unused-vars */
import $ from 'jquery';

// http://iamceege.github.io/tooltipster/
import tooltipster from 'tooltipster';

export default function tooltips() {
  $('.js-tooltip').tooltipster({
    animation: 'fade',
    delay: 0,
    side: 'bottom',
    theme: 'tooltipster-borderless',
    distance: 10,
  });

  $('.js-tooltip-click').tooltipster({
    animation: 'fade',
    delay: 0,
    side: 'bottom',
    theme: 'tooltipster-borderless',
    trigger: 'click',
    interactive: true,
    distance: 10,
    contentCloning: true,
  });
}
/* eslint-enable no-unused-vars */
