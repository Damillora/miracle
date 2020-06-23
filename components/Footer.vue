<template>
<div>
  <footer>
      <NavItem
        link="/about"
        icon="person"
        text="about"
         />
      <NavItem
        link="/games"
        icon="videogame_asset"
        text="game profile"
         />
      <NavItem
        link="/sns"
        icon="contacts"
        text="social media"
         />
      <NavItem
        link="//blog.nanao.moe"
        icon="rss_feed"
        text="blog"
        external="true"
         />
  </footer>
</div>
</template>

<script>
import NavItem from "./NavItem";

export default {
  components: {
  },
}
</script>

<style>
</style>
