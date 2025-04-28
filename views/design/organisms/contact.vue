<script lang="ts" setup>
const props = defineProps({
  data: Object,
});
</script>

<template>
  <section
    class="wrapper !bg-[#ffffff] angled upper-end lower-end relative border-0 before:top-[-4rem] before:border-l-transparent before:border-r-[100vw] before:border-t-[4rem] before:border-[#fefefe] before:content-[''] before:block before:absolute before:z-0 before:!border-y-transparent before:border-0 before:border-solid before:right-0 after:bottom-[-4rem] after:border-l-transparent after:border-r-[100vw] after:border-b-[4rem] after:border-[#fefefe] after:content-[''] after:block after:absolute after:z-0 after:!border-y-transparent after:border-0 after:border-solid after:right-0"
  >
    <div class="container pt-32 pb-[4.5rem] xl:pt-36 lg:pt-36 md:pt-36 xl:pb-24 lg:pb-24 md:pb-24">
      <div class="flex flex-wrap mx-[-15px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] mt-[-50px] items-center">
        <div
          class="md:w-8/12 lg:w-6/12 xl:w-5/12 lg:!ml-0 xl:!ml-[8.33333333%] w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[50px] max-w-full !relative"
        >
          <div
            class="shape bg-dot primary rellax !w-[7rem] !h-[12.5rem] !bg-[radial-gradient(#3f78e0_2px,transparent_2.5px)] absolute z-[1] opacity-50"
            data-rellax-speed="1"
            style="top: -2rem; left: -1.4rem;"
          ></div>
          <figure class="!rounded-[.4rem] relative z-[2]">
            <mk-picture
              class="!rounded-[.4rem] w-full max-w-full !h-auto"
              :src="data.img.src"
              :alt="data.img.alt"
              :title="data.img.title"
            ></mk-picture>
          </figure>
        </div>
        <div
          class="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[50px] max-w-full"
        >
          <mk-picture
            :src="data.icon.src"
            class="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] mb-4"
            :alt="data.icon.alt"
            :title="data.icon.title"
          ></mk-picture>
          <h2 class="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] leading-[1.3] !mb-8" v-html="data.title"></h2>
          <div v-for="(contact, index) in data.contactInfo" :key="index" class="flex flex-row">
            <div>
              <div class="icon mr-6">
                <mk-icon class="text-[14px] text-primary">{{ contact.icon }}</mk-icon>
              </div>
            </div>
            <div>
              <h5 class="!mb-1" v-html="contact.title"></h5>
              <p v-html="contact.details"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>