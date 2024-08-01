FROM node:20.16.0-alpine

WORKDIR /srv/client

COPY run.sh /run.sh
RUN chmod +x /run.sh
ENTRYPOINT ["/run.sh"]
