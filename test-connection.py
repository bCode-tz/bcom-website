#!/usr/bin/env python3
"""Test if we can create a simple server"""
import http.server
import socketserver
import socket
import os

print("Testing server setup...")
print("=" * 50)

# Test if we can bind to a port
def test_port(port):
    try:
        test_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        test_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        test_socket.bind(('', port))
        test_socket.close()
        return True
    except:
        return False

# Find available port
ports_to_try = [3000, 4000, 5000, 6000, 7000, 8000, 8080, 9000, 8888]
available_port = None

for port in ports_to_try:
    if test_port(port):
        available_port = port
        print(f"✓ Port {port} is available")
        break
    else:
        print(f"✗ Port {port} is in use")

if not available_port:
    print("\n❌ No available ports found!")
    input("Press Enter to exit...")
    exit(1)

print(f"\n✅ Using port {available_port}")
print("=" * 50)

# Change to script directory
os.chdir(os.path.dirname(os.path.abspath(__file__)))

# Get IP
try:
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    s.connect(("8.8.8.8", 80))
    local_ip = s.getsockname()[0]
    s.close()
except:
    local_ip = "192.168.137.78"

print("\n" + "=" * 50)
print("🚀 SERVER STARTING")
print("=" * 50)
print(f"\nPort: {available_port}")
print(f"\n💻 Computer: http://localhost:{available_port}")
print(f"📱 Phone: http://{local_ip}:{available_port}")
print(f"\n🔐 Admin: http://{local_ip}:{available_port}/admin.html")
print("\n" + "=" * 50)
print("\n✅ Server is RUNNING!")
print("⚠️  Keep this window open!")
print("⏹️  Press Ctrl+C to stop\n")

try:
    Handler = http.server.SimpleHTTPRequestHandler
    with socketserver.TCPServer(("0.0.0.0", available_port), Handler) as httpd:
        httpd.allow_reuse_address = True
        print(f"✅ Listening on 0.0.0.0:{available_port}\n")
        httpd.serve_forever()
except KeyboardInterrupt:
    print("\n\n✅ Server stopped.")
except Exception as e:
    print(f"\n❌ Error: {e}")
    input("\nPress Enter to exit...")

