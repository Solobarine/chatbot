FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

COPY . .

COPY .env .env

EXPOSE 5000

CMD [ "sh", "-c", "npm install && npx prisma generate && npm run dev" ]
