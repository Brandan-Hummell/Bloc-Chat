(function() {
    function Message($firebaseArray) {
        var Message = {};
        var ref = firebase.database().ref().child("Messages");
        var messages = $firebaseArray(ref);

        Message.all = messages;

        Message.getByRoomId = function(roomId) {
            var messageRef = firebase.database().ref().child("Messages").orderByChild("roomId").equalTo(roomId);
            return $firebaseArray(messageRef);
        };

        return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();