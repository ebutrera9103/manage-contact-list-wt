FROM node:16.3.0 AS builder

WORKDIR /app

COPY ./package.json ./
COPY prisma ./prisma/


RUN npm install
COPY . .
CMD [ "npm", "run", "start" ]








