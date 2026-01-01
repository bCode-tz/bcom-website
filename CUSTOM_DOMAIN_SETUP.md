# 🌐 Setting Up Custom Domain

This guide will help you connect your custom domain to your free hosting (Netlify or GitHub Pages).

## 📋 Prerequisites

1. **Domain Name**: You need to own `bCom-Africa.com` (or `bcom-africa.com`)
2. **Domain Registrar**: Where you bought the domain (GoDaddy, Namecheap, etc.)
3. **Access to DNS Settings**: You'll need to edit DNS records

## 🚀 Step-by-Step Guide

### Step 1: Deploy to Netlify (Free Hosting)

1. Go to https://app.netlify.com
2. Sign up/login
3. Click "Add new site" → "Deploy manually"
4. Drag and drop your `bComWebsite` folder
5. Wait for deployment (you'll get a temporary URL like `random-name.netlify.app`)

### Step 2: Add Custom Domain in Netlify

1. In Netlify dashboard, click on your site
2. Go to **Site settings** → **Domain management**
3. Click **Add custom domain**
4. Enter your domain: `bcom-africa.com` (or `bCom-Africa.com`)
5. Netlify will show you DNS configuration instructions

### Step 3: Configure DNS at Your Domain Registrar

You need to add DNS records at your domain registrar. Here's what to add:

#### Option A: Using CNAME (Recommended - Easier)

1. Go to your domain registrar (GoDaddy, Namecheap, etc.)
2. Find **DNS Management** or **DNS Settings**
3. Add a new **CNAME record**:
   - **Type**: CNAME
   - **Name/Host**: `@` or leave blank (for root domain) OR `www` (for www.bcom-africa.com)
   - **Value/Target**: `your-site-name.netlify.app` (Netlify will show you the exact value)
   - **TTL**: 3600 (or leave default)

4. If you want both `bcom-africa.com` AND `www.bcom-africa.com`:
   - Add CNAME for `www` pointing to `your-site-name.netlify.app`
   - Add A record for `@` (root) - Netlify will provide IP addresses

#### Option B: Using A Records (For Root Domain)

Netlify will provide you with IP addresses. Add A records:
- **Type**: A
- **Name/Host**: `@` or leave blank
- **Value**: IP address from Netlify (usually 4 IP addresses)
- **TTL**: 3600

### Step 4: Wait for DNS Propagation

- DNS changes can take **5 minutes to 48 hours** to propagate
- Usually takes 15-30 minutes
- You can check status at: https://www.whatsmydns.net

### Step 5: SSL Certificate (Automatic!)

- Netlify automatically provides **free SSL certificates**
- Once DNS is configured, Netlify will issue SSL certificate
- Your site will be available at `https://bcom-africa.com` (secure HTTPS)

## 🔧 Common Domain Registrars Setup

### GoDaddy

1. Login to GoDaddy
2. Go to **My Products** → **DNS** (next to your domain)
3. Scroll to **Records** section
4. Click **Add** to add new records
5. Follow Netlify's DNS instructions

### Namecheap

1. Login to Namecheap
2. Go to **Domain List** → Click **Manage** next to your domain
3. Go to **Advanced DNS** tab
4. Add new records as instructed by Netlify

### Google Domains / Cloudflare

1. Similar process - find DNS settings
2. Add CNAME or A records as provided by Netlify

## ✅ Verification Checklist

- [ ] Site deployed to Netlify
- [ ] Custom domain added in Netlify settings
- [ ] DNS records added at domain registrar
- [ ] DNS propagation complete (check with whatsmydns.net)
- [ ] SSL certificate issued (automatic, check in Netlify)
- [ ] Site accessible at `https://bcom-africa.com`
- [ ] Site accessible at `https://www.bcom-africa.com` (if configured)

## 🎯 Important Notes

### Domain Name Format
- Domain names are **case-insensitive** but typically lowercase
- `bCom-Africa.com` = `bcom-africa.com` = `BCOM-AFRICA.COM`
- Use lowercase in DNS settings: `bcom-africa.com`

### HTTPS/SSL
- Netlify provides **free SSL certificates** automatically
- Your site will be secure with HTTPS
- Certificate renews automatically

### Subdomain Options
- `bcom-africa.com` (main site)
- `www.bcom-africa.com` (with www - recommended to set up both)
- `admin.bcom-africa.com` (optional, for admin panel)

## 🐛 Troubleshooting

### Domain Not Working?

1. **Check DNS Propagation**
   - Visit: https://www.whatsmydns.net
   - Enter your domain
   - Check if DNS records are propagated globally

2. **Verify DNS Records**
   - Double-check CNAME/A records at your registrar
   - Make sure they match Netlify's instructions exactly

3. **Check Netlify Domain Settings**
   - Go to Site settings → Domain management
   - Verify domain is added correctly
   - Check SSL certificate status

4. **Wait Longer**
   - DNS can take up to 48 hours (rare, usually 15-30 min)
   - Clear browser cache
   - Try incognito/private browsing

### SSL Certificate Issues?

- Netlify SSL is automatic
- If certificate is pending, wait 5-10 minutes after DNS is configured
- Check SSL status in Netlify dashboard

## 📞 Need Help?

If you're stuck:
1. Check Netlify's domain documentation: https://docs.netlify.com/domains-https/custom-domains/
2. Contact your domain registrar's support
3. Check Netlify's status page for any issues

---

**Pro Tip**: Set up both `bcom-africa.com` and `www.bcom-africa.com` so users can access your site either way!
