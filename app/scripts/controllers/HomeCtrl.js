(function() {
    function HomeCtrl($scope, Room, Message) {
        this.rooms = Room.all;

        this.changeActiveRoom = function(room) {
            if ($scope.activeRoom) {
                $scope.activeRoom = {};
                $scope.activeRoomMessages = [];
            };
            $scope.activeRoom = room;
            roomId = room.$id;
            $scope.activeRoomMessages = Message.getByRoomId(roomId);
        };

        this.sendMessage = function(name) {
            var currentRoomId = $scope.activeRoom.$id;
            Message.send(name, currentRoomId);
        };
    }


    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', 'Room', 'Message', HomeCtrl]);
})();