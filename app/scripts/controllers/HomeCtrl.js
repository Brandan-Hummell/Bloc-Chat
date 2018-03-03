(function() {
    function HomeCtrl($scope, Room, Message) {
        this.rooms = Room.all;

        this.changeActiveRoom = function(room) {
            if ($scope.activeRoom) {
                $scope.activeRoom = {};
                $scope.activeRoomMessages = [];
            };
            this.newMessage = "";
            $scope.activeRoom = room;
            roomId = room.$id;
            $scope.activeRoomMessages = Message.getByRoomId(roomId);
        };

        this.sendMessage = function() {
            var currentRoomId = $scope.activeRoom.$id;
            Message.send(this.newMessage, currentRoomId);
            this.newMessage = "";
        };
    }


    angular
        .module('quickChat')
        .controller('HomeCtrl', ['$scope', 'Room', 'Message', HomeCtrl]);
})();