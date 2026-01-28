<script setup lang="ts">
interface Props {
  title: string
  skills: string[]
  isDark?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isDark: false
})
</script>

<template>
  <div role="group" :aria-label="`${title} skills`">
    <h3 class="text-lg font-semibold mb-4">{{ title }}</h3>
    <ul class="space-y-2" :aria-label="`List of ${title} skills`">
      <li 
        v-for="skill in skills" 
        :key="skill" 
        :class="[
          'text-sm',
          isDark ? 'text-primary-300' : 'text-primary-600'
        ]"
      >
        {{ skill }}
      </li>
    </ul>
  </div>
</template>
