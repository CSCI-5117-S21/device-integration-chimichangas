<template>
<div>
    <input v-model="newWord" />
    <input v-model="time" />
    <button @click="addWord" > Allow Notifications </button>
</div>
</template>
<script>
export default {
    name: "LocalNotifications",
    data: function() {
        return {
            newWord: "",
            time: ""
        }
    },
    methods: {
        addWord: function() {
            if (!('Notification' in window)) {
                alert('Notification API not supported!');
                return;
            }
            Notification.requestPermission(function () {
            });
            var start = new Date().getTime();
            for (var i = 0; i < 1e7; i++) {
                if ((new Date().getTime() - start) > this.time){
                break;
                }
            }
            if (!('Notification' in window)) {
                alert('Notification API not supported!');
                return;
            }
            try {
                var notification;
                if(this.newWord == "") {
                    notification = new Notification("Hi there - non-persistent!");
                } else {
                   notification= new Notification(this.newWord);
                }
                notification.onclick = function(event) {
                    event.preventDefault();
                    // window.open('http://www.google.com', '_blank');
                    // window.open('/', '_blank');
                    window.open(window.location.href, '_blank');
                }
            } catch (err) {
                alert('Notification API error: ' + err);
            }
        }
    }
}
</script>