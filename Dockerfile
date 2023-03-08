FROM node:19.6.0

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3001

CMD [ "yarn", "run", "start:prod" ]