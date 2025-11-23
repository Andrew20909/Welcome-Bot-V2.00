@echo off
title Greetings Bot Package Installer
color 0B

echo ==================================================
echo              GREETINGS BOT INSTALLER
echo ==================================================
echo                   Made by Andrew
echo --------------------------------------------------
echo.

echo Installing required Node.js packages...
echo (discord.js + dotenv)
echo.

npm install discord.js dotenv

echo.
echo --------------------------------------------------
echo Packages successfully installed!
echo Press any key to exit...
echo --------------------------------------------------
pause >nul
