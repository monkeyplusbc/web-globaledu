<script lang="ts" setup>
const props = defineProps({
  data: {
    type: Object,
  },
});

// Dividir lista

const mitad = Math.ceil(props.data?.items.length / 2); // Calcular el índice de la mitad, redondeando hacia arriba
const primeraParte = props.data?.items.slice(0, mitad); // Primera mitad (o mayor si impar)
const segundaParte = props.data?.items.slice(mitad); // Segunda mitad
</script>

<template>
  <section class="wrapper !bg-white">
    <div class="container">
      <div class="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] mt-[-50px] items-center">
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
          <div class="text-[calc(1.315rem_+_0.78vw)] font-bold xl:text-[1.9rem] !leading-[1.25] mb-5" v-html="data?.title" />
          <p class="!mb-6" v-html="data?.txt" />
          <div class="flex flex-wrap mx-[-15px] mt-[-15px]">
            <div class="xl:w-6/12 w-full flex-[0_0_auto] px-[15px] mt-[15px] max-w-full">
              <ul class="pl-0 list-none bullet-bg bullet-soft-primary  !mb-0">
                <li v-for="(item, i) in primeraParte" :key="i" class="relative pl-6">
                  <span><i
                    class="uil uil-check w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex justify-center items-center bg-secundary text-primary rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0"
                  /></span><span v-html="item.txt" />
                </li>
              </ul>
            </div>
            <!-- /column -->
            <div class="xl:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[15px]">
              <ul class="pl-0 list-none bullet-bg bullet-soft-primary  !mb-0">
                <li v-for="(item, i) in segundaParte" :key="i" class="relative pl-6">
                  <span><i
                    class="uil uil-check w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex justify-center items-center bg-secundary text-primary rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell absolute left-0"
                  /></span><span v-html="item.txt" />
                </li>
              </ul>
            </div>
            <!-- /column -->
          </div>
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
