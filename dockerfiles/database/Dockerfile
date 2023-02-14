FROM postgres:alpine3.16

ARG TIME_ZONE

# Update packages / distribution & add some common tools.
RUN apk update upgrade    \
&&  apk add tzdata net-tools

# Set the timezone to Europe / Sofia.
RUN cp /usr/share/zoneinfo/${TIME_ZONE} /etc/localtime \
 && echo ${TIME_ZONE} > /etc/timezone               \
 && apk del tzdata

#Database credentials
ENV POSTGRES_USER ${POSTGRES_USER}
ENV POSTGRES_PASSWORD ${POSTGRES_PASSWORD}
ENV POSTGRES_DB ${POSTGRES_DB}

# Copy the SQL script to the container
COPY dockerfiles/database/scripts/create-table.sql /docker-entrypoint-initdb.d/

HEALTHCHECK --interval=10s --timeout=3s --retries=5 CMD netstat -tulpn | grep :5432 || exit 1