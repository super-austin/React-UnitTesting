pipeline {
  agent any
  stages {
    stage('Install dependencies') {
      steps {
      	sh 'whoami'
      	sh 'ls -lA'
        sh 'apk update && apk add nodejs'
        sh 'npm -v'
      }
    }
  }
}