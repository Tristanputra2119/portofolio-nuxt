# 🎨 Personal Portfolio - Nuxt 4

A modern, minimalist personal portfolio website built with **Nuxt 4**, **Vue 3**, and **TailwindCSS**. Features smooth animations powered by **@vueuse/motion** and a clean, professional design inspired by [Brooks Framer Template](https://brooks.framer.website/).

![Portfolio Preview](https://via.placeholder.com/1200x630/1a1a1a/ffffff?text=Personal+Portfolio)

## ✨ Features

- 🚀 **Nuxt 4** - Latest version with improved performance
- 🎨 **TailwindCSS** - Utility-first CSS framework
- 🎬 **Smooth Animations** - Powered by @vueuse/motion (Framer Motion for Vue)
- 🌙 **Clean Design** - Minimalist and professional aesthetic
- 📱 **Fully Responsive** - Mobile-first design approach
- ⏰ **Real-time Clock** - Live clock display in navbar (Asia/Singapore timezone)
- 🔗 **Social Media Integration** - Fixed sidebar with social links
- ⬆️ **Scroll to Top** - Smooth scroll-to-top button

## 🏗️ Project Structure

```
portofolio-nuxt/
├── app/
│   ├── assets/
│   │   └── css/
│   │       └── main.css          # Global styles & Tailwind components
│   ├── layouts/
│   │   └── default.vue           # Main layout with navbar & footer
│   ├── pages/
│   │   └── index.vue             # Homepage with all sections
│   └── app.vue                   # Root component
├── public/                        # Static assets
├── nuxt.config.ts                # Nuxt configuration
├── tailwind.config.js            # Tailwind configuration
└── package.json
```

## 📄 Page Sections

1. **Hero** - Greeting with avatar, name, and CTA buttons
2. **Experience & Awards** - Work history and recognitions
3. **Services** - What you can help with (expandable dropdowns)
4. **Stats** - Key metrics and achievements
5. **Selected Works** - Portfolio project showcase
6. **Testimonials** - Client feedback
7. **Contact** - Email contact section
8. **Footer** - Navigation and copyright

## 🛠️ Tech Stack

| Technology | Version | Description |
|------------|---------|-------------|
| [Nuxt](https://nuxt.com/) | 4.x | Vue.js Framework |
| [Vue](https://vuejs.org/) | 3.x | JavaScript Framework |
| [TailwindCSS](https://tailwindcss.com/) | 3.x | Utility-first CSS |
| [@vueuse/motion](https://motion.vueuse.org/) | Latest | Animation library |
| [@nuxt/image](https://image.nuxt.com/) | 2.x | Image optimization |
| TypeScript | 5.x | Type safety |

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portofolio-nuxt.git
   cd portofolio-nuxt
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   ```
   http://localhost:3000
   ```

## 📦 Build for Production

```bash
# Generate static site
npm run generate

# Or build for SSR
npm run build

# Preview production build
npm run preview
```

## ⚙️ Configuration

### Customizing Content

Edit the data in `app/pages/index.vue`:

```typescript
// Personal info
const heroDescription = 'Your tagline here'

// Work experience
const experiences = [
  { company: 'Company', role: 'Role', period: 'Period', logo: 'X' },
]

// Awards
const awards = [
  { title: 'Award Name', from: 'Organization', date: 'Date', logo: 'X' },
]

// Projects
const projects = [
  { title: 'Project', category: 'Category', date: 'Date', description: 'Desc' },
]

// Stats
const stats = [
  { value: '50+', label: 'Projects finished' },
]
```

### Customizing Styles

Edit `tailwind.config.js` to customize:
- Colors (primary, beige, olive)
- Fonts (Inter, Outfit)
- Animations
- Shadows

### Changing Timezone

In `app/layouts/default.vue`, update the timezone:
```typescript
currentTime.value = now.toLocaleTimeString('id-ID', { 
  timeZone: 'Asia/Singapore' // Change this
})
```

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary | `#1a1a1a` | Text, buttons |
| Beige | `#f5f0e8` | Section backgrounds |
| Olive | `#3d4a3a` | Accent color |
| White | `#ffffff` | Background |

## 📝 Customization Checklist

- [ ] Update personal information in `index.vue`
- [ ] Replace logo initials in `default.vue`
- [ ] Add your own project images in `/public/images/`
- [ ] Update social media links in `default.vue`
- [ ] Change email address in contact section
- [ ] Update meta tags in `nuxt.config.ts`
- [ ] Customize colors in `tailwind.config.js`

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Credits

- Design inspiration: [Brooks Framer Template](https://brooks.framer.website/)
- Fonts: [Google Fonts](https://fonts.google.com/) (Inter, Outfit)
- Animation library: [@vueuse/motion](https://motion.vueuse.org/)

---

Made with ❤️ using Nuxt 4
