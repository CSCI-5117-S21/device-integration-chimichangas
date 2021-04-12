<template>
  <div class="Audiorecorder">
    <h1>Audio Recorder Demo</h1>
    <audiorecorder></audiorecorder>
  </div>
</template>

<script>
// @ is an alias to /src
import audiorecorder from '@/components/audiorecorder.vue'

export default {
  name: 'Audiorecorder',
  components: {
    audiorecorder
  }
}
</script>

<style scoped>
h1 {
  margin-bottom: 3%;
}
</style>
