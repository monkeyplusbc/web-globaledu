<script lang="ts" setup>
const props = defineProps({
  data: Object,
});
const { cms } = useContext();
const { form } = cms.$settings.common;
</script>

<template>
  <section class="wrapper !bg-[#ffffff]   relative border-0 upper-end before:top-[-4rem] before:border-l-transparent before:border-r-[100vw] before:border-t-[4rem] before:border-[#fefefe] before:content-[''] before:block before:absolute before:z-0 before:border-y-transparent before:border-0 before:border-solid before:right-0">
    <div class="container pb-12">
      <div class="flex flex-wrap mx-[-15px] !mb-[4.5rem] md:!mb-24">
        <div class="xl:w-10/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
          <div class="card">
            <div class="flex flex-wrap mx-0">
              <div class="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] max-w-full !self-stretch">
                <div class="map map-full rounded-t-[0.4rem] rounded-lg-start h-full min-h-[15rem]">
                  <iframe :src="data?.mapIframeSrc" style="width:100%; height: 100%; border:0" allowfullscreen></iframe>
                </div>
              </div>
              <div class="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] max-w-full">
                <div class="p-10 xl:!p-[4.5rem] lg:!p-[4.5rem] md:!p-12">
                  <div v-for="(detail, index) in data?.contactDetails" :key="index" class="flex flex-row mb-4" :class="{'mb-0': index === data?.contactDetails?.length - 1}">
                    <div>
                      <div class="icon !mr-4">
                        <mk-icon class="text-[14px] text-primary">{{ detail.icon }}</mk-icon>
                      </div>
                    </div>
                    <div class="!self-start !justify-start">
                      <h5 class="!mb-1">{{ detail.title }}</h5>
                      <address v-if="typeof detail.details === 'string'" class=" not-italic leading-[inherit] mb-0" v-html="detail.details"></address>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap mx-[-15px]">
        <div id="contact-form" class="xl:w-8/12 xl:!ml-[16.66666667%] lg:w-10/12 lg:!ml-[8.33333333%] w-full flex-[0_0_auto] px-[15px] max-w-full">
          <h2 class="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] leading-[1.3] mb-3 !text-center" v-html="data.title"></h2>
          <p class="lead leading-[1.65] text-[0.9rem] font-medium !text-center mb-10" v-html="data.txt"></p>
          <molecules-form-contact :data="form" />
        </div>
      </div>
    </div>
  </section>
</template>