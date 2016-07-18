angular
    .module(MODULES.SERVICES.ITEM_STORAGE, [
        MODULES.THIRD_PARTY.NG_RESOURCE,
        MODULES.SERVICES.MODAL_GENERATOR
    ])
    .service('itemsStorage', function ($resource, CONFIG, modalGenerator) {

        var api = $resource(CONFIG.API_PREFIX + 'items/:id', {id: '@id'});

        var itemsStorage = {
            items: [],

            fetch: function () {
                api.get(function (response) {
                    itemsStorage.items = response.data;
                })
            },

            delete: function (item) {
                modalGenerator
                    .open('src/services/modal/tpls/modal-delete-item.html', item)
                    .then(function (modalResponse) {
                        api.delete({id: item.id}, function (response) {
                            itemsStorage.fetch();
                        });
                    });


            },
            add: function () {
                modalGenerator
                    .open('src/services/modal/tpls/modal-add-item.html')
                    .then(function (response) {
                        api.save(response, function () {
                            itemsStorage.fetch();
                        })
                    })
            }
        };

        return itemsStorage;

    });