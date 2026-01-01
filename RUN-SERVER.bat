@echo off
title bCom Website Server
color 0A
cls

echo.
echo ============================================================
echo           bCom Website Server - Starting...
echo ============================================================
echo.
echo This window will show the server status.
echo DO NOT CLOSE THIS WINDOW while testing!
echo.
echo ============================================================
echo.

python test-server.py

echo.
echo ============================================================
echo Server has stopped.
echo ============================================================
pause

