(function() {
    function Room($firebaseArray) {
        var Room = {};
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);

        Room.all = rooms;

        Room.create = function(room) {
            rooms.$add(room);
            return Room;
        };

        return Room;
    }

    angular
        .module('quickChat')
        .factory('Room', ['$firebaseArray', Room]);
})();