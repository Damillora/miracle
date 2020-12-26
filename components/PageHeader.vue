<template>
    <div class="relative group page-header">
        <div class="h-full w-full page-header-background">
            <div class="w-full h-full opacity-50 bg-black">
            </div>
        </div>
        <div class="absolute bottom-0 py-2 left-0 right-0">
            <div class="container mx-auto main">
                <div>
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>
<style>

.page-header {
  width: 100%;
  min-height: 200px;
  height: 70vh;
  @apply text-white font-light;
}
.page-header a {
    @apply text-white;
}
@screen md {
  .page-header {
    min-height: 300px;
    height: 70vh;
  }
}

.page-header-background {
  background-image: url('~assets/images/bg-sm.jpg');
  background-size: cover;
  background-position: right 25% top 20%;
}
@screen sm {
    .page-header-background {
        background-image: url('~assets/images/bg-md.jpg');
    }
}
@screen md {
    .page-header-background {
        background-image: url('~assets/images/bg-lg.jpg');
    }
}
@screen lg {
    .page-header-background {
        background-image: url('~assets/images/bg-xl.jpg');
    }
}
@screen xl {
    .page-header-background {
        background-image: url('~assets/images/bg-xxl.jpg');
    }
}
</style>