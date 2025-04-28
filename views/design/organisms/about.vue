<script lang="ts" setup>
const props = defineProps({
  data: Object,
});
</script>

<template>
  <section
    class="wrapper !bg-[#ffffff] angled upper-end !relative border-0 before:top-[-4rem] before:border-l-transparent before:border-r-[100vw] before:border-t-[4rem] before:border-[#fefefe] before:content-[''] before:block before:absolute before:z-0 before:!border-y-transparent before:border-0 before:border-solid before:right-0 after:top-[-4rem] after:border-l-transparent after:border-r-[100vw] after:border-t-[4rem] after:border-[#fefefe] after:content-[''] after:block after:absolute after:z-0 after:!border-y-transparent after:border-0 after:border-solid after:right-0">
    <div class="container !pb-[4.5rem] xl:!pb-24 lg:!pb-24 md:!pb-24">
      <div class="flex flex-wrap mx-[-15px] !mb-8">
        <div class="w-full flex-[0_0_auto] px-[15px] max-w-full mt-[1rem]">
          <mk-picture class="rounded-[0.4rem] w-full object-cover object-top" :src="data.topImage.src"
            :alt="data.topImage.alt" :title="data.topImage.title"></mk-picture>
          <div class="flex flex-wrap mx-[-15px]">
            <div class="xl:w-10/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
              <div
                class="card image-wrapper bg-full bg-image bg-overlay bg-overlay-400 text-white mt-[-1.25rem] xl:!mt-0 lg:!mt-0  xl:-translate-y-2/4 lg:-translate-y-2/4 bg-cover [background-size:100%] bg-[center_center] bg-no-repeat !bg-scroll !relative z-0 before:rounded-[0.4rem] before:bg-[rgba(30,34,40,.4)] before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0"
                :style="{ backgroundImage: `url(${data.cardImage.src})` }" :data-image-src="data.cardImage.src">
                <div class="card-body p-[2.25rem] xl:!p-[2.5rem]">
                  <div class="flex flex-wrap mx-[-15px] items-center counter-wrapper mt-[-20px] !text-center">
                    <div v-for="(counter, index) in data.counters" :key="index"
                      class="w-6/12 xl:w-3/12 lg:w-3/12 flex-[0_0_auto] px-[15px] max-w-full mt-[20px]">
                      <h3
                        class="counter counter-lg text-white xl:text-[2.2rem] text-[calc(1.345rem_+_1.14vw)] tracking-[normal] !leading-none mb-2"
                        v-html="counter.value.toString()"></h3>
                      <p class="text-[0.8rem] font-medium !mb-0 text-white" v-html="counter.label"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex flex-wrap mx-[-15px] xl:mx-[-20px] lg:mx-[-20px] mt-[25px] md:!mt-[4.5rem] lg:!mt-0 xl:!mt-0 mb-20 items-center">
        <div class="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] px-[20px] mt-[40px] max-w-full xl:!order-2 lg:!order-2">
          <div class="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] mt-[-25px]">
            <div v-for="(image, index) in data.galleryImages" :key="index"
              :class="`xl:w-${index === 0 || index === 3 ? '4/12' : '6/12'} lg:w-${index === 0 || index === 3 ? '4/12' : '6/12'} md:w-${index === 0 || index === 3 ? '4/12' : '6/12'} w-full flex-[0_0_auto] px-[${index === 0 || index === 3 ? '15px' : '12.5px'}] max-w-full ${index === 0 || index === 3 ? '!self-end' : '!self-end'} mt-[25px] ${index === 2 ? 'xl:!ml-[8.33333333%] lg:!ml-[8.33333333%] md:!ml-[8.33333333%]' : index === 0 ? 'xl:!ml-[16.66666667%] lg:!ml-[16.66666667%] md:!ml-[16.66666667%]' : ''}`">
              <mk-picture class="rounded-[0.4rem] w-full max-w-full" :src="image.src" :alt="image.alt"
                :title="image.title"></mk-picture>
            </div>
          </div>
        </div>
        <div
          class="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[20px] lg:px-[20px] px-[15px] mt-[40px] max-w-full">
          <h2 class="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] leading-[1.3] !mb-3"
            v-html="data.whatWeDo.title"></h2>
          <p class="lead !mb-8 xxl:!pr-2 !text-[1.05rem] !leading-[1.6]" v-html="data.whatWeDo.description"></p>
          <div class="flex flex-wrap mx-[-15px] xl:mx-[-25px] mt-[-30px]">
            <div v-for="(service, index) in data.whatWeDo.services" :key="index"
              class="md:w-6/12 lg:w-full xl:w-6/12 w-full flex-[0_0_auto] xl:px-[25px] px-[15px] max-w-full mt-[30px]">
              <div class="flex flex-row">
                <div>
                  <div
                    class="icon btn btn-circle btn-lg btn-soft-primary pointer-events-none mr-5 xl:text-[1.3rem] w-12 h-12 text-[calc(1.255rem_+_0.06vw)] inline-flex items-center justify-center leading-none p-0 !rounded-[100%]">
                    <mk-icon>{{ service.icon }}</mk-icon>
                  </div>
                </div>
                <div>
                  <h4 class="!mb-1" v-html="service.title"></h4>
                  <p class="!mb-0" v-html="service.description"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 class="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] leading-[1.3] !mb-3"
        v-html="data.howWeDoIt.title"></h2>
      <p class="lead !mb-8 !text-[1.05rem] !leading-[1.6]" v-html="data.howWeDoIt.description"></p>
      <div class="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] mt-[-30px] process-wrapper line">
        <div v-for="(process, index) in data.howWeDoIt.processes" :key="index"
          class="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] px-[15px] xl:px-[35px] lg:px-[20px] mt-[30px] max-w-full !relative after:w-full after:absolute after:content-[''] after:h-px after:z-[1] after:border-t-[rgba(164,174,198,0.2)] after:border-t after:border-solid after:left-[3rem] after:top-6 after:bg-inherit md:after:hidden sm:after:hidden xsm:after:hidden">
          <span
            :class="`icon btn btn-circle btn-lg ${index === 1 ? 'btn-primary text-white !bg-[#fab758] border-[#fab758] hover:text-white hover:bg-[#fab758] hover:border-[#fab758] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#fab758] active:border-[#fab758] disabled:text-white disabled:bg-[#fab758] disabled:border-[#fab758]' : 'btn-soft-primary'} pointer-events-none mb-4 !relative z-[2] xl:text-[1.3rem] w-12 h-12 text-[calc(1.255rem_+_0.06vw)] inline-flex items-center justify-center leading-none !p-0 !rounded-[100%]`">
            <span class="number" v-html="process.number"></span>
          </span>
          <h4 class="!mb-1" v-html="process.title"></h4>
          <p v-html="process.description"></p>
        </div>
      </div>
    </div>
  </section>
</template>