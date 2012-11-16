define(function(require){

  'use strict';

  console.time('init');
  console.log('common');

  var

  $ = require('jquery'),

  hellofn = function(){
    return 0;
  },

  init = function() {
    $('html').addClass('ready');
    $('li').addClass('list-item');
    
  };

  return {
    init: init,
    hellofn: hellofn
  };

});
