<script setup lang="ts">
const props = defineProps({
  data: Object,
});
</script>

<template>
  <section class="wrapper bg-gradient-reverse-primary">
    <div class="container pt-24 pb-[4.5rem] xl:pb-0 lg:pb-0 md:pb-0">
      <div class="flex flex-wrap mx-[-15px] lg:mx-[-20px] xl:mx-0 items-center">
        <div
          class="md:w-5/12 lg:w-5/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] lg:px-[20px] xl:px-0 max-w-full xl:!ml-[8.33333333%] xsm:!hidden sm:!hidden md:!hidden xl:!flex lg:!flex !relative !self-end">
          <div
            class="shape !rounded-[50%] !bg-[#e0e9fa] rellax !w-[12.5rem] !h-[12.5rem] hidden xl:block lg:block z-[1] absolute"
            data-rellax-speed="1" style="top: 7rem; left: 1rem"></div>
          <mk-picture class="relative z-[2]" :src="data.img.src" :alt="data.img.alt"
            :title="data.img.title"></mk-picture>
        </div>
        <div
          class="md:w-7/12 lg:w-6/12 xl:w-6/12 xxl:w-5/12 w-full flex-[0_0_auto] px-[15px] lg:px-[20px] xl:px-0 max-w-full xl:!ml-[8.33333333%]">
          <div
            class="swiper-container dots-start dots-closer xl:!mt-10 lg:!mt-10 md:!mt-10 xl:!mb-20 lg:!mb-20 md:!mb-20 relative !z-10"
            data-margin="30" data-dots="true">
            <div class="swiper">
              <div class="swiper-wrapper">
                <div v-for="(testimonial, index) in data.testimonials" :key="index" class="swiper-slide">
                  <blockquote
                    class="icon relative p-0 border-0 text-[1rem] leading-[1.7] font-medium m-[0_0_1rem] before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]">
                    <p v-html="testimonial.quote"></p>
                    <div class="flex items-center text-left">
                      <div class="info !pl-0">
                        <h5 class="!mb-1 text-[.95rem] !leading-[1.5]" v-html="testimonial.author"></h5>
                        <p class="!mb-0 text-[0.8rem]" v-html="testimonial.role"></p>
                      </div>
                    </div>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>