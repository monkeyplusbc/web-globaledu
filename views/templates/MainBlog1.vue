<script lang="ts" setup>
  const {
    top,
    blogs,
    cms
  } = useContext();
</script>

<template>
  <organisms-blog :top="top" :blogs="blogs" :data="cms.$page.banner" />
</template>