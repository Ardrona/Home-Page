# Ardrona Homepage Deployment Guide

## Build and Deployment Instructions

### Prerequisites
- Node.js 18+ 
- pnpm package manager

### Local Development
```bash
pnpm install
pnpm dev
```

### Production Build
```bash
# Full production build with type checking
pnpm deploy

# Or step by step:
pnpm type-check  # Check TypeScript types
pnpm build:prod  # Build for production
```

### Preview Production Build
```bash
pnpm preview
```

### Deployment Options

#### 1. Static Hosting (Vercel, Netlify, GitHub Pages)
- Build command: `pnpm deploy`
- Output directory: `dist`
- Node version: 18+

#### 2. Vercel (Recommended)
```json
{
  "buildCommand": "pnpm deploy",
  "outputDirectory": "dist",
  "installCommand": "pnpm install"
}
```

#### 3. Netlify
```toml
# netlify.toml
[build]
  command = "pnpm deploy"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"
```

#### 4. Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install -g pnpm
RUN pnpm install
COPY . .
RUN pnpm deploy
EXPOSE 8080
CMD ["pnpm", "preview"]
```

### Environment Variables
- No environment variables required for basic deployment
- All configurations are build-time

### Performance Optimizations Applied
- ✅ Code splitting (vendor, UI components)
- ✅ Tree shaking enabled
- ✅ Console logs removed in production
- ✅ Minification with Terser
- ✅ Asset optimization
- ✅ TypeScript compilation

### File Structure
```
dist/
├── index.html          # Main entry point
├── assets/
│   ├── index-[hash].js # Main JavaScript bundle
│   ├── index-[hash].css # Styles
│   └── [images]        # Optimized images
```

## Build Output Analysis
- Main JS bundle: ~444KB (133KB gzipped)
- CSS bundle: ~104KB (16KB gzipped)  
- Images: Automatically optimized
- Total initial load: ~150KB gzipped

## SEO & Meta Tags
- Meta description included
- Open Graph tags for social sharing
- Proper heading hierarchy
- Alt text on images
- Semantic HTML structure