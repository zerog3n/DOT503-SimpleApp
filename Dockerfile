# Docker image
FROM node:12-slim

# Set working directory
WORKDIR /app
COPY . /app

# Enable ports
EXPOSE 9000

# Build
RUN npm install
RUN npm run build

# Test
RUN npm run test ./dist/__tests__

# Start
CMD ["npm", "run", "start"]

