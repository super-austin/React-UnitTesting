# Jenkins & ReactJS

This project shows how to:
- run tests
- create a prod. image
- push it to remote docker image repo

## Jenkins Setup

```shell
docker run --rm -u root -p 8080:8080 \
    -v jenkins_home:/var/jenkins_home -v $(which docker):/usr/bin/docker \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -v "$HOME":/home jenkinsci/blueocean
```

login to Jenkins at <http://localhost:8080>

## Credentials

- Add your Docker Hub credentials to Jenkins on page http://localhost:8080/credentials/store/system/ using id: `fd2-84f3-afc9a8a831fd`

## Pipeline

- Create pipeline using option pipeline from SCM use `https://github.com/nikola-bodrozic/react-jest-enzyme` as repo URL
- Run build and a new image will be in your Docker Hub repo
