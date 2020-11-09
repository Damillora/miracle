<template>
  <div class="page">
            <h1 class="title">Project Portfolio</h1>
            <p>I build applications in my spare time, but currently only some are published / live right now</p>
            <div class="card-list">
                <ProjectItem name="nanao.moe" codename="miracle" description="The home page for my online identity." />
                <ProjectItem name="nanao.moe Blog" codename="yuika" description="The blog for my hobbies" />
            </div>
  </div>
</template>

<script>
import ProjectItem from "@/components/ProjectItem";

export default {
  components: {
    ProjectItem,
  },
  head: {
    title: "Project Portfolio",
  }
}
</script>

<style>
.card-list {
     @apply flex flex-col;
}
</style>
