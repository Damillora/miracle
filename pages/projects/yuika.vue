<template>
  <div class="page">
    <PageHeader>
      <h1>nanao.moe Blog</h1>
      <p>
        <a href="https://blog.nanao.moe">live</a>
        &bull;
        <a href="https://github.com/Damillora/Yuika">source code</a>
      </p>
    </PageHeader>
    <main class="container mx-auto main">
      <h2>Description</h2>
      <p>
        The nanao.moe blog is my hobby-related blog, writing about games and idols.
      </p>
      <p>
        The blog runs on Ghost, a publication-focused CMS, while the theme uses Tailwind CSS for its CSS framework.
      </p>
      <h2>Technologies</h2>
      <ul>
        <li>Ghost</li>
        <li>Tailwind CSS</li>
        <li>jQuery</li>
      </ul>
      <h2>Screenshots</h2>
      <div class="gallery">
        <GalleryImage :src="require('~/assets/projects/yuika/1.png')" />
        <GalleryImage :src="require('~/assets/projects/yuika/2.png')" />
        <GalleryImage :src="require('~/assets/projects/yuika/3.png')" />
        <GalleryImage :src="require('~/assets/projects/yuika/4.png')" />
        <GalleryImage :src="require('~/assets/projects/yuika/5.png')" />
        <GalleryImage :src="require('~/assets/projects/yuika/6.png')" />
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
