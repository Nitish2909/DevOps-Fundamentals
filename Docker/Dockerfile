
# This Dockerfile is for Backend.

# This Dockerfile sets up a Node.js application in a containerized environment. It uses the official Node.js image, installs dependencies, and starts the application.

# 1. Base Image
From node:22

# 2. Set working directory
WORKDIR /app

# 3. Copy package.json and package-lock.json (copy dependencies)
COPY package*.json ./

# 4. Install dependencies
RUN npm install

#5 . Copy the rest of the application code
COPY . .

# 6. Expose the port the app runs on
EXPOSE 3000

# 7. Start the application
CMD ["npm", "start"]

