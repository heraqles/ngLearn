angular
    .module(MODULES.DIRECTIVES.HEADER, [
        MODULES.SERVICES.USER_STORAGE,
        MODULES.SERVICES.ITEM_STORAGE
    ])
    .directive('headerDctv', function () {
        return{
            scope: true,
            templateUrl: TEMPLATES.DIRECTIVES.HEADER,
            controller: function ($scope, userStorage, itemsStorage) {
                $scope.signIn = function () {
                    userStorage.signIn();

                };
                $scope.signOut = function () {
                    userStorage.signOut();
                };
                $scope.addItem = function () {
                    itemsStorage.add();
                };
            }

        }
    });