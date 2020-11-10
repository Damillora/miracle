<template>
<div v-click-outside="menuHide">
  <div :class="menu_shown ? ['site-header','enabled'] : ['site-header']">
    <div :class="menu_shown ? ['site-background','enabled'] : ['site-background']"></div>
    <div class="site-header-inner">
      <header>
        <div class="header-top">
          <a @click="menu_shown = !menu_shown" id="menushow">
            <span class="h-12 w-12 px-3 py-3 text-white material-icons" alt="menu">menu</span>
          </a>
          <div class="header-title" @click="menu_shown = !menu_shown" >
            <nuxt-link to="/"><h1 class="text-lg text-white">Damillora</h1></nuxt-link>
          </div>
        </div>
        <div class="header-menu">
          <div :class="menu_shown ? ['nav-menu','enabled'] : ['nav-menu']">
            <NavItem
              link="/about"
              icon="person"
              text="About"
              @click="menu_shown = !menu_shown"
              />
            <NavItem
              link="/projects"
              icon="work"
              text="Projects"
              @click="menu_shown = !menu_shown" 
              />
            <NavItem
              link="/games"
              icon="videogame_asset"
              text="Game Profile"
              @click="menu_shown = !menu_shown" 
              />
            <NavItem
              link="/links"
              icon="contacts"
              text="Links"
              @click="menu_shown = !menu_shown" 
              />
            <NavItem
              link="//blog.nanao.moe"
              icon="rss_feed"
              text="Blog"
              external="true"
              @click="menu_shown = !menu_shown"
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
  data() {
    return {
      menu_shown: false,
    };
  },
}
</script>

<style>
.site-header {
  height: 4rem;
  width: 100vw;
  overflow: hidden;
  @apply fixed transition-all duration-300 ease-in-out;
}
.site-background {
  z-index: -1;
  width: 100vw;
  height: 100vh;
  position: absolute;
  background-image: url('~assets/images/bg-sm.jpg');
  background-size: cover;
  background-position: right 25% top 20%;
  @apply transition-all duration-300 ease-in-out;
}
.site-background {
  top: -23vh;
}
.site-background.enabled {
  top: 0;
}
@screen md {
  .site-background {
    top: 0;
    right: -25vw;
  }
  .site-background.enabled {
    top: 0;
    right: 0;
  }
}
.site-header.enabled {
  height: 100vh;
  width: 100vw;
}
@screen md {
  .site-header {
    @apply fixed;
    height: 100vh;
    width: 3.5rem;
  }
  .site-header.enabled {
    width: 100vw;
  }
}
@screen sm {
    .site-background {
        background-image: url('~assets/images/bg-md.jpg');
    }
}
@screen md {
    .site-background {
        background-image: url('~assets/images/bg-lg.jpg');
    }
}
@screen lg {
    .site-background {
        background-image: url('~assets/images/bg-xl.jpg');
    }
}
@screen xl {
    .site-background {
        background-image: url('~assets/images/bg-xxl.jpg');
    }
}
.site-header-inner {
    z-index: 1;
    background: rgba(0,0,0,0.5);
    @apply w-full h-full;
}
header {
    @apply flex flex-col transition duration-300 ease-in-out;
}
.header-top {
  @apply flex flex-row;
}
.header-title {
    @apply flex-grow transition duration-300 ease-in-out;
}
.header-title a {
    @apply flex flex-row items-center py-4 pl-4 w-full h-full; 
}
.header-title:hover {
    @apply bg-yuika-blue-500;
}
#menushow {
  @apply block cursor-pointer relative px-1 py-2 transition duration-300 ease-in-out;
}
#menushow:hover {
  @apply bg-yuika-blue-500;
}
.header-menu .nav-menu {
  max-height: 0px;
  @apply block transition-all duration-300 ease-in-out overflow-hidden;
}
.header-menu .nav-menu.enabled {
  max-height: 100vh;
}
@screen md {
  .header-menu .nav-menu {
    max-height: 100vh;
    margin-left: 3.5rem;
    max-width: 0px;
  }
  .header-menu .nav-menu.enabled {
    max-width: 100vw;
  }
}

</style>
