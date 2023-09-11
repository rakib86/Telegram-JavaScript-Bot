# Use the official Node.js image as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the bot files to the container
COPY . .

# Start the bot when the container runs
CMD ["node", "your-bot-filename.js"]
