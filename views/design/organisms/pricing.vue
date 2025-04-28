<script lang="ts" setup>
defineProps({
  data: {
    type: Object,
  },
});
</script>

<template>
  <section
    class="wrapper !bg-white  angled upper-end lower-end relative border-0 before:top-[-4rem] before:border-l-transparent before:border-r-[100vw] before:border-t-[4rem] before:border-gray-300 before:content-[''] before:block before:absolute before:z-0 before:!border-y-transparent before:border-0 before:border-solid before:right-0 after:bottom-[-4rem] after:border-l-transparent after:border-r-[100vw] after:border-b-[4rem] after:border-gray-300 after:content-[''] after:block after:absolute after:z-0 after:!border-y-transparent after:border-0 after:border-solid after:right-0"
  >
    <div class="container py-[4.5rem] xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem] xl:pb-16 lg:pb-16 md:pb-16">
      <molecules-pricing :data="data" />
    </div>
  </section>
</template>
