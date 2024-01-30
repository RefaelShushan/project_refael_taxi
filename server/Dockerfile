FROM node:20-alpine3.19 as builder

WORKDIR /server

COPY ./package*.json ./

RUN npm install --frozen-package-lock.json

COPY ./src .

EXPOSE 3500

CMD npm run start