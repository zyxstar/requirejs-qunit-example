define(function(require){

  'use strict';

  console.log('events');

  var
  
  mouseEnter = function(){
    console.log('mouseover');
  },

  mouseLeave = function(){
    console.log('mouseleave');
    return 'mouseleave';
  };

  return {
    mouseenter: mouseEnter,
    mouseleave: mouseLeave
  };

});
