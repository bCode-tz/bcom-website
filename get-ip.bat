@echo off
echo ========================================
echo Your Local IP Address
echo ========================================
echo.
echo This is the IP address to use on your phone:
echo.

REM Get IP address using ipconfig
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /c:"IPv4 Address"') do (
    set ip=%%a
    set ip=!ip: =!
    echo   http://!ip!:8000
)

echo.
echo Make sure your phone is on the same WiFi network!
echo.
pause

