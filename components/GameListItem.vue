<template>
    <div class="card game-card">
        <div class="card-content">
          <div class="card-title">
              <p class="card-caption"><nuxt-link :to="link">{{name}}</nuxt-link></p>
          </div>
          <div class="card-content">
            <p>Player Name: {{ playername }}</p>
            <p>ID: {{ gameid }}</p>
          </div>
          <div class="card-footer">
          </div>
        </div>
    </div>
</template>

<script>
export default {
  props : [ 'name', 'link', 'gameid', 'playername' ],
}
</script>

<style>
.game-card {
    padding: 0.25rem 1rem;
    @apply w-full flex flex-row transition duration-300 ease-in-out;
}
.game-card:hover {
    @apply bg-yuika-blue-200;
}
.card-caption {
    @apply text-2xl my-1;
}
.card-content {
    @apply my-2 w-full;
}
.card-content p {
    @apply my-1;
}
 

</style>
