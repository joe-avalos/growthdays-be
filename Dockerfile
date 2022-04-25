FROM node:14.5.0-alpine

# 1 - Update APK and install linux dependencies
RUN apk update
RUN apk add --no-cache git

WORKDIR /usr/src/app

COPY package.json .
RUN npm install
COPY . .

RUN npm run build

EXPOSE 80

RUN chmod +x ./docker-entrypoint.sh

ENTRYPOINT ["sh","./docker-entrypoint.sh"]