FROM node:10-alpine

WORKDIR /app

COPY . .

RUN yarn install

EXPOSE 3000

CMD yarn run build