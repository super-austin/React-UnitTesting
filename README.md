# Jenkins, SonarQube & React

This project shows how to:

- run tests in pipeline
- run SonarQube Scanner
- create a prod. image
- push it to remote docker image repo

## Start Docker stack with SonarQube

```shell
docker-compose up
```
## SonarQube setup

Create project called react and save the token for that project. You'll use the token in Jenkins secrets.

## Jenkins Setup

```shell
docker run --rm --name jenkins \
    --net react-jest-enzyme_sonarnet \
    -u root -p 8080:8080 \
    -v jenkins_home:/var/jenkins_home -v $(which docker):/usr/bin/docker \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -v "$HOME":/home jenkinsci/blueocean:1.24.6
```

login to Jenkins at <http://localhost:8080>

## Add Jenkins plugins

Beside default plugins add:

- Docker
- Docker Commons
- Docker Pipeline
- SonarQube Scanner

Plugins on <http://localhost:8080/pluginManager/installed>

## Add Credentials in Jenkins

In <http://localhost:8080/credentials/store/system/domain/_/> add credentials for:

- Docker Hub credentials and put id from Jenkinsfile
- your SonarQube token

## Pipeline

- make sure you set up **SonarQube Scanner** <http://localhost:8080/configureTools/>
- Configure SonarQube server <http://localhost:8080/configure>
- create pipeline using option pipeline from SCM and use `https://github.com/nikola-bodrozic/react-jest-enzyme.git` as repo URL
- run build and a new image will be in your Docker Hub repo also report from SonarQube Scanner is on <http://localhost:9000/project/issues?id=react>

## Clean up

```shell
docker container stop jenkins && docker-compose down
```

## Pull image and run/stop container

```shell
docker run -d --name react-app -p 80:80 nikolabod/react-app:YOUR-COMMIT
```

```shell
docker container rm -f react-app
```

