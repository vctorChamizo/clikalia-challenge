FROM node:10-alpine

WORKDIR /app

COPY . .

RUN yarn install
RUN yarn run build

EXPOSE 3000

CMD yarn run start