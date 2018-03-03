(function() {
    function ModalInstanceCtrl($uibModalInstance) {
        this.ok = function() {
            this.room = { name: '' };
            console.log(this.name);
            $uibModalInstance.close(this.name);
        };

        this.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
    }

    angular
        .module('quickChat')
        .controller('ModalInstanceCtrl', ['$uibModalInstance', ModalInstanceCtrl]);
})();