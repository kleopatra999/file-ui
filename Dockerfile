#
# CloudBoost File-Ui Dockerfile
#

# Pull base image nodejs image.
FROM node:boron

#Maintainer.
MAINTAINER Ritish Gumber <ritishgumber@gmail.com>

ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/


WORKDIR /opt/app
ADD . /opt/app

# Expose ports.
#   - 8888: CloudBoost File-ui
EXPOSE 8888

#Run the app
CMD [ "node", "server.js" ]