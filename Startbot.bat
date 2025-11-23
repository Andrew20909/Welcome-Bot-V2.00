@echo off
color 0B
title Greetings Bot Launcher

:menu
cls
echo =========[ GREETINGS BOT ]=========
echo 1) Start Bot
echo 2) Stop Bot
echo 3) View Logs
echo ====================================
set /p option="Choose: "

if "%option%"=="1" goto start
if "%option%"=="2" goto stop
if "%option%"=="3" goto logs

echo Invalid choice!
pause
goto menu

:start
cls
echo Starting bot...
node index.js
echo Bot stopped.
pause
goto menu

:stop
cls
echo Stopping bot...
taskkill /IM node.exe /F >nul 2>&1
echo Bot stopped.
pause
goto menu

:logs
cls
echo Logs:
if exist logs.txt (type logs.txt) else (echo No logs found.)
pause
goto menu
