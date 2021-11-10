<template>
<!-- Navbar -->
<base-nav></base-nav>

<div style="padding-left: 15%; padding-right: 15%; padding-bottom: 10%; padding-top: 2.5%;">
  <div class="row">
    <div v-for="post in posts" :key="post.id" class="col-sm-6 col-md-4 col-xl-4 center gy-3 gx-3 my-3">
      <router-link to="/DesktopVideo" class="text-decoration-none text-black">
      <div class="card" @click="desktopVideo(post)">
        <img class="card-img-top pb-2 p-2" style="border-radius: 15px;" :src="post.thumbnail">
        <div class="card-body p-2">
          <p style="font-size: 1em; text-align: left; font-weight: bold;" class="card-title">{{ post.title }}</p>
          <p style="height: 8em; font-size: 0.8em; text-align: left;" class="card-text p-y-1">{{ post.short_description }}</p>
        </div>
        </div>
      </router-link>
      </div>
    </div>
    </div>

</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  // components: {
  //   HelloWorld
  // }
  data() {
    return {
        urlpost: "https://free-to-play-games-database.p.rapidapi.com/api/games",
        posts: [],
    };
  },
  methods:{
    async getPostsData(){
      const res = await fetch(this.urlpost,{
        method: "GET",
        headers: {
          "x-rapidapi-key": "2a50aee9e6msh55cf8498c0e6c1ap1c932fjsn9403eb2b255d",
          "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
        }
      })
      const data = await res.json()
      return data
    },
  async desktopVideo(post){
    this.$emit("desktop-video",post)
  },
  },
  async created() {
    this.posts = await this.getPostsData();
    console.log(this.posts)
  },
}
</script>
<style>
.card-text{
  font-family: 'Prompt', sans-serif;
}

</style>
