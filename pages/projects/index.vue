<template>
  <div class="page">
            <h1 class="title">Project Portfolio</h1>
            <p>I play arcade and mobile games mostly, not all are recorded / streamed.</p>
            <p>My most frequently played genre is rhythm games, but sometimes I try other genres too</p>
            <div class="card-list">
                <ProjectItem name="nanao.moe" codename="miracle" description="The home page for my more playful side." />
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
  meta: {
    title: "Project Portfolio",
  }
}
</script>

<style>
.card-list {
     @apply flex flex-col;
}
</style>
