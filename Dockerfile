FROM node:latest

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install
RUN npm run build

# Bundle app source
COPY . .

# run app
CMD [ "npm", "run", "start-docker" ]