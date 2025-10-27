# Deployment Guide for Zenith Pact Website

This guide covers deploying your Zenith Pact website to various hosting platforms.

## 📦 Pre-Deployment Checklist

- [ ] Update logo at `public/assets/logo.png`
- [ ] Replace placeholder images with your own
- [ ] Update contact information in `Contact.jsx`
- [ ] Test all routes and links
- [ ] Verify responsive design on all devices
- [ ] Test contact form functionality
- [ ] Build and test production bundle locally

## 🚀 Deployment Options

### 1. Vercel (Recommended)

Vercel is perfect for React/Vite applications with zero configuration.

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow prompts to link project
# Production deployment
vercel --prod
```

**Or use Vercel Dashboard:**
1. Go to [vercel.com](https://vercel.com)
2. Import your Git repository
3. Vercel auto-detects Vite configuration
4. Click "Deploy"

### 2. Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy
netlify deploy --prod
```

**Or use Netlify Dashboard:**
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the `dist` folder
3. Or connect your Git repository

**Netlify Configuration** (`netlify.toml`):
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 3. GitHub Pages

**Update `vite.config.js`:**
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/', // Add this line
  server: {
    port: 5173,
    open: true
  }
})
```

**Deploy:**
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

# Deploy
npm run deploy
```

### 4. Firebase Hosting

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Initialize
firebase init hosting

# Build
npm run build

# Deploy
firebase deploy
```

**Firebase Configuration:**
- Public directory: `dist`
- Configure as single-page app: Yes
- Set up automatic builds: Optional

### 5. AWS S3 + CloudFront

```bash
# Build the project
npm run build

# Upload to S3 bucket
aws s3 sync dist/ s3://your-bucket-name --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

### 6. Docker Deployment

**Create `Dockerfile`:**
```dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**Create `nginx.conf`:**
```nginx
server {
  listen 80;
  location / {
    root /usr/share/nginx/html;
    index index.html;
    try_files $uri $uri/ /index.html;
  }
}
```

**Build and Run:**
```bash
docker build -t zenith-pact .
docker run -p 8080:80 zenith-pact
```

## 🔧 Environment Configuration

### Production Environment Variables

Create `.env.production`:
```env
VITE_API_URL=https://api.zenithpact.com
VITE_CONTACT_EMAIL=contact@zenithpact.com
VITE_GA_TRACKING_ID=UA-XXXXXXXXX-X
```

Update code to use:
```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

## 🌐 Custom Domain Setup

### Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### Netlify
1. Go to Domain Settings
2. Add custom domain
3. Configure DNS or use Netlify DNS

### Cloudflare (CDN)
1. Add your site to Cloudflare
2. Update nameservers
3. Enable HTTPS, caching, and optimization

## 📊 Performance Optimization

### Before Deployment:

1. **Optimize Images:**
   ```bash
   npm install -D imagemin imagemin-webp
   ```

2. **Enable Code Splitting:**
   Already configured with Vite and React Router

3. **Compress Assets:**
   ```bash
   npm install -D vite-plugin-compression
   ```

4. **Analyze Bundle:**
   ```bash
   npm install -D rollup-plugin-visualizer
   npm run build
   ```

### Vite Production Optimizations

Update `vite.config.js`:
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    react(),
    compression({ algorithm: 'gzip' })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          three: ['three', '@react-three/fiber', '@react-three/drei'],
          motion: ['framer-motion']
        }
      }
    }
  }
})
```

## 🔒 Security Headers

Add security headers (varies by platform):

**Netlify (`netlify.toml`):**
```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

**Vercel (`vercel.json`):**
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-Content-Type-Options", "value": "nosniff" }
      ]
    }
  ]
}
```

## 📈 Analytics Setup

### Google Analytics

```bash
npm install react-ga4
```

**In `src/main.jsx`:**
```javascript
import ReactGA from 'react-ga4'

ReactGA.initialize('G-XXXXXXXXXX')
ReactGA.send('pageview')
```

## 🧪 Testing Before Deployment

```bash
# Build locally
npm run build

# Preview production build
npm run preview

# Visit http://localhost:4173
```

## 📝 Post-Deployment Tasks

- [ ] Test all pages and routes
- [ ] Verify contact form submission
- [ ] Check 3D globe loads correctly
- [ ] Test on multiple devices
- [ ] Verify SSL certificate
- [ ] Set up monitoring (UptimeRobot, etc.)
- [ ] Configure analytics
- [ ] Submit sitemap to Google Search Console

## 🆘 Troubleshooting

### Blank page after deployment
- Check browser console for errors
- Verify `base` path in `vite.config.js`
- Ensure all routes redirect to `index.html`

### 3D Globe not loading
- Check Three.js assets are included in build
- Verify WebGL is supported in browser
- Check for console errors

### Routes return 404
- Configure server to handle client-side routing
- All routes should serve `index.html`

---

For more help, consult the [Vite deployment guide](https://vitejs.dev/guide/static-deploy.html).
