# 🌐 Complete Domain Setup Guide

## You've Bought Your Domain - Let's Connect It!

---

## 🎯 Recommended: Netlify (Easiest & Best)

### Why Netlify?
- ✅ Easiest custom domain setup
- ✅ Free SSL certificate (automatic)
- ✅ Drag & drop deployment
- ✅ Auto-deploy from GitHub (optional)
- ✅ Great free tier

---

## 📋 Step-by-Step: Netlify Deployment

### PART 1: Deploy Your Website (5 minutes)

#### Step 1: Sign Up
1. Go to **https://app.netlify.com**
2. Click **"Sign up"** (use Google/GitHub for faster signup)
3. Complete registration

#### Step 2: Deploy
**Option A: Drag & Drop (Easiest)**
1. In Netlify dashboard, click **"Add new site"**
2. Select **"Deploy manually"**
3. **Drag your entire `bComWebsite` folder** into the drop zone
4. Wait 30-60 seconds
5. ✅ You'll get: `https://random-name-123.netlify.app`

**Option B: GitHub (For Auto-Updates)**
1. Create GitHub repo (see DEPLOY_NOW.md)
2. Push your code to GitHub
3. In Netlify: **"Add new site"** → **"Import from Git"** → **"GitHub"**
4. Select your repository
5. Click **"Deploy"**

---

### PART 2: Connect Your Domain (10 minutes)

#### Step 1: Add Domain in Netlify
1. In Netlify, click on your deployed site
2. Go to **Site settings** (gear icon)
3. Click **"Domain management"** in left sidebar
4. Click **"Add custom domain"**
5. Enter your domain: `yourdomain.com` (whatever you bought)
6. Click **"Verify"**

#### Step 2: Get DNS Instructions
Netlify will show you:
- **4 IP addresses** (for A records)
- **Your Netlify URL** (for CNAME record)

**Write these down or keep the page open!**

#### Step 3: Configure DNS at Your Registrar

Go to where you bought your domain (GoDaddy, Namecheap, etc.)

**For Root Domain (yourdomain.com):**
Add **4 A Records**:
```
Type: A
Name: @ (or leave blank)
Value: [IP Address 1 from Netlify]
TTL: 3600

Type: A
Name: @
Value: [IP Address 2 from Netlify]
TTL: 3600

Type: A
Name: @
Value: [IP Address 3 from Netlify]
TTL: 3600

Type: A
Name: @
Value: [IP Address 4 from Netlify]
TTL: 3600
```

**For WWW (www.yourdomain.com):**
Add **1 CNAME Record**:
```
Type: CNAME
Name: www
Value: your-site-name.netlify.app
TTL: 3600
```

#### Step 4: Wait for DNS Propagation
- Usually takes **15-30 minutes**
- Can take up to 48 hours (rare)
- Check status: https://www.whatsmydns.net

#### Step 5: SSL Certificate (Automatic!)
- Netlify automatically issues SSL certificate
- Takes 5-10 minutes after DNS is configured
- Your site will be at `https://yourdomain.com` ✅

---

## 🔧 Common Registrars - Quick Guide

### GoDaddy
1. Login → **My Products**
2. Find your domain → Click **DNS** button
3. Scroll to **Records** section
4. Click **Add** → Add A and CNAME records
5. Save

### Namecheap
1. Login → **Domain List**
2. Click **Manage** next to your domain
3. Go to **Advanced DNS** tab
4. Add records in **Host Records** section
5. Save

### Google Domains
1. Login → **My domains**
2. Click your domain
3. Go to **DNS** tab
4. Add **Custom records**
5. Save

### Cloudflare
1. Add your domain to Cloudflare
2. Update nameservers at your registrar
3. Go to **DNS** → **Records**
4. Add A and CNAME records
5. Save

---

## ✅ Verification Checklist

After setup, verify:
- [ ] Site accessible at `https://yourdomain.com`
- [ ] Site accessible at `https://www.yourdomain.com`
- [ ] SSL certificate active (green padlock in browser)
- [ ] Admin page works: `https://yourdomain.com/admin.html`
- [ ] All images load correctly
- [ ] Mobile version works

---

## 🆘 Troubleshooting

### "Domain not verified" in Netlify?
- Check DNS records are correct
- Wait longer (can take up to 48 hours)
- Verify records at: https://www.whatsmydns.net

### SSL Certificate pending?
- Wait 5-10 minutes after DNS is configured
- Check DNS propagation is complete
- Contact Netlify support if stuck

### Site not loading?
- Check DNS records match Netlify exactly
- Clear browser cache
- Try incognito/private browsing
- Check Netlify deployment status

---

## 📞 Need Help?

- **Netlify Support**: https://www.netlify.com/support/
- **Netlify Docs**: https://docs.netlify.com/domains-https/custom-domains/
- **DNS Checker**: https://www.whatsmydns.net

---

**Your domain is ready! Follow the steps above to go live!** 🚀
