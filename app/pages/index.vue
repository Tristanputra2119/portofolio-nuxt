<script setup lang="ts">
// Import portfolio data composable
const { fetchAllData } = usePortfolioData()

// Real-time clock
const currentTime = ref('')
const updateTime = () => {
  const now = new Date()
  currentTime.value = now.toLocaleTimeString('id-ID', { 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit',
    hour12: false,
    timeZone: 'Asia/Singapore'
  })
}

onMounted(() => {
  updateTime()
  setInterval(updateTime, 1000)
})

// Default/fallback data
const defaultHero = {
  greeting: "Hey, I'm Tristan 👋",
  title: 'WebSite Developer',
  description: "I'm a Website developer based in Denpasar, I'll help you build beautiful systems your users will love."
}

const defaultExperiences = [
  { 
    id: 1,
    company: 'Ruang Berkarya Teknologi', 
    role: 'Internship', 
    period: 'December 2022 - February 2023', 
    logo: 'R',
    isOpen: false,
    tasks: [
      'Assigned to create a website called Jinus, an internet service provider, using Laravel and Bootstrap.',
      'Managed all repository tasks with GitLab.',
      'Added new features to the Content Management System.'
    ]
  },
  { 
    id: 2,
    company: 'Taksu Tech', 
    role: 'Internship', 
    period: 'June 2023 - September 2023', 
    logo: 'T',
    isOpen: false,
    tasks: []
  },
  { 
    id: 3,
    company: 'Recovdot', 
    role: 'Web Developer', 
    period: 'September 2024 - Present', 
    logo: 'R',
    isOpen: false,
    tasks: []
  },
]

const defaultSkills = {
  webDesign: ['UI/UX Design', 'Responsive Design', 'Wireframing', 'User Research'],
  frontend: ['JavaScript', 'ReactJS', 'NextJS', 'CSS3'],
  backend: ['Node.js', 'MongoDB', 'Laravel', 'Vercel', 'MySQL'],
  softSkills: ['Effective communication', 'Collaboration', 'Commitment', 'Leadership']
}

const defaultProjects = [
  {
    title: 'Sound of Harmony',
    category: 'Playlist Dashboard',
    date: 'August 2023',
    description: 'The magic of music like never before. Dive into a world where rhythm guides your journey.',
  },
  {
    title: 'Marketplace Digital PrimaStore',
    category: 'E-Commerce Platform',
    date: 'January 2024',
    description: 'A modern digital marketplace platform to add products, process payments, and view sales reports. Using Nextjs, Tailwind CSS, and Prisma.',
  },
  {
    title: 'Jinus ISP',
    category: 'Internet Service Provider Website',
    date: 'February 2023',
    description: 'Company website for Jinus, an internet service provider. Built with Laravel and Bootstrap during internship.',
  },
  {
    title: 'Recovdot Portfolio',
    category: 'Company Website',
    date: 'September 2024',
    description: 'Modern company website showcasing services and portfolio for Recovdot tech company.',
  },
]

const defaultStats = [
  { value: '5+', label: 'Projects finished' },
  { value: '3+', label: 'Website Developed' },
  { value: '10+', label: 'Happy Clients' },
  { value: '2+', label: 'Years experience' },
]

const defaultCertificates = [
  { title: 'AWS Cloud Practitioner Essentials', provider: 'Dicoding' },
  { title: 'Getting Started with Programming Basics', provider: 'Dicoding' },
  { title: 'Backend JavaScript Fundamentals', provider: 'Dicoding' },
  { title: 'Google Coursera: IT Support Professional', provider: 'Google' },
  { title: 'BNSP Junior Developer', provider: 'BNSP' },
]

const defaultTestimonials = [
  {
    quote: "Tristan has an incredible knack for capturing brand essence through design. Our website now reflects our identity perfectly, thanks to his skillful work. Highly recommended!",
    author: 'Michael Chen',
    role: 'Founder',
    company: 'Innovate Labs'
  }
]

