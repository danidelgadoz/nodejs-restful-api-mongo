FROM node:latest

LABEL author="Daniel Delgado"

ENV PORT=3000
ENV DATA_BASE_HOST=mongodb

COPY . /var/www

WORKDIR /var/www

RUN npm install

EXPOSE $PORT

ENTRYPOINT [ "npm", "start" ]
