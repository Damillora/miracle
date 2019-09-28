<template>
  <div class="container">
    <h1>{{ error.statusCode }}</h1>
    <p>{{ error.message }}</p>
    <p>
      <nuxt-link to="/">home</nuxt-link>
    </p>
  </div>
</template>

<script>

export default {
  props: ['error'],
  components: {

  },
  transition: {
    name: 'nanao',
  },
  middleware: 'shorten',
}
</script>

<style>

</style>
