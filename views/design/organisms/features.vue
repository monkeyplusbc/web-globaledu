<script lang="ts" setup>
defineProps({
  data: {
    type: Object,
  },
});
</script>

<template>
  <section class="wrapper !bg-white">
    <div class="container pt-[4.5rem] xl:pt-24 lg:pt-24 md:pt-24">
      <div class="flex flex-wrap mx-[-15px] !text-center">
        <div
          class="md:w-10/12 xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:!ml-[16.66666667%] lg:!ml-[16.66666667%] md:!ml-[8.33333333%]"
        >
          <div class="h1 !text-[0.8rem] tracking-[0.02rem] uppercase !text-gray-200 !mb-3 !leading-[1.35]" v-html="data?.pretitle" />
          <div class="h2 !text-[calc(1.315rem_+_0.78vw)] font-bold xl:text-[1.9rem] !leading-[1.25] mb-10 xl:!px-10" v-html="data?.title" />
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div class="!relative">
        <div
          class="shape !rounded-[50%] !bg-gray-400 rellax !w-[6rem] !h-[6rem] !absolute z-[1]"
          data-rellax-speed="1" style="bottom: -0.5rem; right: -2.2rem; z-index: 0;"
        />
        <div
          class="shape bg-dot primary rellax !w-[6rem] !h-[7rem] absolute opacity-50 bg-[radial-gradient(#fab758_2px,transparent_2.5px)]"
          data-rellax-speed="1" style="top: -0.5rem; left: -2.5rem; z-index: 0;"
        />
        <div
          class="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] mt-[-25px] !text-center"
        >
          <div
            v-for="(item, i) in data?.items" :key="i"
            class="md:w-6/12 lg:w-6/12 xl:w-3/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] mt-[25px]"
          >
            <div class="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
              <div class="card-body flex-[1_1_auto] p-[40px]">
                <mk-picture :src="item.image.src" :alt="item.image.alt" :title="item.image.title" class="svg-inject max-h-[85px] text-primary text-yellow !mb-3 m-[0_auto]" />
                <div class="h4 !text-[1rem]" v-html="item.title" />
                <p class="!mb-2" v-html="item.txt" />
                <atoms-button :data="item.btn.link" class="more hover text-primary focus:text-primary hover:text-primary">
                  {{ item.btn.txt }}
                </atoms-button>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
          <!-- /column -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.relative -->
    </div>
    <!-- /.container -->
  </section>
  <!-- /section -->
</template>
