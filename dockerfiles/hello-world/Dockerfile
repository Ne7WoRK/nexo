FROM node:lts-alpine3.17

ARG TIME_ZONE

# Set the timezone to Europe / Sofia.
RUN apk add tzdata \
 && cp /usr/share/zoneinfo/${TIME_ZONE} /etc/localtime \
 && echo ${TIME_ZONE} > /etc/timezone               \
 && apk del tzdata

# Add app contents
COPY hello-world-app /app

# Set container working dir
WORKDIR /app

# Get npm dependencies for the project
RUN npm install

EXPOSE 80

CMD [ "node", "app.js" ]
