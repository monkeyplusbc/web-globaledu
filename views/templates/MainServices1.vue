<script lang="ts" setup>
const { cms } = useContext();
const { banner, about, video, talk } = cms.$page;
</script>

<template>
  <organisms-banner1 v-if="banner.active" :data="banner" />
  <organisms-about v-if="about.active" :data="about" />
  <organisms-video v-if="video.active" :data="video" />
  <organisms-talk v-if="talk.active" :data="talk" />
</template>