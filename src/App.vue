<template>
  <div class="grid relative">
    <div class="grid gap-4 grid-cols-1 md:grid-cols-2 h-[70px] p-[10px]">
      <div class="absolute lg:h-[auto] lg:w-[auto] md:w-[400px]">
        <img :src="imgUrl" alt="" class="hidden md:block">
      </div>
      <div class="hidden md:block"></div>
      <div class="">
        <div class="text-[30px] md:text-[70px] lg:text-[70px] text-gray-200 font-roboto font-normal">
          ATHLETS
        </div>
      </div>
    </div>
    <!-- layout 1  -->
    <div class="hidden sm:block">
      <div class="grid gap-4 grid-cols-1 md:grid-cols-2 h-[150px] md:h-[250px] items-center p-[10px]">
        <div class="hidden md:block"></div>
        <div class="">
          <div
            class="flex text-[20px] md:text-[30px] lg:text-[30px] text-gray-200 font-roboto font-normal items-center pb-[10px]">
            <div class="grid">
              <p class="pr-[5px] text-black text-[13px] underline underline-offset-4 decoration-violet-600 decoration-4">
                01</p>
            </div>
            <div>
              <p>CONNECTION</p>
            </div>
          </div>
          <div class="text-[10px] md:text-[15px] text-black font-roboto font-normal">
            Connect with coaches directly, you can ping coaches to view profile.
          </div>
        </div>
      </div>
      <div class="grid gap-4 grid-cols-1 md:grid-cols-2 h-[150px] md:h-[250px] bg-[#F5F4F9] items-center p-[10px]">
        <div class="hidden md:block"></div>
        <div class="">
          <div
            class="flex text-[20px] md:text-[30px] lg:text-[30px] text-gray-200 font-roboto font-normal items-center pb-[10px]">
            <div class="grid">
              <p class="pr-[5px] text-black text-[13px] underline underline-offset-4 decoration-violet-600 decoration-4">
                02</p>
            </div>
            <div>
              <p>COLLABORATION</p>
            </div>
          </div>
          <div class="text-[10px] md:text-[15px] text-black font-roboto font-normal">
            Work with other student athletes to  increase visability. When you share and like other players videos it will
            increase your visability as a player. This is the team work aspect to Surface 1.
          </div>
        </div>
      </div>
      <div class="grid gap-4 grid-cols-1 md:grid-cols-2 h-[150px] md:h-[250px] bg-[#5E3DB3] items-center p-[10px]">
        <div class="hidden md:block"></div>
        <div class="">
          <div
            class="flex text-[20px] md:text-[30px] lg:text-[30px] text-[#C2C2C2] font-roboto font-normal items-center pb-[10px]">
            <div class="grid">
              <p class="pr-[5px] text-black text-[13px] underline underline-offset-4 decoration-violet-600 decoration-4">
                03</p>
            </div>
            <div>
              <p>GROWTH</p>
            </div>
          </div>
          <div class="text-[10px] md:text-[15px] text-white font-roboto font-normal">
            Resources and tools for you to get better as a student Athelte.
            Access to training classes, tutor sessions, etc 
          </div>
        </div>
      </div>
    </div>
    <div class="grid w-full justify-center">
      <img :src="imgUrl" alt="" width="200" class="block md:hidden">
    </div>
    <!-- swipe 1 -->
    <van-swipe class="black md:hidden" :autoplay="3000" indicator-color="#5C3CAF">
      <van-swipe-item>
        <div class="grid gap-4 grid-cols-1 md:grid-cols-2 h-[150px] md:h-[250px] items-center p-[10px]">
          <div class="hidden md:block"></div>
          <div class="">
            <div
              class="flex text-[20px] md:text-[30px] lg:text-[30px] text-gray-200 font-roboto font-normal items-center pb-[10px]">
              <div class="grid">
                <p
                  class="pr-[5px] text-black text-[13px] underline underline-offset-4 decoration-violet-600 decoration-4">
                  01</p>
              </div>
              <div>
                <p>CONNECTION</p>
              </div>
            </div>
            <div class="text-[10px] md:text-[15px] text-black font-roboto font-normal">
              Connect with coaches directly, you can ping coaches to view profile.
            </div>
          </div>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="grid gap-4 grid-cols-1 md:grid-cols-2 h-[150px] md:h-[250px] bg-[#F5F4F9] items-center p-[10px]">
          <div class="hidden md:block"></div>
          <div class="">
            <div
              class="flex text-[20px] md:text-[30px] lg:text-[30px] text-gray-200 font-roboto font-normal items-center pb-[10px]">
              <div class="grid">
                <p
                  class="pr-[5px] text-black text-[13px] underline underline-offset-4 decoration-violet-600 decoration-4">
                  02</p>
              </div>
              <div>
                <p>COLLABORATION</p>
              </div>
            </div>
            <div class="text-[10px] md:text-[15px] text-black font-roboto font-normal">
              Work with other student athletes to  increase visability. When you share and like other players videos it
              will increase your visability as a player. This is the team work aspect to Surface 1.
            </div>
          </div>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="grid gap-4 grid-cols-1 md:grid-cols-2 h-[150px] md:h-[250px] bg-[#5E3DB3] items-center p-[10px]">
          <div class="hidden md:block"></div>
          <div class="">
            <div
              class="flex text-[20px] md:text-[30px] lg:text-[30px] text-[#C2C2C2] font-roboto font-normal items-center pb-[10px]">
              <div class="grid">
                <p
                  class="pr-[5px] text-black text-[13px] underline underline-offset-4 decoration-violet-600 decoration-4">
                  03</p>
              </div>
              <div>
                <p>GROWTH</p>
              </div>
            </div>
            <div class="text-[10px] md:text-[15px] text-white font-roboto font-normal">
              Resources and tools for you to get better as a student Athelte.
              Access to training classes, tutor sessions, etc 
            </div>
          </div>
        </div>
      </van-swipe-item>
    </van-swipe>
    <!-- Layout 2 -->
    <div class="grid gap-4 grid-cols-1 md:grid-cols-2 h-[70px] p-[10px]">
      <div class="absolute lg:h-[auto] lg:w-[auto] md:w-[400px] right-0">
        <img :src="imgUrl_1" alt="" class="hidden md:block">
      </div>
      <div class="">
        <div class="text-[30px] md:text-[70px] lg:text-[70px] text-gray-200 font-roboto font-normal">
          PLAYERS
        </div>
      </div>
      <div class="hidden md:block"></div>
    </div>
    <div class="hidden md:block">
      <div class="grid gap-4 grid-cols-1 md:grid-cols-2 h-[150px] md:h-[250px] items-center p-[10px]">
        <div class="">
          <div
            class="flex text-[20px] md:text-[30px] lg:text-[30px] text-gray-200 font-roboto font-normal items-center pb-[10px]">
            <div class="grid">
              <p class="pr-[5px] text-black text-[13px] underline underline-offset-4 decoration-violet-600 decoration-4">
                01
              </p>
            </div>
            <div>
              <p>CONNECTION</p>
            </div>
          </div>
          <div class="text-[10px] md:text-[15px] text-black font-roboto font-normal">
            Connect with talented athlete directly, you can watch their skills through video showreels directly from
            Surface
            1.
          </div>
        </div>
        <div class="hidden md:block"></div>
      </div>
      <div class="grid gap-4 grid-cols-1 md:grid-cols-2 h-[150px] md:h-[250px] bg-[#F5F4F9] items-center p-[10px]">
        <div class="">
          <div
            class="flex text-[20px] md:text-[30px] lg:text-[30px] text-gray-200 font-roboto font-normal items-center pb-[10px]">
            <div class="grid">
              <p class="pr-[5px] text-black text-[13px] underline underline-offset-4 decoration-violet-600 decoration-4">
                02
              </p>
            </div>
            <div>
              <p>COLLABORATION</p>
            </div>
          </div>
          <div class="text-[10px] md:text-[15px] text-black font-roboto font-normal">
            Work with recruiter to increase your chances of findingtalented athlete.
          </div>
        </div>
        <div class="hidden md:block"></div>
      </div>
      <div class="grid gap-4 grid-cols-1 md:grid-cols-2 h-[150px] md:h-[250px] bg-[#5E3DB3] items-center p-[10px]">
        <div class="">
          <div
            class="flex text-[20px] md:text-[30px] lg:text-[30px] text-[#C2C2C2] font-roboto font-normal items-center pb-[10px]">
            <div class="grid">
              <p class="pr-[5px] text-black text-[13px] underline underline-offset-4 decoration-violet-600 decoration-4">
                03
              </p>
            </div>
            <div>
              <p>GROWTH</p>
            </div>
          </div>
          <div class="text-[10px] md:text-[15px] text-white font-roboto font-normal">
            Save your time, recruit proper athlets for your team.
          </div>
        </div>
        <div class="hidden md:block"></div>
      </div>
    </div>
    <div class="grid w-full justify-center">
      <img :src="imgUrl_1" alt="" width="200" class="block md:hidden">
    </div>
    <!-- swipe 2 -->
    <van-swipe class="black md:hidden" :autoplay="3000" indicator-color="#5C3CAF">
      <van-swipe-item>
        <div class="grid gap-4 grid-cols-1 md:grid-cols-2 h-[150px] md:h-[250px] items-center p-[10px]">
          <div class="">
            <div
              class="flex text-[20px] md:text-[30px] lg:text-[30px] text-gray-200 font-roboto font-normal items-center pb-[10px]">
              <div class="grid">
                <p
                  class="pr-[5px] text-black text-[13px] underline underline-offset-4 decoration-violet-600 decoration-4">
                  01
                </p>
              </div>
              <div>
                <p>CONNECTION</p>
              </div>
            </div>
            <div class="text-[10px] md:text-[15px] text-black font-roboto font-normal">
              Connect with talented athlete directly, you can watch their skills through video showreels directly from
              Surface
              1.
            </div>
          </div>
          <div class="hidden md:block"></div>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="grid gap-4 grid-cols-1 md:grid-cols-2 h-[150px] md:h-[250px] bg-[#F5F4F9] items-center p-[10px]">
          <div class="">
            <div
              class="flex text-[20px] md:text-[30px] lg:text-[30px] text-gray-200 font-roboto font-normal items-center pb-[10px]">
              <div class="grid">
                <p
                  class="pr-[5px] text-black text-[13px] underline underline-offset-4 decoration-violet-600 decoration-4">
                  02
                </p>
              </div>
              <div>
                <p>COLLABORATION</p>
              </div>
            </div>
            <div class="text-[10px] md:text-[15px] text-black font-roboto font-normal">
              Work with recruiter to increase your chances of findingtalented athlete.
            </div>
          </div>
          <div class="hidden md:block"></div>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <div class="grid gap-4 grid-cols-1 md:grid-cols-2 h-[150px] md:h-[250px] bg-[#5E3DB3] items-center p-[10px]">
          <div class="">
            <div
              class="flex text-[20px] md:text-[30px] lg:text-[30px] text-[#C2C2C2] font-roboto font-normal items-center pb-[10px]">
              <div class="grid">
                <p
                  class="pr-[5px] text-black text-[13px] underline underline-offset-4 decoration-violet-600 decoration-4">
                  03
                </p>
              </div>
              <div>
                <p>GROWTH</p>
              </div>
            </div>
            <div class="text-[10px] md:text-[15px] text-white font-roboto font-normal">
              Save your time, recruit proper athlets for your team.
            </div>
          </div>
          <div class="hidden md:block"></div>
        </div>
      </van-swipe-item>
    </van-swipe>

  </div>
</template>

<script setup>
const imgUrl = new URL('./assets/graphic-desktop.png', import.meta.url).href
const imgUrl_1 = new URL('./assets/basketball.png', import.meta.url).href
</script>

<style lang="scss" ></style>