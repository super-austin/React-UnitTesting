# Jest, React & Jenkins CI

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

## Docker production build

To build image run `docker build -t react-app .` and run container `docker run -p 80:80 react-app` open <http://localhost>

## Jenkins CI

- Add your Docker Hub credentials to Jenkins
- in Jenkinsfile in line 5 add credentials ID, and username for docker hub in line 6
- Bring up Jenkins server with `docker-compose up -d`
- Create pipeline using option `pipeline from SCM` use `https://github.com/nikola-bodrozic/react-jest-enzyme` as repo URL
- Run build and a new image will be in your repo
