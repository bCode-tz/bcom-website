# 🔄 Update Domain URLs After Deployment

After deploying your website, you **MUST** update the domain URLs in these files with your actual website URL.

---

## Files to Update

### 1. sitemap.xml
**Replace:** `https://www.bcom-africa.com/`  
**With:** Your actual domain (e.g., `https://your-site.netlify.app` or `https://www.yourdomain.com`)

**How to update:**
- Open `sitemap.xml`
- Use Find & Replace (Ctrl+H)
- Find: `bcom-africa.com`
- Replace: `your-actual-domain.com` (or your Netlify/GitHub Pages URL)
- Replace All

---

### 2. robots.txt
**Replace:** `https://www.bcom-africa.com/sitemap.xml`  
**With:** Your actual sitemap URL

**How to update:**
- Open `robots.txt`
- Find the line: `Sitemap: https://www.bcom-africa.com/sitemap.xml`
- Replace with: `Sitemap: https://your-actual-domain.com/sitemap.xml`

---

### 3. index.html
**Update these locations:**

#### A. Canonical URL (around line 37)
**Find:**
```html
<link rel="canonical" href="https://www.bcom-africa.com/">
```
**Replace with:**
```html
<link rel="canonical" href="https://your-actual-domain.com/">
```

#### B. Structured Data - URL (around line 45)
**Find:**
```json
"url": "https://www.bcom-africa.com",
```
**Replace with:**
```json
"url": "https://your-actual-domain.com",
```

#### C. Structured Data - Logo (around line 46)
**Find:**
```json
"logo": "https://www.bcom-africa.com/logo.png",
```
**Replace with:**
```json
"logo": "https://your-actual-domain.com/logo.png",
```

#### D. Open Graph URL (around line 26)
**Find:**
```html
<meta property="og:url" content="https://www.bcom-africa.com/">
```
**Replace with:**
```html
<meta property="og:url" content="https://your-actual-domain.com/">
```

#### E. Open Graph Image (around line 28)
**Find:**
```html
<meta property="og:image" content="https://www.bcom-africa.com/logo.png">
```
**Replace with:**
```html
<meta property="og:image" content="https://your-actual-domain.com/logo.png">
```

---

## Quick Find & Replace Method

1. Open each file in a text editor
2. Press `Ctrl+H` (or Cmd+H on Mac)
3. Find: `bcom-africa.com`
4. Replace: `your-actual-domain.com` (or your hosting URL)
5. Click "Replace All"
6. Save the file

---

## Example URLs

**If using Netlify:**
- `https://your-site-name.netlify.app`

**If using GitHub Pages:**
- `https://username.github.io/repo-name`

**If using custom domain:**
- `https://www.yourdomain.com` or `https://yourdomain.com`

---

## ✅ Verification

After updating, verify:
1. Open `https://your-domain.com/sitemap.xml` in browser - should show XML
2. Open `https://your-domain.com/robots.txt` in browser - should show robots.txt content
3. Check page source of your homepage - verify canonical URL is correct

---

**Important:** Update these URLs BEFORE submitting to Google Search Console!

