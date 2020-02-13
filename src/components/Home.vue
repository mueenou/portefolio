<template>
  <div class="vitrine-slide" id="landing">
    <Navbar />
    <h1 class="name">Hossain <span>Mueen</span></h1>
    <span class="title">Bienvenue</span>
  </div>
</template>
<script>
import Navbar from "../components/Navbar";

export default {
  name: "Home",
  components: {
    Navbar
  }
};
</script>

<style scoped>
.vitrine-slide {
  position: relative;
  background-image: url("../assets/images/root_landscape.jpeg");
  background-size: cover;
  opacity: 1;
  filter: grayscale(0.65);
  display: flex;
  flex-direction: column;
  align-items: center;
  /* text-align: center; */
}

.title {
  position: absolute;
  font-size: 55px;
  color: #ffffff;
  font-weight: 900;
  top: calc((100vh / 2) - 55px);
  left: calc((100vw/ 2) - (269.9px / 2));
}

.name {
  align-items: center;
  font-size: 50px;
  margin-top: 15vh;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.name span {
  font-weight: lighter;
}
</style>