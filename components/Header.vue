<template>
<div>
  <header>
      <div class="header-left">
          <nuxt-link to="/"><p class="header-link">Damillora</p></nuxt-link>
      </div>
      <div class="header-middle">
      </div>
      <div class="header-right">
          <nuxt-link to="/about"><p class="header-link">about</p></nuxt-link>
          <nuxt-link to="/games"><p class="header-link">game profile</p></nuxt-link>
          <nuxt-link to="/sns"><p class="header-link">social media</p></nuxt-link>
          <a href="//blog.nanao.moe"><p class="header-link">blog</p></a>
      </div>
  </header>
  <div class="h-16"></div>
</div>
</template>

<script>
export default {

}
</script>

<style>
header {
    @apply h-16 fixed top-0 w-full z-10 flex flex-row justify-start items-center px-4;
    background-color: rgba(0,0,0,0.3);
}
.header-link {
    @apply text-white text-lg mx-2;
}
.header-left {
    
}
.header-middle {
    @apply flex-grow;
}
.header-right {
   @apply flex flex-row;
}
</style>
