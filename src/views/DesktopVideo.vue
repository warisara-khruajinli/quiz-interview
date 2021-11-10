<template>
    <!-- Navbar -->
    <base-nav></base-nav>

<div style="padding-left: 16%; padding-right: 16%; padding-bottom: 15%; padding-top: 2%;">
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li style="font-size: 0.9em; font-weight: bold;" class="breadcrumb-item"><a href="/">List</a></li>
      <li style="font-size: 0.9em; font-weight: bold;" class="breadcrumb-item active" aria-current="page">{{ this.dataDesktopVideo.title }}</li>
    </ol>
  </nav>

<div class="card p-4">
  <img class="card-img-top" :src="this.dataDesktopVideo.thumbnail" alt="Card image cap" style="border-radius: 10px;">
    <div class="pt-4">
        <p style="text-align: left; font-weight: bold;" class="card-title">{{ this.dataDesktopVideo.title }}</p>
        <p style="font-size: 0.9em; text-align: left;" class="card-text pt-4">{{ this.dataDesktopVideo.short_description }}</p>
    </div>
</div>


</div>

</template>

<script>

export default {
    props:[
      "dataDesktopVideo"
    ],
    data() {
        return {
            urlpost: "https://free-to-play-games-database.p.rapidapi.com/api/games",
            post: null,
        }
    },
    methods: {
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
    }
    },
}
</script>

<style>
.card-text:last-child{
  font-family: 'Prompt', sans-serif;
}
</style>