define(function(require){

  'use strict';

  console.log('gallerys');

  var

  $ = require('jquery'),
  settings = require('module/colorbox/settings'),
  events = require('module/colorbox/events'),
  group1, group2, mouseEvents = {
    mouseenter: events.mouseenter
    //mouseleave: events.mouseleave
  },

  init = function(){

    settings.simple.rel = 'group1';
    settings.slideShow.rel = 'group2';

    group1 = $('.'+settings.simple.rel).colorbox(settings.simple);
    group2 = $('.'+settings.slideShow.rel).colorbox(settings.slideShow);

    group1.on(mouseEvents);
    group2.on(mouseEvents);

  };

  require('colorbox');

  return {
    init: init
  };

});
