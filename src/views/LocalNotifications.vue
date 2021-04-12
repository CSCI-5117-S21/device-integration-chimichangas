<template>
<div class="LocalNotification">
    <h1>Local Notification Demo</h1>
    <localnotification></localnotification>
</div>
</template>
<script>
// @ is an alias to /src
import localnotification from '@/components/localnotification.vue'

export default {
    name: 'LocalNotifications',
    components: {
        localnotification
    }
}
</script>