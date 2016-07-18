angular
    .module(MODULES.SERVICES.USER_STORAGE, [
        MODULES.SERVICES.MODAL_GENERATOR,
        MODULES.THIRD_PARTY.NG_COOKIES
    ])
    .service('userStorage', function ($rootScope, $http, CONFIG, modalGenerator, $cookies) {
        this.userState = {
            access: false
        };
        this.setUserAccess = function (access) {
            this.userState.access = access;
            access
                ? $cookies.put('logged', true)
                : $cookies.remove('logged');
        };
        this.signIn = function () {
            modalGenerator.open('src/services/modal/tpls/modal-login.html')
                .then(function (responseData) {
                    $http.post(CONFIG.API_PREFIX + 'login', responseData)
                        .success(function (response) {

                            this.setUserAccess(true);
                        }.bind(this));
                }.bind(this));

        };
        
        this.signOut = function () {
            $http.get(CONFIG.API_PREFIX + 'logout')
                .success(function () {
                    this.setUserAccess(false);
                }.bind(this));
        };

        $rootScope.userState = this.userState;
        $cookies.get('logged')
            ? this.setUserAccess(true)
            : this.signIn();
    });