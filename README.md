# Jenkins & ReactJS

This project shows how to:
- checkout repo
- run tests
- create a prod. image
- push it to remote docker image repo

## Jenkins Setup

```shell
docker run --rm -u root -p 8080:8080 \
    -v jenkins_home:/var/jenkins_home -v $(which docker):/usr/bin/docker \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -v "$HOME":/home jenkinsci/blueocean:latest
```

login to Jenkins at <http://localhost:8080>

## Add Docker plugins

- Docker
- Docker Commons
- Docker Pipeline 

## Credentials

Add your Docker Hub credentials to Jenkins on page <http://localhost:8080/credentials/store/system/> and put id in Jenkinsfile

## Pipeline

- Create pipeline using option pipeline from SCM and use `https://github.com/nikola-bodrozic/react-jest-enzyme.git` as repo URL
- Run build and a new image will be in your Docker Hub repo


## SonarQube & Jenkins

- stop all jenkins containers running on 8080
- make sure you installed plugin **SonarQube Scanner for Jenkins** on <http://localhost:8080/pluginManager/installed>
- make sure you set up **SonarQube Scanner** <http://localhost:8080/configureTools/>
- set pipeline script <http://localhost:8080/job/react/configure>
```shell
node {
  stage('Clone the Git') {
    git 'https://github.com/nikola-bodrozic/react-jest-enzyme.git'
  }
  stage('SonarQube analysis') {
    sh 'ls -lA'
    def scannerHome = tool 'sonarqube';
    withSonarQubeEnv('sonarqube') {
      sh "${scannerHome}/bin/sonar-scanner \
      -D sonar.login=YOUR-SONARQUBE-TOKEN \
      -D sonar.projectKey=react \
      -D sonar.host.url=http://sonarqube:9000/"
    }
  }
}
```
- `docker-compose up`
- execute build and review results on <http://localhost:9000/project/issues?id=react>

## Pull image and run/stop container

```shell
docker run -d --name react-app -p 80:80 nikolabod/react-app:YOUR-TAG
```

```shell
docker container stop react-app
```

