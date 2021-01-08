<template>
  <div class="page">
    <PageHeader>
      <h1>Links</h1>
    </PageHeader>
    <main class="container mx-auto main">
      <p>I maintain a number of profiles on various sites, be sure to follow me there!</p>
      <h2>Common social media</h2>
      <p>
        <ul>
          <li>
            <p>Twitter:</p>
            <p><a href="/twitter">Damillora</a></p>
          </li>
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
      </p>
      <h2>For decentralized web users and the brave</h2>
      <p>
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
      </p>
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
    title: 'Social Media',
  }
}
</script>

<style>
</style>
