#!/usr/bin/env python3
"""
Simple HTTP server for local development
Accessible from your phone on the same network
"""
import http.server
import socketserver
import socket
import webbrowser
import sys
import os

PORT = 8888

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Add CORS headers for mobile access
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', '*')
        # Cache control for development
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

def get_local_ip():
    """Get the local IP address"""
    try:
        # Connect to a remote address to determine local IP
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except Exception:
        return "127.0.0.1"

def main():
    # Change to the directory where the script is located
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    local_ip = get_local_ip()
    
    print("=" * 60)
    print("bCom Website - Local Development Server")
    print("=" * 60)
    print(f"\nServer starting on port {PORT}...")
    print(f"\nLocal access:")
    print(f"  http://localhost:{PORT}")
    print(f"  http://127.0.0.1:{PORT}")
    print(f"\nNetwork access (from your phone):")
    print(f"  http://{local_ip}:{PORT}")
    print("\n" + "=" * 60)
    print("\nTo access from your phone:")
    print("1. Make sure your phone is on the same WiFi network")
    print("2. Open a browser on your phone")
    print(f"3. Go to: http://{local_ip}:{PORT}")
    print("\n" + "=" * 60)
    print("\nPress Ctrl+C to stop the server\n")
    
    try:
        with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
            # Open browser automatically
            try:
                webbrowser.open(f'http://localhost:{PORT}')
            except:
                pass
            
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n\nServer stopped.")
        sys.exit(0)
    except OSError as e:
        if e.errno == 10048:  # Windows: Address already in use
            print(f"\nError: Port {PORT} is already in use.")
            print("Please close any other server using this port or change the PORT number.")
        else:
            print(f"\nError: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()

