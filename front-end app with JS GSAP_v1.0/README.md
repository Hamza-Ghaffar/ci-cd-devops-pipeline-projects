# CI/CD Pipeline for Front-End Application

This repository demonstrates a simple CI/CD pipeline for a front-end application using Docker and Jenkins. The application is built and deployed automatically whenever changes are pushed to the repository.

## Overview

The pipeline consists of the following steps:

1. **Check for Existing Container**: If a container with the same name is already running, it will be stopped and removed.
2. **Build Docker Image**: The Docker image is built from the Dockerfile in the project directory.
3. **Run Docker Container**: The Docker container is started from the newly built image.

## Prerequisites

- Docker installed on your machine.
- Jenkins configured to execute shell commands.
- Access to a GitHub repository.

## Pipeline Script

Here is the script used for building and deploying the application:

```bash
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

Screenshots
![image](https://github.com/user-attachments/assets/6da5ada9-9b14-4c7d-9a6e-9b171ee7ea3c)
![image](https://github.com/user-attachments/assets/f108d571-d43d-4cad-9f8e-030c406896fb)


Contributions
ChatGPT: Provided guidance and assistance in writing the CI/CD pipeline script and README file.
Other Sources: Additional insights and best practices were gathered from various online resources and documentation.


License
This project is licensed under the MIT License - see the LICENSE file for details.


Feel free to replace the placeholder for screenshots and add any other information as needed!
```
