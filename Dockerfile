FROM node:17-alpine
WORKDIR /usr/app

COPY . .
RUN yarn install
RUN npm install
