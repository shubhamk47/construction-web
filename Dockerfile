FROM maven:3.8.5-openjdk-11 AS build
COPY . .
RUN mvn clean package -DskipTests

FROM adoptopenjdk/openjdk11:latest
COPY --from=build /rest-service/target/construction-web-rest-service-0.0.1-SNAPSHOT.jar ./main.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","main.jar"]