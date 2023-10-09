FROM maven:3.6.0-jdk-11-slim AS build
WORKDIR /app
COPY . .
RUN mvn clean package
ADD /rest-service/target/construction-web-rest-service-0.0.1-SNAPSHOT.jar ./main.jar

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "main.jar"]