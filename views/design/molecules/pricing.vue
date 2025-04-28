<script lang="ts" setup>
defineProps({
  data: {
    type: Object,
  },
});
</script>

<template>
  <div class="flex flex-wrap mx-[-15px] mt-[-30px]">
        <div class="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
          <div
            class="h2 !text-[0.8rem] tracking-[0.02rem] !leading-[1.35] uppercase !text-gray-200 xl:!mt-[8rem] lg:!mt-[8rem] !mb-3"
            v-html="data?.pretitle"
          />
          <div class="h3 text-[calc(1.315rem_+_0.78vw)] font-bold xl:text-[1.9rem] !leading-[1.25] !mb-3" v-html="data?.title" />
          <p v-html="data?.txt" />
          <atoms-button
            :data="data?.btn.link"
            href="#"
            class="btn btn-yellow text-white !bg-primary border-primary hover:text-white hover:bg-primary hover:border-primary focus:shadow-gray-200 active:text-white active:bg-primary active:border-primary disabled:text-white disabled:bg-primary disabled:border-primary !text-[.85rem] !rounded-[50rem] !mt-2 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
          >
            {{ data?.btn.txt }}
          </atoms-button>
        </div>
        <div
          class="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:!ml-[8.33333333%] lg:!ml-[8.33333333%] pricing-wrapper mt-[30px]"
        >
          <div class="flex flex-wrap items-center switcher xl:!justify-end lg:!justify-end">
            <p class="!mb-0 !pr-[.75rem]">
              {{ data?.settings.month }}
            </p>
            <div
              class="pricing-switchers w-8 h-4 clear-both !text-center !relative bg-[rgba(30,34,40,0.07)] box-content rounded-3xl border-[0.2rem] border-solid border-transparent"
            >
              <div
                class="pricing-switcher pricing-switcher-active cursor-pointer w-full float-left h-4 leading-4 !relative z-[888] transition-[0.3s] duration-[ease-in-out] uppercase text-white"
              />
              <div
                class="pricing-switcher cursor-pointer w-full float-left h-4 leading-4 !relative z-[888] transition-[0.3s] duration-[ease-in-out] uppercase"
              />
              <div
                class="h-4 w-4 block absolute z-[555] transition-[0.3s] duration-[ease-in-out] m-0 rounded-[100%] border-[none] left-0 top-0 !bg-primary opacity-100 switcher-button"
              />
            </div>
            <p class="!mb-0 !pl-3 !relative">
              {{ data?.settings.year }} <span class="text-important">{{ data?.settings.save }}</span>
            </p>
          </div>
          <div class="flex flex-wrap mx-[-15px] mt-[25px] !relative">
            <div
              class="shape bg-dot red rellax !w-[6rem] !h-[8rem] absolute z-[1] bg-[radial-gradient(#e2626b_2px,transparent_2.5px)] opacity-50"
              data-rellax-speed="1" style="bottom: -0.5rem; right: -1.6rem;"
            />
            <div v-for="(item, i) in data?.items" :key="i" class="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
              <div class="pricing card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                <div class="card-body !p-[3rem_40px_3.5rem_40px]">
                  <div class="prices text-blue-100">
                    <div class="price price-show !justify-start">
                      <span class="price-currency">$</span><span
                        class="price-value"
                      >{{ item.monthPrice }}</span> <span class="price-duration">{{ data?.settings.month }}</span>
                    </div>
                    <div class="price price-hide price-hidden !justify-start">
                      <span
                        class="price-currency"
                      >$</span><span class="price-value">{{ item.yearPrice }}</span> <span
                        class="price-duration"
                      >{{ data?.settings.year }}</span>
                    </div>
                  </div>
                  <div class="h4 card-title !mt-2" v-html="item.plan" />
                  <ul class="pl-0 list-none bullet-bg bullet-soft-primary mt-7 !mb-8">
                    <li v-for="(ite, j) in item.items" :key="j" class="relative pl-[1.25rem]">
                      <i
                        class="uil uil-check absolute left-0 top-[-0.2rem]  !text-[1.05rem] tracking-[normal] !text-center flex items-center justify-center text-primary rounded-[100%] before:content-['\e9dd'] before:align-middle before:table-cell"
                      /><span v-html="ite.txt" />
                    </li>
                  </ul>
                  <atoms-button
                    :data="item.btn.link"
                    class="btn btn-yellow text-white !bg-primary border-primary hover:text-white hover:bg-primary hover:border-primary focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-primary active:border-primary disabled:text-white disabled:bg-primary disabled:border-primary !text-[.85rem] !rounded-[50rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
                  >
                    {{ item.btn.txt }}
                  </atoms-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>
