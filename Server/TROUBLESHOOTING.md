# Server Troubleshooting Guide

## Common Issues and Solutions

### 1. Server Won't Start - Check These First

#### Issue: MySQL Connection Error (If using MySQL)
**Symptoms:** Error message like "Communications link failure" or "Access denied for user"

**Solutions:**
- By default, the app uses H2 database (no MySQL needed!)
- If you want to use MySQL:
  - Install MySQL on your machine
  - Start MySQL service
  - Create database: `CREATE DATABASE organica;`
  - Update `application.properties` to use MySQL instead of H2
  - Verify database credentials match your MySQL setup

#### Issue: Java/JDK Not Found
**Symptoms:** "java: command not found" or "JAVA_HOME is not set"

**Solutions:**
- Install JDK 17
- Set JAVA_HOME environment variable:
  ```powershell
  # Windows PowerShell
  $env:JAVA_HOME = "C:\Program Files\Java\jdk-17"
  
  # Verify
  java -version
  echo $env:JAVA_HOME
  ```

#### Issue: Port 9090 Already in Use
**Symptoms:** "Address already in use" or "Port 9090 is already in use"

**Solutions:**
- Find and kill the process using port 9090:
  ```powershell
  # Windows
  netstat -ano | findstr :9090
  taskkill /PID <PID> /F
  ```
- Or change the port in `application.properties`:
  ```
  server.port=9091
  ```

#### Issue: Missing Dependencies
**Symptoms:** "ClassNotFoundException" or "NoClassDefFoundError"

**Solutions:**
- Clean and rebuild:
  ```bash
  cd Server
  ./mvnw.cmd clean install
  ./mvnw.cmd spring-boot:run
  ```

### 2. Database Issues

#### Verify Database Connection:
```bash
# Test MySQL connection
mysql -u root -p -h localhost -P 3306
# Enter password when prompted (default: root)
```

#### Check Database Exists:
```sql
SHOW DATABASES;
USE organica;
SHOW TABLES;
```

### 3. Application Properties Configuration

**Current Configuration:**
- Database: `jdbc:mysql://localhost:3306/organica`
- Username: `root`
- Password: `root`
- Port: `9090`

**If your MySQL has different credentials:**
1. Update `Server/src/main/resources/application.properties`
2. Change `spring.datasource.username` and `spring.datasource.password`
3. Restart the server

### 4. Razorpay Payment Configuration

**Note:** Payment functionality requires valid Razorpay keys. For local development, dummy keys are provided in `application.properties`. 

**To use real payments:**
1. Get keys from Razorpay dashboard
2. Update in `application.properties`:
   ```
   razorpay.key_id=your_actual_key_id
   razorpay.key_secret=your_actual_secret_key
   ```

### 5. Step-by-Step Server Startup

```bash
# 1. Navigate to Server directory
cd Server

# 2. Verify Java is installed
java -version

# 3. Start the server (H2 database is default - no MySQL needed!)
./mvnw.cmd spring-boot:run

# Or use the batch script:
start-server.bat

# 4. Wait for "Started OrganicaApplication" message
# 5. Server should be running on http://localhost:9090
```

### 6. Check Server Logs

When starting the server, look for:
- ✅ "Started OrganicaApplication" - Server started successfully
- ✅ "HikariPool-1 - Starting..." - Database connection pool initializing
- ✅ "Hibernate: create table..." - Database tables being created
- ❌ Any red error messages - Check the specific error

### 7. Common Error Messages

| Error | Cause | Solution |
|-------|-------|----------|
| "Port 9090 already in use" | Another process using port | Kill process or change port in application.properties |
| "JAVA_HOME not set" | Java not configured | Install JDK 17 and set JAVA_HOME |
| "java: command not found" | Java not in PATH | Install JDK 17 and add to system PATH |
| "Access denied for user 'root'" | Using MySQL with wrong password | Use H2 (default) or update MySQL password in application.properties |
| "Unknown database 'organica'" | MySQL database doesn't exist | Use H2 (default) or create database: `CREATE DATABASE organica;` |

### 8. Quick Health Check

Once server is running, test these endpoints:
- Health: `http://localhost:9090/product/` (should return product list or empty array)
- Login: `POST http://localhost:9090/auth/singin` (with email and password)
- Signup: `POST http://localhost:9090/auth/singup` (with name, email, password)

### 9. Still Having Issues?

1. Check the full error message in the console
2. Verify all prerequisites are installed (JDK 17, MySQL)
3. Ensure MySQL is accessible on localhost:3306
4. Check if port 9090 is available
5. Review application.properties configuration
6. Try cleaning and rebuilding: `./mvnw.cmd clean install`

