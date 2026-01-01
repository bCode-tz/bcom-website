# 🚀 Server Instructions - FIXED VERSION

## ✅ EASIEST WAY TO START SERVER:

**Double-click: `RUN-SERVER.bat`**

This will:
- Show you exactly which port is being used
- Display the URLs you need
- Keep the window open so you can see status

---

## 📱 Access URLs:

After starting the server, you'll see output like:

```
✅ Server starting on PORT 3000

📱 Access from your PHONE:
   → http://192.168.137.78:3000

💻 Access from your COMPUTER:
   → http://localhost:3000
```

**Use the port number shown in the server window!**

---

## 🔧 If Server Still Doesn't Work:

### Option 1: Check Windows Firewall
1. When server starts, Windows may ask to allow Python
2. Click **"Allow Access"**
3. If no popup, see `FIREWALL_FIX.md`

### Option 2: Test on Computer First
1. Start the server
2. Open browser on your computer
3. Go to: `http://localhost:PORT` (use the port shown)
4. If this works, server is running correctly

### Option 3: Check IP Address
1. Run: `ipconfig` in command prompt
2. Look for "IPv4 Address" under your WiFi adapter
3. Use that IP in the phone URL

### Option 4: Verify Same WiFi
- Phone and computer MUST be on same WiFi network
- Not mobile data on phone
- Not different WiFi networks

---

## 🎯 Quick Test Steps:

1. **Double-click `RUN-SERVER.bat`**
2. **Wait for "Server is RUNNING" message**
3. **Note the port number shown** (e.g., 3000, 4000, etc.)
4. **On computer:** Open `http://localhost:PORT`
5. **On phone:** Open `http://192.168.137.78:PORT`

---

## ⚠️ Common Issues:

### "Port already in use"
- Close other Python servers
- Restart computer if needed
- Server will try different ports automatically

### "Can't connect from phone"
- Check firewall (allow Python)
- Verify same WiFi network
- Check IP address is correct
- Try computer URL first to verify server works

### "Server not starting"
- Make sure Python is installed
- Check for error messages in the window
- Try running: `python test-server.py` manually

---

## 📞 Server Status:

The server window will show:
- ✅ Green messages = Working
- ❌ Red messages = Error (read the message)

**Keep the server window open while testing!**

