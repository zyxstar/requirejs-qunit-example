define(function(require) {

  'use strict';

  var
  
  $ = require('jquery');

  return {
    setFixture: function(html) {
      return $('#qunit-fixture').append(html);
    }
  };

});
