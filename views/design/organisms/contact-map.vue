<script lang="ts" setup>
const props = defineProps({
  data: Object,
});
</script>

<template>
  <section class="wrapper !bg-[#ffffff]   relative border-0 upper-end before:top-[-4rem] before:border-l-transparent before:border-r-[100vw] before:border-t-[4rem] before:border-[#fefefe] before:content-[''] before:block before:absolute before:z-0 before:border-y-transparent before:border-0 before:border-solid before:right-0">
    <div class="container pb-12">
      <div class="flex flex-wrap mx-[-15px] !mb-[4.5rem] md:!mb-24">
        <div class="xl:w-10/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
          <div class="card">
            <div class="flex flex-wrap mx-0">
              <div class="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] max-w-full !self-stretch">
                <div class="map map-full rounded-t-[0.4rem] rounded-lg-start h-full min-h-[15rem]">
                  <iframe :src="data?.mapIframeSrc" style="width:100%; height: 100%; border:0" allowfullscreen></iframe>
                </div>
              </div>
              <div class="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] max-w-full">
                <div class="p-10 xl:!p-[4.5rem] lg:!p-[4.5rem] md:!p-12">
                  <div v-for="(detail, index) in data?.contactDetails" :key="index" class="flex flex-row mb-4" :class="{'mb-0': index === data?.contactDetails?.length - 1}">
                    <div>
                      <div class="icon !mr-4">
                        <mk-icon class="text-[14px] text-primary">{{ detail.icon }}</mk-icon>
                      </div>
                    </div>
                    <div class="!self-start !justify-start">
                      <h5 class="!mb-1">{{ detail.title }}</h5>
                      <address v-if="typeof detail.value === 'string'" class=" not-italic leading-[inherit] mb-0">{{ detail.value }}</address>
                      <div v-else-if="Array.isArray(detail.value)">
                        <p v-for="(item, i) in detail.value" :key="i" class="!mb-0">
                          <a v-if="item?.href" :href="item.href" class="text-[#60697b]">{{ item.text }}</a>
                          <span v-else>{{ item }}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap mx-[-15px]">
        <div class="xl:w-8/12 xl:!ml-[16.66666667%] lg:w-10/12 lg:!ml-[8.33333333%] w-full flex-[0_0_auto] px-[15px] max-w-full">
          <h2 class="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] leading-[1.3] mb-3 !text-center" v-html="data.title"></h2>
          <p class="lead leading-[1.65] text-[0.9rem] font-medium !text-center mb-10" v-html="data.txt"></p>
          <form class="contact-form needs-validation" method="post" action="./assets/php/contact.php" novalidate>
            <div class="messages"></div>
            <div class="flex flex-wrap mx-[-10px]">
              <div class="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                <div class="form-floating relative !mb-4">
                  <input id="form_name" type="text" name="name" class=" form-control   relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:bg-[rgba(255,255,255,.03)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25]" placeholder="Jane" required>
                  <label for="form_name" class="text-[#959ca9] mb-2 inline-block text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope">First Name *</label>
                  <div class="valid-feedback"> Looks good! </div>
                  <div class="invalid-feedback"> Please enter your first name. </div>
                </div>
              </div>
              <div class="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                <div class="form-floating relative !mb-4">
                  <input id="form_lastname" type="text" name="surname" class=" form-control   relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:bg-[rgba(255,255,255,.03)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25]" placeholder="Doe" required>
                  <label for="form_lastname" class="text-[#959ca9] mb-2 inline-block text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope">Last Name *</label>
                  <div class="valid-feedback"> Looks good! </div>
                  <div class="invalid-feedback"> Please enter your last name. </div>
                </div>
              </div>
              <div class="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                <div class="form-floating relative !mb-4">
                  <input id="form_email" type="email" name="email" class=" form-control   relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:bg-[rgba(255,255,255,.03)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25]" placeholder="jane.doe@example.com" required>
                  <label for="form_email" class="text-[#959ca9] mb-2 inline-block text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope">Email *</label>
                  <div class="valid-feedback"> Looks good! </div>
                  <div class="invalid-feedback"> Please provide a valid email address. </div>
                </div>
              </div>
              <div class="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                <div class="form-select-wrapper mb-4">
                  <select class="form-select" id="form-select" name="department" required>
                    <option selected disabled value="">Select a department</option>
                    <option value="Sales">Sales</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Customer Support">Customer Support</option>
                  </select>
                  <div class="valid-feedback"> Looks good! </div>
                  <div class="invalid-feedback"> Please select a department. </div>
                </div>
              </div>
              <div class="w-full flex-[0_0_auto] px-[15px] max-w-full">
                <div class="form-floating relative !mb-4">
                  <textarea id="form_message" name="message" class=" form-control   relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:bg-[rgba(255,255,255,.03)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25]" placeholder="Your message" style="height: 150px" required></textarea>
                  <label for="form_message" class="text-[#959ca9] mb-2 inline-block text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope">Message *</label>
                  <div class="valid-feedback"> Looks good! </div>
                  <div class="invalid-feedback"> Please enter your messsage. </div>
                </div>
              </div>
              <div class="w-full flex-[0_0_auto] px-[15px] max-w-full !text-center">
                <atoms-button
                  class="btn btn-yellow !bg-primary m-[0_.7rem_0_0] transition-all duration-[0.2s] ease-in-out translate-y-0 hover:translate-y-[-0.15rem]"
                  :data="{link: '#'}">
                  Send message
                </atoms-button>
                <p class="text-[#aab0bc]"><strong>*</strong> These fields are required.</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>