const defaultMyStory = [
  "Hi, I'm Tristan Putra, a passionate software engineer with a love for crafting elegant solutions. My journey began in high school, where I discovered my fascination with coding and technology.",
  "Over the years, I've honed my skills in various programming languages and frameworks, always striving to stay updated with the latest industry trends. My experience spans across web development, application design, and system architecture.",
  "I believe in the power of collaboration and continuous learning. Each project I undertake is an opportunity to grow and innovate. When I'm not coding, you can find me exploring new technologies or sharing my knowledge with others."
]

const defaultContact = {
  email: 'tristan@example.com'
}

// Reactive data - will be populated from Strapi or fallback to defaults
const hero = ref(defaultHero)
const experiences = ref(defaultExperiences)
const skills = ref(defaultSkills)
const projects = ref(defaultProjects)
const stats = ref(defaultStats)
const certificates = ref(defaultCertificates)
const testimonials = ref(defaultTestimonials)
const myStory = ref(defaultMyStory)
const contact = ref(defaultContact)

// Computed for hero description
const heroDescription = computed(() => hero.value.description)

// Fetch data from Nuxt Content on mount
onMounted(async () => {
  try {
    const data = await fetchAllData()
    
    // Update with content data if available
    if (data.hero) {
      hero.value = {
        greeting: data.hero.greeting || defaultHero.greeting,
        title: data.hero.title || defaultHero.title,
        description: data.hero.description || defaultHero.description
      }
    }
    if (data.experiences && data.experiences.length > 0) {
      experiences.value = data.experiences
    }
    if (data.skills) {
      skills.value = {
        webDesign: data.skills.webDesign || defaultSkills.webDesign,
        frontend: data.skills.frontend || defaultSkills.frontend,
        backend: data.skills.backend || defaultSkills.backend,
        softSkills: data.skills.softSkills || defaultSkills.softSkills
      }
    }
    if (data.projects && data.projects.length > 0) {
      projects.value = data.projects
    }
    if (data.stats && data.stats.length > 0) {
      stats.value = data.stats
    }
    if (data.certificates && data.certificates.length > 0) {
      certificates.value = data.certificates
    }
    if (data.testimonials && data.testimonials.length > 0) {
      testimonials.value = data.testimonials
    }
    if (data.myStory?.paragraphs && data.myStory.paragraphs.length > 0) {
      myStory.value = data.myStory.paragraphs
    }
    if (data.contact?.email) {
      contact.value = { email: data.contact.email }
    }
  } catch (error) {
    console.warn('Failed to fetch data from content, using default data:', error)
  }
})

// Services/Skills data with related projects
const services = ref([
  {
    id: 1,
    title: 'Full pages Website design',
    description: 'Crafting immersive and engaging full-page website designs that captivate audiences and deliver a seamless user experience',
    icon: '💻',
    isOpen: false,
    projects: [
      { title: 'Sound of Harmony', category: 'Music Streaming Platform' },
      { title: 'PrimaStore', category: 'Digital Marketplace' },
    ]
  },
  {
    id: 2,
    title: 'Company website design',
    description: 'Transform your online presence with our sleek and modern company website design',
    icon: '🏢',
    isOpen: false,
    projects: [
      { title: 'Jinus', category: 'Internet Service Provider' },
      { title: 'Recovdot', category: 'Tech Company' },
    ]
  },
])

// Toggle experience dropdown
const toggleExperience = (expId: number) => {
  experiences.value = experiences.value.map(exp => ({
    ...exp,
    isOpen: exp.id === expId ? !exp.isOpen : exp.isOpen
  }))
}

// Toggle service dropdown
const toggleService = (serviceId: number) => {
  services.value = services.value.map(service => ({
    ...service,
    isOpen: service.id === serviceId ? !service.isOpen : false
  }))
}

// Animation presets
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  visibleOnce: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 600, ease: 'easeOut' }
  }
}

const slideInLeft = {
  initial: { opacity: 0, x: -30 },
  visibleOnce: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 600, ease: 'easeOut' }
  }
}

