<template>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li style="font-size: 0.9em; font-weight: bold;" class="breadcrumb-item"><a href="/">List</a></li>
        <li style="font-size: 0.9em; font-weight: bold;" class="breadcrumb-item active" aria-current="page">{{ this.dataDesktopVideo.title }}</li>
      </ol>
    </nav>
</template>
<script>

export default {
    props:[
      "dataDesktopVideo"
    ],
}
</script>
