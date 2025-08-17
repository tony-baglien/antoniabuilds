<script setup>
</script>
<template>
  <div class="wrapper flex flex-col  items-center justify-start border-4 text-center px-1 py-2 ">
    <slot></slot>
  </div>
</template>
<style lang="css">
.wrapper {
  border-image: url("/button-outline.svg") 4 stretch;
}
</style>
