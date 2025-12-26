@echo off
REM Quick Deployment Helper for bCom Website
REM This script helps prepare your site for deployment

echo ========================================
echo   bCom Website - Deployment Helper
echo ========================================
echo.

REM Check if git is initialized
if not exist ".git" (
    echo [INFO] Git repository not found.
    echo [INFO] Initializing git repository...
    git init
    echo.
)

echo [INFO] Checking files...
echo.

REM List important files
if exist "index.html" (
    echo [OK] index.html found
) else (
    echo [ERROR] index.html not found!
)

if exist "admin.html" (
    echo [OK] admin.html found
) else (
    echo [WARNING] admin.html not found
)

if exist "netlify.toml" (
    echo [OK] netlify.toml found (Netlify config ready)
) else (
    echo [WARNING] netlify.toml not found
)

if exist "_redirects" (
    echo [OK] _redirects found
) else (
    echo [WARNING] _redirects not found
)

echo.
echo ========================================
echo   Deployment Options:
echo ========================================
echo.
echo 1. NETLIFY (Recommended - Easiest)
echo    - Go to: https://app.netlify.com
echo    - Drag and drop this entire folder
echo    - Your site will be live in 60 seconds!
echo.
echo 2. GITHUB + NETLIFY (Auto-deploy on updates)
echo    - Push code to GitHub first
echo    - Connect GitHub to Netlify
echo    - Auto-deploys on every push
echo.
echo 3. VERCEL (Alternative)
echo    - Go to: https://vercel.com
echo    - Drag and drop or connect GitHub
echo.
echo ========================================
echo.
echo For detailed instructions, see: DEPLOY_NOW.md
echo.
echo Press any key to open deployment guide...
pause >nul

REM Try to open the deployment guide
if exist "DEPLOY_NOW.md" (
    start notepad "DEPLOY_NOW.md"
) else (
    echo Deployment guide not found. Please read DEPLOY_NOW.md manually.
)

echo.
echo Ready to deploy! Good luck!
pause









