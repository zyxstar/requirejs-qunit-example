define(function(require) {

  'use strict';

  var
  
  $ = require('jquery'),
  $helper = require('test/testhelper'),
  $common = require('module/common');


  /**
    synchronous unit tests
  */
  module('common sync');

  test( 'qunit is up and running', function() {
    ok( true, 'true succeeds' );
  });

  test( 'hellofn return 0', function() {
    equal($common.hellofn(), 0, 'should be 0' );
  });


  /**
    asynchronous unit tests
  */
  module('common async');

  test('an async settimeout test', 1, function(){

    // Pause the test, and fail it if start() isn't called after one second  
    stop();

    setTimeout(function(){
      ok(true, 'passed and ready to resume');

      start();
    }, 1000);

  });

  asyncTest('ajax callback test', function() {

    // asyncTest is implicit calling stop()
    $common.loadContent(function(data) {
      // ...asynchronous assertions
      ok(data.length);
      equal(data, 'loaded via ajax call...');
      start();
    });

  });

  asyncTest('ajax response test', function() {

    var

    response = $common.loadContent();

    setTimeout(function() {

      equal(response.data.responseText, 'loaded via ajax call...');
      start();

    }, 500 );

  });


  /**
    dom unit tests
  */
  module('common dom');

    test('all li\'s hasclass list-item', function() {

      var

      list = require('text!test/fixtures/list.html!strip'),
      fixture = $helper.setFixture(list);

      $common.init();

      ok(fixture.find('li').hasClass('list-item'));

    });

});
