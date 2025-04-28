<script lang="ts" setup>
defineProps({
  data: {
    type: Object,
  },
});
</script>

<template>
  <section class="wrapper bg-gradient-yellow">
    <div class="container py-[4.5rem] xl:pt-24 lg:pt-24 md:pt-24 xl:pb-32 lg:pb-32 md:pb-32">
      <div class="relative mt-8 lg:!mt-[-17.5rem] xl:!mt-[-22.5rem]">
        <div class="flex flex-wrap mx-[-15px] !text-center">
          <div class="lg:w-8/12 xl:w-7/12 xxl:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
            <div class="h2 !text-[0.8rem] tracking-[0.02rem] uppercase !text-gray-200 !mb-3 !leading-[1.35]" v-html="data?.pretitle" />
            <div
              class="h3 text-[calc(1.315rem_+_0.78vw)] font-bold xl:text-[1.9rem] !leading-[1.25] mb-10 md:!px-16 lg:!px-4 xl:!px-0"
              v-html="data?.title"
            />
          </div>
        </div>
        <div class="!relative">
          <div
            class="shape bg-dot blue rellax !w-[6rem] !h-[7rem] absolute opacity-50" data-rellax-speed="1"
            style="bottom: 0.5rem; right: -1.7rem; z-index: 0;"
          />
          <div
            class="shape !rounded-[50%] bg-line red rellax !w-[6rem] !h-[6rem] absolute opacity-50"
            data-rellax-speed="1" style="top: 0.5rem; left: -1.7rem; z-index: 0;"
          />
          <div class="flex flex-wrap mx-[-15px] grid-view mt-[-30px] xl:mt-0">
            <div v-for="(item, i) in data?.items" :key="i" class="md:w-6/12 lg:w-6/12 xl:w-3/12 w-full flex-[0_0_auto] px-[15px] max-w-full mb-8">
              <molecules-card-team :data="item" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
