# Node v8 as the base image to support ES6
FROM node:8
# Create a new user to our new container and avoid the root user
#RUN groupadd -r nodejs && useradd -m -r -g -s /bin/bash nodejs nodejs
RUN useradd --user-group --create-home --shell /bin/false nodejs && \
    apt-get clean

USER nodejs
WORKDIR /home/nodejs/app
COPY package.json .
RUN npm install --production
COPY . . 
ENV  NODE_ENV production
#EXPOSE 8080
CMD ["npm", "start"]

# ENV HOME=/home/nodejs
# COPY package.json $HOME/app/
# #COPY src/ $HOME/app/src
# RUN chown -R nodejs:nodejs $HOME/* /usr/local/
# WORKDIR $HOME/app
# RUN npm cache clean && \
#     npm install --silent --progress=false --production   
# RUN chown -R nodejs:nodejs $HOME/*
# USER nodejs
# EXPOSE 8080
#CMD ["npm", "start"]