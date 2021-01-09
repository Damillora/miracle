<template>
  <div class="page">
    <PageHeader imageType="765-yuriko">
      <h1>Links</h1>
    </PageHeader>
    <main class="container mx-auto main">
      <p>Here, I post links that is of my interest, and might be for you too!</p>
      <div class="card-list">
        <MediaItem title="Damillora's Favorite Music Playlist" link="/favmusiclist">
          This playlist contains some of the music I listen to frequently.
        </MediaItem>
      </div>
    </main>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader';
import MediaItem from '~/components/MediaItem';

export default {
  components: {
    PageHeader,
    MediaItem
  },
  head: {
    title: 'Links',
  }
}
</script>

<style>
</style>
