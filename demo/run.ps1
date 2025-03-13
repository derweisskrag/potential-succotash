# Run the tests to ensure everything works as expected before building
Write-Host "Running tests..."
./gradlew test

# Check if the test command failed (non-zero exit code)
if ($LASTEXITCODE -ne 0) {
    Write-Host "Tests failed. Exiting."
    exit $LASTEXITCODE
}

# If tests pass, proceed to build the project
Write-Host "Building application..."
./gradlew build

# Create the bootable JAR file using Spring Boot's bootJar task
Write-Host "Creating bootable JAR..."
./gradlew bootJar

# Build the Docker image with the 'kotlin-app:latest' tag
Write-Host "Building Docker image..."
docker build -t kotlin-app:latest .

# Run the Docker container, exposing port 8080
Write-Host "Running Docker container..."
docker run -p 8080:8080 kotlin-app:latest
