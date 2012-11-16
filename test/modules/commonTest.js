define(function (require) {

  'use strict';

  var
  
  $ = require('jquery'),
  common = require('app/js/modules/common'),
  list = require('text!test/fixtures/list.html!strip'),
  fixture = $('#qunit-fixture');

  module('common', {
    setup: function() {
      fixture.append(list);
    }
  });

  test( 'qunit is up and running', function() {
    ok( true, 'true succeeds' );
  });

  test( 'all li\'s hasclass list-item', function() {
    common.init();
    ok(fixture.find('li').hasClass('list-item'));
  });

  test( 'hellofn return 0', function() {
    equal(common.hellofn(), 0, 'should be 0' );
  });


});
