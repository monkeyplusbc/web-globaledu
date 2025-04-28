<script lang="ts" setup>
const { cms } = useContext();
const props = defineProps({
  data: Array,
});
const { general } = cms.$settings.common;
</script>

<template>
  <section class="wrapper !bg-[#ffffff]">
      <div class="container py-[4.5rem] xl:!py-24 lg:!py-24 md:!py-24">
        <div class="flex flex-wrap mx-[-15px] mt-6">
          <div class="xl:w-10/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
            <div class="projects-tiles">
              <div class="project itemgrid grid-view" v-for="(v,i) in data">
                <div class="flex flex-wrap mx-[-15px] isotope mt-[-30px]">
                  <div class="item xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                    <div class="project-details flex justify-center flex-col">
                      <div class="post-header">
                        <div class="uppercase tracking-[0.02rem] text-[0.7rem] font-bold !text-primary !mb-3" v-html="v.category"></div>
                        <h2 class="post-title !mb-3 !leading-[1.35]" v-html="v.seo.title"></h2>
                      </div>
                      <div class="!relative">
                        <p v-html="v.seo.description"></p>
                        <a :href="`/soluciones/${v.url}`" class="more hover text-primary focus:text-primary hover:text-primary">{{general.projects.btn}}</a>
                      </div>
                    </div>
                  </div>
                  <div
                    v-for="(v1,i1) in v.gallery"
                    class="item xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]"
                  >
                    <figure
                      class="itooltip itooltip-light hover-scale rounded group"
                      :title="v1.title"
                    >
                      <a
                        :href="v1.src"
                        :data-glightbox="v1.title"
                        data-gallery="image-1"
                      >
                        <img
                          class=" transition-all duration-[0.35s] ease-in-out group-hover:scale-105"
                          :src="v1.src"
                          :alt="v1.alt"
                        />
                      </a>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>