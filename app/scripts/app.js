/* eslint-disable */
import svg4everybody from 'svg4everybody';
import objectFitImages from 'object-fit-images';
import './globalOptions';
import anchor from '../blocks/js-functions/anchor';
import scrollanimation from '../blocks/js-functions/scrollanimation';
import { textarea, validation, forms } from '../blocks/form-elements/form-elements';
import popups from '../blocks/popups/popups';
import slider from '../blocks/slider/slider';
import tooltips from '../blocks/tooltip/tooltip';
import responsiveIcon from '../blocks/responsive-icon/responsive-icon';
import agencies from '../blocks/agencies/agencies';
import dropzones from '../blocks/dropzone/dropzone';
import header from '../components/header/header';
import videoBackground from '../blocks/video-background/video-background';

const $ = window.$;

$(() => {
  svg4everybody();
  objectFitImages();
  anchor();
  popups();
  slider();
  tooltips();
  scrollanimation();
  agencies();
  header();
  videoBackground();
  responsiveIcon();
  dropzones();
  textarea();
  validation();
  forms();
});
/* eslint-enable */
