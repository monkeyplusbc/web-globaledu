<script lang="ts" setup>
  const { cms, data } = useContext();
  const { general } = cms.$settings.common;
</script>

<template>
  <organisms-info-project :data="data" :general="general" />
</template>