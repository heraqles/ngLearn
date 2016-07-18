angular.module(MODULES.DIRECTIVES.ITEM,[])
    .directive('itemDctv', function () {
        return {
            scope:{
                model: '=',
                storage: '='
                
            },
            templateUrl: 'src/directives/item/item-tpl.html'
            
        }
    });