<template>
  <div :class="getCurrentClasses()" @click="$emit('click')">
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
        return ['nav-item','selected'];     
      }
      return ['nav-item'];
    }
  },
}
</script>
<style>
.nav-item {
  @apply text-white h-12 flex flex-row items-center transition duration-300 ease-in-out;
}
.nav-item:hover {
  @apply bg-yuika-blue-500
}
.nav-item a {
  @apply flex flex-row items-center h-full w-full;
}
.nav-item a i {
  @apply px-4;
}
.nav-item a p {
  @apply inline-block flex-grow;
}
</style>
