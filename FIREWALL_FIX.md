# Firewall Fix Guide

If you can't connect to the server from your phone, Windows Firewall might be blocking it.

## Quick Fix:

1. **When the server starts**, Windows may show a popup asking to allow Python through the firewall
   - Click **"Allow Access"** or **"Allow"**

2. **If no popup appears**, manually allow Python:

   a. Open **Windows Defender Firewall**
   - Press `Win + R`
   - Type: `firewall.cpl`
   - Press Enter

   b. Click **"Allow an app or feature through Windows Defender Firewall"**

   c. Click **"Change settings"** (if needed)

   d. Find **"Python"** in the list
   - If not listed, click **"Allow another app..."**
   - Browse to: `C:\Users\busem\AppData\Local\Programs\Python\Python3XX\python.exe`
   - Or find Python in: `C:\Python3XX\python.exe`
   - Check both **Private** and **Public** networks
   - Click **OK**

3. **Alternative: Temporarily disable firewall** (for testing only)
   - Not recommended for production
   - Only for local testing

## Test Connection:

1. Make sure server is running (you should see output in terminal)
2. On your phone, try: `http://192.168.137.78:8888`
3. If still not working, check:
   - Phone and computer on same WiFi?
   - IP address correct? (run `get-ip.bat`)
   - Server showing "Server started successfully"?

## Port Information:

- **Current Port:** 8888
- **If 8888 is blocked**, edit `simple-server.py` and change `PORT = 8888` to another number like `3000` or `9000`

