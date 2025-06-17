# 1) Build stage
FROM maven:3.9.0-eclipse-temurin-17 AS build
WORKDIR /app

# Kopiér pom og source, og byg uden tests
COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests -B

# 2) Runtime stage
FROM eclipse-temurin:17-jre-jammy
WORKDIR /app

# Hent det færdige jar fra build-staget (navnet matcher dit pom.xml)
COPY --from=build /app/target/backend-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080
ENTRYPOINT ["java","-jar","app.jar"]
