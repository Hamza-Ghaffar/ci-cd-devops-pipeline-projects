#!/bin/bash

# Define the app name
APP_NAME="front-end-app-with-JS-GSAP-v1.0"

# Remove the old container if it exists
docker rm -f $APP_NAME || true  # Use '|| true' to avoid errors if the container doesn't exist

# Navigate to the app directory
cd "front-end app with JS GSAP_v1.0"

# Build the Docker image
docker build -t $APP_NAME .

# Run the Docker container on the custom network with a specific IP
docker run -d \
  --net my_custom_network \
  --ip 172.18.0.2 \
  -p 8081:80 \
  $APP_NAME
