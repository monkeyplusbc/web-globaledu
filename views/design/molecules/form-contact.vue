<script lang="ts" setup>
defineProps({
  data: {
    type: Object,
  },
  hideInput: {
    default: false,
    type: Boolean,
  },
});
</script>

<template>
  <form class="contact-form" :v-scope="'SendForm()'" :[`@submit.prevent`]="'sendForm'">
    <label :v-scope="`Field({id:'form',initValue:'contact'})`">
      <input id="formid" :v-model="'value'" type="hidden" name="form">
    </label>
    <div class="flex flex-wrap mx-[-10px]">
      <template v-for="(item, i) in data?.inputs" :key="i">
        <div v-if="item.type !== 'select' && item.type !== 'textarea'" class="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full px-[10px] max-w-full pb-3">
          <div class="flex flex-col" :v-scope="`Field({id:'${item?.id}',label:'${item?.error}',rules:'${item?.rules}'})`">
            <input class="form-control   relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:bg-[rgba(255,255,255,.03)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25]" :id="item.id" :v-model="'value'" :type="item.type" :name="item.id" :placeholder="item.label">
            <div class="regular text-xs pt-1 pb-2 text-red-500">
              [{error}]
            </div>
          </div>
        </div>
        <div v-if="item.type === 'textarea'" class="w-full px-[10px] max-w-full pb-3">
          <div class="flex flex-col" :v-scope="`Field({id:'${item?.id}',label:'${item?.error}',rules:'${item?.rules}'})`">
            <textarea class="form-control   relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:bg-[rgba(255,255,255,.03)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[200px] min-h-[200px] leading-[1.25]" :id="item.id" :v-model="'value'" :name="item.id" :placeholder="item.label" />
            <div class="regular text-xs pt-1 pb-2 text-red-500">
              [{error}]
            </div>
          </div>
        </div>
      </template>
      <div class="w-full !mb-4 px-[10px]">
        <div :v-scope="`Field({id:'${data?.policy?.id}',label:'${data?.policy?.error}',rules:'${data?.policy?.rules}'})`" class="flex items-center">
          <input :id="data?.policy.id" :v-model="'value'" :type="data?.policy.type" :name="data?.policy.id" :placeholder="data?.policy.label">
          <label class="ml-3" :for="data?.policy.id" v-html="data?.policy.label" />
          <div class="regular text-xs pt-1 pb-3 text-red-500 pl-2">
            [{error}]
          </div>
        </div>
      </div>
      <molecules-alerts
        class="my-5 mx-[10px]" :v-show="`response.active`"
        :data="{
          txt: '[{response.text}]',
        }"
      />
      <!-- /column -->
      <div class="w-full flex-[0_0_auto] px-[10px] max-w-full !text-center">
        <button class="btn btn-yellow !bg-primary m-[0_.7rem_0_0] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]">
          <span :v-if="`!spinner`" v-html="data?.btn" />
          <atoms-spinner :v-if="`spinner`" class="mx-auto w-fit" />
        </button>
      </div>
      <!-- /column -->
    </div>
    <!-- /.row -->
  </form>
</template>