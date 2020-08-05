<template>
  <div class="gallery-image">
    <img :src='src' @click="shown = !shown">
    <div :class="shown ? 'gallery-popup' : 'gallery-popup-hidden'" @click.self="shown = !shown" @mousemove="calculate">
      <img :src='src' @click="zoom" :class="zoom_status" :style="{left: cursor_x, top: cursor_y }" draggable="false">
      <a class="gallery-popup-exit" @click="shown = !shown" href="#">x</a>
    </div>
  </div>
</template>

<script>
export default {
    props: [ 'src' ],
    data() {
      return {
        shown: false,
        zoom_status: 'gallery-zoomed-out',
        cursor_x: 300,
        cursor_y: 300,
      };
    },
    methods: {
      zoom() {
        if(this.zoom_status == 'gallery-zoomed-out') {
          this.zoom_status = 'gallery-zoomed-in';
        } else {
          this.zoom_status = 'gallery-zoomed-out';
        }
      },
      calculate(e) {
        this.cursor_x = ((e.clientX)-(window.innerWidth/2))*2+'px';
        this.cursor_y = ((e.clientY)-(window.innerHeight/2))*2+'px';
      }
    },
}
</script>

<style>
.gallery-popup-hidden {
    @apply fixed h-0 w-screen opacity-0 transition-opacity;
}
.gallery-popup {
    @apply fixed w-screen h-screen left-0 top-0 py-16 px-16 z-20 flex flex-row items-center justify-center transition-opacity;
    background: rgba(0,0,0,0.7);
}
.gallery-popup .gallery-zoomed-out {
   max-height: 100%;
}
.gallery-popup .gallery-zoomed-in {
   @apply fixed;
   width: 400vw;
}
.gallery-popup-exit {
    @apply fixed right-0 top-0 z-30 mx-8 my-4 text-2xl;
}
</style>
