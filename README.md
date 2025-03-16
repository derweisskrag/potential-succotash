# potential-succotash
CGI Internship Test Assignment

This repository contains the code for the flight recommendation app built with Kotlin for the backend and Next.js for the frontend. The project also includes Docker for containerization, making it easier to deploy and test locally.

Check Estonian version: `README-EE-ESTONIA.md`

## Issue resolved

Here, I would like to tell you: do not add these lines yet:

```kt

tasks.getByName<Jar>("jar") {
    enabled = false // Disable the plain JAR
}

tasks.getByName<org.springframework.boot.gradle.tasks.bundling.BootJar>("bootJar") {
    enabled = true // Enable the executable JAR with the main manifest attribute
}
```

> These go to `gradle.build.kt` file (to make your jar if it keeps getting you plain jar)

The reason is simple: if your app works (following the guide below), it works. If it does not, and the error mentions `no manifest main`, it occurs to something
bad that Docker cannot get its own Jar File where the main Java class is present and is manifested. In this case, you want to go through your code environment:

1. First, you check what kind of Gradle version you have. In my case: it was the latest.
2. Second, you check what kind of Gralde is used by IntelliJ IDEA (JetBrains company product). If it differs, make IDEA use your gradle.
3. Third, You wanna ensure that Docker gets Jar file, not `demo-0.0.1-SNAPSHOT-plain.jar`. This is very important. Docker wants Jar, not plain jar.
4. Issue: if IDEA gradle produces plain jar, but your gradle when running `./gradlew clean build` or `./gradlew bootJar` produces what Dockers needs: `your_app.jar`, and gradle versions differ: delete all jars, make IDEA use your gradle, build your projects with `./gradlew clean build`. In my case, IDEA produced the `jar` with build too, so I did not have to run this command in the console (terminal). You can use the lines of code above and append them to `gradle.build.kt`.
5. Nice. If you are here. Check up on the Docker File. You do not need to compose.yaml, but I kept it anyway and used it. It worked, so why not? At this point, all you do is `./run.ps1` if you are on windows, and if you use Linux, I will add the file `run_build.sh` for you. If you prefer manually, you can do `docker build -t kotlin-app:latest .` and then you can `docker run -p 8080:8080 kotlin-app:latest` or just click those buttons in Docker file inside IDEA.
6. Enjoy! Check my secret API route: `localhost:8080/Furina/furina`.

## Apology

I apologize for not making the full commercial app. Last year, I applied for your company, I delivered only NextJS part. Kotlin did not work. 

This year, I deliver you Kotlin+Docker+NextJS (15.2 Modern TS) to you. It worked. It pushed to DockerHub. GitHub actions worked! I leanred CI/CD. I am a engineer now! I will apply next year too.

## Alternative

As the thing is 3 days ago deployed to DockerHub you can do

```
docker pull kuuking/kotlin-app:latest
```

```
docker run -p 8080:8080 kuuking/kotlin-app:latest
```

So, you are not even supposed to git clone, but the issue is Vercel that uses NextJS app, may not fetch data via API. It is because Docker is localhost, but must be `https:server.com/flights`. But if you run NextJS locally, it will fetch as long as Kotlin is running on 8080, as shown above.

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
