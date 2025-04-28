<script lang="ts" setup>
defineProps({
  data: {
    type: Object,
  },
});
</script>

<template>
  <section class="wrapper bg-gradient-yellow">
    <div class="container pt-10 xl:pt-[4.5rem] lg:pt-[4.5rem] md:pt-[4.5rem] pb-8 !text-center">
      <div class="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] mt-[-50px] items-center">
        <div
          class="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] px-[15px] xl:px-[35px] lg:px-[20px] mt-[50px] max-w-full"
        >
          <figure class="m-0 p-0">
            <mk-picture
              class="w-auto" :src="data?.image.src" :alt="data?.image.alt" :title="data?.image.title"
            />
          </figure>
        </div>
        <!-- /column -->
        <div
          class="md:w-10/12 lg:w-5/12 xl:w-5/12 md:!ml-[8.33333333%] lg:!ml-0 xl:!ml-0 flex-[0_0_auto] px-[15px] xl:px-[35px] lg:px-[20px] mt-[50px] max-w-full text-center lg:text-left xl:text-left"
        >
          <div
            class="h1 text-[calc(1.375rem_+_1.5vw)] font-bold leading-[1.15] xl:text-[2.5rem] mb-5 md:mx-[-1.25rem] lg:mx-0"
            v-html="data?.title"
          />
          <p class="lead !text-[1.1rem] leading-[1.55] mb-7" v-html="data?.txt" />
          <span><atoms-button
            :data="data?.btn.link"
            class="btn btn-yellow text-white !bg-primary border-primary hover:text-white hover:bg-primary hover:border-primary focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-primary active:border-primary disabled:text-white disabled:bg-primary disabled:border-primary !text-[.85rem] !rounded-[50rem] !mr-2 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
          >{{ data?.btn.txt }}</atoms-button></span>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
</template>
