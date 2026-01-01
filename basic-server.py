import http.server
import socketserver
import os

# Use port 3000
PORT = 3000

# Change to current directory
os.chdir(os.path.dirname(os.path.abspath(__file__)))

# Create server
Handler = http.server.SimpleHTTPRequestHandler

try:
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print("=" * 60)
        print("Server running!")
        print("=" * 60)
        print(f"\nPort: {PORT}")
        print(f"\nComputer: http://localhost:{PORT}")
        print(f"Phone: http://192.168.137.78:{PORT}")
        print("\nPress Ctrl+C to stop\n")
        print("=" * 60)
        httpd.serve_forever()
except OSError as e:
    print(f"Error: Port {PORT} is in use!")
    print("Trying port 4000...")
    PORT = 4000
    try:
        with socketserver.TCPServer(("", PORT), Handler) as httpd:
            print("=" * 60)
            print("Server running!")
            print("=" * 60)
            print(f"\nPort: {PORT}")
            print(f"\nComputer: http://localhost:{PORT}")
            print(f"Phone: http://192.168.137.78:{PORT}")
            print("\nPress Ctrl+C to stop\n")
            print("=" * 60)
            httpd.serve_forever()
    except:
        print("Error starting server. Check if ports are available.")

