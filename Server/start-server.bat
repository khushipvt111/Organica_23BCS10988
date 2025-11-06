@echo off
echo ============================================
echo Starting Organica Spring Boot Server
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
echo Server will start on: http://localhost:9090
echo H2 Database Console: http://localhost:9090/h2-console
echo.
echo Press Ctrl+C to stop the server
echo.

REM Start server (H2 is default in application.properties)
call mvnw.cmd spring-boot:run

pause

