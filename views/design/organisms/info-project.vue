<script lang="ts" setup>
defineProps({
  data: {
    type: Object,
  },
  general: {
    type: Object,
  },
});
</script>

<template>
  <section class="wrapper bg-gradient-yellow">
      <div class="container pt-10 pb-36 xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem] xl:pb-60 lg:pb-60 md:pb-60 !text-center">
        <div class="flex flex-wrap mx-[-15px]">
          <div class="md:w-10/12 lg:w-8/12 xl:w-7/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
            <div class="post-header">
              <div class="inline-flex mb-[.4rem] uppercase tracking-[0.02rem] text-[0.7rem] font-bold text-[#aab0bc] relative align-top pl-[1.4rem] before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 before:bg-[#3f78e0]">
                <a href="#" class="hover" rel="category">{{ data.category }}</a>
              </div>
              <h1 class="text-[calc(1.365rem_+_1.38vw)] font-bold leading-[1.2] xl:text-[2.4rem] !mb-3" v-html="data.title"></h1>
              <p class="lead leading-[1.65] text-[.9rem] font-medium md:!px-14 lg:!px-14 xl:!px-20 xxl:!px-32" v-html="data.seo.description"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="wrapper !bg-[#ffffff]  border-b-[rgba(164,174,198,0.2)] border-b border-solid">
      <div class="container !pb-[4.5rem] xl:!pb-24 lg:!pb-24 md:!pb-24">
        <div class="flex flex-wrap mx-[-15px]">
          <div class="w-full flex-[0_0_auto] px-[15px] max-w-full">
            <article class="mt-[-12.5rem]">
              <mk-picture :src="data.image.src" class="!rounded-[.4rem] !mb-8 xl:!mb-[3.5rem] lg:!mb-[3.5rem] md:!mb-[3.5rem] w-full"></mk-picture>
              <div class="flex flex-wrap mx-[-15px]">
                <div class="xl:w-10/12 xl:!ml-[8.33333333%] lg:w-10/12 lg:!ml-[8.33333333%] w-full flex-[0_0_auto] px-[15px] max-w-full">
                  <h2 class="text-[calc(1.265rem_+_0.18vw)] font-bold xl:text-[1.4rem] leading-[1.35] mb-4" v-html="general.projects.about"></h2>
                  <div class="flex flex-wrap mx-0">
                    <div id="single-blog" class="xl:w-9/12 lg:w-9/12 md:w-9/12 w-full flex-[0_0_auto] max-w-full">
                      <template v-for="(v, i) in data?.about">
                        <div class="parrafo" v-html="v.content" />
                      </template>
                    </div>
                    <div class="xl:w-2/12 lg:w-2/12 md:w-2/12 w-full flex-[0_0_auto] max-w-full !ml-auto" v-if="data.infoClient">
                      <ul class="pl-0 list-none">
                        <li>
                          <h5 class="!mb-1" v-html="general.projects.date"></h5>
                          <p v-html="data.date"></p>
                        </li>
                        <li>
                          <h5 class="!mb-1" v-html="general.projects.client"></h5>
                          <p v-html="data.client"></p>
                        </li>
                      </ul>
                      <a :href="data.linkProject" class="more hover">{{general.projects.btn}}</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap mx-[-15px] md:mx-[-15px] mt-[25px]">
                <div class="item xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]" v-for="(v,i) in data.gallery">
                  <a :href="v.src" data-glightbox data-gallery="project-1">
                    <mk-picture :src="v.img.src" class="transition-all duration-[0.35s] ease-in-out group-hover:scale-105 w-full"></mk-picture>
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>

    <div class="wrapper !bg-[#ffffff]">
      <div class="container py-10">
        <div class="flex flex-wrap mx-[-15px] md:mx-[-15px] mt-[-15px] xl:mt-0 lg:mt-0 md:mt-0">
          <aside class="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full sm:mt-[15px] xsm:mt-[15px] sidebar">
            <div class="dropdown share-dropdown btn-group">
              <button class="btn btn-red text-white !bg-[#e2626b] border-[#e2626b] hover:text-white hover:bg-[#e2626b] hover:border-[#e2626b] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#e2626b] active:border-[#e2626b] disabled:text-white disabled:bg-[#e2626b] disabled:border-[#e2626b] !rounded-[50rem] btn-icon btn-icon-start dropdown-toggle  !mb-0 mr-0 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="uil uil-share-alt mr-[0.3rem] text-[0.8rem] before:content-['\ecb0']"></i> Share </button>
              <div class="dropdown-menu !shadow-[rgba(30,34,40,0.06)_0px_0px_25px_0px]" style="">
              <a class="dropdown-item text-[0.7rem] !p-[.25rem_1.15rem]" href="#"><i class="uil uil-twitter w-4 text-[0.8rem] pr-[0.4rem] align-[-.1rem] before:content-['\ed59']"></i>Twitter</a>
              <a class="dropdown-item text-[0.7rem] !p-[.25rem_1.15rem]" href="#"><i class="uil uil-facebook-f w-4 text-[0.8rem] pr-[0.4rem] align-[-.1rem] before:content-['\eae2']"></i>Facebook</a>
              <a class="dropdown-item text-[0.7rem] !p-[.25rem_1.15rem]" href="#"><i class="uil uil-linkedin w-4 text-[0.8rem] pr-[0.4rem] align-[-.1rem] before:content-['\ebd1']"></i>Linkedin</a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
</template>