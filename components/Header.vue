<template>
<div>
  <div :class="{ 'site-header': true, 'enabled': menu_shown, 'detached': detached }">
    <div :class="{ 'site-background': true, 'enabled': menu_shown }"></div>
    <div class="site-header-inner">
      <header>
        <div class="header-top">
          <a @click="menu_shown = !menu_shown" id="menushow">
            <span class="h-12 w-12 px-2 py-3 text-white material-icons" alt="menu">menu</span>
          </a>
          <div class="header-title" @click="menu_shown = menu_shown ? !menu_shown : menu_shown" >
            <nuxt-link to="/"><h1 class="text-lg text-white">Damillora</h1></nuxt-link>
          </div>
        </div>
        <div class="header-menu">
          <div :class="{ 'nav-menu': true, 'enabled': menu_shown }">
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
              icon="share"
              text="Links"
              @click="menu_shown = !menu_shown" 
              />
            <NavItem
              link="/contact"
              icon="contacts"
              text="Contact"
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
      scrollY: 0,
      originTop: 0,
      detached: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', (e) => {
      this.scrollY = Math.round(window.scrollY);
    })
    this.originTop = this.$el.getBoundingClientRect().top;
  },
  watch: {
    scrollY(newValue) {
      const rect = this.$el.getBoundingClientRect();
      const newTop = this.scrollY;
      this.detached = newTop > 64;
    }
  },
}
</script>

<style>
.site-header {
  z-index: 100;
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
  background-image: url('~assets/images/bg/283-yuika/bg-sm.jpg');
  background-size: cover;
  background-position: right 25% top 20%;
  @apply transition-all duration-300 ease-in-out;
}
.site-background {
  opacity: 0%;
  top: -23vh;
}
.site-background.enabled {
  opacity: 100%;
  top: 0;
}
.site-header.enabled {
  height: 100vh;
  width: 100vw;
}
@screen sm {
    .site-background {
        background-image: url('~assets/images/bg/283-yuika/bg-md.jpg');
    }
}
@screen md {
    .site-background {
        background-image: url('~assets/images/bg/283-yuika/bg-lg.jpg');
    }
}
@screen lg {
    .site-background {
        background-image: url('~assets/images/bg/283-yuika/bg-xl.jpg');
    }
}
@screen xl {
    .site-background {
        background-image: url('~assets/images/bg/283-yuika/bg-xxl.jpg');
    }
}
.site-header-inner {
    z-index: 1;
    @apply w-full h-full  transition duration-300 ease-in-out;
}
.site-header.enabled .site-header-inner {
  background: rgba(0,0,0,0.5);
}
.site-header.detached .site-header-inner {
  background: rgba(0,0,0,0.5);
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
  @apply w-16 h-16 cursor-pointer relative p-2 text-center whitespace-nowrap transition duration-300 ease-in-out;
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
    margin-left: 4rem;
    max-width: 0px;
  }
  .header-menu .nav-menu.enabled {
    max-width: 100vw;
  }
}

</style>
