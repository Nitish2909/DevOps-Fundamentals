# What is Docker ? Why do we need it?
Docker is a container platform that allows you to build, test and deploy applications quickly. A developer defines all the applications and it's dependencies in a Dockerfile which is then used to build Docker images that defines a Docker container. Doing this ensures that your application will run in any environment.
<br>

Read more about Docker:
https://www.techwithkunal.com/blog/getting-started-with-docker


<b>Simple Explanation of Docker:</b>

```bash
Think of Docker like a "ready-made box".

You put your app + everything it needs inside the box.

This box (container) can run on any system.

It will behave exactly the same everywhere.

```

<b>Why do we need or why use Docker: </b>
Docker is used to run applications consistently, quickly, and efficiently across different environments.


# Commands for work with linux

```bash
docker run -it ubuntu

# how this command works:

This command:
Downloads the Ubuntu image (if not already present).
Creates a new container.
Starts the container.
Opens an interactive terminal inside it.


# After executing the command, you will see something like:

root@container_id:/#

Now you are inside the Ubuntu containe.


# You can run Linux commands like:
ls
pwd


# To come out of the container:

exit

```
# Docker Commands:

```bash

1. To Pull Docker images from docker-hub :

      docker pull IMAGE_NAME

2. To Check docker images:

       docker images

3. Commands to build a container by using image:

      docker run IMAGE_NAME        //This command always create a new container

4. To run the container in interactive mode.
Here,
-it in Docker means running a container in interactive terminal mode (-i keeps input open and -t provides a terminal interface).

    docker run -it IMAGE_NAME

5. To Check how many container exist.

    docker ps -a

6. To Check which container is currently running.

    docker ps 

7. Command to Start an existing container:

    docker start CONTAINER_NAME OR CONTAINER_ID

8. Command to Stop an currently running container:

     docker stop CONTAINER_NAME OR CONTAINER_ID

9. Command to delete or remove container :

     docker rm CONTAINER_ID

10. Command to delete or remove image :

    docker rmi CONTAINER_NAME OR CONTAINER_ID

```

# Docker Image :
A Docker image is a read-only, lightweight, and executable package that contains everything needed to run an application, including the code, runtime, system tools, libraries, and dependencies.
<br>

<b>There are three ways to use a docker image</b>
<br>

1. Pull the image from Docker Hub https://hub.docker.com/.
<br>

2. Create from a Dockerfile.
<br>

3. Create images from existing docker containers.

# Docker image layer :
<img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1678511501028/0971b3a7-ffa8-4c75-8da5-4a1e9219228c.png" alt="">

# Read more about Containerization :
https://sambitsinha.hashnode.dev/understanding-containerization-a-beginners-guide-to-docker

# Port Binding:
Port binding in Docker is the process of mapping a port of the host machine to a port inside a container, so that applications running inside the container can be accessed from outside.
<br>

<b>Basic Syntax</b>

```bash
docker run -p <host_port>:<container_port> <image_name>

```
<br>

<b>Example:</b>

```bash
docker run -p 8080:80 nginx


Meaning:

80 -> Port inside container (where app runs)
8080 -> Port on your system (host)
You access app using: http://localhost:8080

```

# Docker Compose:
Docker Compose is a tool used to define and manage multi-container Docker applications using a single configuration file called docker-compose.yml.
<br>
In Simple world Instead of running multiple docker run commands manually, you can define all services (containers) in one file and run them together.
<br>

<b>docker-compose.yml Example</b>

```bash
version: '3'
services:
  web:
    image: nginx
    ports:
      - "8080:80"
  app:
    image: node
    ports:
      - "3000:3000"

```
<b>Basic Commands:</b>

```bash

docker compose -f fileName.yaml up -d

//for delete
docker compose -f fileName.yaml up down 

```

# Dockerfile 
Dockerfile is a single file with all steps to create a docker image. Dockerfile is a special file that Docker can understand. Dockerfile helps to create images and those images can be used to create containers. We can compare it with a recipe needed to create a dish. We can share this Dockerfile with anyone and a Docker image can be created from it. Every step in a Dockerfile is an instruction corresponding to which some argument is provided. These Instructions instruct docker to perform a specific task when creating the image.
<br>
In Simple words we can say that A Dockerfile is a text file that contains instructions to automatically build a Docker image. It defines the environment, dependencies, and commands needed to run an application inside a container.
<br>

<b>Basic Structure of a Dockerfile :</b>

```bash
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["node", "index.js"]

```
# Here are the steps to how to Conatinerize a MERN using Docker Compose:

<b>1. Create project structure :</b>

```bash
mern-app/
│── client/          # React frontend
│── server/          # Node + Express backend
│── docker-compose.yml

```
<b>2.setUp React (Frontend)</b>

```bash
npm create vite@latest client

```
<b>3.SetUp  Backend  (Node + Express)</b>

```bash
mkdir server
cd server
npm init -y
npm install express mongoose

```
<b>4.Create Dockerfile for Backend</b>

```bash
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

```
<b>5.Create Dockerfile for Frontend</b>

```bash
# Step 1: Base image
FROM node:18

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy dependencies
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy project files
COPY . .

# Step 6: Expose port
EXPOSE 3000

# Step 7: Start React app
CMD ["npm", "run", "dev"]

```
<b>6.Create docker-compose.yml</b>

```bash
version: '3'
services:
    backend:
        build: ./server
        ports:
        - "3000:3000"
        depends_on:
        - mongo
    
    frontend:
        build: ./client
        ports:
        - "8080:3000"
    
    mongo:
        image: mongo
        ports:
        - "27017:27017"
    
    ``` 
<b>7. Add .dockerignore files</b>

```bash
# For Backend
node_modules
npm-debug.log

# For Frontend
node_modules
dist
npm-debug.log

```
<b>8. Build and Run the Application</b>

```bash
# Open terminal in root folder:

docker compose up --build

```

<b>9. Access Application</b>

```bash
# Frontend: http://localhost
# Backend: http://localhost:5000

```
<b>10. Stop the Application</b>

```bash
docker compose down
```

<b>11.Rebuild after making changes</b>

```bash
docker compose up --build   

```
