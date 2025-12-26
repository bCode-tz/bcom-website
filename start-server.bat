@echo off
echo ========================================
echo bCom Website - Local Server
echo ========================================
echo.

REM Check if Python is available
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Python is not installed or not in PATH.
    echo.
    echo Please install Python from https://www.python.org/
    echo Or use the alternative method below.
    echo.
    pause
    exit /b 1
)

echo Starting server...
echo.
python server.py
pause

