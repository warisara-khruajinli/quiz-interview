<template>
  <div>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  </div>
  <router-view @desktop-video="desktopVideo" :data-desktop-video="dataDesktopVideo" />
</template>

<script>

export default {
  data() {
    return {
      dataDesktopVideo: [],
    }
  },
  methods: {
    desktopVideo(post){
      this.dataDesktopVideo = post
    }
  }
}
</script>


<style>
#app {
  font-family: PT Sans, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #F6F6FA;
  /* color: #2c3e50; */
}
/* 
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
