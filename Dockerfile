# Docker image
FROM node:12.19

#COPY --from=0 /usr/bin/node /usr/bin/

#RUN apk upgrade --no-cache -U && \
#    apk add --no-cache binutils libstdc++ && \
#    strip /usr/bin/node && \
#    apk del binutils

# Install git
RUN apt-get update \        
    apt-get install -y git

RUN mkdir /home/build \      
    cd /home/build \        
    git clone https://github.com/zerog3n/DOT503-SimpleApp.git

# Set working directory
WORKDIR /home/build

# Enable ports
EXPOSE 9000

# Build
RUN npm install \
    npm run build

# Test
RUN npm run test

# Start
RUN npm run start

