<script lang="ts" setup>
defineProps({
  data: {
    type: Object,
  },
});
</script>

<template>
  <section class="wrapper bg-gradient-reverse-primary">
    <div class="container py-[4.5rem] xl:!py-[8rem] lg:!py-[8rem] md:!py-[8rem]">
      <div class="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] mt-[-50px] items-center">
        <div
          class="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[50px] max-w-full"
        >
          <div class="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] mt-[-25px]">
            <div
              v-for="(item, i) in data?.items" :key="i"
              class="md:w-6/12 lg:w-6/12 xl:w-6/12 w-full flex-[0_0_auto] px-[15px] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] mt-[25px] max-w-full !self-end"
            >
              <div class="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                <div class="card-body flex-[1_1_auto] p-[40px]">
                  <blockquote
                    class="text-[.9rem] leading-[1.7] font-medium pl-4 icon !mb-0 relative p-0 border-0 before:content-['\201d'] before:absolute before:top-[-1.5rem] before:left-[-0.9rem] before:text-[rgba(52,63,82,0.05)] before:text-[10rem] before:leading-none before:z-[1]"
                  >
                    <p v-html="item.txt" />
                    <div class="flex items-center text-left">
                      <div class="info p-0">
                        <div class="h5 !mb-1 text-[.95rem] !leading-[1.5]" v-html="item.title" />
                        <p class="!mb-0 !text-[.85rem]" v-html="item.subtitle" />
                      </div>
                    </div>
                  </blockquote>
                </div>
                <!-- /.card-body -->
              </div>
              <!-- /.card -->
            </div>
            <!-- /column -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /column -->
        <div
          class="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[50px] max-w-full"
        >
          <div
            class="h2 !text-[0.8rem] tracking-[0.02rem] !leading-[1.35] uppercase !text-gray-200 mb-3 xl:mt-[-1.5rem] lg:mt-[-1.5rem]"
            v-html="data?.pretitle"
          />
          <div class="h3 text-[calc(1.315rem_+_0.78vw)] font-bold xl:text-[1.9rem] !leading-[1.25] mb-5" v-html="data?.title" />
          <p v-html="data?.txt" />
          <atoms-button
            :data="data?.btn.link"
            class="btn btn-yellow text-white !bg-primary border-primary hover:text-white hover:bg-primary hover:border-primary focus:shadow-gray-200 active:text-white active:bg-primary active:border-primary disabled:text-white disabled:bg-primary disabled:border-primary !text-[.85rem] !rounded-[50rem] mt-3 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
          >
            {{ data?.btn.txt }}
          </atoms-button>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
  <!-- /section -->
</template>
