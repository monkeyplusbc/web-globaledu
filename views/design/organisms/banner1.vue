<script lang="ts" setup>
const props = defineProps({
  data: Object,
  large: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <section class="wrapper bg-gradient-yellow">
    <div class="container pt-10 xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem] !text-center">
      <div class="flex flex-wrap mx-[-15px]">
        <div class="xl:w-6/12 flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
          <h1 class="text-[calc(1.365rem_+_1.38vw)] font-bold leading-[1.2] xl:text-[2.4rem] mb-4" :class="{'!text-[1.4rem]': large}" v-html="data.title"></h1>
          <p v-if="data.description" class="lead text-[1.05rem] !leading-[1.6] font-medium !mb-0" v-html="data.description"></p>
        </div>
      </div>
    </div>
    <mk-picture
      v-if="data.bg"
      class="absoute top-0 left-0 w-full object-cover object-left"
      :src="data.bg.src"
    />
  </section>
</template>