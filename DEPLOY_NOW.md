# 🚀 Deploy Your Website Now - Step by Step

You've bought your domain! Let's get your website live. **Netlify is recommended** for easiest custom domain setup.

---

## Option 1: Netlify (RECOMMENDED - Easiest for Custom Domains)

### Step 1: Create Netlify Account
1. Go to **https://app.netlify.com**
2. Click **"Sign up"** (use Google, GitHub, or Email)
3. Complete the signup process

### Step 2: Deploy Your Website

**Method A: Drag & Drop (Fastest - 2 minutes)**
1. In Netlify dashboard, click **"Add new site"**
2. Select **"Deploy manually"**
3. **Drag and drop** your entire `bComWebsite` folder
4. Wait 30-60 seconds for deployment
5. You'll get a URL like: `https://random-name-123.netlify.app`

**Method B: GitHub (Recommended for Updates)**
1. Create a GitHub account at **https://github.com**
2. Create a new repository (click **"New"** button)
3. Name it `bcom-website` (or similar)
4. **DO NOT** check "Initialize with README"
5. Click **"Create repository"**

6. Open PowerShell/Terminal in your project folder:
```bash
cd "c:\Users\busem\Desktop\BCOM\bComWebsite"
git init
git add .
git commit -m "Initial commit - bCom website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/bcom-website.git
git push -u origin main
```
(Replace `YOUR_USERNAME` with your GitHub username)

7. In Netlify, click **"Add new site"** → **"Import an existing project"**
8. Choose **"GitHub"** and authorize Netlify
9. Select your repository
10. Click **"Deploy site"**

### Step 3: Connect Your Custom Domain

1. In Netlify dashboard, click on your site
2. Go to **Site settings** → **Domain management**
3. Click **"Add custom domain"**
4. Enter your domain: `bcom-africa.com` (or whatever you bought)
5. Click **"Verify"**

6. Netlify will show you DNS instructions. You need to add these at your domain registrar:

**For Root Domain (bcom-africa.com):**
- **Type**: A
- **Name**: `@` (or leave blank)
- **Value**: Netlify will provide 4 IP addresses (copy all 4)
- **TTL**: 3600

**For WWW (www.bcom-africa.com):**
- **Type**: CNAME
- **Name**: `www`
- **Value**: `your-site-name.netlify.app` (Netlify shows this)
- **TTL**: 3600

7. Go to your domain registrar (where you bought the domain)
8. Find **DNS Management** or **DNS Settings**
9. Add the DNS records as shown above
10. Wait 15-30 minutes for DNS to propagate

11. Netlify will automatically issue a **free SSL certificate** (HTTPS)
12. Your site will be live at `https://bcom-africa.com`! 🎉

---

## Option 2: GitHub Pages (Alternative)

### Step 1: Create GitHub Repository
1. Go to **https://github.com/new**
2. Repository name: `bcom-website`
3. Make it **Public** (required for free GitHub Pages)
4. **DO NOT** initialize with README
5. Click **"Create repository"**

### Step 2: Push Your Code
Open PowerShell/Terminal:
```bash
cd "c:\Users\busem\Desktop\BCOM\bComWebsite"
git init
git add .
git commit -m "Initial commit - bCom website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/bcom-website.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** section (left sidebar)
4. Under **Source**, select **"main"** branch
5. Click **"Save"**
6. Your site will be at: `https://YOUR_USERNAME.github.io/bcom-website`

### Step 4: Connect Custom Domain
1. In repository **Settings** → **Pages**
2. Under **Custom domain**, enter: `bcom-africa.com`
3. Click **"Save"**
4. GitHub will create a `CNAME` file
5. Add DNS records at your domain registrar:
   - **Type**: CNAME
   - **Name**: `@` or `www`
   - **Value**: `YOUR_USERNAME.github.io`
   - **TTL**: 3600

**Note**: GitHub Pages doesn't support root domain (A records) easily. You may need to use `www.bcom-africa.com` or use a service like Cloudflare.

---

## 📋 Quick Comparison

| Feature | Netlify | GitHub Pages |
|---------|---------|--------------|
| **Ease of Setup** | ⭐⭐⭐⭐⭐ Very Easy | ⭐⭐⭐⭐ Easy |
| **Custom Domain** | ⭐⭐⭐⭐⭐ Excellent | ⭐⭐⭐ Good |
| **SSL Certificate** | ✅ Free & Automatic | ✅ Free & Automatic |
| **Auto-Deploy** | ✅ Yes (with GitHub) | ✅ Yes |
| **Free Tier** | ✅ Generous | ✅ Free |
| **Recommended** | ✅ **YES** | Good alternative |

---

## 🎯 Recommended: Netlify Steps (Quickest)

1. ✅ Sign up at netlify.com
2. ✅ Drag & drop your `bComWebsite` folder
3. ✅ Get temporary URL
4. ✅ Add custom domain in Netlify
5. ✅ Add DNS records at your registrar
6. ✅ Wait 15-30 minutes
7. ✅ Your site is LIVE! 🎉

---

## 🔧 Common Domain Registrars Setup

### GoDaddy
1. Login → **My Products** → Click **DNS** next to your domain
2. Scroll to **Records** section
3. Click **Add** to add new records
4. Follow Netlify's DNS instructions

### Namecheap
1. Login → **Domain List** → Click **Manage**
2. Go to **Advanced DNS** tab
3. Add records as shown by Netlify

### Google Domains / Cloudflare
1. Find **DNS** settings
2. Add A and CNAME records as provided by Netlify

---

## ✅ After Deployment Checklist

- [ ] Website deployed to Netlify/GitHub
- [ ] Custom domain added
- [ ] DNS records configured
- [ ] SSL certificate issued (automatic)
- [ ] Site accessible at your domain
- [ ] Test admin login at `your-domain.com/admin.html`
- [ ] All pages working correctly
- [ ] Mobile version tested

---

## 🆘 Troubleshooting

### Domain Not Working?
- Check DNS propagation: https://www.whatsmydns.net
- Verify DNS records match Netlify's instructions exactly
- Wait up to 48 hours (usually 15-30 minutes)

### SSL Certificate Pending?
- Wait 5-10 minutes after DNS is configured
- Check SSL status in Netlify dashboard

### Need Help?
- Netlify Docs: https://docs.netlify.com/domains-https/custom-domains/
- Contact your domain registrar support
- Check Netlify status page

---

**Ready to deploy? Start with Netlify - it's the easiest!** 🚀
