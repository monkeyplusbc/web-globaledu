<script lang="ts" setup>
defineProps({
  data: {
    type: Object,
  },
});
</script>

<template>
  <section
    class="wrapper !bg-white angled upper-start lower-start relative border-0
     before:top-[-4rem] before:content-[''] before:block before:absolute before:z-0 before:border-l-[100vw] before:border-r-transparent before:border-t-[4rem] before:border-y-transparent before:border-gray-300 before:border-0 before:border-solid before:right-0"
  >
    <div class="container py-[4.5rem] xl:pt-28 lg:pt-28 md:pt-28 xl:pb-20 lg:pb-20 md:pb-20">
      <molecules-steps :data="data" />
    </div>
  </section>
</template>
