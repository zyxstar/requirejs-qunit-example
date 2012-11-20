define(function(require){

  'use strict';

  console.log('init');

  require('modules/common').init();
  require('modules/colorbox/gallerys').init();

  console.timeEnd('init');
});
