# Mobile Testing Guide

## Quick Start - View on Your Phone

### Method 1: Using Python Server (Recommended)

1. **Start the server:**
   - Double-click `start-server.bat`
   - Or run: `python server.py`

2. **Find your IP address:**
   - Your IP is: **192.168.137.78** (may change if you reconnect to WiFi)
   - Or run `get-ip.bat` to see current IP

3. **On your phone:**
   - Make sure your phone is on the **same WiFi network** as your computer
   - Open any browser (Chrome, Safari, etc.)
   - Go to: `http://192.168.137.78:8080`
   - The website should load!

### Method 2: Using Node.js (if Python not available)

```bash
npx http-server -p 8000 -a 0.0.0.0
```

Then access from phone: `http://YOUR_IP:8000`

### Method 3: Using PHP (if installed)

```bash
php -S 0.0.0.0:8000
```

## Troubleshooting

### Can't access from phone?

1. **Check firewall:**
   - Windows may block the connection
   - Allow Python/Node.js through Windows Firewall when prompted
   - Or temporarily disable firewall for testing

2. **Check WiFi:**
   - Phone and computer must be on the same network
   - Try disconnecting and reconnecting to WiFi

3. **Check IP address:**
   - IP may change if you reconnect
   - Run `ipconfig` and look for "IPv4 Address"
   - Or use `get-ip.bat`

4. **Try different port:**
   - If port 8000 is busy, change PORT in server.py to 8080 or 3000

### Testing Checklist

- [ ] Homepage loads correctly
- [ ] Navigation menu works (hamburger on mobile)
- [ ] All sections are visible
- [ ] Images load properly
- [ ] Buttons are tappable (not too small)
- [ ] Forms work (contact form)
- [ ] Text is readable (not too small)
- [ ] No horizontal scrolling
- [ ] Test on both portrait and landscape
- [ ] Test on different screen sizes if possible

## Your Current IP Address

**192.168.137.78**

Access from phone: `http://192.168.137.78:8000`

---

**Note:** This IP may change if you disconnect/reconnect to WiFi. Run `get-ip.bat` to get the current IP.

