<script lang="ts" setup>
const { cms } = useContext();
const { heroPrimary, features, heroSecundary, steps, heroExpansors, team, heroChecks, heroCards, pricing, heroLogo } = cms.$page;
</script>

<template>
  <organisms-hero-simple v-if="heroPrimary.active" :data="heroPrimary" />
  <organisms-features v-if="features.active" class="mb-10" :data="features" />
  <organisms-hero-compouse v-if="heroSecundary.active" :data="heroSecundary" />
  <organisms-steps v-if="steps.active" :data="steps" />
  <organisms-hero-expansor v-if="heroExpansors.active" :data="heroExpansors" />
  <organisms-team v-if="team.active" :data="team" />
  <organisms-hero-checks v-if="heroChecks.active" :data="heroChecks" />
  <organisms-hero-cards v-if="heroCards.active" :data="heroCards" />
  <organisms-pricing v-if="pricing.active" :data="pricing" />
</template>
