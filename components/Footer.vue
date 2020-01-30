<template>
<div>
  <footer>
      <FooterNav
        link="/about"
        icon="person"
        text="about"
         />
      <FooterNav
        link="/games"
        icon="videogame_asset"
        text="game profile"
         />
      <FooterNav
        link="/sns"
        icon="contacts"
        text="social media"
         />
      <FooterNav
        link="//blog.nanao.moe"
        icon="rss_feed"
        text="blog"
        external="true"
         />
  </footer>
</div>
</template>

<script>
import FooterNav from "./FooterNav";

export default {
  components: {
    FooterNav
  },
}
</script>

<style>
footer {
    @apply h-16 w-full flex flex-row justify-start items-center;
}
@screen md {
  .footer-nav p {
      @apply text-base;
  }
}
</style>
