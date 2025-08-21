<script setup>
const props = defineProps({
  header: {
    type: String,
    default: "content"
  },
  content: {
    type: String,
    default: '#'
  },
  icons: {
    type: Array,
  }
});
console.log(props.icons)
</script> >
<template>
  <div class="mb-6">
    <div class="flex items-center justify-between gap-2 pb-2">
      <h2 class="font-header text-xl md:text-2xl ">{{ header }}</h2>
      <ul class="flex">
        <li class="border-b-accent border-b" v-for="icon in props.icons">
          <font-awesome-icon class="text-xl text-text stroke-orange-50" :icon="icon" />
        </li>
      </ul>
    </div>
    <slot></slot>
  </div>
</template>
