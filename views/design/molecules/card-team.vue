<script lang="ts" setup>
defineProps({
  data: {
    type: Object,
  },
});
</script>

<template>
  <div class="card">
    <div class="card-body p-[40px]">
      <mk-picture class="rounded-[50%] !w-[5rem] mb-4" :src="data.image.src" :alt="data.image.alt"
        :title="data.image.title" />
      <div class="h4 !mb-1 text-[1rem]" v-html="data.title" />
      <div class="text-[.7rem] uppercase tracking-[0.02rem] font-bold text-gray-200 mb-2" v-html="data.subtitle" />
      <p class="!mb-2" v-html="data.txt" />
      <nav v-if="data.networks.active" class="nav social !mb-0">
        <atoms-button v-for="(ite, j) in data.networks.items" :key="j"
          class="m-[0_.7rem_0_0] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
          :data="ite.link">
          <mk-icon class="text-[12px]">{{ ite.icon }}</mk-icon>
        </atoms-button>
      </nav>
    </div>
  </div>
</template>