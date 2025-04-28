<script lang="ts" setup>
defineProps({
  data: {
    type: Object,
  },
});
</script>

<template>
  <section
    class="wrapper !bg-[#ffffff] angled upper-end !relative border-0 before:top-[-4rem] before:border-l-transparent before:border-r-[100vw] before:border-t-[4rem] before:border-[#fefefe] before:content-[''] before:block before:absolute before:z-0 before:!border-y-transparent before:border-0 before:border-solid before:right-0 after:border-[#fefefe] after:content-[''] after:block after:absolute after:z-0 after:!border-y-transparent after:border-0 after:border-solid after:right-0"
  >
    <div class="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
      <molecules-pricing :data="data.pricing" />

      <div class="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] items-center !mt-10 xl:!mt-[8rem] lg:!mt-[8rem] md:!mt-[8rem]">
        <div
          class="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[50px] max-w-full !relative"
        >
          <div
            class="shape bg-dot primary rellax !w-[8rem] !h-[8rem] bg-[radial-gradient(#3f78e0_2px,transparent_2.5px)] absolute z-[1] opacity-50"
            data-rellax-speed="1"
            style="top: 0; left: -1.4rem; z-index: 0;"
          ></div>
          <div class="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] mt-[-25px]">
            <div class="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[12.5px] mt-[25px] max-w-full">
              <mk-picture
                class="!rounded-[.4rem] xl:!mt-10 lg:!mt-10 md:!mt-10 !relative"
                :src="data.galleryImages.image1.src"
                :alt="data.galleryImages.image1.alt"
                :title="data.galleryImages.image1.title"
              ></mk-picture>
            </div>
            <div class="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[12.5px] mt-[25px] max-w-full">
              <div class="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] mt-[-25px]">
                <div
                  class="w-full flex-[0_0_auto] px-[12.5px] mt-[25px] max-w-full xl:!order-2 lg:!order-2 md:!order-2"
                >
                  <mk-picture
                    class="rounded-[0.4rem]"
                    :src="data.galleryImages.image2.src"
                    :alt="data.galleryImages.image2.alt"
                    :title="data.galleryImages.image2.title"
                  ></mk-picture>
                </div>
                <div class="xl:w-10/12 lg:w-10/12 md:w-10/12 w-full flex-[0_0_auto] px-[12.5px] mt-[25px] max-w-full">
                  <div class="card !bg-primary !text-center">
                    <div class="card-body !py-12 !px-[2rem] counter-wrapper">
                      <h3
                        class="counter !whitespace-nowrap xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] tracking-[normal] !leading-none mb-2 text-white"
                        v-html="data.satisfiedCustomers.count"
                      ></h3>
                      <p class="!mb-0 text-[0.8rem] font-medium text-white" v-html="data.satisfiedCustomers.label"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[50px] max-w-full"
        >
          <h2 class="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] leading-[1.3] !mb-3" v-html="data.letsTalk.title"></h2>
          <p class="lead !text-[1.05rem] !leading-[1.6] font-medium" v-html="data.letsTalk.description"></p>
          <p v-html="data.letsTalk.additionalText"></p>
          <atoms-button
            :data="data.letsTalk.btn.link"
            class="btn btn-yellow text-white !bg-primary border-primary hover:text-white hover:bg-primary hover:border-primary focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-primary active:border-primary disabled:text-white disabled:bg-primary disabled:border-primary !text-[.85rem] !rounded-[50rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
          >
            {{ data.letsTalk.btn.text }}
          </atoms-button>
        </div>
      </div>
    </div>
  </section>
</template>