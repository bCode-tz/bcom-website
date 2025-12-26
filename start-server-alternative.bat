@echo off
echo ========================================
echo bCom Website - Local Server (Alternative)
echo ========================================
echo.
echo This uses PHP built-in server (if PHP is installed)
echo Or you can use any other local server tool.
echo.

REM Check if PHP is available
php --version >nul 2>&1
if %errorlevel% equ 0 (
    echo PHP found! Starting server...
    echo.
    echo Access from your phone: http://YOUR_IP:8000
    echo.
    php -S 0.0.0.0:8000
) else (
    echo PHP not found.
    echo.
    echo Alternative options:
    echo 1. Install Python and use start-server.bat
    echo 2. Install Node.js and use: npx http-server -p 8000 -a 0.0.0.0
    echo 3. Use any local development server tool
    echo.
    pause
)

