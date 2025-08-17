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
    class="container relative border-2 border-accent py-8 pl-14 pr-8 bg-gray-300/20 backdrop-blur-sm rounded-md m-auto">
    <slot></slot>
    <ul class="min-h-4 w-full absolute bottom-0 left-0 bg-accent text-right ">
      <li v-for="item in footerItems">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
