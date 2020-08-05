<template>
    <div class="card project-card">
        <div class="card-image">
          <img :src="require('~/assets/projects/'+codename+'/1.png')"></img>
        </div>
        <div class="card-content">
          <div class="card-title">
              <h1><nuxt-link :to="'/projects/'+codename">{{name}}</nuxt-link></h1>
          </div>
          <div class="card-content my-4">
              <p>{{description}}</p>
          </div>
          <div class="card-footer">
          </div>
        </div>
    </div>
</template>

<script>
export default {
  props : ['name', 'description', 'codename', 'noimage'],
}
</script>

<style>
.project-card {
    padding: 1rem;
    @apply w-full flex flex-row transition duration-300 ease-in-out;
    min-height: 12rem;
}
.project-card:hover {
    @apply bg-yuika-blue-200;
}
.card-image {
    @apply w-1/4 flex flex-col items-center justify-center;
    margin-right: 2rem;
}
.card-content {
    @apply w-3/4;
}

</style>
