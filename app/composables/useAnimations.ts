/**
 * Animation composable for consistent motion effects across the app
 * Provides reusable animation presets with accessibility support
 */
export const useAnimations = () => {
    const prefersReducedMotion = computed(() => {
        if (import.meta.client) {
            return window.matchMedia('(prefers-reduced-motion: reduce)').matches
        }
        return false
    })

    const getTransition = (duration: number, delay: number = 0) => ({
        duration: prefersReducedMotion.value ? 0 : duration,
        delay: prefersReducedMotion.value ? 0 : delay,
        ease: 'easeOut'
    })

    const fadeInUp = (delay: number = 0) => ({
        initial: { opacity: 0, y: prefersReducedMotion.value ? 0 : 30 },
        visibleOnce: {
            opacity: 1,
            y: 0,
            transition: getTransition(600, delay)
        }
    })

    const slideInLeft = (delay: number = 0) => ({
        initial: { opacity: 0, x: prefersReducedMotion.value ? 0 : -30 },
        visibleOnce: {
            opacity: 1,
            x: 0,
            transition: getTransition(600, delay)
        }
    })

    const slideInRight = (delay: number = 0) => ({
        initial: { opacity: 0, x: prefersReducedMotion.value ? 0 : 30 },
        visibleOnce: {
            opacity: 1,
            x: 0,
            transition: getTransition(600, delay)
        }
    })

    const scaleIn = (delay: number = 0) => ({
        initial: { opacity: 0, scale: prefersReducedMotion.value ? 1 : 0.9 },
        visibleOnce: {
            opacity: 1,
            scale: 1,
            transition: getTransition(500, delay)
        }
    })

    const staggeredFadeIn = (index: number, baseDelay: number = 0) =>
        fadeInUp(baseDelay + index * 100)

    return {
        prefersReducedMotion,
        fadeInUp,
        slideInLeft,
        slideInRight,
        scaleIn,
        staggeredFadeIn
    }
}
