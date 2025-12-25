# 🚀 Prakash Sunuwar - Portfolio Website

A modern, responsive, and professional portfolio website built with React, showcasing frontend development skills and projects.

![Portfolio Website](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![Vite](https://img.shields.io/badge/Vite-7.2.7-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.x-cyan)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11.x-orange)

## ✨ Features

### 🎨 **Visual & User Experience**

- **Dark/Light Mode Toggle** - Smooth theme switching with localStorage persistence
- **Responsive Design** - Mobile-first approach, works perfectly on all devices
- **Advanced Animations** - Professional animations using Framer Motion
- **Smooth Scrolling** - Enhanced navigation with scroll-to-section functionality
- **Interactive Elements** - Hover effects, loading states, and micro-interactions
- **Professional Typography** - Google Fonts (Inter) for clean, modern text

### 🏗️ **Technical Architecture**

- **Component-Based Structure** - Modular, maintainable React components
- **SEO Optimized** - Comprehensive meta tags and Open Graph integration
- **Performance Optimized** - Fast loading with optimized animations
- **Accessibility Focused** - Proper focus states, semantic HTML, and ARIA labels
- **Modern CSS** - CSS Variables, custom properties, and utility-first approach

### 📱 **Sections & Components**

#### 🧭 **Navigation**

- Sticky header with smooth scroll navigation
- Mobile-responsive hamburger menu with animations
- Dark mode toggle with persistent storage

#### 👋 **Hero Section**

- Animated introduction with staggered text reveals
- Professional statistics showcase
- Interactive call-to-action buttons
- Floating avatar with gradient background

#### 👨‍💻 **About Section**

- Personal story and journey
- Animated skill progress bars
- Technology stack showcase
- Fun facts with personality

#### 💼 **Projects Showcase**

- Interactive project cards with hover effects
- Technology badges for each project
- "View Case Study" and "Preview" functionality
- Call-to-action for collaboration

#### 📞 **Contact Section**

- Professional contact information cards
- Interactive contact form with validation
- Loading states and smooth animations
- Multiple contact methods (Email, LinkedIn)

#### 🔍 **Project Detail Pages**

- Individual project pages with detailed information
- Professional layout matching main site design
- Technology showcase and project metadata
- Navigation breadcrumbs and back buttons

## 🛠️ Tech Stack

### **Frontend**

- **React 18.3.1** - Modern React with hooks and functional components
- **Vite 7.2.7** - Fast build tool and development server
- **React Router** - Client-side routing for SPA navigation
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library
- **Google Fonts** - Professional typography (Inter)

### **Development Tools**

- **ESLint** - Code linting for consistent code quality
- **Hot Module Replacement** - Instant development updates
- **CSS Variables** - Dynamic theming system
- **Responsive Design** - Mobile-first approach

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd react-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5175`

### Build for Production

```bash
npm run build
# or
yarn build
```

The build files will be generated in the `dist` folder.

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation with mobile menu
│   ├── Hero.jsx        # Hero section with animations
│   ├── About.jsx       # About section with skills
│   ├── Projects.jsx    # Projects showcase
│   ├── Contact.jsx     # Contact form and info
│   ├── Footer.jsx      # Site footer
│   └── ProjectModal.jsx # Project preview modal
├── pages/              # Page components
│   ├── Home.jsx        # Main landing page
│   └── Project.jsx     # Individual project pages
├── assets/             # Static assets
│   └── images/         # Project screenshots and avatars
├── App.jsx             # Main app component with routing
├── main.jsx           # React app entry point
└── index.css          # Global styles and CSS variables
```

## 🎨 Design System

### **Color Palette**

```css
/* Light Mode */
--bg: 255 255 255;
--text: 17 24 39;
--muted: 107 114 128;
--accent: 79 70 229;

/* Dark Mode */
--bg: 17 24 39;
--text: 243 244 246;
--muted: 156 163 175;
--accent: 99 102 241;
```

### **Typography**

- **Primary Font**: Inter (Google Fonts)
- **Headings**: Font weights 700-800
- **Body**: Font weights 400-500
- **Responsive sizing**: Mobile-first approach

### **Animations**

- **Staggered reveals**: Text and elements appear in sequence
- **Hover effects**: Scale and transform on interaction
- **Loading states**: Smooth transitions and spinners
- **Scroll animations**: Elements animate as they enter viewport

## 🌐 Deployment

### **Vercel (Recommended)**

1. Connect your GitHub repository to Vercel
2. Build settings are automatically detected
3. Deploy with one click

### **Netlify**

1. Connect repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

### **GitHub Pages**

1. Build the project: `npm run build`
2. Deploy the `dist` folder to gh-pages branch

## 🔧 Customization

### **Adding New Projects**

1. Update the `projects` array in `src/App.jsx`
2. Add project images to `src/assets/`
3. Update project details and descriptions

### **Modifying Sections**

- Each section is a separate component in `src/components/`
- Easy to modify individual sections without affecting others
- Consistent styling with CSS variables

### **Changing Theme Colors**

- Update CSS variables in `src/index.css`
- Both light and dark mode colors can be customized
- Changes apply globally across the site

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 About the Developer

**Prakash Sunuwar**

- Frontend Developer specializing in React and modern web technologies
- UI/UX Design enthusiast
- Available for freelance and full-time opportunities

### **Connect**

- 📧 Email: [praksunuwar@gmail.com](mailto:praksunuwar@gmail.com)
- 💼 LinkedIn: [View Profile](https://www.linkedin.com/in/prakash-sunuwar-020556234/)

## 🙏 Acknowledgments

- **React Team** - For the amazing framework
- **Vercel** - For the excellent development experience
- **Tailwind CSS** - For the utility-first approach
- **Framer Motion** - For smooth animations
- **Google Fonts** - For beautiful typography

---

**Built with ❤️ using modern web technologies**

_This portfolio showcases professional frontend development skills and demonstrates expertise in React, modern CSS, and user experience design._
