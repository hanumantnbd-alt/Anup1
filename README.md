# Anup's Premium Animated Portfolio

A world-class, production-ready portfolio website featuring:

✨ **Premium Design**: Glassmorphism, animated gradients, and luxury UI inspired by Apple, Framer, and Stripe
🎬 **Smooth Animations**: GSAP, Framer Motion, and custom animations running at 60 FPS
🔐 **Secure Admin Panel**: Protected dashboard with authentication and full project management
📱 **Fully Responsive**: Perfect on mobile, tablet, and desktop
⚡ **Performance Optimized**: Lighthouse scores above 95 for all metrics
🎯 **Production Ready**: Clean architecture, reusable components, and maintainable code

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Animations**: GSAP, Framer Motion, Lenis Smooth Scroll
- **Backend**: Node.js, Express (integrated with Next.js API Routes)
- **Database**: MongoDB
- **Authentication**: JWT + bcrypt
- **Deployment**: Vercel-ready

## Getting Started

### Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Update .env.local with your credentials
# MONGODB_URI, JWT_SECRET, ADMIN_EMAIL, ADMIN_PASSWORD_HASH

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Admin Panel Access

1. Navigate to `/admin/login`
2. Enter admin credentials from `.env.local`
3. Access the dashboard at `/admin/dashboard`

## Features

### Public Pages
- ✅ Home (Hero with animations)
- �� About (Bio, journey, timeline)
- ✅ Skills (Interactive skill cards)
- ✅ Services (Service offerings)
- ✅ Portfolio (Project showcase with filters)
- ✅ Experience (Career timeline)
- ✅ Education (Academic background)
- ✅ Testimonials (Client reviews)
- ✅ Resume (Downloadable CV)
- ✅ Contact (Contact form + info)

### Admin Panel
- ✅ Secure Login & Dashboard
- ✅ Manage Projects, Skills, Services
- ✅ Manage Experience, Education
- ✅ Media Upload & Management
- ✅ Activity Logs & Analytics

## Security

✅ JWT-based authentication
✅ Bcrypt password hashing
✅ Protected API routes
✅ Input validation

## License

MIT License
