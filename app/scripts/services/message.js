(function() {
    function Message($firebaseArray, $cookies) {
        var Message = {};
        var ref = firebase.database().ref().child("Messages");
        var messages = $firebaseArray(ref);

        Message.all = messages;

        Message.getByRoomId = function(roomId) {
            var messageRef = firebase.database().ref().child("Messages").orderByChild("roomId").equalTo(roomId);
            return $firebaseArray(messageRef);
        };

        Message.send = function(newMessage, roomId) {
            var currentRoomId = roomId;
            var currentDate = new Date();
            var currentUser = $cookies.get('blocChatCurrentUser');
            var newMessageObject = {
                content: newMessage,
                roomId: currentRoomId,
                sentAt: currentDate,
                username: currentUser
            };
            messages.$add(newMessageObject);
            console.log(newMessage);
            return Message;
        };

        Message.test = function() {
            console.log('success');
        };

        return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();