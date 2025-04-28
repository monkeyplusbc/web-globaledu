<script lang="ts" setup>
const props = defineProps({
  data: Object,
});
</script>

<template>
  <section class="wrapper bg-gradient-yellow">
    <div class="container pt-28 pb-40 xl:pt-36 lg:pt-36 md:pt-36 xl:pb-[12.5rem] lg:pb-[12.5rem] md:pb-[12.5rem] !text-center">
      <div class="flex flex-wrap mx-[-15px]">
        <div class="xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
          <h1 class="text-[calc(1.365rem_+_1.38vw)] font-bold leading-[1.2] xl:text-[2.4rem] mb-3" v-html="data?.title"></h1>
          <nav class="inline-block" aria-label="breadcrumb">
            <ol class="breadcrumb   flex flex-wrap bg-[none] p-0 !rounded-none list-none mb-[20px]">
              <li v-for="(item, index) in data?.breadcrumbItems" :key="index" class="breadcrumb-item flex" :class="{'active': item.active, 'pl-2 before:font-normal before:flex before:items-center before:text-[rgba(255,255,255,.5)] before:content-[\'\\e931\'] before:text-[0.9rem] before:-mt-px before:pr-2 before:font-Unicons': index > 0}">
                <a v-if="item.link" :href="item.link">{{ item.label }}</a>
                <span v-else>{{ item.label }}</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </section>
</template>