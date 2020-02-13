<template>
  <div class="vitrine-slide" id="profile">
    <span class="title">Profile</span>
  </div>
</template>
<script>
export default {
  name: "Profile",
};
</script>
<style scoped>
.vitrine-slide {
  position: relative;
  background-image: url("../assets/images/profile_landscape.jpeg");
  opacity: 1;
  filter: grayscale(0.6);
  filter: saturate(0.6);
}

.title {
  position: absolute;
  font-size: 55px;
  color: #ffffff;
  font-weight: 900;
  top: calc((100vh / 2) - 55px);
  left: calc((100vw / 2) - (170.12px / 2));
}
</style>