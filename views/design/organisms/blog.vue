<script lang="ts" setup>
const props = defineProps({
  data: Object,
  top: Array,
  blogs: Array,
});
</script>

<template>
  <section class="wrapper bg-gradient-yellow">
    <div
      class="container !pt-10 !pb-36 xl:!pt-[4.5rem] lg:!pt-[4.5rem] md:!pt-[4.5rem] xl:!pb-40 lg:!pb-40 md:!pb-40 !text-center">
      <div class="flex flex-wrap mx-[-15px]">
        <div class="md:w-7/12 lg:w-6/12 xl:w-5/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
          <h1 class="text-[calc(1.365rem_+_1.38vw)] font-bold leading-[1.2] xl:text-[2.4rem] !mb-3" v-html="data.title"></h1>
          <p class="lead lg:!px-[1.25rem] xl:!px-[1.25rem] xxl:!px-[2rem] leading-[1.65] text-[0.9rem] font-medium" v-html="data.description"></p>
        </div>
      </div>
    </div>
  </section>

  <div class="wrapper !bg-[#ffffff]">
    <div class="container !pb-[4.5rem] xl:!pb-24 lg:!pb-24 md:!pb-24">
      <div class="flex flex-wrap mx-[-15px]">
        <div class="xl:w-10/12 lg:w-10/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
          <div class="blog classic-view !mt-[-7rem]">
            <template v-for="(v,i) in top">
              <organisms-blog-top :data="v" />
            </template>
          </div>
          <div class="blog grid-view">
            <div class="flex flex-wrap mx-[-15px] isotope xl:mx-[-20px] lg:mx-[-20px] md:mx-[-20px] mt-[-40px] !mb-8">
              <template v-for="(v,i) in blogs">
              <molecules-blog-resume :data="v" />
            </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>