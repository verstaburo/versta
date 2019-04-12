/* eslint-disable */
const $ = window.$;

import Dropzone from 'dropzone';

export default function dropzones() {
  const myDropzone = new Dropzone('.js-dropzone', {
    url: '/file/post',
    maxFilesize: 100,
    paramName: 'file',
    uploadMultiple: true,
    addRemoveLinks: true,
  });
};
/* eslint-enable */
