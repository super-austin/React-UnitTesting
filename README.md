# Jest, React & Jenkins CI

Jenkins pipeline runs tests and pushes image to Docker Hub repository

## React & Jest

  - Axios calls with async/await in try catch block
  - mock axios.get()
  - setState to update wrapper

Install, test and run in development

```sh
$ yarn
$ yarn test
$ yarn start
```

open <http://localhost:3000>

## Docker production build in Nginx container

To start container

- create image `docker build -t react-app .`
- run container `docker run -p 80:80 react-app` 

open <http://localhost>

## Jenkins CI

- Bring up Jenkins server with `docker-compose up -d` using docker-compose.yaml from this repo
- Add your Docker Hub credentials to Jenkins on page <http://localhost:8080/credentials/store/system/>
- in Jenkinsfile in line 5 add credentials ID, and username for docker hub in line 6
- Create pipeline using option **pipeline from SCM** use `https://github.com/nikola-bodrozic/react-jest-enzyme` as repo URL
- Run build and a new image will be in your Docker Hub repo
