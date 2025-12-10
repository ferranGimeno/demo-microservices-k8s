# --- Stage 1: Build ---
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN apk update
RUN npm install

COPY . .

RUN npm run build

# --- Stage 2: Runtime ---
FROM nginx:alpine

COPY --from=builder /app/build /usr/share/nginx/html

RUN apk update

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
