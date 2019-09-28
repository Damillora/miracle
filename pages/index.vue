<template>
  <div class="container">
            <div class="col fill">
                <div class="row">
                    <h3 class="primary japanese lily">リリィ・ナイト</h3>
                    <h1 class="primary japanese yuriko">七尾百合子</h1>
                    <h2 class="primary yuriko-sub">Yuriko Nanao</h2>
                </div>
                <div class="expand">

                </div>
                <div class="row">
                    <img class="yuriko-smol" src="/yuriko-smol.png"></img>
                    <h1 class="primary name">Damillora</h1>
                    <h2 class="sub">an idol fan with a strange music to it</h2>
                    <p>
                        <nuxt-link to="/about">about</nuxt-link>&nbsp;|&nbsp;
                        <nuxt-link to="/games">game profile</nuxt-link>&nbsp;|&nbsp;
                        <nuxt-link to="/sns">social media</nuxt-link>&nbsp;|&nbsp;
                        <a href="https://nanao.moe/blog">blog</a>
                    </p>
                </div>
            </div>
  </div>
</template>

<script>

export default {
  components: {

  },
  transition: {
    name: 'nanao',
  }
}
</script>

<style>
</style>
