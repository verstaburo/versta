/* eslint-disable */
const $ = window.$;

import Dropzone from 'dropzone';

export default function dropzones() {
  const filePath = 'https://verstaburo.com/assets/files/uploads/';
  const myDropzone = new Dropzone('.js-dropzone', {
    url: 'assets/files/upload.php',
    addRemoveLinks: true,
    paramName: 'file',
    uploadMultiple: false,
  });

  let fileId = 0;

  myDropzone.on('complete', function (file) {
    $(file.previewElement).each(function () {
      fileId += 1;

      const fileBlock = $(this);

      if (fileBlock.find('input').length === 0 || undefined) {
        fileBlock.append(`<input name="file${fileId}" type="hidden" value="${filePath}${fileBlock.find('[data-dz-name]').text()}"/>`);
      }
    });
  });
};
/* eslint-enable */
