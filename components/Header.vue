<template>
<div>
  <header>
      <div class="header-left" v-if="needsBackButton">
          <nuxt-link class="header-link" to="/"><i class="material-icons">arrow_back</i></nuxt-link>
      </div>
      <div class="header-middle">
        <p class="text-lg">{{ title }}</p>
      </div>
      <div class="header-right">
      </div>
  </header>
</div>
</template>

<script>
export default {
  computed: {
    needsBackButton() {
      return this.$nuxt.$route.path != "/";
    },
    title() {
      return this.$store.state.title;
    }
  },
  methods: {
    goBack(event) {
      if(event) event.preventDefault();
      this.$router.back();
    }
  }
}
</script>

<style>
header {
    @apply h-16 w-full z-10 flex flex-row justify-start items-center px-4;
}
.header-link {
    @apply mx-2 h-6 w-6 cursor-pointer;
}
.header-left {
    @apply flex flex-row justify-start items-center h-full;
}
.header-middle {
    @apply flex-grow flex flex-row justify-start items-center h-full;
}
.header-right {
   @apply flex flex-row justify-start items-center h-full;
}
</style>
