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
  },
  
  loadContent = function(callback) {

    var data, cb = callback || function(data) {
      return data;
    };

    data = $.ajax({
      url: 'data/ajax.html',
      success: cb  
    });

    return {
      data: data
    };
  };

  return {
    init: init,
    hellofn: hellofn,
    loadContent: loadContent
  };

});
