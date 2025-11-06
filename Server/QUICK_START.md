# Quick Start Guide - Simple Spring Boot Backend

## 🚀 Quick Start with H2 Database

**H2 is an in-memory database - no installation needed, works immediately!**

### Step 1: Install JDK 17 (if not installed)

1. **Download JDK 17:**
   - Go to: https://adoptium.net/temurin/releases/
   - Select: JDK 17, Windows, x64
   - Download and install the installer

2. **Verify Installation:**
   ```powershell
   java -version
   ```
   Should show: `openjdk version "17.x.x"` or similar

3. **Set JAVA_HOME (if needed):**
   ```powershell
   # Find Java installation path (usually):
   # C:\Program Files\Eclipse Adoptium\jdk-17.x.x-hotspot
   
   # Set JAVA_HOME (temporary for current session):
   $env:JAVA_HOME = "C:\Program Files\Eclipse Adoptium\jdk-17.x.x-hotspot"
   
   # Or set permanently:
   # System Properties > Advanced > Environment Variables
   # Add new variable: JAVA_HOME = C:\Program Files\Eclipse Adoptium\jdk-17.x.x-hotspot
   ```

### Step 2: Start the Server

**H2 database is configured by default - no setup needed!**

```powershell
# Navigate to Server directory
cd G:\khushi\Organica-master\Server

# Start Spring Boot server (H2 database is default)
.\mvnw.cmd spring-boot:run
```

**Or use the batch script:**
```powershell
.\start-server.bat
```

**That's it! The server will start with H2 database automatically.**

**Expected Output:**
```
...
  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::                (v3.1.0)

...
Started OrganicaApplication in X.XXX seconds
```

### Step 5: Verify Server is Running

1. Open browser: `http://localhost:9090/product/`
2. Should return JSON (empty array `[]` or product list)

## Common Errors & Quick Fixes:

| Error | Quick Fix |
|-------|-----------|
| `java: command not found` | Install JDK 17 and add to PATH |
| `JAVA_HOME not set` | Set JAVA_HOME environment variable |
| `Port 9090 already in use` | Change port in `application.properties` or kill process |
| `Connection refused` | Make sure no other application is using port 9090 |

## Need More Help?

See `TROUBLESHOOTING.md` for detailed solutions.

## Next Steps After Server Starts:

1. ✅ Server running on http://localhost:9090
2. (Optional) Access H2 Console: http://localhost:9090/h2-console
   - JDBC URL: `jdbc:h2:mem:organica`
   - Username: `sa`
   - Password: (leave empty)
3. Start frontend: `cd Client && npm start`
4. Open browser: http://localhost:3000
5. Test login/signup functionality

## 📝 Note About H2 Database:

- H2 is in-memory, so data is lost when server restarts
- Perfect for development and testing
- No installation or configuration required
- To use MySQL, update `application.properties` (see file comments)

