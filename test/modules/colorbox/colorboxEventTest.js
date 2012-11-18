define(function (require) {

  'use strict';

  var

  $ = require('jquery'),
  cbox_event = require('app/js/modules/colorbox/events'),
  fixture = $('#qunit-fixture');

  module('colorbox events');

  test( 'mouseleave return a string', function() {
    equal(cbox_event.mouseleave(), 'mouseleave', 'should be mouseleave');
  });

});