/**
 * Composable untuk fetch data portfolio dari Nuxt Content v3
 * Menggunakan queryCollection API
 */

export const usePortfolioData = () => {
    // Fetch Hero data
    const fetchHero = async () => {
        try {
            const { data } = await useAsyncData('hero', () =>
                queryCollection('content').path('/hero').first()
            )
            return data.value || null
        } catch (error) {
            console.error('Error fetching hero:', error)
            return null
        }
    }

    // Fetch Experiences
    const fetchExperiences = async () => {
        try {
            const { data } = await useAsyncData('experiences', () =>
                queryCollection('content').path('/experiences').first()
            )
            const items = data.value?.body || []
            return items.map((exp: any, index: number) => ({
                ...exp,
                id: index + 1,
                isOpen: false
            }))
        } catch (error) {
            console.error('Error fetching experiences:', error)
            return []
        }
    }

    // Fetch Projects
    const fetchProjects = async () => {
        try {
            const { data } = await useAsyncData('projects', () =>
                queryCollection('content').path('/projects').first()
            )
            return data.value?.body || []
        } catch (error) {
            console.error('Error fetching projects:', error)
            return []
        }
    }

    // Fetch Skills
    const fetchSkills = async () => {
        try {
            const { data } = await useAsyncData('skills', () =>
                queryCollection('content').path('/skills').first()
            )
            return data.value || null
        } catch (error) {
            console.error('Error fetching skills:', error)
            return null
        }
    }

    // Fetch Certificates
    const fetchCertificates = async () => {
        try {
            const { data } = await useAsyncData('certificates', () =>
                queryCollection('content').path('/certificates').first()
            )
            return data.value?.body || []
        } catch (error) {
            console.error('Error fetching certificates:', error)
            return []
        }
    }

    // Fetch Testimonials
    const fetchTestimonials = async () => {
        try {
            const { data } = await useAsyncData('testimonials', () =>
                queryCollection('content').path('/testimonials').first()
            )
            return data.value?.body || []
        } catch (error) {
            console.error('Error fetching testimonials:', error)
            return []
        }
    }

    // Fetch Stats
    const fetchStats = async () => {
        try {
            const { data } = await useAsyncData('stats', () =>
                queryCollection('content').path('/stats').first()
            )
            return data.value?.body || []
        } catch (error) {
            console.error('Error fetching stats:', error)
            return []
        }
    }

    // Fetch My Story
    const fetchMyStory = async () => {
        try {
            const { data } = await useAsyncData('mystory', () =>
                queryCollection('content').path('/mystory').first()
            )
            return data.value || null
        } catch (error) {
            console.error('Error fetching my story:', error)
            return null
        }
    }

    // Fetch Contact
    const fetchContact = async () => {
        try {
            const { data } = await useAsyncData('contact', () =>
                queryCollection('content').path('/contact').first()
            )
            return data.value || null
        } catch (error) {
            console.error('Error fetching contact:', error)
            return null
        }
    }

    // Fetch all data at once
    const fetchAllData = async () => {
        const [hero, experiences, projects, skills, certificates, testimonials, stats, myStory, contact] = await Promise.all([
            fetchHero(),
            fetchExperiences(),
            fetchProjects(),
            fetchSkills(),
            fetchCertificates(),
            fetchTestimonials(),
            fetchStats(),
            fetchMyStory(),
            fetchContact()
        ])

        return {
            hero,
            experiences,
            projects,
            skills,
            certificates,
            testimonials,
            stats,
            myStory,
            contact
        }
    }

    return {
        fetchHero,
        fetchExperiences,
        fetchProjects,
        fetchSkills,
        fetchCertificates,
        fetchTestimonials,
        fetchStats,
        fetchMyStory,
        fetchContact,
        fetchAllData
    }
}
