FROM node:22-alpine3.20

WORKDIR /app

COPY ./package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3301

CMD [ "node","run","build" ]
