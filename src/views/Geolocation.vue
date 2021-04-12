<template>
  <div class="Geolocation">
    <h1>Geolocation demo</h1>
    <geolocationdemo></geolocationdemo>
  </div>
</template>

<script>
// @ is an alias to /src
import geolocationdemo from '@/components/geolocationdemo.vue'

export default {
  name: 'Geolocation',
  components: {
    geolocationdemo
  }
}
</script>
