<script setup lang="ts">
// Composables
const { fetchAllData } = usePortfolioData()
const { fadeInUp, slideInLeft, slideInRight } = useAnimations()

// SEO Meta
useSeoMeta({
  title: 'Tristan Putra - Web Developer',
  description: "Web Developer based in Denpasar, Indonesia. I'll help you build beautiful systems your users will love.",
  ogTitle: 'Tristan Putra - Web Developer',
  ogDescription: "Web Developer based in Denpasar, Indonesia. I'll help you build beautiful systems your users will love.",
  ogType: 'website',
})



// Default/fallback data
const defaultData = {
  hero: {
    greeting: "Hey, I'm Tristan 👋",
    title: 'WebSite Developer',
    description: "I'm a Website developer based in Denpasar, I'll help you build beautiful systems your users will love."
  },
  experiences: [
    { id: 1, company: 'Ruang Berkarya Teknologi', role: 'Internship', period: 'December 2022 - February 2023', logo: 'R', isOpen: false, tasks: ['Assigned to create a website called Jinus, an internet service provider, using Laravel and Bootstrap.', 'Managed all repository tasks with GitLab.', 'Added new features to the Content Management System.'] },
    { id: 2, company: 'Taksu Tech', role: 'Internship', period: 'June 2023 - September 2023', logo: 'T', isOpen: false, tasks: [] },
    { id: 3, company: 'Recovdot', role: 'Web Developer', period: 'September 2024 - Present', logo: 'R', isOpen: false, tasks: [] },
  ],
  skills: {
    webDesign: ['UI/UX Design', 'Responsive Design', 'Wireframing', 'User Research'],
    frontend: ['JavaScript', 'ReactJS', 'NextJS', 'CSS3'],
    backend: ['Node.js', 'MongoDB', 'Laravel', 'Vercel', 'MySQL'],
    softSkills: ['Effective communication', 'Collaboration', 'Commitment', 'Leadership']
  },
  projects: [
    { title: 'Sound of Harmony', category: 'Playlist Dashboard', date: 'August 2023', description: 'The magic of music like never before. Dive into a world where rhythm guides your journey.' },
    { title: 'Marketplace Digital PrimaStore', category: 'E-Commerce Platform', date: 'January 2024', description: 'A modern digital marketplace platform to add products, process payments, and view sales reports.' },
    { title: 'Jinus ISP', category: 'Internet Service Provider Website', date: 'February 2023', description: 'Company website for Jinus, an internet service provider. Built with Laravel and Bootstrap.' },
    { title: 'Recovdot Portfolio', category: 'Company Website', date: 'September 2024', description: 'Modern company website showcasing services and portfolio for Recovdot tech company.' },
  ],
  certificates: [
    { title: 'AWS Cloud Practitioner Essentials', provider: 'Dicoding', thumb: '/certificates/aws.png' },
    { title: 'Getting Started with Programming Basics', provider: 'Dicoding', thumb: '/certificates/dasar.png' },
    { title: 'Backend JavaScript Fundamentals', provider: 'Dicoding', thumb: '/certificates/backendjs.png' },
    { title: 'Google Coursera: IT Support Professional', provider: 'Google', thumb: '/certificates/itsupport.png' },
    { title: 'BNSP Junior Developer', provider: 'BNSP', thumb: '/certificates/bnsp.png' },
  ],
  myStory: [
    "Hi, I'm Tristan Putra, a passionate software engineer with a love for crafting elegant solutions. My journey began in high school, where I discovered my fascination with coding and technology.",
    "Over the years, I've honed my skills in various programming languages and frameworks, always striving to stay updated with the latest industry trends.",
    "I believe in the power of collaboration and continuous learning. Each project I undertake is an opportunity to grow and innovate."
  ],
  contact: { email: 'ngurah.tristanputra@gmail.com' }
}

// Reactive data
const hero = ref(defaultData.hero)
const experiences = ref(defaultData.experiences)
const skills = ref(defaultData.skills)
const projects = ref(defaultData.projects)
const certificates = ref(defaultData.certificates)
const myStory = ref(defaultData.myStory)
const contact = ref(defaultData.contact)
const selectedCertificate = ref<{ title: string; pdf?: string; description?: string } | null>(null)

