<template>
  <div class="page">
    <PageHeader imageType="cue-mei">
      <h1>Project Portfolio</h1>
    </PageHeader>
    <main class="container mx-auto main">
      <p>I build applications in my spare time, but currently only some are published / live right now</p>
      <div class="card-list">
          <ProjectItem name="nanao.moe" codename="miracle" description="The home page for my online identity." />
          <ProjectItem name="nanao.moe Blog" codename="yuika" description="The blog for my hobbies" />
          <ProjectItem name="Altessimo" codename="altessimo" description="Web database of Idolmaster composers" />
      </div>
    </main>
  </div>
</template>

<script>
import ProjectItem from "@/components/ProjectItem";
import PageHeader from "@/components/PageHeader";

export default {
  components: {
    ProjectItem,
    PageHeader,
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
