# potential-succotash
CGI Internship Test assignment

## Run locally

1. git clone
2. cd demo
3. check your java. I used jdk 23 for local development and it worked. so, changing java from 17 to 23 in Gradle build if necessary. Notice I turned off plain jar. then
4. ./gradlew test
5. ./gradlew clean build
6. ./gradlew bootJar
7. docker build -t your image .
8. docker run -p 8080:8080 your image
9. open up localhost:8080, check endpoints
10. open up another terminal: cd front-end. 
11. run npm run dev.
12. You can even send data from form to Kotlin. 

## Recommended flights

those work as sorted normal price compared by price. 

