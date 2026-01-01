#!/usr/bin/env python3
"""
Simplified HTTP server - more reliable
"""
import http.server
import socketserver
import socket
import os

PORT = 3000

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=os.path.dirname(os.path.abspath(__file__)), **kwargs)
    
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-cache')
        super().end_headers()

def get_ip():
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except:
        return "127.0.0.1"

if __name__ == "__main__":
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    local_ip = get_ip()
    
    print("\n" + "="*70)
    print("bCom Website Server - Starting...")
    print("="*70)
    print(f"\n✓ Server running on PORT {PORT}")
    print(f"\n📱 Access from your phone:")
    print(f"   http://{local_ip}:{PORT}")
    print(f"\n💻 Access from computer:")
    print(f"   http://localhost:{PORT}")
    print(f"   http://127.0.0.1:{PORT}")
    print("\n" + "="*70)
    print("\n⚠ Make sure Windows Firewall allows Python through!")
    print("⚠ Press Ctrl+C to stop the server\n")
    
    try:
        with socketserver.TCPServer(("0.0.0.0", PORT), Handler) as httpd:
            print(f"✓ Server started successfully on port {PORT}")
            print(f"✓ Listening on all interfaces (0.0.0.0)\n")
            httpd.serve_forever()
    except OSError as e:
        if e.errno == 10048:
            print(f"\n❌ ERROR: Port {PORT} is already in use!")
            print("   Please close other applications using this port.")
        else:
            print(f"\n❌ ERROR: {e}")
        input("\nPress Enter to exit...")
    except KeyboardInterrupt:
        print("\n\n✓ Server stopped.")
    except Exception as e:
        print(f"\n❌ ERROR: {e}")
        input("\nPress Enter to exit...")

