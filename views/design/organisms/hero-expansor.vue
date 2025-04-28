<script lang="ts" setup>
defineProps({
  data: {
    type: Object,
  },
});
</script>

<template>
  <section
    class="wrapper !bg-white  angled upper-start lower-start relative border-0
     before:top-[-4rem] before:content-[''] before:block before:absolute before:z-0 before:border-l-[100vw] before:border-r-transparent before:border-t-[4rem] before:border-y-transparent before:border-gray-300 before:border-0 before:border-solid before:right-0 after:bottom-[-4rem] after:content-[''] after:block after:absolute after:z-0 after:border-l-[100vw] after:border-r-transparent after:border-b-[4rem] after:border-y-transparent after:border-gray-300 after:border-0 after:border-solid after:right-0
    "
  >
    <div class="container py-[4.5rem] xl:pt-28 lg:pt-28 md:pt-28 xl:pb-20 lg:pb-20 md:pb-20">
      <div class="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] mt-[-50px] lg:!mb-60 xl:!mb-80 items-center">
        <div
          class="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[50px] max-w-full"
        >
          <figure class="m-0 p-0">
            <mk-picture
              class="w-auto" :src="data?.image.src" :alt="data?.image.alt" :title="data?.image.title"
            />
          </figure>
        </div>
        <!-- /column -->
        <div
          class="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[50px] max-w-full"
        >
          <div class="h2 !text-[0.8rem] tracking-[0.02rem] uppercase !text-gray-200 !mb-3 !leading-[1.35]" v-html="data?.pretitle" />
          <div class="h3 text-[calc(1.315rem_+_0.78vw)] !leading-[1.25] font-bold xl:text-[1.9rem] mb-7" v-html="data?.title" />
          <div id="accordionExample" class="accordion accordion-wrapper">
            <div v-for="(item, i) in data?.items" :key="i" class="card plain accordion-item">
              <div :id="`heading-${i}`" class="card-header !mb-0 !p-[0_0_.8rem_0] !border-0 !bg-inherit">
                <button
                  class="accordion-button !text-[0.9rem] before:!text-primary !text-primary"
                  data-bs-toggle="collapse" :data-bs-target="`#collapse-${i}`" :aria-expanded="(i === 0) ? true : false"
                  aria-controls="collapseOne"
                >
                  {{ item.title }}
                </button>
              </div>
              <!-- /.card-header -->
              <div
                :id="`collapse-${i}`" class="accordion-collapse collapse" :class="{ show: i === 0 }" :aria-labelledby="`heading-${i}`"
                data-bs-parent="#accordionExample"
              >
                <div class="card-body !p-[0_0_0_1.1rem]">
                  <p v-html="item.txt" />
                </div>
                <!-- /.card-body -->
              </div>
              <!-- /.accordion-collapse -->
            </div>
            <!-- /.accordion-item -->
          </div>
          <!-- /.accordion -->
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
</template>
