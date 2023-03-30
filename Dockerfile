

FROM node:18.8-alpine as base

FROM base as builder

WORKDIR /home/node/app
COPY package*.json ./

COPY . .
RUN npm install
RUN npm run build


EXPOSE 3000

CMD ["node", "dist/server.js"]
