define(function(require){

  'use strict';

  var

  $ = require('jquery'),
  cbox_callback = require('app/js/modules/colorbox/callbacks'),
  fixture = $('#qunit-fixture');

  module('colorbox callbacks');

  test( 'onOpen return a string', function(){
    equal(cbox_callback.onOpen(), 'onOpen', 'should be Open');
  });

});
