<script setup>
//TODO: SET UP INTERNAL AND EXTEERNAL LINKS DIFFERENCES AND ADD SCROLL TO FUNCTIONALITY
const props = defineProps({
  content: {
    type: String,
    default: "content"
  },
  link: {
    type: String,
    default: '#'
  }
});
</script>
<template>
  <a class=" w-fit button font-header text-xl  px-8 border-solid border-3 transform transition-all duration-200 ease-in-out hover:-translate-y-0.5 opacity-85 hover:opacity-100"
    :href="props.link">{{ props.content
    }}</a>
</template>
<style lang="css">
.button {
  border-image: url("/button-outline.svg") 4 stretch;
}
</style>
