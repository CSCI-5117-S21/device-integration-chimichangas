<template>
  <div>
    <audio ref="player" :src='link' controls>
    </audio>
    <br>
    <button @click='start'>Start</button>
    <button @click='mediaRecorder.stop()'>Stop</button>
    <br>
    <br>
    <a :href='link' download='recording.webm'>Download</a>
  </div>
</template>
<script>
export default {
name:  'audiorecorder',
data: function () {
  return {
    recordedChunks : [],
    options: {mimeType: 'audio/webm'},
    link: "",
    mediaRecorder: null
  }
},

methods: { 
  start: function () {
  //https://developers.google.com/web/fundamentals/media/recording-audio
  let self = this;
  const handleSuccess = function(stream) {
  
    self.mediaRecorder = new MediaRecorder(stream, {mimeType: 'audio/webm'});
    self.mediaRecorder.addEventListener('dataavailable', function(e) {
      if (e.data.size > 0) {
        self.recordedChunks.push(e.data);
        console.log("saving data");
      }
      
    });

    self.mediaRecorder.addEventListener('stop', function() {
      self.link = URL.createObjectURL(new Blob(self.recordedChunks));
      console.log(self.link);
      //window.location.replace(self.link);
    });
    
    self.mediaRecorder.start();

  };

  navigator.mediaDevices.getUserMedia({ audio: true, video: false }).then(handleSuccess);

  }
}
}
</script>


