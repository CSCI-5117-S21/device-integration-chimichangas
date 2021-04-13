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
        }
    }
}
</script>