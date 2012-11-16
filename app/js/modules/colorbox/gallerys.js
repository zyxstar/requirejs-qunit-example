define(function(require){

  'use strict';

  console.log('gallerys');

  var

  $ = require('jquery'),
  settings = require('module/colorbox/settings'),
  events = require('module/colorbox/events'),
  group1, group2;

  require('colorbox');

  settings.simple.rel = 'group1';
  settings.slideShow.rel = 'group2';

  group1 = $('.'+settings.simple.rel).colorbox(settings.simple),
  group2 = $('.'+settings.slideShow.rel).colorbox(settings.slideShow);

  group1.on({
    mouseenter: events.mouseenter
  });

  group2.on({
    mouseleave: events.mouseleave
  });

});
