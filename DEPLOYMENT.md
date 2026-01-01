# Deployment Guide for bCom Website

This guide will help you deploy the bCom website to a production environment.

## 📋 Pre-Deployment Checklist

### 1. Security Review
- [ ] **CRITICAL**: Change admin credentials in `admin.js` (line 759)
  - Current: Username: `bCom`, Password: `bcom@Africa`
  - **This is hardcoded and visible in the source code!**
  - Consider implementing proper authentication for production

### 2. File Review
- [ ] Remove or secure `IP config.txt` (contains local IP addresses)
- [ ] Verify all image files are present and properly referenced
- [ ] Check all external links (WhatsApp, Instagram, etc.) are correct
- [ ] Ensure all PDF files in `resources & Downloads/` are accessible

### 3. Code Review
- [ ] Test all forms (contact form, newsletter subscription)
- [ ] Verify admin dashboard functionality
- [ ] Test mobile responsiveness
- [ ] Check browser compatibility (Chrome, Firefox, Safari, Edge)

### 4. Content Review
- [ ] Update contact information if needed
- [ ] Verify all service descriptions are accurate
- [ ] Check portfolio items and case studies
- [ ] Review blog posts and dates

## 🚀 Deployment Options

### Option 1: Static Hosting (Recommended)

#### GitHub Pages
1. Create a GitHub repository
2. Push your code (excluding files in `.gitignore`)
3. Go to Settings → Pages
4. Select branch and folder (usually `main` and `/root`)
5. Your site will be available at `https://yourusername.github.io/repository-name`

#### Netlify
1. Sign up at [netlify.com](https://netlify.com)
2. Drag and drop your project folder, OR
3. Connect your GitHub repository
4. Netlify will auto-deploy on every push

#### Vercel
1. Sign up at [vercel.com](https://vercel.com)
2. Import your project
3. Deploy with one click

#### Traditional Web Hosting (cPanel, FTP)
1. Upload all files via FTP/SFTP
2. Ensure `index.html` is in the root directory
3. Set proper file permissions (644 for files, 755 for directories)

### Option 2: Server Deployment

#### Apache Configuration
Add to `.htaccess`:
```apache
# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Browser caching
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
</IfModule>

# Security headers
<IfModule mod_headers.c>
    Header set X-Content-Type-Options "nosniff"
    Header set X-Frame-Options "SAMEORIGIN"
    Header set X-XSS-Protection "1; mode=block"
</IfModule>
```

#### Nginx Configuration
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/bcom;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## 📁 File Structure

```
bComWebsite/
├── index.html          # Main website
├── admin.html          # Admin dashboard
├── script.js           # Main website JavaScript
├── admin.js            # Admin dashboard JavaScript
├── styles.css          # Main website styles
├── admin.css           # Admin dashboard styles
├── logo.png            # Company logo
├── CEO.png             # CEO photo
├── *.jpg               # Image assets
├── resources & Downloads/  # PDF resources
└── .gitignore          # Git ignore rules
```

## 🔒 Security Considerations

### Current Security Issues
1. **Hardcoded Admin Credentials**: The admin login uses hardcoded credentials in `admin.js`
   - **Action Required**: Implement proper authentication before production deployment
   - Consider: JWT tokens, server-side authentication, or at minimum, environment variables

2. **Client-Side Data Storage**: All admin data is stored in `localStorage`
   - **Limitation**: Data is browser-specific and not synced across devices
   - **Future Enhancement**: Consider implementing a backend API with database

### Recommended Security Enhancements
- [ ] Implement HTTPS (SSL certificate)
- [ ] Add Content Security Policy (CSP) headers
- [ ] Implement rate limiting for admin login
- [ ] Add CSRF protection for forms
- [ ] Regular security audits

## 📊 Performance Optimization

### Before Deployment
1. **Image Optimization**
   - Compress all images (use tools like TinyPNG, ImageOptim)
   - Use WebP format where possible
   - Ensure images are appropriately sized

2. **Code Minification** (Optional)
   - Minify CSS and JavaScript files
   - Tools: UglifyJS, CSSNano, or online minifiers

3. **Caching**
   - Configure browser caching headers
   - Use CDN for static assets if possible

## 🧪 Testing Checklist

### Functionality Testing
- [ ] Navigation menu works on all pages
- [ ] Contact form submits correctly
- [ ] Newsletter subscription works
- [ ] Admin login/logout functions
- [ ] Admin CRUD operations (Services, Portfolio, Blog, Resources)
- [ ] Mobile menu toggle works
- [ ] Smooth scrolling works
- [ ] Dark mode toggle works
- [ ] Back to top button works

### Cross-Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

### Responsive Testing
- [ ] Desktop (1920x1080, 1366x768)
- [ ] Tablet (768x1024)
- [ ] Mobile (375x667, 414x896)

## 📝 Post-Deployment

### Monitoring
- [ ] Set up Google Analytics or similar
- [ ] Monitor error logs
- [ ] Set up uptime monitoring
- [ ] Configure backup strategy

### Maintenance
- [ ] Regular content updates
- [ ] Security updates
- [ ] Performance monitoring
- [ ] User feedback collection

## 🔄 Update Process

1. Make changes locally
2. Test thoroughly
3. Commit to version control
4. Deploy to staging (if available)
5. Test staging environment
6. Deploy to production
7. Verify production deployment

## 📞 Support

For deployment issues or questions:
- Email: bcom.africa@gmail.com
- Phone: +255 750 818 040

## ⚠️ Important Notes

1. **Admin Credentials**: Must be changed before production deployment
2. **localStorage Data**: Admin data is stored in browser localStorage - this means:
   - Data is not synced across devices
   - Data is lost if browser cache is cleared
   - Consider implementing backend storage for production
3. **File Uploads**: Currently, files are stored as base64 in localStorage, which has size limitations
4. **No Backend**: This is a static website with no server-side processing

---

**Last Updated**: January 2026
**Version**: 1.0
