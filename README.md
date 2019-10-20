# Jest, React & Jenkins CI

## React & Jest

  - Axios calls with async/await in try catch block
  - mock axios.get()
  - setState to update wrapper

Install, test and run for development

```sh
$ npm install
$ npm test
$ npm start
```

open <http://localhost:3000>

## Jenkins CI

- Bring up Jenkins server with `docker-compose up -d`
- Create pipeline using option `pipeline from SCM` use `https://github.com/nikola-bodrozic/react-jest-enzyme` as repo URL
- Run build
