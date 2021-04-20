<template>
<div>
    <p>Message:</p>
    <input v-model="newMessage" />
    <p>Reminder Time (ms):</p>
    <input v-model="time" />
    <br>
    <br>
    <button @click="sendNotification" > Set Notification </button>
</div>
</template>
<script>
export default {
    name: "localnotifications",
    data: function() {
        return {
            newMessage: "",
            time: ""
        }
    },
    methods: {
        sendNotification: function() {
            if (!('Notification' in window)) {
                alert('Notification API not supported!');
                return;
            }
            Notification.requestPermission();
            var start = new Date().getTime();
            for (var i = 0; i < 1e7; i++) {
                if ((new Date().getTime() - start) > this.time){
                break;
                }
            }
            try {
                var notification;
                if(this.newMessage == "") {
                    notification = new Notification("Default Notification");
                } else {
                   notification= new Notification(this.newMessage);
                }
                notification.onclick = function(event) {
                    event.preventDefault();
                    window.open('/', '_blank');
                }
            } catch (err) {
                alert('Notification API error: ' + err);
            }
        }
    }
}
</script>