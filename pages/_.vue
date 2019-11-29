<template>
  <div class="page">
    <h1>404</h1>
    <p>oops!</p>
    <p>
      <nuxt-link to="/">home</nuxt-link>
    </p>
  </div>
</template>

<script>

export default {
  components: {

  },
  middleware: 'shorten',
}
</script>

<style>

</style>
