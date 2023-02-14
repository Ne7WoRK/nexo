## Local build
```docker-compose up -d```

## Docker

### hello-world 
Straightforward dockerfile where we use lightweight alpine image to run the **hello-world** application, adjusting the respective timezone through ```docker-compose``` build argument and setting up the working directory for easier debugging.

## Docker-compose
```docker-compose build``` feature was used to ensure integration testing of new functionalities. This is particularly useful when we have multiple microservices which ```depend_on``` each other, which is usually the case in enterprise applications. Building and running the whole ```docker-compose``` stack ensures the images are not only build, but they are also started as part of the ```docker-compose``` stack. This approach can partially guarantee that modifications or new features will not break the application.

Another approach would be just to build the images individually and push them within a docker registry, but that would require future testing of the ```docker-compose``` stack.

**NOTE:** This approach does not guratantee functionality and should not be considered as a replacement to integration/unit tests at code level or as a replacement of a regression testing suite.

## Github Actions
The CI/CD pipeline was designed to ```docker-compose up -d``` the whole microservice stack on push events on any branch or tag. In this way the CI/CD process can provide immediate feedback to developers if their new / modified functionality works or not as part of the docker-compose stack.

Releases would be done through tagging the ```main``` branch, which will be *golden source of truth*. After tagging the ```main``` a CI/CD pipeline will be triggered to **build the stack and push** newly created docker images. Moreover, the main branch should be protected where only approved staff should be approving merge requests after the respective code reviews.

**NOTE:** In current implementation images that are not build from **git tags** are ignored and deleted after the build has been completed. However, this could be further enhanced by pushing dev images to a docker registry such as **Docker hub / JFrog / Nexus** and defining e.g. 30 days expiration time.

## Kubernetes (minikube)
