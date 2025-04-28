<script lang="ts" setup>
defineProps({
  data: {
    type: Object,
  },
  sugeridos: {
    type: Array,
  },
});
</script>

<template>
<section class="wrapper bg-gradient-yellow">
      <div class="container pt-10 pb-36 xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem] xl:pb-40 lg:pb-40 md:pb-40 !text-center">
        <div class="flex flex-wrap mx-[-15px]">
          <div class="md:w-10/12 lg:w-10/12 xl:w-8/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
            <div class="post-header !mb-[.9rem]">
              <div class="inline-flex uppercase tracking-[0.02rem] text-[0.7rem] font-bold text-[#aab0bc] mb-[0.4rem]  text-line relative align-top pl-[1.4rem] before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 before:bg-[#3f78e0]">
                <a href="#" class="hover" rel="category">{{data.category}}</a>
              </div>
              <h1 class="text-[calc(1.365rem_+_1.38vw)] font-bold leading-[1.2] xl:text-[2.4rem] mb-4" v-html="data.title"></h1>
              <ul class="text-[0.8rem] text-[#aab0bc] m-0 p-0 list-none !mb-5">
                <li class="post-date inline-block"><i class="uil uil-calendar-alt pr-[0.2rem] align-[-.05rem] before:content-['\e9ba']"></i><span v-html="data.date"></span></li>
                <li class="post-author inline-block before:content-[''] before:inline-block before:w-[0.2rem] before:h-[0.2rem] before:opacity-50 before:m-[0_.6rem_0_.4rem] before:rounded-[100%] before:align-[.15rem] before:bg-[#aab0bc]"><a class="text-[0.8rem] text-[#aab0bc] hover:text-[#3f78e0] hover:border-[#3f78e0]" href="#"><i class="uil uil-user pr-[0.2rem] align-[-.05rem] before:content-['\ed6f']"></i><span v-html="data.autor"></span></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="single-blog" class="wrapper !bg-[#ffffff]">
      <div class="container !pb-[4.5rem] xl:!pb-24 lg:!pb-24 md:!pb-24">
        <div class="flex flex-wrap mx-[-15px]">
          <div class="xl:w-10/12 lg:w-10/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
            <div class="blog single !mt-[-7rem]">
              <div class="card">
                <mk-picture :src="data.image.src" class="w-full"></mk-picture>

                <div class="card-body flex-[1_1_auto] p-[40px] xl:p-[2.8rem_3rem_2.8rem] lg:p-[2.8rem_3rem_2.8rem] md:p-[2.8rem_3rem_2.8rem]">
                  <div class="classic-view">
                    <article class="post mb-8">
                      <div class="relative mb-5">
                        <template v-for="(v, i) in data?.body" :key="`text-${i}`">
            <div v-if="v.type === 'title'" class="title" v-html="v.content" />
            <div v-if="v.type === 'p'" class="parrafo" v-html="v.content" />
            <div v-if="v.type === 'list'" class="list">
              <ul class="list-disc ml-[30px]">
                <li v-for="(item, index) in v.content" :key="`li${index}`" v-html="item" />
              </ul>
            </div>
            <div v-if="v.type === 'enumerate'" class="list">
              <ol class="list-decimal ml-[30px]">
                <li v-for="(item, index) in v.content" :key="`li${index}`" v-html="item" />
              </ol>
            </div>
            <template v-if="v.type === 'image'">
              <mk-picture :src="v.content" class="max-w-full mx-auto mb-[20px]" />
            </template>
          </template>
                      </div>
                      <div class="post-footer xl:flex xl:!flex-row xl:!justify-between lg:flex lg:!flex-row lg:!justify-between md:flex md:!flex-row md:!justify-between !items-center !mt-8">
                        <div class="mb-0 xl:!mb-2 lg:!mb-2 md:!mb-2">
                          <div class="dropdown share-dropdown btn-group">
                            <button class="btn btn-sm btn-red text-white !bg-[#e2626b] border-[#e2626b] hover:text-white hover:bg-[#e2626b] hover:border-[#e2626b] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#e2626b] active:border-[#e2626b] disabled:text-white disabled:bg-[#e2626b] disabled:border-[#e2626b] !rounded-[50rem] btn-icon btn-icon-start dropdown-toggle !mb-0 mr-0 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i class="uil uil-share-alt mr-[0.3rem] text-[0.8rem] before:content-['\ecb0']"></i> Share </button>
                            <div class="dropdown-menu !shadow-[rgba(30,34,40,0.06)_0px_0px_25px_0px]">
    <a class="dropdown-item text-[0.7rem] !p-[.25rem_1.15rem]" href="#"><i class="uil uil-twitter w-4 text-[0.8rem] pr-[0.4rem] align-[-.1rem] before:content-['\ed59']"></i>Twitter</a>
    <a class="dropdown-item text-[0.7rem] !p-[.25rem_1.15rem]" href="#"><i class="uil uil-facebook-f w-4 text-[0.8rem] pr-[0.4rem] align-[-.1rem] before:content-['\eae2']"></i>Facebook</a>
    <a class="dropdown-item text-[0.7rem] !p-[.25rem_1.15rem]" href="#"><i class="uil uil-linkedin w-4 text-[0.8rem] pr-[0.4rem] align-[-.1rem] before:content-['\ebd1']"></i>Linkedin</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                  <hr>
                  <div class="swiper-container blog grid-view mb-24 relative z-10" data-margin="30" data-dots="true" data-items-md="2" data-items-xs="1">
                    <div class="swiper">
                      <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(v,i) in sugeridos">
                          <molecules-blog-resume :data="v" :full="true" class="!mb-[30px]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>