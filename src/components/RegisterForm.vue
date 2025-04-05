<script setup></script>
<template>
  <form action="" class="flex flex-col w-[100%] text-[16px]">
    <div class="flex flex-col items-center">
      <h1 class="text-white text-center text-[20px] font-bold">Регистрация</h1>
      <div class="flex flex-col items-center w-[100%] gap-[15px]">
        <input
          type="email"
          placeholder="Email*"
          class="h-[40px] placeholder-white focus:outline-none border-b w-[80%] border-white pb-[9px] text-white max-w-[500px]"
          required
        />
        <input
          required
          type="password"
          placeholder="Password*"
          class="h-[40px] placeholder-white focus:outline-none border-b w-[80%] border-white pb-[9px] text-white max-w-[500px]"
        />
        <input
          required
          type="password"
          placeholder="Подтвердите пароль"
          class="h-[40px] placeholder-white focus:outline-none border-b w-[80%] border-white pb-[9px] text-white max-w-[500px]"
        />
      </div>
    </div>

    <div class="w-[100%] flex justify-center">
      <button
        type="submit"
        class="max-w-[500px] flex justify-center items-center text-black h-[52px] relative top-[30px] border-[1px] border-white text-[16px] bg-[white] w-[80%]"
      >
        Зарегистрироваться
      </button>
    </div>
  </form>
</template>
