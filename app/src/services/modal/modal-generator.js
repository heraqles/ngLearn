angular
    .module(MODULES.SERVICES.MODAL_GENERATOR, [
        MODULES.THIRD_PARTY.UI_BOOTSTRAP,
        MODULES.DIRECTIVES.UPLOAD
    ])
    .service('modalGenerator', function ($uibModal) {

        return {
            open: function (tplUrl, model) {
                var myModal = $uibModal.open({
                    templateUrl: tplUrl,
                    controller: function ($scope) {
                        $scope.model = model || {};
                        $scope.ok = function (valid) {
                            debugger
                            if (valid) {

                                myModal.close($scope.model);

                            }

                        };
                        $scope.cancel = function () {
                            alert('Cancel');
                        }
                    }
                });

                return myModal.result;
            }
        }

    });