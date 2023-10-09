FROM openjdk:11

VOLUME /tmp
EXPOSE 8080
COPY rest-service/target/*.jar main.jar

ENTRYPOINT ["java", "-jar", "/main.jar"]