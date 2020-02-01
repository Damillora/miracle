<template>
  <div :class="getCurrentClasses()">
    <a :href="link" v-if="external">
      <i class="material-icons md-24">{{ icon }}</i>
      <p class="header-link">{{ text }}</p>
    </a>
    <nuxt-link :to="link" v-else>
      <i class="material-icons md-24">{{ icon }}</i>
      <p>{{ text }}</p>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  props: [ 'link', 'text','external', 'icon' ],
  methods: {
    getCurrentClasses() {
      if(this.$nuxt.$route.path.startsWith(this.link)) {
        return ['footer-nav','selected'];     
      }
      return ['footer-nav'];
    }
  },
}
</script>
<style>
.footer-nav {
    @apply w-1/4 transition-bg;
}
.footer-nav a {
    @apply w-full h-full flex flex-col justify-end items-center py-2;
}
.footer-nav p {
    @apply text-xs;
}
.footer-nav.selected {
    background-color: rgba(0,0,0,0.5);
}
</style>
