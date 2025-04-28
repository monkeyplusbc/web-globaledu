<script lang="ts" setup>
defineProps({
  data: {
    type: Object,
  },
});
</script>

<template>
  <section class="wrapper !bg-[#ffffff]">
    <div class="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
      <div class="flex flex-wrap mx-[-15px] !mb-3">
        <div
          class="md:w-10/12 lg:w-10/12 xl:w-9/12 xxl:w-7/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto !text-center"
        >
          <mk-picture
            :src="data.icon.src"
            class="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] mb-4 m-[0_auto]"
            :alt="data.icon.alt"
            :title="data.icon.title"
          ></mk-picture>
          <h2
            class="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] leading-[1.3] mb-3 xl:!px-[4.5rem] lg:!px-[4.5rem]"
            v-html="data.title"
          ></h2>
        </div>
      </div>
      <div class="!relative">
        <div
          class="shape !rounded-[50%] !bg-[#fff8ee] rellax !w-[6rem] !h-[6rem] absolute z-[1]"
          data-rellax-speed="1"
          style="bottom: 0.5rem; right: -1.7rem;"
        ></div>
        <div
          class="shape !rounded-[50%] bg-line red rellax !w-[6rem] !h-[6rem] absolute z-[1] opacity-50"
          data-rellax-speed="1"
          style="top: 0.5rem; left: -1.7rem;"
        ></div>
        <div
          class="swiper-container dots-closer !mb-6"
          data-margin="0"
          data-dots="true"
          data-items-xxl="4"
          data-items-xl="3"
          data-items-lg="3"
          data-items-md="2"
          data-items-xs="1"
        >
          <div class="swiper">
            <div class="swiper-wrapper">
              <div v-for="(member, index) in data.teamMembers" :key="index" class="swiper-slide">
                <div class="item-inner">
                  <molecules-card-team :data="member" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>