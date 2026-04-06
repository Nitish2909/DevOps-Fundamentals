# What is Docker ? Why do we need it?
Docker is a container platform that allows you to build, test and deploy applications quickly. A developer defines all the applications and it's dependencies in a Dockerfile which is then used to build Docker images that defines a Docker container. Doing this ensures that your application will run in any environment.

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

docker run IMAGE_NAME

4. To run the container in interactive mode.
Here,
-it in Docker means running a container in interactive terminal mode (-i keeps input open and -t provides a terminal interface).

docker run -it IMAGE_NAME

5. To Check how many container exist.

docker ps -a

6. To Check which container is currently running.

docker ps 

7.


