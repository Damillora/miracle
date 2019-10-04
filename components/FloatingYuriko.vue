<template>
    <div class="smol-yurik hvr-float">
      <img src="/yuriko-smol.png" @click="yurikosound"></img>
    </div>
</template>

<script>
import {Howl, Howler} from 'howler';

export default {
  methods: {
    yurikosound() {
      var sound = new Howl({
        src: require("../static/yuriko.ogg"),
        volume: 0.3
      });
      sound.play();
    }
  }
}

</script>

<style>
.smol-yurik {
    position: fixed;
    right: 0;
    bottom: 0;
    margin-bottom: 0px;
    cursor: pointer;
}
.smol-yurik > img {
    height: 20vh;
}
.hvr-float {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.hvr-float:hover, .hvr-float:focus, .hvr-float:active {
  -webkit-transform: translateY(-8px);
  transform: translateY(-8px);
}
</style>

