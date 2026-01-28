<script setup lang="ts">
interface Certificate {
  title: string
  provider?: string
  thumb?: string
  pdf?: string
  description?: string
}

interface Props {
  certificate: Certificate
  index: number
}

const props = defineProps<Props>()
const emit = defineEmits<{
  select: [cert: Certificate]
}>()

const { fadeInUp } = useAnimations()

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault()
    emit('select', props.certificate)
  }
}
</script>

<template>
  <article 
    v-motion="fadeInUp(index * 100)"
    class="group"
  >
    <div 
      @click="emit('select', certificate)"
      @keydown="handleKeydown"
      class="bg-primary-800 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 focus:ring-offset-primary-900"
      role="button"
      tabindex="0"
      :aria-label="`View ${certificate.title} certificate`"
    >
      <div class="h-40 sm:h-48 bg-gradient-to-br from-primary-700 to-primary-900 flex items-center justify-center p-4 overflow-hidden">
        <img 
          v-if="certificate.thumb" 
          :src="certificate.thumb" 
          :alt="`${certificate.title} certificate thumbnail`"
          class="w-auto h-full object-contain group-hover:scale-105 transition-transform"
          loading="lazy"
        />
        <div v-else class="text-center">
          <div class="w-14 h-14 sm:w-16 sm:h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-3">
            <span class="text-xl sm:text-2xl" aria-hidden="true">📜</span>
          </div>
          <p class="text-white/60 text-xs">{{ certificate.provider }}</p>
        </div>
      </div>
      <div class="p-3 sm:p-4 bg-primary-800">
        <p class="text-white text-sm font-medium line-clamp-2">{{ certificate.title }}</p>
      </div>
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
