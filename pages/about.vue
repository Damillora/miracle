<template>
  <div class="page">
    <PageHeader>
      <h1>About Damillora</h1>
    </PageHeader>
    <main class="container mx-auto main">
      <p>Hello! My name is Damillora.</p>
      <p>I'm currently reconstructing my about page for new things, but I'm a web developer, rhythm game player and music enthusiast!</p>
      <h2>GPG public key</h2>
      <p>My public key is accessible <a href="/damillora.asc">here</a>.</p>
      <h2>Producer Meishi</h2>
      <div class="gallery">
        <GalleryImage :src="require('~/assets/images/meishi/front.png')" />
        <GalleryImage :src="require('~/assets/images/meishi/back.png')" />
      </div>
    </main>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader';
import GalleryImage from '@/components/GalleryImage';

export default {
  components: {
    PageHeader,
    GalleryImage,
  },
  head: {
    title: 'About Damillora',
  }
}
</script>

<style>
</style>
