/* eslint-disable */
const $ = window.$;

export default function videoBackground () {
  const
    sectionClass = '.video-background',
    videoClass = '.js-video',
    w = $(window);

  $(videoClass).each(function () {
    const
      video = $(this),
      section = video.parents(sectionClass);

    w.on('scroll', function () {
      const
        sT = $(this).scrollTop();

      if (sT > 100) {
        section.addClass('is-disabled');
        video[0].pause();
      } else {
        section.removeClass('is-disabled');
        video[0].play();
      }
    });
  });
};
/* eslint-enable */
