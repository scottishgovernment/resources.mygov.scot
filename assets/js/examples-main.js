
var rootDomain = "https://www.mygov.scot";

require.config({
    baseUrl: rootDomain + '/assets/scripts/mygov',

    shim: {
        "bootstrap": {
            "deps": ['jquery']
        },
        'autocomplete': {
            "deps": ['jquery'],
            exports: 'autoComplete'
        }
    },
    paths: {
        'hbs': rootDomain + '/assets/scripts/vendor/require-handlebars-plugin/hbs',
        'jquery': rootDomain + '/assets/scripts/vendor/jquery/dist/jquery.min',
        'lodash': rootDomain + '/assets/scripts/vendor/lodash/dist/lodash.min',
        'q': rootDomain + '/assets/scripts/vendor/q/q',
        'bootstrap': rootDomain + '/assets/scripts/vendor/bootstrap/dist/js/bootstrap.min',
        'autocomplete': rootDomain + '/assets/scripts/vendor/jquery-auto-complete/jquery.auto-complete.min'
    },
    hbs: { // optional
        helpers: true, // default: true
        i18n: false, // default: false
        templateExtension: 'hbs', // default: 'hbs'
        partialsUrl: '' // default: ''
    }
});
$('html').removeClass('no-js');

var app = app || {};

require(['format.' + app.format, 'global', 'pubsub'], function(pageFormat, global, pubsub) {
    global.init();
    window.app = app;
    app[app.format] = pageFormat;
    pageFormat.init(app.searchMode);

    //gaSubscribe();
});

if (typeof String.prototype.trim !== 'function') {
    String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, '');
    };
}
