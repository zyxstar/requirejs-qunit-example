(function(){

  'use strict';

  // Defer Qunit so RequireJS can work its magic and resolve all modules.
  QUnit.config.autostart = false;

  // Configure RequireJS so it resolves relative module paths from the `src`
  // folder.
  require.config({
    baseUrl: '../',
  });

  // A list of all QUnit test Modules. Make sure you include the `.js`
  // extension so RequireJS resolves them as relative paths rather than using
  // the `baseUrl` value supplied above.
  var testModules = [
    'modules/commonTest.js',
    'modules/colorbox/colorboxEventTest.js',
    'modules/colorbox/colorboxCallbackTest.js'
  ];

  // Resolve all testModules and then start the Test Runner.
  require(testModules, QUnit.start);

}());
