<script lang="ts" setup>
const { cms } = useContext();
const { lang } = useLocale();
const { shared } = useSharedContext();
const { logos, menu, networks, footer } = cms.$settings.common;
</script>

<template>
  <footer class="bg-blue-100 opacity-100 text-gray-500">
    <div class="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
      <div v-if="footer.cta.active" class="xl:flex lg:flex flex-row xl:!items-center lg:!items-center">
        <div
          class="h3 text-[calc(1.315rem_+_0.78vw)] font-bold xl:text-[1.9rem] !leading-[1.25] !mb-6 xl:!mb-0 lg:!mb-0 lg:pr-40 xl:pr-60 xxl:pr-[22.5rem] !text-white"
          v-html="footer.cta.txt"
        />
        <atoms-button
          :data="footer.cta.btn.link"
          class="btn btn-yellow text-white !bg-primary border-primary hover:text-white hover:bg-primary hover:border-primary focus:shadow-gray-200 active:text-white active:bg-primary active:border-primary disabled:text-white disabled:bg-primary disabled:border-primary !text-[.85rem] !rounded-[50rem]  !mb-0 whitespace-nowrap !tracking-[normal]"
        >
          {{ footer.cta.btn.txt }}
        </atoms-button>
      </div>
      <!-- /div -->
      <hr v-if="footer.cta.active" class="mt-[3rem] mb-[3.5rem] opacity-100 m-[4.5rem_0] border-t border-solid border-[rgba(164,174,198,.2)]">
      <div class="flex flex-wrap mx-[-15px] mt-[-30px] xl:mt-0 lg:mt-0">
        <div
          class="md:w-4/12 xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:mt-0 lg:mt-0 mt-[30px]"
        >
          <div class="widget text-gray-500">
            <mk-picture class="!mb-4 max-w-[230px]" :src="logos.logoLight.src" :alt="logos.logoLight.alt" :title="logos.logoLight.title" />
            <p class="!mb-4" v-html="footer.copyrigth" />
            <nav class="nav social social-white">
              <atoms-button
                v-for="(item, i) in networks.items" :key="i"
                :data="item.link" class="text-gray-200 text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
              >
                <mk-icon class="!text-white text-[1rem]">
                  {{ item.icon }}
                </mk-icon>
              </atoms-button>
            </nav>
            <!-- /.social -->
          </div>
          <!-- /.widget -->
        </div>
        <!-- /column -->
        <div
          class="md:w-4/12 xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:mt-0 lg:mt-0 mt-[30px]"
        >
          <div class="widget text-gray-500">
            <div class="h4 widget-title !text-white !mb-3" v-html="menu.help.contact.title" />
            <address class="xl:pr-20 xxl:!pr-28 not-italic leading-[inherit] block mb-4">
              {{ menu.help.contact.address }}
            </address>
            <a class="text-gray-200 hover:underline" target="_blank" :href="`mailto:${menu.help.contact.email}`">{{ menu.help.contact.email }}</a><br><a class="text-gray-200 hover:underline" target="_blank" :href="`tel:${menu.help.contact.phone.replace(/\s+/g, '')}`">{{ menu.help.contact.phone }}</a>
          </div>
          <!-- /.widget -->
        </div>
        <!-- /column -->
        <div
          class="md:w-4/12 xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:mt-0 lg:mt-0 mt-[30px]"
        >
          <div class="widget text-gray-500">
            <div class="h4 widget-title !text-white !mb-3 text-[1rem] !leading-[1.45]" v-html="menu.title" />
            <ul class="pl-0 list-none   !mb-0">
              <li v-for="(item, i) in menu.items" :key="i">
                <atoms-button :data="item.link" class="text-gray-200 hover:text-primary">
                  {{ item.txt }}
                </atoms-button>
              </li>
            </ul>
          </div>
          <!-- /.widget -->
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </footer>
  <div
    class="progress-wrap fixed w-[2.3rem] h-[2.3rem] cursor-pointer block shadow-[inset_0_0_0_0.1rem_rgba(128,130,134,0.25)] z-[1010] opacity-0 invisible translate-y-3 transition-all duration-[0.2s] ease-[linear,margin-right] delay-[0s] rounded-[100%] right-6 bottom-16 motion-reduce:transition-none after:absolute after:content-['\e951'] after:text-center after:leading-[2.3rem] after:text-[1.2rem] after:text-primary after:h-[2.3rem] after:w-[2.3rem] after:cursor-pointer after:block after:z-[1] after:transition-all after:duration-[0.2s] after:ease-linear after:left-0 after:top-0 motion-reduce:after:transition-none after:font-Unicons"
  >
    <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
      <path
        class="fill-none stroke-[#fab758] stroke-[4] box-border transition-all duration-[0.2s] ease-linear motion-reduce:transition-none"
        d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
      />
    </svg>
  </div>
</template>
