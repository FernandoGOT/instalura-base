FROM node:lts-alpine3.13
WORKDIR /usr/src/app
COPY ["package.json", "yarn.lock", "./"]
RUN yarn
COPY . .
EXPOSE 3000
CMD ["yarn", "dev"]
