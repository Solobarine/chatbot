FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

COPY . .

COPY .env .env

# Expose Next.js port
EXPOSE 3000

# Install deps & build when the container starts, then run
CMD [ "sh", "-c", "npm install && npm run build && npm start" ]
