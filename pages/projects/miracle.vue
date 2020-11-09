<template>
  <div class="page">
    <h1>nanao.moe</h1>
    <p>
      <a href="https://nanao.moe">live</a>
      &bull;
      <a href="https://github.com/Damillora/miracle">source code</a>
    </p>
    <h2>Description</h2>
    <p>
      A domain carves a person's place in the Internet. nanao.moe now serves as my primary web page.
      The website contains information about my projects and interests.
    </p>
    <p>
      Originally, nanao.moe is styled in pure CSS. However, it later used Tailwind.
    </p>
    <h2>Technologies</h2>
    <ul>
      <li>Vue.js</li>
      <li>Nuxt.js</li>
      <li>Tailwind CSS</li>
    </ul>
    <h2>Screenshots</h2>
    <div class="gallery">
      <GalleryImage :src="require('~/assets/projects/miracle/1.png')" />
      <GalleryImage :src="require('~/assets/projects/miracle/2.png')" />
    </div>

  </div>
</template>

<script>
import ProjectItem from "@/components/ProjectItem";
import GalleryImage from '@/components/GalleryImage';
export default {
  components: {
    ProjectItem,
    GalleryImage
  },
  head: {
    title: "Project Portfolio",
  }
}
</script>

<style>
.card-list {
     @apply flex flex-col;
}
</style>
