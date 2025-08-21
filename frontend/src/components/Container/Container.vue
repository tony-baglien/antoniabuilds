<script setup>
//TODO: Add container logic for the cards. 
const props = defineProps({
  footerItems: {
    type: String,
  }
})
</script>
<template>
  <div
    class="w-full container relative border-2 border-accent border-x-transparent sm:border-x-accent py-8 px-4 sm:px-8 lg:pl-14 lg:pr-8 sm:bg-gray-300/20 sm:backdrop-blur-sm rounded-md m-auto">
    <slot></slot>
    <ul class="min-h-4 w-full absolute bottom-0 left-0 bg-accent text-right ">
      <li v-for="item in footerItems">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
