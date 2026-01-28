<script setup lang="ts">
interface Experience {
  id: number
  company: string
  role: string
  period: string
  logo: string
  isOpen: boolean
  tasks: string[]
}

interface Props {
  experience: Experience
  index: number
}

const props = defineProps<Props>()
const emit = defineEmits<{
  toggle: [id: number]
}>()

const { slideInLeft } = useAnimations()

const hasTask = computed(() => props.experience.tasks.length > 0)
const isExpanded = computed(() => props.experience.isOpen && hasTask.value)

const handleKeydown = (e: KeyboardEvent) => {
  if ((e.key === 'Enter' || e.key === ' ') && hasTask.value) {
    e.preventDefault()
    emit('toggle', props.experience.id)
  }
}
</script>

<template>
  <div 
    v-motion="slideInLeft(index * 100)"
    class="border-l-2 transition-colors"
    :class="isExpanded || !hasTask ? 'border-accent-500' : 'border-primary-700'"
  >
    <!-- Experience Header -->
    <div 
      @click="hasTask ? emit('toggle', experience.id) : null"
      @keydown="handleKeydown"
      class="py-4 pl-6 relative"
      :class="hasTask ? 'cursor-pointer group' : ''"
      :role="hasTask ? 'button' : undefined"
      :aria-expanded="hasTask ? isExpanded : undefined"
      :aria-controls="hasTask ? `tasks-${experience.id}` : undefined"
      :tabindex="hasTask ? 0 : undefined"
    >
      <!-- Dot indicator -->
      <div 
        class="absolute left-0 top-5 w-3 h-3 rounded-full -translate-x-[7px] transition-colors"
        :class="isExpanded || !hasTask ? 'bg-accent-500' : 'bg-primary-700 group-hover:bg-accent-400'"
        aria-hidden="true"
      />
      
      <p class="font-medium text-white">
        {{ experience.role }} @ <span class="text-accent-400">{{ experience.company }}</span>
      </p>
      <p class="text-sm text-primary-400 mt-0.5">{{ experience.period }}</p>
    </div>

    <!-- Dropdown Tasks -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 max-h-0"
      enter-to-class="opacity-100 max-h-[300px]"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 max-h-[300px]"
      leave-to-class="opacity-0 max-h-0"
    >
      <div 
        v-if="isExpanded" 
        :id="`tasks-${experience.id}`"
        class="overflow-hidden pl-6 pb-4"
        role="region"
        :aria-label="`Tasks at ${experience.company}`"
      >
        <ul class="space-y-2">
          <li 
            v-for="(task, taskIndex) in experience.tasks" 
            :key="taskIndex"
            class="text-sm text-primary-300 flex items-start gap-2"
          >
            <svg 
              class="w-4 h-4 text-accent-500 flex-shrink-0 mt-0.5" 
              fill="currentColor" 
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            {{ task }}
          </li>
        </ul>
      </div>
    </Transition>
  </div>
</template>
