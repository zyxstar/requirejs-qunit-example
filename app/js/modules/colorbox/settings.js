define(function(require){

  'use strict';

  console.log('settings');

  // http://www.jacklmoore.com/colorbox
  var

  cb = require('module/colorbox/callbacks');

  return {

    simple : {

      onOpen: cb.onOpen,
      onClosed: cb.onClosed

    },

    slideShow : {

      slideshow: true,
      onLoad: cb.onLoad,
      onComplete: cb.onComplete

    }
    
  };

});
