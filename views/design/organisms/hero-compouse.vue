<script lang="ts" setup>
defineProps({
  data: {
    type: Object,
  },
});
</script>

<template>
  <section class="wrapper bg-gradient-reverse-primary">
    <div class="container py-24 xl:!py-[8rem] lg:!py-[8rem] md:!py-[8rem]">
      <div class="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] mt-[-50px] !mb-8 items-center">
        <div
          class="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[50px] max-w-full xl:!order-2 lg:!order-2"
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
          <div class="h3 !text-[calc(1.315rem_+_0.78vw)] font-bold xl:!text-[1.9rem] !leading-[1.25] mb-5" v-html="data?.title" />
          <p class="!mb-7" v-html="data?.txt" />
          <span><atoms-button
            :data="data?.btn.link"
            class="btn btn-yellow text-white !bg-primary border-primary hover:text-white hover:bg-primary hover:border-primary focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-primary active:border-primary disabled:text-white disabled:bg-primary disabled:border-primary !text-[.85rem] !rounded-[50rem] !mr-2 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
          >{{ data?.btn.txt }}</atoms-button></span>
          <!-- /.row -->
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </section>
  <!-- /section -->
</template>
