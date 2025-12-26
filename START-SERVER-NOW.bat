@echo on
title bCom Server
color 0B
cls
cd /d "%~dp0"
echo.
echo ========================================
echo    bCom Website Server
echo ========================================
echo.
echo Starting Python server...
echo.
python test-connection.py
echo.
echo ========================================
echo Server stopped.
echo ========================================
pause

