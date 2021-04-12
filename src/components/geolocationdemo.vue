<template>
    <div>
        <button @click="getLocation"> Allow location </button>
        <h1 v-if="location"> {{location.coords.latitude}}, {{location.coords.longitude}} </h1>
    </div>
</template>

<script>
export default {
    name: "geolocationdemo",
    props: [],
    created: function() {
        //do we support geolocation
        if(!("geolocation" in navigator)) {
            this.errorStr = 'Geolocation is not available.';
            return;
        }
    },
    data: function() {
        return {
            location: null,
            gettingLocation: false,
            errorStr:null
        }
    },
    methods: {
        getLocation: function() {
            navigator.geolocation.getCurrentPosition(pos => {
                this.location = pos;
            })
        }
    }
}
</script>