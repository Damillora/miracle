<template>
  <div class="page">
    <PageHeader imageType="cue-mei">
      <h1>Altessimo</h1>
      <p>
        <a href="https://altessimo.nanao.moe">live</a>
        &bull;
        <a href="https://github.com/Damillora/Altessimo">source code</a>
      </p>
    </PageHeader>
    <main class="container mx-auto main">
      <h2>Description</h2>
        <p>
          Altessimo is a web application I built to catalogue and put in context Idolmaster lyricists, composers, and arrangers.
        </p>
        <p>
          The database itself is definitely a work-in-progress.</p>
        </p>
      <h2>Technologies</h2>
      <ul>
        <li>Django</li>
        <li>Bootstrap</li>
      </ul>
      <h2>Screenshots</h2>
      <div class="gallery">
        <GalleryImage :src="require('~/assets/projects/altessimo/1.png')" />
        <GalleryImage :src="require('~/assets/projects/altessimo/2.png')" />
        <GalleryImage :src="require('~/assets/projects/altessimo/3.png')" />
        <GalleryImage :src="require('~/assets/projects/altessimo/4.png')" />
      </div>

    </main>
  </div>
</template>

<script>
import ProjectItem from "@/components/ProjectItem";
import PageHeader from "@/components/PageHeader";
import GalleryImage from '@/components/GalleryImage';
export default {
  components: {
    ProjectItem,
    PageHeader,
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
