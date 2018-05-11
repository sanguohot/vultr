#from mhart/alpine-node:8.9.4
from node:8.9.4-alpine

COPY . /opt/vultr

WORKDIR /opt/vultr

RUN apk update && apk add --update --no-cache --virtual .build-deps \
        binutils-gold \
        curl \
        g++ \
        gcc \
        gnupg \
        libgcc \
        linux-headers \
        make \
        python && \
		npm install && \
		apk del .build-deps
EXPOSE 10443
CMD [ "/bin/sh","-c","node src/backend/bin/start_cluster.js" ]