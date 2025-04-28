<script lang="ts" setup>
const props = defineProps({
  data: Object,
});
</script>

<template>
  <section class="wrapper bg-gradient-yellow">
    <div class="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
      <div class="flex flex-wrap mx-[-15px] mb-10">
        <div class="xl:w-10/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
          <div class="flex flex-wrap mx-[-15px] items-center counter-wrapper mt-[-30px] !text-center">
            <div
              v-for="(counter, index) in data.counters"
              :key="index"
              class="xl:w-3/12 lg:w-3/12 md:w-3/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]"
            >
              <mk-picture
                :src="counter.icon.src"
                class="svg-inject icon-svg icon-svg-lg text-[#3f78e0] !mb-3 !w-12 !h-12 m-[0_auto]"
                :alt="counter.icon.alt"
                :title="counter.icon.title"
              ></mk-picture>
              <h3
                class="counter xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] tracking-[normal] !leading-none mb-2"
                v-html="counter.value.toString()"
              ></h3>
              <p class="text-[0.8rem] font-medium mb-0" v-html="counter.label"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>