angular
    .module(MODULES.MAIN,[
        MODULES.VIEWS.ITEMS,
        MODULES.VIEWS.CONTACT,
        MODULES.DIRECTIVES.HEADER
    ])
    .config(function ($httpProvider) {
        $httpProvider.defaults.withCredentials = true;
    })
    .constant('CONFIG', {
        API_PREFIX: 'http://js.edu.pl/api/'
    });