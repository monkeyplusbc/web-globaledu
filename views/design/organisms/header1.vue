<script lang="ts" setup>
const { cms } = useContext();
const { lang } = useLocale();
const { shared } = useSharedContext();
const { logos, menu, networks } = cms.$settings.common;
</script>

<template>
  <header class="relative wrapper !bg-gray-100">
    <nav class="navbar navbar-expand-lg center-nav transparent navbar-light">
      <div class="container xl:flex-row lg:flex-row !flex-nowrap items-center">
        <div class="navbar-brand w-full">
          <mk-link to="home1">
            <mk-picture :src="logos.logoDark.src" :alt="logos.logoDark.alt" :title="logos.logoDark.title" />
          </mk-link>
        </div>
        <div class="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
          <div class="offcanvas-header xl:hidden lg:hidden flex items-center justify-between flex-row p-6">
            <div class="!mb-0">
              <mk-picture :src="logos.logoLight.src" :alt="logos.logoLight.alt" :title="logos.logoLight.title" />
            </div>
            <button
              type="button"
              class="btn-close btn-close-white mr-[-0.75rem] m-0 p-0 leading-none text-[#343f52] transition-all duration-[0.2s] ease-in-out border-0 motion-reduce:transition-none before:text-[1.05rem] before:content-['\ed3b'] before:w-[1.8rem] before:h-[1.8rem] before:leading-[1.8rem] before:shadow-none before:transition-[background] before:duration-[0.2s] before:ease-in-out before:flex before:justify-center before:items-center before:m-0 before:p-0 before:rounded-[100%] hover:no-underline bg-inherit before:bg-[rgba(255,255,255,.08)] before:font-Unicons hover:before:bg-[rgba(0,0,0,.11)] focus:outline-0"
              data-bs-dismiss="offcanvas" aria-label="Close"
            />
          </div>
          <div class="offcanvas-body xl:!ml-auto lg:!ml-auto flex  flex-col !h-full">
            <ul class="navbar-nav">
              <template v-for="(item, i) in menu.items" :key="i">
                <li v-if="item.header" class="nav-item dropdown dropdown">
                  <atoms-button
                    :data="item.link" class="nav-link !text-[.85rem] !tracking-[normal]"
                    :data-bs-toggle="{ dropdown: Array.isArray(submenu) && item.submenu.length > 0 }"
                    :class="{ 'dropdown-toggle': Array.isArray(item.submenu) && item.submenu.length > 0 }"
                  >
                    {{ item.txt }}
                  </atoms-button>
                  <ul v-if="Array.isArray(item.submenu) && item.submenu.length > 0" class="dropdown-menu">
                    <li v-for="(subitem, j) in item.submenu" :key="j" class="dropdown dropdown-submenu dropend">
                      <atoms-button
                        :data="subitem.link" class="dropdown-item hover:!text-primary"
                        :data-bs-toggle="{ dropdown: Array.isArray(submenu) && item.submenu.length > 0 }"
                        :class="{ 'dropdown-toggle': Array.isArray(subitem?.submenu) && subitem?.submenu.length > 0 }"
                      >
                        {{ subitem.txt }}
                      </atoms-button>
                      <ul v-if="Array.isArray(subitem?.submenu) && subitem?.submenu.length > 0" class="dropdown-menu">
                        <li v-for="(infraitem, l) in subitem?.submenu" :key="l" class="nav-item">
                          <atoms-button :data="infraitem.link" class="dropdown-item hover:!text-primary">
                            {{ infraitem.txt }}
                          </atoms-button>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </template>
            </ul>
            <div class="offcanvas-footer xl:hidden lg:hidden">
              <div>
                <a class="text-[#cacaca] hover:!text-[#fab758]" :href="`mailto:${menu.help.contact.email}`">{{
                  menu.help.contact.email }}</a><br>
                <a
                  class="text-[#cacaca] hover:!text-[#fab758]"
                  :href="`tel:${menu.help.contact.phone.replace(/\s+/g, '')}`"
                >{{
                  menu.help.contact.phone }}</a>
                <nav class="nav social social-white mt-4">
                  <atoms-button
                    v-for="(item, i) in networks.items" :key="i"
                    class="text-[#cacaca] text-[0.7rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
                  >
                    <mk-icon>{{ item.icon }}</mk-icon>
                  </atoms-button>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div class="navbar-other w-full !flex !ml-auto">
          <ul class="navbar-nav !flex-row !items-center !ml-auto">
            <li v-if="menu.languajes.active" id="lang" class="nav-item dropdown language-select uppercase group">
              <div
                class="nav-link dropdown-item dropdown-toggle after:!text-[#fab758] xl:!text-[.85rem] lg:!text-[.85rem] md:!text-[1.05rem] sm:!text-[1.05rem] xsm:!text-[1.05rem] hover:!text-[#fab758]"
                role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
              >
                {{ lang }}
              </div>
              <ul class="dropdown-menu group-hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]">
                <li v-for="(item, i) in menu.languajes.items" :key="i" class="nav-item">
                  <atoms-button
                    class="dropdown-item hover:!text-[#fab758] hover:bg-[inherit] focus:text-[#3f78e0] focus:bg-[inherit]"
                    :@click="`changeLang('${item.link.url}','${item}','${shared.pageLangs?.[item] || ''}')`"
                  >
                    {{ item.txt }}
                  </atoms-button>
                </li>
              </ul>
            </li>
            <li v-if="menu.help.active" class="nav-item">
              <a
                class="nav-link hover:!text-[#fab758]" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvas-info"
              ><mk-icon>{{
                menu.help.icon }}</mk-icon></a>
            </li>
            <li class="nav-item xl:hidden lg:hidden">
              <button class="hamburger offcanvas-nav-btn">
                <span />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div
      v-if="menu.help.active" id="offcanvas-info"
      class="offcanvas offcanvas-end text-inverse !text-[#cacaca] opacity-100" data-bs-scroll="true"
    >
      <div class="offcanvas-header flex flex-row items-center justify-between p-[1.5rem]">
        <div class="h3 !text-white xl:!text-[1.5rem] text-[calc(1.275rem_+_0.3vw)] !leading-[1.4] mb-0">
          <mk-picture :src="logos.logoLight.src" :alt="logos.logoLight.alt" :title="logos.logoLight.title" />
        </div>
        <button
          type="button" class="btn-close btn-close-white mr-[-0.5rem] m-0 p-0" data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
      </div>
      <div class="offcanvas-body !pb-[1.5rem]">
        <div class="widget mb-8">
          <p>
            {{ menu.help.txt }}
          </p>
        </div>
        <div class="widget mb-8">
          <div class="h4 widget-title !text-white mb-[0.75rem] !text-[1rem] !leading-[1.45]">
            {{ menu.help.contact.title }}
          </div>
          <address class=" not-italic leading-[inherit] mb-[1rem]">
            {{ menu.help.contact.address }}
          </address>
          <a class="text-[#cacaca] hover:!text-[#fab758]" :href="`mailto:${menu.help.contact.email}`">{{
            menu.help.contact.email }}</a><br>
          <a
            class="text-[#cacaca] hover:!text-[#fab758]"
            :href="`tel:${menu.help.contact.phone.replace(/\s+/g, '')}`"
          >{{
            menu.help.contact.phone }}</a>
        </div>
        <div class="widget mb-8">
          <div class="h4 widget-title !text-white mb-[0.75rem] !text-[1rem] !leading-[1.45]">
            {{ menu.help.terms.title }}
          </div>
          <ul class="list-unstyled pl-0">
            <li v-for="(item, i) in menu.help.terms.items" :key="i" ::class="{ 'mt-[.35rem]': i !== 0 }">
              <atoms-button class="text-[#cacaca] hover:!text-[#fab758]">
                {{ item.txt }}
              </atoms-button>
            </li>
          </ul>
        </div>
        <div class="widget">
          <div class="h4 widget-title !text-white mb-[0.75rem] !text-[1rem] !leading-[1.45]">
            {{ networks.title }}
          </div>
          <nav class="nav social social-white">
            <atoms-button
              v-for="(item, i) in networks.items" :key="i"
              class="text-[#cacaca] text-[0.7rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
            >
              <mk-icon>{{ item.icon }}</mk-icon>
            </atoms-button>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>
