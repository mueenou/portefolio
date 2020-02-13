<template>
  <div class="sidebar-nav">
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
  </div>
</template>
<script>
/* eslint-disable no-console */
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
.sidebar-nav {
  display: flex;
  z-index: 9998;
  position: fixed;
  right: -175px;
  flex-direction: column;
  border-left: solid 10px rgb(48, 144, 144);
  transition: 0.3s;
}

.sidebar-nav:hover {
  right: 0px;
}

.sidebar-nav .root-landscape {
  background-image: url("../assets/images/root_landscape.jpeg");
  background-position: center;
}

.sidebar-nav .profile-landscape {
  background-image: url("../assets/images/profile_landscape.jpeg");
  background-position: center;
}

.sidebar-nav .project-landscape {
  background-image: url("../assets/images/project_landscape.jpeg");
  background-position: center;
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
}
</style>