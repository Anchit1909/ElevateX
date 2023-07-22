# Official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory to /root
WORKDIR /GFG-PROJECT

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the current directory contents into the container at /root
COPY . .

RUN npm run build

# Set the container command
CMD ["npm", "start"]

EXPOSE 3000
