# Jenkins & ReactJS

This project show how to:
- run tests
- create a prod. image
- push it to remote docker image repo

## Jenkins Setup

Bring up Jenkins server with `docker-compose up -d` using docker-compose.yaml from this repo

### Plugins

List of Jenkins plugins is in `ci-cd/plugins.txt`. You shoud install Docker Plugin beside standard plugins.

### Credentials

- Add your Docker Hub credentials to Jenkins on page http://localhost:8080/credentials/store/system/
- in Jenkinsfile in line 5 add credentials ID, and username for docker hub in line 6

### Pipeline

- Create pipeline using option pipeline from SCM use https://github.com/nikola-bodrozic/react-jest-enzyme as repo URL
- Run build and a new image will be in your Docker Hub repo
