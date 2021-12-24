# Jenkins, SonarQube & ReactJS

This project shows how to:

- run tests in pipeline
- run SonarQube Scanner
- create a prod. image
- push it to remote docker image repo

## Docker stack setup

```shell
docker-compose up
```
## SonarQube setup

Create project called react and save the token for that project. You'll use the token in Jenkinsfile.

## Jenkins Setup

```shell
docker run --rm --name jenkins \
    --net react-jest-enzyme_sonarnet \
    -u root -p 8080:8080 \
    -v jenkins_home:/var/jenkins_home -v $(which docker):/usr/bin/docker \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -v "$HOME":/home jenkinsci/blueocean:latest
```

login to Jenkins at <http://localhost:8080>

## Add Jenkins plugins

Beside default plugins add:

- Docker
- Docker Commons
- Docker Pipeline
- SonarQube Scanner

Plugins on <http://localhost:8080/pluginManager/installed>

## Credentials

Add your Docker Hub credentials to Jenkins on page <http://localhost:8080/credentials/store/system/> and put id in Jenkinsfile
Configure SonarQube server <http://localhost:8080/configure>

## Pipeline

- make sure you set up **SonarQube Scanner** <http://localhost:8080/configureTools/>
- create pipeline using option pipeline from SCM and use `https://github.com/nikola-bodrozic/react-jest-enzyme.git` as repo URL
- run build and a new image will be in your Docker Hub repo also report from SonarQube Scanner is on <http://localhost:9000/project/issues?id=react>

## Clean up

```shell
docker container stop jenkins
docker-compose down
```

## Pull image and run/stop container

```shell
docker run -d --name react-app -p 80:80 nikolabod/react-app:YOUR-TAG
```

```shell
docker container stop react-app
```

