<template>
  <main class="m-h-[100vh] w-[100%] h-[100%] bg-[#343740] flex justify-center flex-col items-center">
  <div class="w-[60%] h-[100px] flex flex-row items-center">
    <button class="text-white flex flex-row gap-[10px]">
      <p class="text-[30px]">Категории</p>
      <span class="flex justify-center items-center">
        <img :src="DropDownIcon" class="w-[30px]" alt="DropDownIcon">
      </span>
    </button>
  </div>

  <div class="products grid gap-y-[30px] grid-cols-1 md:grid-cols-2  md:gap-x-[100px] lg:grid-cols-3">
    <div class="w-[100%]  card grid gap-[10px] w-[250px] sm:w-[450px]  md:w-[300px]  lg:w-[250px] " v-for="card in products" :key="card.id">
      <div class="card-image   w-[100%]" >
        <img :src="card.images[0]" class="bg-cover bg-center w-[100%] h-[100%] rounded-[15px]" alt="">
      </div>
      <div class="card-discription w-[100%] flex flex-row justify-between">
        <div class="card-text text-white">
          <div class="card-name">
            <h2>{{card.name}}</h2>
          </div>
          <div class="card-price">
            <h3>{{ `${card.price}тг`}}</h3>
          </div>
        </div>
        <div class="card-button w-[40px]">
          <button class="favourite-button">
            <img :src="heartIcon" class="w-[30px]" alt="heart button">
          </button>
        </div>
      </div>
    </div>

  </div>
  <nav class="bottom-nav bg-white w-[100%] h-[80px] fixed bottom-[0] flex flex-row justify-around items-center px-[20px]">

    <router-link to="" aria-label=""> <i class="icon-home" >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7" >
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>

    </i> </router-link>
    <router-link to="" aria-label=""> <i class="icon-search" >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>

    </i> </router-link>
    <router-link to="" aria-label=""> <i class="icon-cart" >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>

    </i> </router-link>
    <router-link to="" aria-label=""> <i class="icon-cart" >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>

    </i> </router-link>
    <router-link to="" aria-label=""> <i class="icon-user" >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>

    </i> </router-link>
  </nav>
  </main>
</template>

<style scoped>
@media screen and (min-width: 1400px) {
    .products{
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }
  }
</style>

<script setup>
import { onMounted, ref } from 'vue'
import DropDownIcon from '@/components/icons/arrow-down.png';
import heartIcon from '@/components/icons/heart.png'

  const products = ref([]);
  const fetchProducts = async () =>  {
    const response = await fetch('https://67ca14a7102d684575c46d34.mockapi.io/api/products')
    const data = await response.json()
    products.value = data;
  }

  onMounted(()=>{
    fetchProducts();
  })

</script>
