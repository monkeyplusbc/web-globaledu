<script lang="ts" setup>
const props = defineProps({
  data: Object,
});
</script>

<template>
  <article class="post mb-8">
    <div class="card">
      <mk-picture class="card-img-top overlay overlay-1 hover-scale group" :src="data.image.src">
      </mk-picture>
      <div
        class="card-body flex-[1_1_auto] p-[40px] xl:p-[2rem_2.5rem_1.25rem] lg:p-[2rem_2.5rem_1.25rem] md:p-[2rem_2.5rem_1.25rem] sm:pb-4 xsm:pb-4  ">
        <div class="post-header !mb-[.9rem]">
          <div
            class="inline-flex mb-[.4rem] uppercase tracking-[0.02rem] text-[0.7rem] font-bold text-[#aab0bc] relative align-top pl-[1.4rem] before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 before:bg-[#3f78e0]">
            <a href="#" class="hover" rel="category">{{ data.category }}</a>
          </div>
          <h2 class="post-title mt-1 !leading-[1.35] !mb-0"><a class="text-[#343f52] hover:text-[#3f78e0]"
              :href="`/blogs/${data.url}`"><span v-html="data.seo.title"></span></a></h2>
        </div>
        <div class="!relative">
          <p v-html="data.seo.description"></p>
        </div>
      </div>
      <div
        class="card-footer xl:p-[1.25rem_2.5rem_1.25rem] lg:p-[1.25rem_2.5rem_1.25rem] md:p-[1.25rem_2.5rem_1.25rem] p-[18px_40px]">
        <ul class="text-[0.7rem] text-[#aab0bc] m-0 p-0 list-none flex  !mb-0">
          <li class="post-date inline-block"><i
              class="uil uil-calendar-alt pr-[0.2rem] align-[-.05rem] before:content-['\e9ba']"></i><span>{{ data.date }}</span></li>
          <li
            class="post-author inline-block before:content-[''] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:m-[0_.6rem_0] before:rounded-[100%] before:align-[.15rem] before:bg-[#aab0bc]">
            <i class="uil uil-user pr-[0.2rem] align-[-.05rem] before:content-['\ed6f']"></i><span>By
              {{ data.autor }}</span>
          </li>
        </ul>
      </div>
    </div>
  </article>
</template>