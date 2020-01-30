<template>
  <li>
    <p>{{ name }}</p>
    <p><nuxt-link :to="link">Profile</nuxt-link></p>
    <p>ID: {{ gameid }}</p>
  </li>
</template>

<script>
export default {
  props : [ 'name', 'link', 'gameid' ],
}
</script>

<style>
</style>
