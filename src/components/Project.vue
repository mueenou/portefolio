<template>
  <div class="vitrine-slide" id="project">
    <div id="projects">
      <div class="project-modal">
        <a href=""><div class="project-image"></div></a>
      </div>
      <div class="project-modal">
        <a href=""><div class="project-image"></div></a>
      </div><div class="project-modal">
        <a href=""><div class="project-image"></div></a>
      </div><div class="project-modal">
        <a href=""><div class="project-image"></div></a>
      </div><div class="project-modal">
        <a href=""><div class="project-image"></div></a>
      </div><div class="project-modal">
        <a href=""><div class="project-image"></div></a>
      </div><div class="project-modal">
        <a href=""><div class="project-image"></div></a>
      </div><div class="project-modal">
        <a href=""><div class="project-image"></div></a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Project"
};
</script>
<style scoped>
.vitrine-slide {
  position: relative;
  background-image: url("../assets/images/project_landscape.jpeg");
  background-size: cover;
  opacity: 1;
  filter: grayscale(0.6);
  filter: saturate(0.6);
}

#projects {
  align-items: center;
  height: 100vh;
  width: 60vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
}

.project-modal * {
}

.project-modal {
  filter: brightness(0.8);
  width: 150px;
  height: 150px;
  margin: 20px 20px;
  align-items: center;
  overflow: hidden;
  box-shadow: 0px 0px 50px #848788;
  border-radius: 20px;
}

.project-image {
  width: 100%;
  height: 100%;
  background-color: black; /* fallback color */
  background-image: url("../assets/images/root_landscape.jpeg");
  background-size: cover;
  background-position: center;
  transform: scale(1);
  transition: all 0.5s ease-out;
}

.project-modal:hover .project-image {
  /* filter: brightness(1); */
  transform: scale(1.3);
  transition: all 6s ease-out;
}

.title {
  position: absolute;
  font-size: 55px;
  color: #ffffff;
  font-weight: 900;
  top: calc((100vh / 2) - 55px);
  left: calc((100vw / 2) - (209.82px / 2));
}
</style>