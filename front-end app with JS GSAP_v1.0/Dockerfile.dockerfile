# Use a base image with a web server
FROM nginx:alpine

# Copy the built files to the Nginx server
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80
