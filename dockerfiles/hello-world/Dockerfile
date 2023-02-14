FROM node:lts-alpine3.17

ARG TIME_ZONE

# Update packages / distribution & add some common tools.
RUN apk update upgrade    \
&& apk add tzdata net-tools

# Set the timezone to Europe / Sofia.
RUN cp /usr/share/zoneinfo/${TIME_ZONE} /etc/localtime \
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

HEALTHCHECK --interval=10s --timeout=3s --retries=5 CMD netstat -tulpn | grep :80 || exit 1
