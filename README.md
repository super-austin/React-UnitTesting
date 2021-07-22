# Jenkins & ReactJS

This project shows how to:
- pull image
- lint
- run tests
- create a prod. image
- push it to remote docker image repo

## Credentials

Add your Docker Hub credentials to Jenkins on page <http://localhost:8080/credentials/store/system/> and put id in Jenkinsfile

## Add Docker plugins

- Docker
- Docker Commons
- Docker Pipeline 

## Jenkins Setup

```shell
docker run --rm -u root -p 8080:8080 \
    -v jenkins_home:/var/jenkins_home -v $(which docker):/usr/bin/docker \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -v "$HOME":/home jenkinsci/blueocean:1.24.6
```

login to Jenkins at <http://localhost:8080>

## Pipeline

- Create pipeline using option pipeline from SCM and use `https://github.com/nikola-bodrozic/react-jest-enzyme` as repo URL
- Run build and a new image will be in your Docker Hub repo

## Pull image and run/stop container

```shell
docker run -d --name react-app -p 80:80 nikolabod/react-app:d01d440
```

```shell
docker container stop react-app
```

## Versions Check

### Docker

Docker version 19.03.11-ol
docker-compose version 1.25.5

