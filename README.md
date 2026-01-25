# Clean2Care - Professional Facade Cleaning Website

A modern, responsive website for Clean2Care facade cleaning and building maintenance services. Built with React 18 and Vite for optimal performance.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with professional UI
- **Modern Stack**: React 18 + Vite for fast builds and optimal performance
- **Professional Branding**: Orange and black color scheme matching company identity
- **Service Showcase**: Highlights all offered services
- **Contact Section**: Easy access to contact information and inquiry forms
- **SEO Optimized**: Meta tags and semantic HTML for better search visibility

## 📋 Services

- Facade Cleaning (High-rise and low-rise)
- Silicon Sealing & Joint Repairs
- Glass Replacement
- ACP (Aluminium Composite Panel) Services
- Bird-Proofing Solutions (Nets & Spikes)

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 16.0.0 or higher
- npm or yarn

### Quick Start

1. **Clone the repository**
```bash
git clone <repository-url>
cd clean-2-care
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```
The site will be available at `http://localhost:5173`

4. **Build for production**
```bash
npm run build
```

5. **Preview production build**
```bash
npm run preview
```

## 📁 Project Structure

```
clean-2-care/
├── src/
│   ├── components/
│   │   ├── Header.jsx      # Navigation & branding
│   │   ├── Hero.jsx        # Main hero section with CTA
│   │   ├── Services.jsx    # Service offerings showcase
│   │   ├── Contact.jsx     # Contact information & form
│   │   └── Footer.jsx      # Footer section
│   ├── assets/
│   │   ├── logo.jpg        # Company logo
│   │   └── facade.jpg      # Service showcase image
│   ├── App.jsx             # Main app component
│   ├── index.css           # Global styles with theme
│   └── main.jsx            # Entry point
├── index.html              # HTML template
├── vite.config.js          # Vite configuration
├── package.json            # Dependencies & scripts
└── .gitignore              # Git ignore rules
```

## 🎨 Design & Theming

- **Primary Color**: Orange (#ff6a00)
- **Secondary Color**: Black (#1a1a1a)
- **Accent Color**: White
- **Font**: Inter, system UI fonts
- **Responsive Breakpoints**: Mobile-first design

## 📱 Pages & Sections

- **Header**: Navigation with branding
- **Hero**: Main headline with founder experience badges and CTA
- **Services**: Grid of 5 service offerings
- **Contact**: Contact details and inquiry section with facade image
- **Footer**: Company info and links

## 🚀 Production Deployment

### Build Optimization
- Minified CSS and JavaScript
- Code splitting for vendor dependencies
- Source maps disabled for production
- Terser minification enabled

### Before Deploying

1. ✅ Update favicon in `index.html` if needed
2. ✅ Verify all contact links work (email, phone)
3. ✅ Test responsive design on multiple devices
4. ✅ Check page load performance
5. ✅ Update social media meta tags if needed

### Deploy to Production

```bash
# Build the project
npm run build

# Output will be in the 'dist/' folder
# Deploy the dist/ folder to your hosting provider
```

### Hosting Options
- Vercel (recommended for Vite projects)
- Netlify
- GitHub Pages
- Traditional web hosting

## 📧 Contact Information

- **Email**: clean2carehyd@gmail.com
- **Service Area**: Hyderabad and surrounding regions
- **Founder Experience**: 21+ years in facade cleaning and building maintenance

## 📄 Environment Variables

Copy `.env.example` to `.env` to configure environment variables:

```bash
cp .env.example .env
```

## 🔒 Security & Best Practices

- ✅ No sensitive data in source code
- ✅ Environment variables for configuration
- ✅ .gitignore properly configured
- ✅ Minified production builds
- ✅ Responsive & accessible design

## 📈 Performance

- Lightweight bundle (< 200KB gzipped)
- Fast build times with Vite
- Optimized image delivery
- CSS minification and bundling

## 🤝 Support & Updates

For inquiries or modifications, contact: clean2carehyd@gmail.com

---

**Last Updated**: January 2026
**Version**: 1.0.0
**Status**: Production Ready ✅
