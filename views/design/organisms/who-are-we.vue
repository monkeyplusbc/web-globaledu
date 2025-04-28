<script setup lang="ts">
const props = defineProps({
  data: Object,
});
</script>

<template>
  <section
    class="wrapper !bg-[#ffffff] angled upper-end lower-end relative border-0 before:top-[-4rem] before:border-l-transparent before:border-r-[100vw] before:border-t-[4rem] before:border-[#fefefe] before:content-[''] before:block before:absolute before:z-0 before:!border-y-transparent before:border-0 before:border-solid before:right-0 after:bottom-[-4rem] after:border-l-transparent after:border-r-[100vw] after:border-b-[4rem] after:border-[#fefefe] after:content-[''] after:block after:absolute after:z-0 after:!border-y-transparent after:border-0 after:border-solid after:right-0">
    <div class="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
      <div
        class="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] mt-[-50px] !mb-[4.5rem] xl:!mb-[7rem] lg:!mb-[7rem] md:!mb-[7rem] items-center">
        <div
          class="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[50px] max-w-full !relative xl:!order-2 lg:!order-2">
          <div
            class="shape bg-dot primary bg-[radial-gradient(#3f78e0_2px,transparent_2.5px)] rellax !w-[6rem] !h-[10rem] absolute z-[1] opacity-50"
            data-rellax-speed="1" style="top: 3rem; left: 5.5rem"></div>
          <div class="flex flex-wrap !relative overlap-grid-2">
            <div v-for="(image, index) in data.whoAreWe.images" :key="index" class="item" :class="{
              'xl:w-[70%] xl:z-[3] xl:ml-[30%] xl:mt-0 lg:w-[70%] lg:z-[3] lg:ml-[30%] lg:mt-0 md:w-[70%] md:z-[3] md:ml-[30%] md:mt-0':
                index === 0,
              'xl:w-[55%] xl:mt-[-45%] xl:z-[4] xl:ml-0 lg:w-[55%] lg:mt-[-45%] lg:z-[4] lg:ml-0 md:w-[55%] md:mt-[-45%] md:z-[4] md:ml-0':
                index === 1,
            }">
              <mk-picture class="!rounded-[.4rem] shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] relative" :src="image.src"
                alt="image"></mk-picture>
            </div>
          </div>
        </div>
        <div
          class="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[50px] max-w-full">
          <mk-picture :src="data.whoAreWe.icon.src" class="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] mb-4"
            alt="image"></mk-picture>
          <h2 class="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] leading-[1.3] !mb-3"
            v-html="data.whoAreWe.title"></h2>
          <p class="lead !text-[1.05rem] !leading-[1.6] font-medium" v-html="data.whoAreWe.lead"></p>
          <p class="!mb-6" v-html="data.whoAreWe.description"></p>
          <div class="flex flex-wrap mx-[-15px] mt-[-15px] xl:mx-[-20px]">
            <div class="xl:w-6/12 w-full flex-[0_0_auto] mt-[15px] xl:px-[20px] px-[15px] max-w-full">
              <ul class="pl-0 list-none bullet-bg bullet-soft-primary !mb-0">
                <li v-for="item in data.whoAreWe.list1" :key="item.txt" class="relative pl-6">
                  <span>
                    <i
                      class="uil uil-check w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex justify-center items-center bg-primary text-white rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0"></i>
                  </span>
                  <span v-html="item.txt"></span>
                </li>
              </ul>
            </div>
            <div class="xl:w-6/12 w-full flex-[0_0_auto] mt-[15px] xl:px-[20px] px-[15px] max-w-full">
              <ul class="pl-0 list-none bullet-bg bullet-soft-primary !mb-0">
                <li v-for="item in data.whoAreWe.list2" :key="item.txt" class="relative pl-6">
                  <span>
                    <i
                      class="uil uil-check w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex justify-center items-center bg-primary text-white rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0"></i>
                  </span>
                  <span v-html="item.txt"></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap mx-[-15px] mb-5">
        <div
          class="md:w-10/12 lg:w-10/12 xl:w-8/12 xxl:w-7/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto !text-center">
          <mk-picture :src="data.workingSteps.icon.src"
            class="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] mb-4 m-[0_auto]"></mk-picture>
          <div
            class="h2 text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] !leading-[1.3] mb-4 xl:!px-[4.5rem] lg:!px-[4.5rem]"
            v-html="data.workingSteps.head"></div>
        </div>
      </div>

      <molecules-steps :data="data.workingSteps" />
    </div>
  </section>
</template>