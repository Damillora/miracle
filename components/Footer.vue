<template>
<div>
  <footer>
      <div class="footer-left">
          <h1>(C) 2019 Damillora</h1>
      </div>
  </footer>
  <div class="h-12"></div>
</div>
</template>

<script>
export default {

}
</script>

<style>
footer {
    @apply h-12 bottom-0 w-full z-10 flex flex-row justify-start items-center px-4 fixed;
    background-color: rgba(0,0,0,0.3);
}
footer h1 {
    @apply text-white;
}
.footer-left {
    
}
</style>
