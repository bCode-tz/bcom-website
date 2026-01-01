# GitHub Deployment Guide for bCom Website

This guide will help you deploy the bCom website to GitHub Pages for free hosting.

## 📋 Prerequisites

1. A GitHub account (free)
2. Git installed on your computer
3. Your website files ready

## 🚀 Step-by-Step Deployment

### Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Repository name: `bcom-website` (or your preferred name)
4. Description: "bCom - East Africa's leading cybersecurity and networking company website"
5. Set visibility to **Public** (required for free GitHub Pages)
6. **DO NOT** initialize with README, .gitignore, or license (we already have these)
7. Click **"Create repository"**

### Step 2: Initialize Git and Push to GitHub

Open your terminal/command prompt in the project folder and run:

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: bCom website ready for deployment"

# Add GitHub repository as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/bcom-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Note:** If you haven't set up Git credentials, GitHub will prompt you to authenticate.

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select:
   - Branch: `main` (or `master`)
   - Folder: `/ (root)`
5. Click **Save**
6. GitHub will provide your site URL: `https://YOUR_USERNAME.github.io/bcom-website/`

### Step 4: Automatic Deployment (Optional)

The included GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically deploy your site whenever you push changes to the main branch.

**To enable:**
1. Go to repository **Settings** → **Pages**
2. Under **Build and deployment**, select:
   - Source: **GitHub Actions**
3. Save

Now every time you push changes, the site will automatically update!

## 🔧 Manual Deployment

If you prefer manual deployment or the Actions workflow doesn't work:

1. Go to repository **Settings** → **Pages**
2. Under **Source**, select:
   - Branch: `main` (or `master`)
   - Folder: `/ (root)`
3. Click **Save**

## 🌐 Accessing Your Site

After deployment (takes 1-2 minutes), your site will be available at:
- **Main site:** `https://YOUR_USERNAME.github.io/bcom-website/`
- **Admin dashboard:** `https://YOUR_USERNAME.github.io/bcom-website/admin.html`

## 📝 Updating Your Site

### Method 1: Using Git (Recommended)

```bash
# Make your changes to files
# Then commit and push:

git add .
git commit -m "Update website content"
git push origin main
```

The site will automatically update within 1-2 minutes.

### Method 2: Using GitHub Web Interface

1. Go to your repository on GitHub
2. Click on the file you want to edit
3. Click the **pencil icon** (Edit)
4. Make your changes
5. Scroll down, add commit message
6. Click **"Commit changes"**

## 🔐 Admin Dashboard Access

After deployment, access the admin dashboard at:
- URL: `https://YOUR_USERNAME.github.io/bcom-website/admin.html`
- Username: `bCom`
- Password: `bcom@Africa`

**⚠️ IMPORTANT:** Change these credentials before going live!

## 🎯 Custom Domain Setup (Optional)

To use a custom domain (e.g., `bcom-africa.com`):

1. In repository **Settings** → **Pages**, enter your custom domain
2. Add a `CNAME` file in the root with your domain name:
   ```
   bcom-africa.com
   ```
3. Configure DNS records with your domain provider:
   - Type: `CNAME`
   - Name: `@` or `www`
   - Value: `YOUR_USERNAME.github.io`

See `CUSTOM_DOMAIN_SETUP.md` for detailed instructions.

## ✅ Deployment Checklist

Before deploying, ensure:

- [ ] All files are committed to Git
- [ ] `.gitignore` is properly configured
- [ ] `README.md` is updated
- [ ] Admin credentials are changed (if going live)
- [ ] All images and assets are included
- [ ] `_redirects` file is present (for Netlify compatibility)
- [ ] `netlify.toml` is present (for Netlify compatibility)

## 🐛 Troubleshooting

### Site not updating?
- Wait 1-2 minutes for GitHub Pages to rebuild
- Check repository **Actions** tab for deployment status
- Clear browser cache (Ctrl+F5 or Cmd+Shift+R)

### 404 errors?
- Ensure `index.html` is in the root directory
- Check that GitHub Pages is enabled in Settings
- Verify the branch name matches your repository's default branch

### Admin page not working?
- Ensure `admin.html` is in the root directory
- Check browser console for JavaScript errors
- Verify all CSS and JS files are included

### Images not loading?
- Ensure image paths are relative (e.g., `./logo.png` not `/logo.png`)
- Check that all image files are committed to Git
- Verify file names match exactly (case-sensitive)

## 📞 Support

For issues or questions:
- Email: bcom.africa@gmail.com
- Phone: +255 750 818 040

## 🎉 Success!

Your website is now live on GitHub Pages! Share your URL with the world.

---

**Next Steps:**
- [ ] Test all pages and functionality
- [ ] Update admin credentials
- [ ] Add Google Analytics (optional)
- [ ] Set up custom domain (optional)
- [ ] Share your site URL!
