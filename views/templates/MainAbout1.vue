<script lang="ts" setup>
const { cms } = useContext();
const { banner, how, testimonials, team, counter, contact } = cms.$page;
</script>

<template>
  <organisms-banner1 v-if="banner.active" :data="banner" :large="true" />
  <organisms-who-are-we v-if="how.active" :data="how" />
  <organisms-testimonials v-if="testimonials.active" :data="testimonials" />
  <organisms-team-carrousel v-if="team.active" :data="team" />
  <organisms-counter v-if="counter.active" :data="counter" />
  <organisms-contact v-if="contact.active" :data="contact" />
</template>