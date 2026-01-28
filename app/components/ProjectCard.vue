<script setup lang="ts">
interface Project {
  title: string
  category: string
  date: string
  description: string
  image?: string
}

interface Props {
  project: Project
  index: number
}

const props = defineProps<Props>()
const { fadeInUp } = useAnimations()
</script>

<template>
  <article 
    v-motion="fadeInUp(index * 100)"
    class="group"
  >
    <div class="card-beige p-4 sm:p-6 h-full transition-all duration-300 hover:shadow-card focus-within:ring-2 focus-within:ring-accent-500 focus-within:ring-offset-2 rounded-2xl">
      <!-- Project Image -->
      <div class="project-image h-40 sm:h-48 lg:h-56 mb-4 sm:mb-6 bg-white rounded-xl overflow-hidden">
        <img
          v-if="project.image"
          :src="project.image"
          :alt="`${project.title} project screenshot`"
          class="w-full h-full object-cover"
          loading="lazy"
        />
        <div v-else class="w-full h-full bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center">
          <div class="text-center p-4">
            <div class="text-3xl sm:text-4xl mb-2" aria-hidden="true">🖼️</div>
            <p class="text-xs text-primary-400">{{ project.title }}</p>
          </div>
        </div>
      </div>
      
      <!-- Project Info -->
      <h3 class="text-lg sm:text-xl font-heading font-semibold mb-1">{{ project.title }}</h3>
      <p class="text-sm text-primary-600 font-medium mb-1">{{ project.category }}</p>
      <p class="text-xs text-primary-400 mb-3 sm:mb-4">
        <time>{{ project.date }}</time>
      </p>
      <p class="text-sm text-primary-500 line-clamp-2">{{ project.description }}</p>
    </div>
  </article>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
