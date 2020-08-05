<template>
<div>
  <div class="site-header">
    <div class="site-header-inner">
      <header>
        <div class="header-title">
           <nuxt-link to="/"><h1 class="text-lg text-white">Damillora</h1></nuxt-link>
        </div>
        <div class="header-nav">
          <div id="menushow" class="">
            <span class="h-12 w-12 px-3 py-3 text-white md:hidden material-icons" alt="menu">menu</span>
          </div>
          <div class="nav-menu">
      <NavItem
        link="/about"
        icon="person"
        text="About"
         />
      <NavItem
        link="/projects"
        icon="work"
        text="Projects"
         />
      <NavItem
        link="/games"
        icon="videogame_asset"
        text="Game Profile"
         />
      <NavItem
        link="/links"
        icon="contacts"
        text="Links"
         />
      <NavItem
        link="//blog.nanao.moe"
        icon="rss_feed"
        text="Blog"
        external="true"
         />
          </div>
        </div>
      </header>
    </div>
  </div>
</div>
</template>

<script>
import NavItem from './NavItem';
export default {
  components: {
    NavItem
  },
  computed: {
    title() {
      return this.$store.state.title;
    }
  },
  methods: {
    goBack(event) {
      if(event) event.preventDefault();
      this.$router.back();
    }
  }
}
</script>

<style>
.site-header {
  min-height: 300px;
  height: 70vh;     
  background-image: url('~assets/images/bg-sm.jpg');
  background-size: cover;
  background-position: center;
}
@screen md {
  .site-header {
    @apply fixed;
    height: 100vh;
    width: 25vw;
  }
}
@screen sm {
    .site-header {
        background-image: url('~assets/images/bg-md.jpg');
    }
}
@screen md {
    .site-header {
        background-image: url('~assets/images/bg-lg.jpg');
    }
}
@screen lg {
    .site-header {
        background-image: url('~assets/images/bg-xl.jpg');
    }
}
@screen xl {
    .site-header {
        background-image: url('~assets/images/bg-xxl.jpg');
    }
}
.site-header-inner {
    background: rgba(0,0,0,0.5);
    @apply w-full h-full;
}
header {
    @apply flex flex-row transition duration-300 ease-in-out;
}
@screen md {
  header {
    @apply flex flex-col
  }
}
header:hover {
    @apply bg-yuika-blue-700;
}
.header-title {
    @apply flex-grow transition duration-300 ease-in-out;
}
.header-title a {
    @apply flex flex-row items-center py-5 pl-4 w-full h-full; 
}
.header-title:hover {
    @apply bg-yuika-blue-500;
}
.header-nav {
    @apply relative;
}
.header-nav #menushow {
  @apply cursor-pointer relative px-2 py-2 transition duration-300 ease-in-out;
}
.header-nav #menushow:hover  {
  @apply bg-yuika-blue-500;
}
.header-nav .nav-menu {
  @apply hidden absolute right-0 bg-yuika-blue-700;
  width: 100vw;
}
.header-nav:hover .nav-menu {
  @apply block;
}
@screen md {
  header {
    @apply flex flex-col
  }
  header:hover {
    background-color: transparent;
  }
  .header-nav #menushow {
    @apply py-0;
  }
  .header-nav .nav-menu {
    @apply block relative w-full;
    background-color: transparent;
  }
}

</style>
