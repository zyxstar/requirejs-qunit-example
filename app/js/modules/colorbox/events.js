define(function(require){

  'use strict';

  console.log('events');

  var
  
  $ = require('jquery'),

  mouseEnter = function(){
    
    console.log(thhis)
    $(this).addClass('enter');

    return 'mouseenter';
  },

  mouseLeave = function(){
    $(this).removeClass('enter');
    return 'mouseleave';
  };

  return {
    mouseenter: mouseEnter,
    mouseleave: mouseLeave
  };

});
