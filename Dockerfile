FROM node:22.11.0

WORKDIR /app

COPY ./package.json ./

RUN npm install

COPY . .

RUN npm run build
RUN npm run start

EXPOSE 3301

CMD [ "node","run","build" ]
