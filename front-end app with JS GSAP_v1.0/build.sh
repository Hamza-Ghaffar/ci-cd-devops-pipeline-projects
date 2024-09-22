#!/bin/bash

# Define the app name
APP_NAME="front-end-app-with-js-gsap-v1.0"

# Check if the container is already running and remove it if it exists
if [ "$(docker ps -aq -f name=$APP_NAME)" ]; then
    echo "Stopping and removing existing container: $APP_NAME"
    docker rm -f $APP_NAME  # Remove the existing container
fi

# Navigate to the app directory
cd "/var/jenkins_home/workspace/app1"

# Build the Docker image
docker build -t $APP_NAME .

# Run the Docker container
docker run -d -p 8082:80 --name $APP_NAME $APP_NAME