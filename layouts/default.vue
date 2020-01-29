<template>
  <div>
    <div class="main">
      <div class="card">
        <Header />
        <div class="content">
          <nuxt />
        </div>
        <Footer />
      </div>
    </div>
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
.main {
    height: 100vh;
}
.card {
    @apply text-white;
    background-color: rgba(0,0,0,0.3);
    width: 100%;
    height: 100%;
}
@screen md {
    .main {
        padding: 5% 5%;
    }
}

.content {
    @apply px-8 overflow-y-auto;
    height: calc(100% - 8rem);
}
</style>

