<template>
  <div class="main">
    <Header/>
    <div class="content">
      <nuxt />
    </div>
    <Footer/>
  </div>
</template>

<script>
// import FloatingYuriko from '~/components/FloatingYuriko'
import Footer from '~/components/Footer'
import Header from '~/components/Header'
export default {
  components: {
//    FloatingYuriko
    Footer,
    Header,
  }
}
</script>

<style>

</style>
