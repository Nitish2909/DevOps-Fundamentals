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

1. Pull the image from  <a href="https://hub.docker.com/">Docker Hub.</a>

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





