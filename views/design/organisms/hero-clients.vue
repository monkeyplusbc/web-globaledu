<script lang="ts" setup>
defineProps({
  data: {
    type: Object,
  },
});
</script>

<template>
  <section
    class="wrapper !bg-white  angled upper-end lower-end relative border-0 before:top-[-4rem] before:border-l-transparent before:border-r-[100vw] before:border-t-[4rem] before:border-gray-300 before:content-[''] before:block before:absolute before:z-0 before:!border-y-transparent before:border-0 before:border-solid before:right-0 after:bottom-[-4rem] after:border-l-transparent after:border-r-[100vw] after:border-b-[4rem] after:border-gray-300 after:content-[''] after:block after:absolute after:z-0 after:!border-y-transparent after:border-0 after:border-solid after:right-0"
  >
    <div class="container py-[4.5rem] xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem] xl:pb-32 lg:pb-32 md:pb-32">
      <div
        class="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] mt-[-50px] items-center"
      >
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
          <div class="h3 text-[calc(1.315rem_+_0.78vw)] font-bold xl:text-[1.9rem] !leading-[1.25] !mb-3" v-html="data?.title" />
          <p v-html="data?.txt" />
          <atoms-button
            :data="data?.btn.link"
            class="btn btn-yellow text-white !bg-primary border-primary hover:text-white hover:bg-primary hover:border-primary focus:shadow-gray-200 active:text-white active:bg-primary active:border-primary disabled:text-white disabled:bg-primary disabled:border-primary !text-[.85rem] !rounded-[50rem] !mt-2 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
          >
            {{ data?.btn.txt }}
          </atoms-button>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div class="xl:!px-5 lg:!px-5 pt-20">
        <div class="flex flex-wrap mx-0 md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] mt-[-40px] items-center">
          <div
            v-for="(item, i) in data?.items" :key="i"
            class="w-4/12 xl:w-2/12 lg:w-2/12 md:w-2/12 flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[40px] max-w-full"
          >
            <figure class="px-5 md:!px-0 lg:!px-2 xl:!px-3 xxl:!px-4">
              <mk-picture
                :src="item.image.src" :alt="item?.image.alt" :title="item?.image.title"
              />
            </figure>
          </div>
          <!-- /column -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /div -->
    </div>
    <!-- /.container -->
  </section>
  <!-- /section -->
</template>
