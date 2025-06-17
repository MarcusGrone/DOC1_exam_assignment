# frontend/Dockerfile

# 1) Build step
FROM node:18-alpine AS build
WORKDIR /app

# Kopiér kun package.json (der er ingen yarn.lock)
COPY package.json ./
# Installer med npm (som matcher package.json)
RUN npm install

# Kopiér resten af koden og lav selve buildet
COPY . .  
RUN npm run build

# 2) Runtime step
FROM nginx:stable-alpine
# Servér det byggede React-app
COPY --from=build /app/build /usr/share/nginx/html