const slideInRight = {
  initial: { opacity: 0, x: 30 },
  visibleOnce: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 600, ease: 'easeOut' }
  }
}

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  visibleOnce: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 500, ease: 'easeOut' }
  }
}
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="section pt-24 lg:pt-32 min-h-[80vh] flex items-center">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <!-- Left side -->
          <div>
            <!-- Greeting -->
            <p 
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
              class="text-lg text-primary-600 mb-4"
            >
              Hey, I'm Tristan 👋
            </p>
            
            <h1 
              v-motion
              :initial="{ opacity: 0, y: 40 }"
              :visible-once="{ opacity: 1, y: 0, transition: { duration: 700, delay: 100 } }"
              class="text-4xl lg:text-6xl xl:text-7xl font-heading font-semibold leading-[1.1] mb-8 tracking-tight"
            >
              <span class="text-accent-500">Web</span>Site
              <br />Developer
            </h1>
            
            <p 
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 200 } }"
              class="text-primary-500 text-base lg:text-lg mb-8 max-w-md"
            >
              {{ heroDescription }}
            </p>
            
            <div 
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 300 } }"
              class="flex flex-wrap items-center gap-4"
            >
              <NuxtLink href="#contact" class="btn btn-primary group">
                <span>Get In Touch</span>
                <svg class="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </NuxtLink>
              <NuxtLink href="#projects" class="btn btn-outline group">
                <span>Browse Projects</span>
              </NuxtLink>
            </div>
          </div>
          
          <!-- Right side - Profile Image -->
          <div 
            v-motion
            :initial="{ opacity: 0, scale: 0.9 }"
            :visible-once="{ opacity: 1, scale: 1, transition: { duration: 600, delay: 200 } }"
            class="flex justify-center lg:justify-end"
          >
            <div class="relative">
              <div class="w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 overflow-hidden border-4 border-white shadow-xl">
                <div class="w-full h-full bg-gradient-to-br from-primary-200 to-primary-300 flex items-center justify-center">
                  <span class="text-6xl lg:text-8xl font-bold text-primary-400/50">T</span>
                </div>
              </div>
              <!-- Label -->
              <div class="absolute bottom-4 left-1/2 -translate-x-1/2 bg-primary-900 text-white px-4 py-1 rounded-full text-sm font-medium">
                TRISTAN
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="section bg-white">
      <div class="container-custom">
        <h2 
          v-motion v-bind="fadeInUp"
          class="text-3xl lg:text-4xl font-heading font-bold mb-12"
        >
          Projects<span class="text-accent-500">.</span>
        </h2>
        
        <div class="grid md:grid-cols-2 gap-8">
          <div 
            v-for="(project, index) in projects" 
            :key="project.title"
            v-motion
            :initial="{ opacity: 0, y: 40 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: index * 100 } }"
            class="group"
          >
            <div class="card-beige p-6 h-full transition-all duration-300 hover:shadow-card">
              <!-- Project Image -->
              <div class="project-image h-48 lg:h-56 mb-6 bg-white rounded-xl overflow-hidden">
                <div class="w-full h-full bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center">
                  <div class="text-center p-4">
                    <div class="text-4xl mb-2">🖼️</div>
                    <p class="text-xs text-primary-400">{{ project.title }}</p>
                  </div>
                </div>
              </div>
              
              <!-- Project Info -->
              <h3 class="text-xl font-heading font-semibold mb-1">{{ project.title }}</h3>
              <p class="text-sm text-primary-600 font-medium mb-1">{{ project.category }}</p>
              <p class="text-xs text-primary-400 mb-4">{{ project.date }}</p>
              <p class="text-sm text-primary-500 line-clamp-2">{{ project.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience & Skills Section -->
    <section id="about" class="section bg-primary-900 text-white">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <!-- Working Experience -->
          <div v-motion v-bind="slideInLeft">
            <h2 class="text-3xl lg:text-4xl font-heading font-bold mb-8">
              Experience<span class="text-accent-500">.</span>
            </h2>
            <div class="space-y-0">
              <div 
                v-for="(exp, index) in experiences" 
                :key="exp.id"
                v-motion
                :initial="{ opacity: 0, x: -20 }"
                :visible-once="{ opacity: 1, x: 0, transition: { duration: 400, delay: index * 100 } }"
                class="border-l-2 transition-colors"
                :class="exp.isOpen || exp.tasks.length === 0 ? 'border-accent-500' : 'border-primary-700'"
              >
                <!-- Experience Header - Clickable -->
                <div 
                  @click="exp.tasks.length > 0 ? toggleExperience(exp.id) : null"
                  class="py-4 pl-6 relative"
                  :class="exp.tasks.length > 0 ? 'cursor-pointer group' : ''"
                >
                  <!-- Dot indicator -->
                  <div 
                    class="absolute left-0 top-5 w-3 h-3 rounded-full -translate-x-[7px] transition-colors"
                    :class="exp.isOpen || exp.tasks.length === 0 ? 'bg-accent-500' : 'bg-primary-700 group-hover:bg-accent-400'"
                  ></div>
                  
                  <p class="font-medium text-white">
                    {{ exp.role }} @ <span class="text-accent-400">{{ exp.company }}</span>
                  </p>
                  <p class="text-sm text-primary-400 mt-0.5">{{ exp.period }}</p>
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
                  <div v-if="exp.isOpen && exp.tasks.length > 0" class="overflow-hidden pl-6 pb-4">
                    <ul class="space-y-2">
                      <li 
                        v-for="(task, taskIndex) in exp.tasks" 
                        :key="taskIndex"
                        class="text-sm text-primary-300 flex items-start gap-2"
                      >
                        <svg class="w-4 h-4 text-accent-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        {{ task }}
                      </li>
                    </ul>
                  </div>
                </Transition>
              </div>
            </div>
          </div>
          
          <!-- Skills -->
          <div v-motion v-bind="slideInRight">
            <h2 class="text-3xl lg:text-4xl font-heading font-bold mb-8">
              Skills<span class="text-accent-500">.</span>
            </h2>
            <div class="grid grid-cols-2 gap-8">
              <!-- Web Design -->
              <div>
                <h3 class="text-lg font-semibold mb-4">Web Design</h3>
                <ul class="space-y-2">
                  <li v-for="skill in skills.webDesign" :key="skill" class="text-primary-300 text-sm">
                    {{ skill }}
                  </li>
                </ul>
              </div>
              
              <!-- Frontend -->
              <div>
                <h3 class="text-lg font-semibold mb-4">Frontend</h3>
                <ul class="space-y-2">
                  <li v-for="skill in skills.frontend" :key="skill" class="text-primary-300 text-sm">
                    {{ skill }}
                  </li>
                </ul>
              </div>
              
              <!-- Backend -->
              <div>
                <h3 class="text-lg font-semibold mb-4">Backend</h3>
                <ul class="space-y-2">
                  <li v-for="skill in skills.backend" :key="skill" class="text-primary-300 text-sm">
                    {{ skill }}
                  </li>
                </ul>
              </div>
              
              <!-- Soft Skills -->
              <div>
                <h3 class="text-lg font-semibold mb-4">Soft Skills</h3>
                <ul class="space-y-2">
                  <li v-for="skill in skills.softSkills" :key="skill" class="text-primary-300 text-sm">
                    {{ skill }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Certificates Section -->
    <section class="section bg-white">
      <div class="container-custom">
        <h2 
          v-motion v-bind="fadeInUp"
          class="text-3xl lg:text-4xl font-heading font-bold mb-12"
        >
          Certificates<span class="text-accent-500">.</span>
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="(cert, index) in certificates" 
            :key="cert.title"
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: index * 100 } }"
            class="group"
          >
            <div class="bg-primary-800 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div class="h-48 bg-gradient-to-br from-primary-700 to-primary-900 flex items-center justify-center p-4">
                <div class="text-center">
                  <div class="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span class="text-2xl">📜</span>
                  </div>
                  <p class="text-white/60 text-xs">{{ cert.provider }}</p>
                </div>
              </div>
              <div class="p-4 bg-primary-800">
                <p class="text-white text-sm font-medium line-clamp-2">{{ cert.title }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- My Story Section -->
    <section class="section bg-white border-t border-primary-100">
      <div class="container-custom">
        <div class="max-w-3xl">
          <h2 
            v-motion v-bind="fadeInUp"
            class="text-3xl lg:text-4xl font-heading font-bold mb-8"
          >
            My Story<span class="text-accent-500">.</span>
          </h2>
          
          <div class="space-y-6">
            <p 
              v-for="(paragraph, index) in myStory" 
              :key="index"
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: index * 100 } }"
              class="text-primary-600 leading-relaxed"
            >
              {{ paragraph }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-16 lg:py-20 bg-beige-100">
      <div class="container-custom">
        <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">
          <div v-motion v-bind="slideInLeft" class="max-w-md">
            <h2 class="text-2xl lg:text-3xl font-heading font-semibold mb-4 leading-snug">
              Experience with a variety of Projects and industries.
            </h2>
            <p class="text-primary-500 mb-6">
              Versatile experience across diverse projects and industries, bringing adaptability and valuable skills to any task.
            </p>
            <div class="flex items-center gap-4">
              <NuxtLink href="#contact" class="btn btn-primary">
                Talk with me
              </NuxtLink>
              <NuxtLink href="#projects" class="btn btn-outline">
                See my work
              </NuxtLink>
            </div>
          </div>
          
          <div 
            v-motion v-bind="slideInRight"
            class="grid grid-cols-2 lg:grid-cols-4 gap-4"
          >
            <div 
              v-for="(stat, index) in stats" 
              :key="stat.label"
              v-motion
              :initial="{ opacity: 0, scale: 0.9 }"
              :visible-once="{ opacity: 1, scale: 1, transition: { duration: 400, delay: index * 100 } }"
              class="bg-white rounded-2xl p-6 text-center shadow-soft hover:shadow-card transition-shadow duration-300"
            >
              <div class="text-3xl lg:text-4xl font-heading font-bold mb-1">{{ stat.value }}</div>
              <div class="text-xs text-primary-500">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="section bg-beige-50">
      <div class="container-custom">
        <div 
          v-if="testimonials.length > 0"
          v-motion v-bind="scaleIn"
          class="max-w-3xl mx-auto text-center"
        >
          <blockquote 
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
            class="text-xl lg:text-2xl text-primary-700 mb-8 leading-relaxed italic font-light"
          >
            "{{ testimonials[0]?.quote }}"
          </blockquote>
          
          <div 
            v-motion
            :initial="{ opacity: 0 }"
            :visible-once="{ opacity: 1, transition: { duration: 400, delay: 300 } }"
          >
            <p class="font-semibold text-primary-900">{{ testimonials[0]?.author }}, {{ testimonials[0]?.role }}</p>
            <p class="text-sm text-olive-500 mt-1">{{ testimonials[0]?.company }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section">
      <div 
        v-motion v-bind="fadeInUp"
        class="container-custom text-center"
      >
        <p class="text-sm text-primary-400 mb-4 uppercase tracking-wider">Have a project?</p>
        <h2 class="text-3xl lg:text-5xl font-heading font-semibold mb-8">Let's talk with me</h2>
        <NuxtLink 
          :href="`mailto:${contact.email}`" 
          class="inline-flex items-center gap-2 text-accent-500 hover:text-accent-600 underline decoration-2 underline-offset-4 transition-colors text-lg"
        >
          {{ contact.email }}
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
@keyframes wave {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(20deg); }
  75% { transform: rotate(-15deg); }
}

.animate-wave {
  animation: wave 1.5s ease-in-out infinite;
  transform-origin: 70% 70%;
  display: inline-block;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
