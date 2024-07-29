# Dockerfile
FROM node:18-alpine

# Install dependencies
RUN apk add --no-cache \
  python3 \
  make \
  g++

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json package-lock.json ./

RUN npm install

# Copy app source code
COPY . .

# Build the app
RUN npm run build

# Expose the port Strapi will run on
EXPOSE 1337

# Start the server
CMD ["npm", "start"]