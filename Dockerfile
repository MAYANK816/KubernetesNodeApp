FROM node:alpine
# Create a directory to hold the application code inside the image, this will be the working directory for your application
WORKDIR /usr/app

# Copy package.json and package-lock.json to the WORKDIR
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy project files and folders to the current working directory (i.e. 'app' folder) of the container
COPY . .

# Serve the app
CMD ["npm", "start"]


