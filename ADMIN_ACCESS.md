# 🔐 Admin Page Access After Deployment

## How to Access Admin Dashboard

After deploying your website, you can access the admin dashboard using these URLs:

### If Using Netlify (or similar hosting)

**Option 1: With Custom Domain**
```
https://bcom-africa.com/admin.html
```
or
```
https://www.bcom-africa.com/admin.html
```

**Option 2: With Netlify URL (before custom domain setup)**
```
https://your-site-name.netlify.app/admin.html
```

### If Using Other Hosting

Simply add `/admin.html` to your domain:
```
https://your-domain.com/admin.html
```

## 🔑 Login Credentials

**Current Credentials** (Change these after deployment!):
- **Username**: `bCom`
- **Password**: `bcom@Africa`

⚠️ **Security Warning**: These credentials are visible in your source code. Change them before going live!

## 📝 Step-by-Step Access

1. **Deploy your website** (follow QUICK_DEPLOY.md)
2. **Get your live URL** (e.g., `https://your-site.netlify.app`)
3. **Add `/admin.html`** to the URL
4. **Enter credentials** when prompted
5. **Access admin dashboard**

## 🔒 Security Recommendations

### Before Going Live:

1. **Change Admin Credentials**
   - Edit `admin.js` line 351
   - Replace the hardcoded username and password
   - Use a strong, unique password

2. **Consider Additional Security**
   - Add IP whitelisting (if possible)
   - Implement rate limiting
   - Use environment variables for credentials (requires backend)
   - Consider adding 2FA (two-factor authentication)

### Current Limitations:

- Credentials are in source code (visible to anyone with access)
- No server-side authentication
- Data stored in browser localStorage (not synced across devices)

## 🛡️ Quick Security Fix

To change credentials, edit `admin.js`:

```javascript
// Line 759 in admin.js
// Change from:
if (username === 'bCom' && password === 'bcom@Africa') {

// To (example):
if (username === 'your-new-username' && password === 'your-strong-password') {
```

Then redeploy your site.

## 📱 Access from Different Devices

The admin dashboard will work on:
- ✅ Desktop computers
- ✅ Laptops
- ✅ Tablets
- ✅ Mobile phones

**Note**: Admin data (services, portfolio, blog posts) is stored in browser localStorage, so:
- Data is **device-specific** (not synced across devices)
- Data is **browser-specific** (different browsers = different data)
- Data can be **lost** if browser cache is cleared

## 🔄 After Deployment Checklist

- [ ] Test admin login at `your-domain.com/admin.html`
- [ ] Change admin credentials
- [ ] Test all admin functions (add/edit services, portfolio, blog)
- [ ] Verify data persists after page refresh
- [ ] Test on mobile device
- [ ] Document new credentials securely

## 🆘 Troubleshooting

### Can't Access Admin Page?

1. **Check URL**: Make sure you're using `/admin.html` (not `/admin`)
2. **Check File**: Verify `admin.html` was uploaded during deployment
3. **Clear Cache**: Try incognito/private browsing mode
4. **Check Console**: Open browser developer tools (F12) to see any errors

### Login Not Working?

1. **Check Credentials**: Username and password are case-sensitive
2. **Check Code**: Verify credentials in `admin.js` match what you're entering
3. **Browser Storage**: Clear localStorage and try again
4. **JavaScript Errors**: Check browser console for errors

### Data Not Saving?

- Admin data is stored in browser localStorage
- Each browser/device has separate storage
- Clearing browser cache will delete data
- Consider implementing backend storage for production

## 📞 Need Help?

If you're having trouble accessing the admin page:
1. Check the browser console (F12) for errors
2. Verify the file was deployed correctly
3. Test with the exact credentials: `bCom` / `bcom@Africa`
4. Try a different browser

---

**Remember**: Change your admin credentials before going live with your custom domain!