// Fetch data from Nuxt Content
onMounted(async () => {
  try {
    const data = await fetchAllData()
    if (data.hero) hero.value = { ...defaultData.hero, ...data.hero }
    if (data.experiences?.length) experiences.value = data.experiences
    if (data.skills) skills.value = { ...defaultData.skills, ...data.skills }
    if (data.projects?.length) projects.value = data.projects
    if (data.certificates?.length) certificates.value = data.certificates
    if (data.myStory?.paragraphs?.length) myStory.value = data.myStory.paragraphs
    if (data.contact?.email) contact.value = { email: data.contact.email }
  } catch (error) {
    console.warn('Failed to fetch content data:', error)
  }
})

// Toggle experience dropdown
const toggleExperience = (expId: number) => {
  experiences.value = experiences.value.map(exp => ({
    ...exp,
    isOpen: exp.id === expId ? !exp.isOpen : exp.isOpen
  }))
}

// Skill categories for DRY rendering
const skillCategories = computed(() => [
  { title: 'Web Design', skills: skills.value.webDesign },
  { title: 'Frontend', skills: skills.value.frontend },
  { title: 'Backend', skills: skills.value.backend },
  { title: 'Soft Skills', skills: skills.value.softSkills },
])
</script>

<template>
  <div>
    <!-- Skip to main content link for accessibility -->
    <a 
      href="#main-content" 
      class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-accent-500 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
    >
      Skip to main content
    </a>

    <main id="main-content">
      <!-- Hero Section -->
      <section 
        aria-labelledby="hero-title" 
        class="section pt-20 sm:pt-24 lg:pt-32 min-h-[80vh] flex items-center"
      >
        <div class="container-custom">
          <div class="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <!-- Left side -->
            <div>
              <p 
                v-motion
                :initial="{ opacity: 0, y: 20 }"
                :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
                class="text-base sm:text-lg text-primary-600 mb-3 sm:mb-4"
              >
                {{ hero.greeting }}
              </p>
              
              <h1 
                id="hero-title"
                v-motion
                :initial="{ opacity: 0, y: 40 }"
                :visible-once="{ opacity: 1, y: 0, transition: { duration: 700, delay: 100 } }"
                class="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-heading font-semibold leading-[1.1] mb-6 sm:mb-8 tracking-tight"
              >
                <span class="text-accent-500">Web</span>Site
                <br />Developer
              </h1>
              
              <p 
                v-motion
                :initial="{ opacity: 0, y: 20 }"
                :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 200 } }"
                class="text-primary-500 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-md"
              >
                {{ hero.description }}
              </p>
              
              <div 
                v-motion
                :initial="{ opacity: 0, y: 20 }"
                :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 300 } }"
                class="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4"
              >
                <NuxtLink 
                  href="#contact" 
                  class="btn btn-primary group justify-center"
                >
                  <span>Get In Touch</span>
                  <svg class="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </NuxtLink>
                <NuxtLink 
                  href="#projects" 
                  class="btn btn-outline group justify-center"
                >
                  <span>Browse Projects</span>
                </NuxtLink>
              </div>
            </div>
            
            <!-- Right side - Profile Image -->
            <div 
              v-motion
              :initial="{ opacity: 0, scale: 0.9 }"
              :visible-once="{ opacity: 1, scale: 1, transition: { duration: 600, delay: 200 } }"
              class="flex justify-center lg:justify-end order-first lg:order-last"
            >
              <div class="relative">
                <div class="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 overflow-hidden border-4 border-white shadow-xl">
                  <img 
                    src="/image/profile.jpg" 
                    alt="Tristan Putra - Web Developer"
                    class="w-full h-full object-cover"
                    loading="eager"
                    fetchpriority="high"
                  />
                </div>
                <div 
                  class="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 bg-primary-900 text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium"
                  aria-hidden="true"
                >
                  TRISTAN
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Projects Section -->
      <section id="projects" aria-labelledby="projects-title" class="section bg-white">
        <div class="container-custom">
          <SectionTitle id="projects-title" title="Projects" />
          <div class="grid sm:grid-cols-2 gap-6 sm:gap-8">
            <ProjectCard 
              v-for="(project, index) in projects" 
              :key="project.title"
              :project="project"
              :index="index"
            />
          </div>
        </div>
      </section>

      <!-- Experience & Skills Section -->
      <section id="about" aria-labelledby="experience-title" class="section bg-primary-900 text-white">
        <div class="container-custom">
          <div class="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24">
            <!-- Experience -->
            <div v-motion="slideInLeft()">
              <SectionTitle id="experience-title" title="Experience" />
              <div class="space-y-0" role="list" aria-label="Work experience timeline">
                <ExperienceItem 
                  v-for="(exp, index) in experiences" 
                  :key="exp.id"
                  :experience="exp"
                  :index="index"
                  @toggle="toggleExperience"
                />
              </div>
            </div>
            
            <!-- Skills -->
            <div v-motion="slideInRight()">
              <h2 id="skills-title" class="text-3xl lg:text-4xl font-heading font-bold mb-8 lg:mb-12">
                Skills<span class="text-accent-500" aria-hidden="true">.</span>
              </h2>
              <div class="grid grid-cols-2 gap-6 sm:gap-8">
                <SkillCategory 
                  v-for="category in skillCategories"
                  :key="category.title"
                  :title="category.title"
                  :skills="category.skills"
                  :is-dark="true"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Certificates Section -->
      <section aria-labelledby="certificates-title" class="section bg-white">
        <div class="container-custom">
          <SectionTitle id="certificates-title" title="Certificates" />
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <CertificateCard 
              v-for="(cert, index) in certificates" 
              :key="cert.title"
              :certificate="cert"
              :index="index"
              @select="selectedCertificate = $event"
            />
          </div>
        </div>
      </section>

      <!-- Certificate Modal -->
      <Teleport to="body">
        <Transition
          enter-active-class="transition-opacity duration-200"
          enter-from-class="opacity-0"
          leave-active-class="transition-opacity duration-150"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div 
            v-if="selectedCertificate" 
            class="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            @click="selectedCertificate = null"
            @keydown.escape="selectedCertificate = null"
          >
            <div 
              class="relative bg-white rounded-2xl p-4 sm:p-6 max-w-5xl w-full shadow-xl max-h-[90vh] overflow-hidden"
              @click.stop
            >
              <div class="mb-4">
                <h3 id="modal-title" class="text-xl sm:text-2xl font-bold text-primary-900">
                  {{ selectedCertificate.title }}
                </h3>
                <p v-if="selectedCertificate.description" class="text-primary-600 mt-1">
                  {{ selectedCertificate.description }}
                </p>
              </div>
              
              <iframe
                v-if="selectedCertificate.pdf"
                :src="selectedCertificate.pdf"
                class="w-full h-[400px] sm:h-[600px] rounded-lg border border-primary-200"
                :title="selectedCertificate.title"
              />
              <div v-else class="w-full h-[300px] sm:h-[400px] bg-primary-100 rounded-lg flex items-center justify-center">
                <p class="text-primary-500">PDF not available</p>
              </div>
              
              <button
                @click="selectedCertificate = null"
                class="absolute top-3 sm:top-4 right-3 sm:right-4 text-sm px-3 sm:px-4 py-2 bg-primary-900 text-white rounded-lg hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 transition-colors"
                aria-label="Close certificate modal"
              >
                Close
              </button>
            </div>
          </div>
        </Transition>
      </Teleport>

      <!-- My Story Section -->
      <section aria-labelledby="story-title" class="section bg-white border-t border-primary-100">
        <div class="container-custom">
          <div class="max-w-3xl">
            <SectionTitle id="story-title" title="My Story" />
            <div class="space-y-4 sm:space-y-6">
              <p 
                v-for="(paragraph, index) in myStory" 
                :key="index"
                v-motion
                :initial="{ opacity: 0, y: 20 }"
                :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: index * 100 } }"
                class="text-primary-600 leading-relaxed text-sm sm:text-base"
              >
                {{ paragraph }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" aria-labelledby="contact-title" class="section">
        <div 
          v-motion="fadeInUp()"
          class="container-custom text-center"
        >
          <p class="text-xs sm:text-sm text-primary-400 mb-3 sm:mb-4 uppercase tracking-wider">
            Have a project?
          </p>
          <h2 id="contact-title" class="text-2xl sm:text-3xl lg:text-5xl font-heading font-semibold mb-6 sm:mb-8">
            Let's talk with me
          </h2>
          <NuxtLink 
            :href="`mailto:${contact.email}`" 
            class="inline-flex items-center gap-2 text-accent-500 hover:text-accent-600 underline decoration-2 underline-offset-4 transition-colors text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 rounded"
            aria-label="Send email to Tristan Putra"
          >
            {{ contact.email }}
          </NuxtLink>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
/* Screen reader only utility */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
