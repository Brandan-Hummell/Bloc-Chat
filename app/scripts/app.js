(function() {

    function config($locationProvider, $stateProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });

        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/home.html'
            });
    }

    function quickChatCookies($uibModal, $cookies) {
        var currentUser = $cookies.get('quickChatCurrentUser');
        if (!currentUser || currentUser === '') {
            $uibModal.open({
                animation: this.animationsEnabled,
                templateUrl: '/templates/quickChatUser.html',
                controller: 'UsernameInstanceCtrl',
                controllerAs: 'ctrl',
                backdrop: 'static',
                keyboard: false,
                uibModalWindow: 'modal-window',
                size: '250px',
                windowClass: "modal"
            }).result.then(function(name) {
                this.username = name;
                $cookies.put('quickChatCurrentUser', this.username);
                var currentUser = $cookies.get('quickChatCurrentUser');
                console.log(currentUser);
            });
        }
    }



    angular
        .module('quickChat', ['ui.router', 'firebase', 'ui.bootstrap', 'ngCookies'])
        .config(config)
        .run(['$uibModal', '$cookies', quickChatCookies]);
})();