<template>
  <div class="page">
    <PageHeader imageType="765-yuriko2">
      <h1>Contact</h1>
    </PageHeader>
    <main class="container mx-auto main">
      <p>You can contact me via various channels.</p>
      <h2>Common channels</h2>
      <p>Those are the ones I use for interacting with the wider community!</p>
      <ul>
        <li>
          <p>Email</p>
          <p>damillora(at)damillora.com</p>
        </li>
        <li>
          <p>Twitter:</p>
          <p><a href="/twitter">Damillora</a></p>
        </li>
      </ul>
      <h2>Publishing media</h2>
      <p>I publish content mainly in those sites</p>
      <ul>
        <li>
          <p>YouTube:</p>
          <p><a href="/channel">Damillora</a></p>
        </li>
        <li>
          <p>Twitch:</p>
          <p><a href="/twitch">Damillora</a></p>
        </li>
        <li>
          <p>SoundCloud:</p>
          <p><a href="/soundcloud">damillora</a></p>
        </li>
        <li>
          <p>GitHub:</p>
          <p><a href="/github">Damillora</a></p>
        </li>
      </ul>
      <h2>Alternative technologies</h2>
      <p>
        Mainstream platforms control what you can post, and you can lose access to data rightfully yours.
        <br>
        I maintain presence in several altenative platforms and technologies to ensure I have control of data I post,
        to contribute to a possible future, and as a backup when mainstream platforms go down.
        <br>
        If you have a presence in those platforms, I encourage you to use these instead, you will  help
        the adoption of those technologies!
      </p>
      <ul>
        <li>
          <p>Fediverse:</p>
          <p><a href="/fediverse">Damillora@fed.nanao.moe</a></p>
        </li>
        <li>
          <p>Video Channel:</p>
          <p><a href="/fedichan">damillora@live.nanao.moe</a></p>
        </li>
        <li>
          <p>Matrix</p>
          <p>@damillora:matrix.nanao.moe</p>
        </li>
        <li>
          <p>Gemini</p>
          <p><a href="gemini://gemini.nanao.moe">gemini.nanao.moe</a></p>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader';

export default {
  components: {
    PageHeader
  },
  head: {
    title: 'Contact',
  }
}
</script>

<style>
</style>
