# Freelance Service Landing Page

A stunning, fully responsive landing page built with modern web technologies. Perfect for freelancers and service providers to showcase their skills and attract clients.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Language**: TypeScript
- **Package Manager**: pnpm

## Features

- Modern, professional design with gradient effects
- Fully responsive (mobile, tablet, desktop)
- Smooth scroll navigation
- Animated sections with Framer Motion
- Interactive UI components with hover effects
- Contact form with validation
- SEO optimized
- Fast performance with Next.js
- Type-safe with TypeScript

## Project Structure

```
Modern-Landing-page/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx             # Main landing page
│   └── globals.css          # Global styles and Tailwind
├── components/
│   ├── Navigation.tsx       # Sticky header with scroll effects
│   ├── Hero.tsx             # Hero section with animated background
│   ├── Services.tsx         # Services grid with animations
│   ├── About.tsx            # About section with skills progress bars
│   ├── Portfolio.tsx        # Portfolio showcase
│   ├── Pricing.tsx          # Pricing plans comparison
│   ├── Contact.tsx          # Contact form and info
│   └── Footer.tsx           # Footer with social links
├── lib/
│   └── constants.ts         # Site configuration and content
├── public/                  # Static assets
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── next.config.ts          # Next.js configuration
```

## Sections Included

### 1. Navigation
- Sticky header with scroll effects
- Smooth scroll to sections
- Mobile responsive menu
- Animated on scroll

### 2. Hero Section
- Eye-catching headline and CTA
- Animated background gradients
- Social media links
- Scroll indicator

### 3. Services Section
- 5 service cards with icons
- Hover animations
- Gradient effects
- Fully customizable

### 4. About Section
- Personal introduction
- Statistics showcase
- Animated skill progress bars
- Responsive grid layout

### 5. Portfolio Section
- Project showcase placeholder
- Ready for your work
- Technology tags

### 6. Pricing Section
- 3-tier pricing plans
- Feature comparison
- Highlighted popular plan
- Custom CTA buttons

### 7. Contact Section
- Working contact form
- Contact information cards
- Email, phone, location
- Form validation

### 8. Footer
- Quick navigation links
- Social media links
- Copyright information
- Responsive layout

## Getting Started

### Prerequisites

- Node.js 18+ installed
- pnpm installed (or npm/yarn)

### Installation

1. Install dependencies:
```bash
pnpm install
```

2. Run the development server:
```bash
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
pnpm build
pnpm start
```

## Customization

### Update Your Information

Edit [lib/constants.ts](lib/constants.ts) to customize:

- **SITE_CONFIG**: Your name, title, contact info, social links
- **SERVICES**: Your service offerings
- **SKILLS**: Your technical skills and levels
- **PRICING_PLANS**: Your pricing tiers
- **NAV_LINKS**: Navigation menu items

### Styling

- Colors: Edit [tailwind.config.ts](tailwind.config.ts) to change the color scheme
- Fonts: Update [app/layout.tsx](app/layout.tsx) to use different Google Fonts
- Animations: Modify Framer Motion variants in component files

## Animation Features

- **Scroll-based animations**: Elements animate as you scroll
- **Hover effects**: Interactive cards and buttons
- **Page transitions**: Smooth entrance animations
- **Loading animations**: Skeleton screens for better UX
- **Gradient animations**: Floating background effects

## Responsive Design

- **Mobile**: < 768px - Single column layout, hamburger menu
- **Tablet**: 768px - 1024px - 2-column grids
- **Desktop**: > 1024px - Full multi-column layouts

## Performance Optimizations

- Next.js App Router for optimal performance
- Image optimization with next/image
- Code splitting and lazy loading
- CSS-in-JS with Tailwind for minimal bundle size
- TypeScript for type safety and better DX

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project to Vercel
3. Deploy automatically

### Other Platforms

- Netlify
- AWS Amplify
- Digital Ocean

## What You've Learned

Through this project, you've worked with:

1. **Next.js App Router**: Modern React framework
2. **TypeScript**: Type-safe development
3. **Tailwind CSS**: Utility-first CSS framework
4. **Framer Motion**: Advanced animations
5. **Component Architecture**: Reusable React components
6. **Responsive Design**: Mobile-first approach
7. **Form Handling**: User input management
8. **SEO Best Practices**: Metadata and optimization

## Next Steps

- Add a blog section
- Integrate a CMS (Contentful, Sanity)
- Add dark mode toggle
- Implement form backend (EmailJS, SendGrid)
- Add more portfolio projects
- Integrate analytics (Google Analytics)
- Add testimonials carousel

## License

This project is open source and available under the MIT License.

## Support

For questions or support, reach out at kamalikaazhakar@gmail.com

---

Built with by Kamalika using Next.js, TypeScript, and Tailwind CSS
