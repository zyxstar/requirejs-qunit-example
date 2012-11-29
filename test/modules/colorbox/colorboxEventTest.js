define(function(require) {

  'use strict';

  var

  $ = require('jquery'),
  $helper = require('test/testhelper'),
  $colorboxEvent = require('app/js/modules/colorbox/events');

  module('colorbox events');

  test( 'mouseleave return a string', function() {
    equal($colorboxEvent.mouseleave(), 'mouseleave', 'should be mouseleave');
  });


  /**
    user actions unit tests
  */
  module('common user');

  test('mouseenter add class enter', 1, function(){

    var

    event = $.Event('mouseenter'),
    list = require('text!test/fixtures/list.html!strip'),
    fixture = $helper.setFixture(list),
    element;

    require('module/colorbox/gallerys').init();

    element = fixture.find('a').first();
    element.trigger(event);

    ok(element.hasClass('enter'),'should have class enter');

    // selenium is the better way to do this stuff -> funcunit

  });

});
