/* eslint-disable */

@@include('../../node_modules/sumoselect/jquery.sumoselect.js')

// #######################
// Кастомные селекты
// #######################

function initializeSelects() {
  $(document).find('.js-select').each(function () {
    var el = $(this);

    el.SumoSelect({
      csvDispCount: 0,
      floatWidth: 0,
      placeholder: 'Выберите значение',
      search: !!el.attr('data-search'),
      searchText: 'Поиск...',
      noMatch: 'Нет совпадений для "{0}"',
    });
  });
}

initializeSelects();
/* eslint-enable */
