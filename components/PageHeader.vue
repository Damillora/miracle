<template>
    <div class="relative group page-header">
        <style>
            :root {
                --bg: url('{{ require('@/assets/images/'+normalImageType+'/bg.jpg') }}');
                --bg-sm: url('{{ require('@/assets/images/'+normalImageType+'/bg-sm.jpg') }}');
                --bg-md: url('{{ require('@/assets/images/'+normalImageType+'/bg-md.jpg') }}');
                --bg-lg: url('{{ require('@/assets/images/'+normalImageType+'/bg-lg.jpg') }}');
                --bg-xl: url('{{ require('@/assets/images/'+normalImageType+'/bg-xl.jpg') }}');
                --bg-xxl: url('{{ require('@/assets/images/'+normalImageType+'/bg-xxl.jpg') }}');
            }
        </style>
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
  props: [ 'imageType' ],
  computed: {
    normalImageType() {
      return this.imageType ?? 'yuika';
    }
  },

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
  background-image: var(--bg-sm);
  background-size: cover;
  background-position: right 25% top 20%;
}
@screen sm {
    .page-header-background {
        background-image: var(--bg-md);
    }
}
@screen md {
    .page-header-background {
        background-image: var(--bg-lg);
    }
}
@screen lg {
    .page-header-background {
        background-image: var(--bg-xl);
    }
}
@screen xl {
    .page-header-background {
        background-image: var(--bg-xxl);
    }
}
</style>