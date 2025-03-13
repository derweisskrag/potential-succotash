# Use OpenJDK 23 as the base image
FROM openjdk:23-jdk

# Set the working directory inside the container
WORKDIR /app

# Copy the JAR file from the host to the container
COPY build/libs/demo-0.0.1-SNAPSHOT.jar /app/demo-0.0.1-SNAPSHOT.jar

# Expose the port that the application will run on
EXPOSE 8080

# Command to run the application
CMD ["java", "-jar", "demo-0.0.1-SNAPSHOT.jar"]
