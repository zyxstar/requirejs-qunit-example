define(function(require){

  'use strict';

  console.log('callbacks');

  return {

    onOpen: function() {
      console.log('open');
      return 'onOpen';
    },

    onLoad: function() {
      console.log('load');
    },

    onComplete: function() {
      console.log('complete');
    },

    onCleanup: function() {
      console.log('cleanup');
    },

    onClosed: function() {
      console.log('close');
    }

  };

});
