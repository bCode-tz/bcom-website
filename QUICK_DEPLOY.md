# 🚀 Quick Deploy to Netlify (Free Hosting)

## Option 1: Drag & Drop (Easiest - 2 minutes)

1. **Go to Netlify**
   - Visit: https://app.netlify.com
   - Sign up for free (use Google/GitHub/Email)

2. **Deploy Your Site**
   - On the Netlify dashboard, find "Sites" section
   - Look for "Add new site" → "Deploy manually"
   - Drag and drop your entire `bComWebsite` folder
   - Wait for deployment (usually 30-60 seconds)

3. **Get Your Live URL**
   - Netlify will give you a random URL like: `https://random-name-123.netlify.app`
   - Your site is now LIVE! 🎉

4. **Custom Domain (Optional)**
   - Go to Site settings → Domain management
   - Add your custom domain if you have one
   - **See `CUSTOM_DOMAIN_SETUP.md` for detailed instructions on setting up bCom-Africa.com**

## Option 2: GitHub + Netlify (Recommended for Updates)

### Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Create a new repository (name it `bcom-website` or similar)
3. **DO NOT** initialize with README, .gitignore, or license
4. Click "Create repository"

### Step 2: Push Your Code

Open PowerShell/Terminal in your project folder and run:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - bCom website"

# Add your GitHub repository (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Connect to Netlify

1. Go to https://app.netlify.com
2. Click "Add new site" → "Import an existing project"
3. Choose "GitHub"
4. Authorize Netlify to access GitHub
5. Select your repository
6. Click "Deploy site"

### Step 4: Auto-Deploy Setup

- Netlify will automatically deploy every time you push to GitHub
- No need to manually upload files again!

## Option 3: Vercel (Alternative Free Hosting)

1. Go to https://vercel.com
2. Sign up with GitHub/Google
3. Click "Add New Project"
4. Import your GitHub repository OR
5. Drag and drop your folder
6. Click "Deploy"

## ⚠️ Before Deploying - Quick Check

- [ ] All images are in the folder
- [ ] Test the site locally (open index.html in browser)
- [ ] Admin credentials are noted (you'll need them after deployment)

## 📝 After Deployment

1. **Test Your Live Site**
   - Visit your Netlify URL
   - Test all pages and features
   - Check mobile responsiveness

2. **Update Admin Access**
   - Go to `your-site.netlify.app/admin.html`
   - Login with current credentials (change them later!)

3. **Share Your Site**
   - Your site is now accessible worldwide!
   - Share the URL with clients and team

## 🔧 Netlify Settings (Optional)

### Build Settings
- **Publish directory**: Leave empty (or `/` if needed)
- **Build command**: Leave empty (static site)
- **Publish directory**: Leave empty

### Environment Variables (if needed later)
- Go to Site settings → Environment variables
- Add any API keys or secrets here (not needed for now)

## 🎯 Next Steps

1. **Custom Domain**: Add your domain in Netlify settings
2. **SSL**: Automatically enabled by Netlify (HTTPS)
3. **Analytics**: Enable Netlify Analytics (optional, paid feature)
4. **Forms**: Netlify Forms can handle your contact form (requires setup)

---

**Need Help?** Check the full DEPLOYMENT.md guide for more details.
