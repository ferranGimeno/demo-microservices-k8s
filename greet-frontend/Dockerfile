# --- Stage 1: Build ---
FROM ubuntu:20.04

WORKDIR /app

RUN apt-get update && apt-get install -y nodejs npm
RUN npm install && npm run build 

COPY . .

RUN npm run build

# --- Stage 2: Runtime ---
FROM ubuntu:20.04

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./

RUN apt-get update && apt-get install -y nodejs npm

RUN npm install --production

EXPOSE 3000

CMD ["node", "dist/index.js"]
