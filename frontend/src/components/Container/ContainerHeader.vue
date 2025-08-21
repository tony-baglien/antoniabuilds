<script setup>
const props = defineProps({
  header: {
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
  <header class="mb-8">
    <div class="flex gap-4 flex-col sm:flex-row font-header text-2xl md:text-4xl pb-4">
      <h2>{{ header }}</h2>
      <a :href="props.link"
        class=" transform transition-all duration-200 ease-in-out hover:-translate-y-0.5 opacity-85 hover:opacity-100">
        <font-awesome-icon :icon="['fab', 'github']" />
      </a>
    </div>
    <p class="font-body lg:ml-6">
      This portfolio website represents my complete development process from initial wireframing through final
      deployment.
      Built with Vue.js and featuring a modern glassmorphism design, it showcases both my technical skills and design
      thinking.
    </p>
  </header>
</template>
