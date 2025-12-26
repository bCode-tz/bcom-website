#!/usr/bin/env python3
"""
Test server - very simple and reliable
"""
import http.server
import socketserver
import socket
import os
import sys

# Try different ports if one is busy
PORTS = [3000, 4000, 5000, 6000, 7000, 9000]

def get_ip():
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except:
        return "127.0.0.1"

def find_available_port():
    for port in PORTS:
        try:
            test_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            test_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
            test_socket.bind(('', port))
            test_socket.close()
            return port
        except OSError:
            continue
    return None

class MyHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=os.path.dirname(os.path.abspath(__file__)), **kwargs)
    
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()
    
    def log_message(self, format, *args):
        # Custom logging
        print(f"[{self.address_string()}] {format % args}")

if __name__ == "__main__":
    # Change to script directory
    script_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(script_dir)
    
    # Find available port
    port = find_available_port()
    if not port:
        print("\n❌ ERROR: Could not find an available port!")
        print("   Please close other applications or restart your computer.")
        input("\nPress Enter to exit...")
        sys.exit(1)
    
    local_ip = get_ip()
    
    print("\n" + "="*70)
    print("🚀 bCom Website Server")
    print("="*70)
    print(f"\n✅ Server starting on PORT {port}")
    print(f"\n📱 Access from your PHONE:")
    print(f"   → http://{local_ip}:{port}")
    print(f"\n💻 Access from your COMPUTER:")
    print(f"   → http://localhost:{port}")
    print(f"   → http://127.0.0.1:{port}")
    print(f"\n🔐 Admin Dashboard:")
    print(f"   → http://{local_ip}:{port}/admin.html")
    print("\n" + "="*70)
    print("\n⚠️  If Windows Firewall asks, click 'Allow Access'")
    print("⚠️  Make sure your phone is on the SAME WiFi network")
    print("\n" + "="*70)
    print(f"\n✅ Server is RUNNING and LISTENING on port {port}")
    print("✅ Waiting for connections...")
    print("\n⏹️  Press Ctrl+C to stop the server\n")
    
    try:
        # Create server on all interfaces
        with socketserver.TCPServer(("0.0.0.0", port), MyHandler) as httpd:
            httpd.allow_reuse_address = True
            print(f"✅ Server bound to 0.0.0.0:{port} (all network interfaces)")
            print(f"✅ Ready to accept connections!\n")
            httpd.serve_forever()
            
    except OSError as e:
        if e.errno == 10048:
            print(f"\n❌ ERROR: Port {port} is already in use!")
            print("   The server may already be running.")
            print("   Try closing other applications or restart.")
        else:
            print(f"\n❌ ERROR: {e}")
        input("\nPress Enter to exit...")
        sys.exit(1)
    except KeyboardInterrupt:
        print("\n\n✅ Server stopped by user.")
        sys.exit(0)
    except Exception as e:
        print(f"\n❌ UNEXPECTED ERROR: {e}")
        import traceback
        traceback.print_exc()
        input("\nPress Enter to exit...")
        sys.exit(1)

