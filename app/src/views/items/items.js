angular
    .module(MODULES.VIEWS.ITEMS,[
        MODULES.THIRD_PARTY.UI_ROUTER,
        MODULES.DIRECTIVES.ITEM,
        MODULES.SERVICES.ITEM_STORAGE
    ])
    .config(function ($stateProvider) {
        $stateProvider
            .state('items', {
                url: '/items',
                templateUrl: TEMPLATES.VIEWS.ITEMS,
                controller: function ($scope, itemsStorage) {
                    $scope.itemsStorage = itemsStorage;
                    itemsStorage.fetch();
                    
                    
                }
            });
    });