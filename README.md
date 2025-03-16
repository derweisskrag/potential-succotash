# potential-succotash
CGI Internship Test Assignment

This repository contains the code for the flight recommendation app built with Kotlin for the backend and Next.js for the frontend. The project also includes Docker for containerization, making it easier to deploy and test locally.

## Project Setup

### Prerequisites
- Docker (for containerization)
- Java JDK 23 (or higher) for Kotlin backend
- Node.js and npm (for frontend)
  
### Run Locally

Follow these steps to run the app on your local machine:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/potential-succotash.git
    cd potential-succotash
    ```

2. **Set up the backend (Kotlin)**:
    - Ensure you have Java JDK 23 installed (if you don't, download it from [here](https://adoptopenjdk.net/)).
    - Update the Gradle build file if needed to switch from JDK 17 to JDK 23.
    - Run tests to make sure everything is working:
      ```bash
      ./gradlew test
      ```

3. **Build and package the backend**:
    - Clean and build the Kotlin backend:
      ```bash
      ./gradlew clean build
      ```
    - Build the backend JAR file:
      ```bash
      ./gradlew bootJar
      ```

4. **Set up Docker**:
    - Build the Docker image:
      ```bash
      docker build -t kotlin-app:latest .
      ```

    - Run the backend container:
      ```bash
      docker run -p 8080:8080 kotlin-app:latest
      ```

5. **Test the backend**:
    - Open your browser and go to `http://localhost:8080` to verify the backend is running and check the available endpoints.

### Run the Frontend (Next.js)

1. **Navigate to the frontend directory**:
    ```bash
    cd front-end
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the frontend app**:
    ```bash
    npm run dev
    ```

4. **Open the app in your browser**:
    - The app will be running at `http://localhost:3000`.
    - You can interact with the form and send data to the Kotlin backend.

---

## Features

- **Flight Recommendations**: The backend provides a sorted list of recommended flights, ordered by price. The frontend displays this information.
  
- **Form Submission**: You can submit data via a form in the frontend, which will then be sent to the Kotlin backend for processing.

---

## Testing

The project includes tests for the backend, which can be run with the following command:

```bash
./gradlew test
