echo on
title bCom Website Server - VISIBLE MODE
color 0A
cls

echo.
echo ============================================================
echo           bCom Website Server
echo ============================================================
echo.
echo Current Directory:
cd
echo.
echo Checking Python...
python --version
echo.
echo ============================================================
echo Starting Server...
echo ============================================================
echo.
echo IMPORTANT: Keep this window open!
echo.
echo ============================================================
echo.

python test-connection.py

echo.
echo ============================================================
echo Server has stopped.
echo ============================================================
echo.
pause

