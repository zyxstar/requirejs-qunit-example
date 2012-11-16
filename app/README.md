# RequireJS

is a js file and module loader

http://requirejs.org


## AMD - Asynchronous Module Definition

Asynchronous

+ non-blocking
+ parallel loading
+ fast

Module 

+ components
+ separation of concerns
+ improved maintainability

Definition

+ well-defined / standardized
+ CommonJS http://www.commonjs.org/specs/
+ ES-Harmony recommended migration path


http://unscriptable.com/code/Using-AMD-loaders/#0

AMD "standard" plugins: text!, i18n!, css!

## Standards

ECMAScript

+ definiert den Javascript Sprachkern
+ aktuell in Version 5
+ Modules sind in Version 6 (ES-Harmony) vorgesehen

http://www.ecmascript.org
http://wiki.ecmascript.org/doku.php

CommonJS

+ Vorschläge für Standard-APIs außerhalb des Browsers
+ Richtlinien für Interoperabilität

http://www.commonjs.org
http://arstechnica.com/business/2009/12/commonjs-effort-sets-javascript-on-path-for-world-domination/


## Hands On

### index.html

<pre>

&lt;script src="/js/libs/require.js" data-main="/js/config"&gt;&lt;/script&gt;

</pre>

### config.js

<pre>
require.config({
  
  baseUrl: '/js',

  deps: ['main'],

  paths: {
    jquery: 'libs/jquery.1.8.2',
    cbox: 'plugins/cbox',
    module: 'modules'
  },

  shim: {

    'jquery': {
      exports: 'jquery'
    },

    'cbox': {
      deps: ['jquery'],
      exports: 'jquery'
    }

  }
});

</pre>

### main.js

<pre>
require(
  [
    'jquery',
    'cbox',
    'modules/gallery'
  ],
  
  function($){

    'use strict';
    
    $('html').addClass('js');

});

</pre>

### cbox-gallery.js

<pre>
define(
  [
    'jquery',
    'cbox'
  ],
  
  function($){

    'use strict';

    $('#gallery a').colorbox({
      rel:'group1',
      slideshow: true
    });

});

</pre>

### base-gallery.js

<pre>
define(
  [
    'jquery',
    'cbox'
  ],
  
  function($){

    'use strict';

    $('#gallery a').colorbox({
      rel:'group1',
      slideshow: true
    });

});

</pre>


### Links

http://build-podcast.com
http://jqfundamentals.com
http://cdnjs.com