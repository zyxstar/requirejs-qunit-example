require.config({
  
  baseUrl: 'js',

  paths: {
    text: 'libs/text/text',
    jquery: 'libs/jquery/dist/jquery.min',
    colorbox: 'plugins/colorbox/colorbox/jquery.colorbox',
    module: 'modules'
  },

  shim: {

    'jquery': {
      exports: 'jquery'
    },

    'colorbox': {
      deps: ['jquery'],
      exports: 'jquery'
    }

  },

  waitSeconds: 20

});

require(['modules/init']);
