<template>
  <div id="app" class="flex-it">
    <div>
    <Home />
    <Profile />
    <Project />
    </div>
    <Sidebar/>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Project from "./components/Project";

export default {
  name: "app",
  components: {
    Home,
    Profile,
    Project,
    Sidebar
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.flex-it {
  display: flex;
  flex-direction: row;
}
</style>
