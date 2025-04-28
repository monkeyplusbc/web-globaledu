<script lang="ts" setup>
defineProps({
  data: {
    type: Object,
  },
});
</script>

<template>
  <div class="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] md:mx-[-20px] mt-[-50px] items-center">
    <div
      class="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:!order-2 lg:!order-2 xl:px-[35px] lg:px-[20px] md:px-[20px] mt-[50px]">
      <div v-for="(item, i) in data?.items" :key="i" :class="{
        'mt-6 xl:!ml-16 lg:!ml-16': i % 2 !== 0,
        'mt-6': i % 2 === 0 && i !== 1,
      }" class="card xl:!mr-6 lg:!mr-6 !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
        <div class="card-body p-6">
          <div class="flex flex-row">
            <div>
              <span
                class="icon btn btn-circle btn-lg btn-soft-yellow pointer-events-none !mr-4 xl:text-[1.3rem] !w-12 !h-12 text-[calc(1.255rem_+_0.06vw)] inline-flex items-center justify-center leading-none !p-0 !rounded-[100%]"><span
                  class="number table-cell text-center align-middle text-[1.1rem] font-bold m-[0_auto]"
                  v-html="`0${i + 1}`" /></span>
            </div>
            <div>
              <div class="h4 !mb-1 text-[1rem]" v-html="item.title" />
              <p class="!mb-0" v-html="item.txt" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:px-[35px] lg:px-[20px] md:px-[20px] mt-[50px]">
      <div v-if="data.pretitle" class="h2 !text-[0.8rem] tracking-[0.02rem] uppercase !text-gray-200 !mb-3 !leading-[1.35]"
        v-html="data?.pretitle" />
      <div class="h3 text-[calc(1.315rem_+_0.78vw)] font-bold xl:text-[1.9rem] !leading-[1.25] mb-5"
        v-html="data?.title" />
      <div v-if="data.lead" class="lead text-[1rem] xl:pr-5 lg:pr-5" v-html="data?.lead"></div>
      <p v-html="data?.txt" />
      <atoms-button :data="data?.btn.link"
        class="btn btn-yellow text-white !bg-primary border-primary hover:text-white hover:bg-primary hover:border-primary focus:shadow-gray-200 active:text-white active:bg-primary active:border-primary disabled:text-white disabled:bg-primary disabled:border-primary !text-[.85rem] !rounded-[50rem] !mb-0 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]">
        {{ data?.btn.txt }}
      </atoms-button>
    </div>
  </div>
</template>
