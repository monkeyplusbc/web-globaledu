<script lang="ts" setup>
const { cms } = useContext();
const { banner, info, join } = cms.$page;
</script>

<template>
  <organisms-banner1 class="min-h-[350px]" v-if="banner.active" :data="banner" />
  <organisms-contact-map v-if="info.active" :data="info" />
  <organisms-join v-if="join.active" :data="join" />
</template>