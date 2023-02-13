FROM node:lts-alpine3.17

COPY hello-world-app /app

WORKDIR /app

RUN npm install

EXPOSE 80

CMD [ "node", "app.js" ]
