(function() {
    function UsernameInstanceCtrl($uibModalInstance, $cookies, $scope) {
        $scope.ok = function() {
            $uibModalInstance.close($scope.name);
        };
    }

    angular
        .module('blocChat')
        .controller('UsernameInstanceCtrl', ['$uibModalInstance', '$cookies', '$scope', UsernameInstanceCtrl]);
})();