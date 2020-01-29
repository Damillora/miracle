<template>
<div>
  <footer>
      <div class="footer-nav">
          <nuxt-link to="/about"><p class="header-link">about</p></nuxt-link>
      </div>
      <div class="footer-nav">
          <nuxt-link to="/games"><p class="header-link">game profile</p></nuxt-link>
      </div>
      <div class="footer-nav">
          <nuxt-link to="/sns"><p class="header-link">social media</p></nuxt-link>
      </div>
      <div class="footer-nav">
          <a href="//blog.nanao.moe"><p class="header-link">blog</p></a>
      </div>

  </footer>
</div>
</template>

<script>
export default {

}
</script>

<style>
footer {
    @apply h-16 w-full flex flex-row justify-start items-center;
}
.footer-nav {
    @apply w-1/4 flex flex-row justify-center items-end;
}
</style>
