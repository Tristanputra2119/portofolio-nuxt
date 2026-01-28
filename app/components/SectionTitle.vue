<script setup lang="ts">
interface Props {
  title: string
  id?: string
}

const props = defineProps<Props>()
const { fadeInUp } = useAnimations()
</script>

<template>
  <h2 
    :id="props.id"
    v-motion="fadeInUp()"
    class="text-3xl lg:text-4xl font-heading font-bold mb-8 lg:mb-12"
  >
    {{ props.title }}<span class="text-accent-500" aria-hidden="true">.</span>
  </h2>
</template>
