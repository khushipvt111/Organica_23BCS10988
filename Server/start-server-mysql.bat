@echo off
echo ============================================
echo Starting Organica Server with MySQL
echo (Make sure MySQL is installed and running)
echo ============================================
echo.

REM Check if Java is installed
java -version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Java is not installed or not in PATH!
    echo Please install JDK 17 from: https://adoptium.net/temurin/releases/
    pause
    exit /b 1
)

echo Java found! Starting server...
echo.
echo Make sure MySQL is running and database 'organica' exists!
echo Server will start on: http://localhost:9090
echo.
echo Press Ctrl+C to stop the server
echo.

REM Start server with default MySQL configuration
call mvnw.cmd spring-boot:run

pause

