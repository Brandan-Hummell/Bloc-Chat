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

    function BlocChatCookies($uibModal, $cookies) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
            $uibModal.open({
                animation: this.animationsEnabled,
                templateUrl: '/templates/blocChatUser.html',
                controller: 'UsernameInstanceCtrl',
                controllerAs: 'ctrl',
                backdrop: 'static',
                keyboard: false,
                uibModalWindow: 'modal-window',
                size: '250px',
                windowClass: "modal"
            }).result.then(function(name) {
                this.username = name;
                $cookies.put('blocChatCurrentUser', this.username);
                var currentUser = $cookies.get('blocChatCurrentUser');
                console.log(currentUser);
            });
        }
    }



    angular
        .module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap', 'ngCookies'])
        .config(config)
        .run(['$uibModal', '$cookies', BlocChatCookies]);
})();