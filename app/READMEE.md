# Javascript Hacktisch

Ziel ist es einige Best Practices an die Hand zu geben, um Code Qualität, Wartbarkeit und Produktivität zu verbessern.

## Gliederung

+ JSLint

+ Strict Mode

+ Funktionen & Scoping

+ Module Pattern

+ RequireJS - a Module Loader

+ QUnit - Javascript Unit Testing Testem

+ Testem - makes Javascript Unit Testing fun.

+ Yeoman - Modern workflows for modern webapps

<br><br><br>

## JSLint 

+ Douglas Crockfort - [Javascript the good parts](http://books.google.de/books?id=PXa2bby0oQ0C&printsec=frontcover&hl=de#v=onepage&q&f=false), [http://www.crockford.com](http://www.crockford.com)

+ Javascript Syntax Checker und Validator

+ prüft nicht die Korrektheit

+ Subset von Javascript das strenger als der ECMAScript Standard ist

+ Onlineservice unter [http://jslint.com](http://jslint.com)
+ CommandLine
+ Realtime (SublimeLinter)

+ JSLint ist konfigurierbar [http://www.jslint.com/lint.html#options](http://www.jslint.com/lint.html#options)

<br><br><br>

## Strict Mode


+ verwendet Subset von normalen Javascript

+ entfernt problematische Altlasten z.B.
    + <code>with</code> Statement entfernt
    + oktale Syntax verboten
    + <code>function</code> Statements innerhalb von <code>if</code>-Blöcken verboten

+ Browser wirft Fehler was früher "bad practice" war z.B.
    + beim Anlegen globaler Variablen 
    + beim Setzen unsinniger Anweisungen <code>NaN = 42</code>
    + beim Erstellen von Argumente mit gleichen Namen innerhalb einer Funktion
    
+ den Strict Mode mit <code>'use strict';</code> auslösen und an den Anfang einer Scriptdatei oder Funktion setzen

<pre>
var x = "Ich bin NICHT im Strict Mode!";

function foo(){

    "use strict";

    var y = "Ich BIN im Strict Mode!";
}

function bar(){
    var z = "Ich bin NICHT im Strict Mode!";
}
</pre>

+ Browsersupport: [http://caniuse.com/#feat=use-strict](http://caniuse.com/#feat=use-strict)

+ Auswirkungen:
    + weniger globale Varialen
    + mehr sichtbare Fehler
    + <code>this</code> innerhalb von Funktionen ist <code>undefined</code> und nicht mehr global Object
    + mehr reservierte Wörter <code>implements, interface, let, package, public, private ...</code>


<pre>
"use strict";

x = 42;                         // ReferenceError - "var" fehlt

undefined = 42;                 // TypeError - "undefined" kann nur undefined sein

delete Object.prototype;        // TypeError - Object.prototype ist schreibgeschützt

var o = { foo: "x", foo: "y" }; // SyntaxError - Zwei mal "foo" geht nicht

function foo(x, x, z){}         // SyntaxError - Zwei mal "x" geht nicht

var package = 42;               // package is a reserved identifier      
</pre>


[http://www.peterkroener.de/ecmascript-5-die-nachste-version-von-javascript-teil-2-der-strict-mode/](http://www.peterkroener.de/ecmascript-5-die-nachste-version-von-javascript-teil-2-der-strict-mode/)

Mit JSLint und im Strict Mode ist es wesentlich schwieriger schlechte Programme zu schreiben.

Tip: Unbedingt einsetzen !

<br><br><br>

## Funktionen & Scope

+ <code>functions</code> sind First-Class Objects, d.h. nur spezielle Ausprägung von <code>Object</code>
    + können Properties haben
    + können in Variablen gespeichert werden
    + können Übergabeparamenter sowie Rückgabewert einer Funktion sein

+ Funktionsdeklarierung:

<pre>
  
  function foo() { ... }        // procedural function
  
  
  function() { ... };           // anonymous function I
  
  
  var bar = function() { ... }; // anonymous function II
  
  
  (function() { ... }());       // self-invoking anonymous function
  
  
  fn = {                         // methods
    foo : function(){},
    bar : function(){},
    baz : function(){}
  }
  
</pre>

+ Javascript hat function-scope, d.h. Variablen die innerhalb einer Funktion mit <code>var</code> definiert wurden sind lokale Variablen

<pre>
  (function(window, document, $, undefined){ // Global Import

    var 
    export = {},
    myVar1 = 42;  // local variable

    myVar2 = 11;      // implied global variable

    export.myVar;

    return export; 

  }(window, document, jQuery));  
</pre>
 
Tip: Ein Script immer in eine Funktion kapseln!

<br><br><br>

## Module Pattern

+ Emulierung von <code>private</code> und <code>public</code> Members
+ es wird nur eine public API zurückgeliefert

<pre>
  (function(window, document, $, undefined){ // Global Import

    var 
    myVar1 = 42,        // private property
    myFn = function(){  // private function
      return myVar;
    };

    return {            // module export
      pub_myFn: myFn
    };

  }(window, document, jQuery));
</pre>

[http://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript](http://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript)
[http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth](http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth)

<br><br><br>

## RequireJS - Module Loader

Problem:

+ Webseiten beinhalten vielerlei UI-Funktionalität
+ Code Komplexität nimmt mit der Größe der Seite zu 
+ Produktivscripte auf wenige HTTP Requests reduzieren (script concatenation, minifizieren)

Ziel: 

+ Effiziente Codeorganisation
+ Verbesserung der Wartbarkeit durch Kapselung von konkreter UI-Funktionalität in JS Files/Modules.
+ build und optimization tools für vereinfachtes deployment

Lösung:

+ CommonJS spezifiziert einen Standard für Modularisierung, der recht verbreitet bei Serveranwendungen ist (z.b. NodeJS)
+ Dojo hat ihren Modularisierungsmechanismus AMD (Asynchronous Module Definition) getauft und mit [require.js](http://requirejs.org) eine Implementierung zur Verfügung gestellt
+ RequireJS Optimizer <code>r.js -o build.js</code>

AMD definiert zwei wichtige Funktionen: require() und define():

+ require() fordert require.js auf, erst die Module zu laden und mir danach bereitzustellen.
+ define() definiert ein neues Modul und deren Abhängigkeiten.

[http://requirejs.org](http://requirejs.org)

[http://blog.netways.de/2012/07/05/effiziente-codeorganisation-in-javascript-require-js/](http://blog.netways.de/2012/07/05/effiziente-codeorganisation-in-javascript-require-js/)

Hands on ...

<br><br><br>

## QUnit - Javascript Unit Testing

Manuelles Testen?

+ Manuelles Testen ist Zeitaufwändig, teuer, nicht gründlich und nicht wiederverwendbar.
+ wiederkehrende Bugs (Regressions) sind nicht einfach zu finden
+ Crossbrowser :-(

Automatisiertes Testen!

+ Unit Tests sind schnell, gründlich und sind beliebig wiederholbar
+ Unit Tests helfen Bugs einfacher zu finden
+ Crossbrowser :-)

Was Testen?

+ Synchronous Testing
+ Asynchronous Testing
+ DOM Testing
+ Testing User Action

QUnit Setup!

+ testrunner
+ testsuite
+ tests

Hands on ...

[http://qunitjs.com/](http://qunitjs.com/)<br> 
[http://funcunit.com/](http://funcunit.com/)<br>
[http://sinonjs.org/](http://sinonjs.org/)<br>
[http://tddjs.com/](http://tddjs.com/)
<br><br><br>

## Testem - makes Javascript Unit Testing fun.

+ Testrunner der unabhängig vom Test Framework ist
    + QUnit
    + Mocha
    + Jasmine
    + Buster
        
Use Cases:

+ TDD - designed to streamline the TDD workflow
+ CI - designed to work well with popular CI servers like Jenkins or Teamcity 

Hands on ...

<br><br><br>

## Yeoman - Modern workflows for modern webapps

+ Sammlung von Tools und Librarys

Features:

+ Scaffolding
+ autocompile CoffeeScript & Compass
+ autolint javascript
+ built-in preview server
+ Image Optimization
+ killer build process
+ Integrated package management
+ PhantomJS Unit Testing

http://yeoman.io/

hands on ...

<br><br><br>

FIN