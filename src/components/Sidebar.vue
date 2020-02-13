<template>
  <div class="sidebar-nav">
    <div :class="show ? 'toggler-in' : 'toggler-out'" @click="show = !show"></div>
    <transition name="slide-fade">
      <div v-if="show">
        <a href="#landing">
          <div class="thumbnail root-landscape"></div>
        </a>
        <a href="#profile">
          <div class="thumbnail profile-landscape"></div>
        </a>
        <a href="#project">
          <div class="thumbnail project-landscape"></div>
        </a>
        <a href="#">
          <div class="thumbnail root-landscape"></div>
        </a>
        <a href="#">
          <div class="thumbnail root-landscape"></div>
        </a>
      </div>
    </transition>
  </div>
</template>
<script>
import images from "../assets/datas/images.json";

export default {
  name: "Sidebar",
  data() {
    return {
      images: images,
      show: true
    };
  },
  methods: {},
  mounted() {
    // eslint-disable-next-line no-console
    console.log(this.images);
  }
};
</script>
<style scoped>
.toggler-out {
  width: 0;
  height: 0;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  border-right: 20px solid rgb(0, 149, 137);
  position: absolute;
  z-index: 9999;
  left: -20px;
  top: calc((100vh / 2) - 10px);
}

.toggler-in {
  width: 0;
  height: 0;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  border-right: 20px solid rgb(0, 149, 137);
  position: absolute;
  z-index: 9999;
  left: -20px;
  top: calc((100vh / 2) - 10px);
}

.toggler-out:hover,
.toggler-in:hover {
  cursor: pointer;
}

.sidebar-nav {
  display: flex;
  z-index: 9998;
  position: fixed;
  right: 0px;
  flex-direction: column;
  box-shadow: 10px 10px 10px white;
}

.sidebar-nav .root-landscape {
  background-image: url("../assets/images/root_landscape.jpeg");
}

.sidebar-nav .profile-landscape {
  background-image: url("../assets/images/profile_landscape.jpeg");
}

.sidebar-nav .project-landscape {
  background-image: url("../assets/images/project_landscape.jpeg");
}

.thumbnail {
  filter: grayscale(1);
  transition: 0.5s;
  width: 175px;
  height: calc(100vh / 5);
  background-size: cover;
}

.thumbnail:hover {
  filter: grayscale(0);
  background-position: left;
}

/* Les animations d'entrée (« enter ») et de sortie (« leave »)  */
/* peuvent utiliser différentes fonctions de durée et de temps.  */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(145px);
}
</style>