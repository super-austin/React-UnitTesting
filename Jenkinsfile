pipeline {
  agent any

  stages {
    stage('Check versions') {
      steps {
          nodejs(nodeJSInstallationName: 'node10') {
            sh 'ls -l'
            sh 'node -v'
            sh 'npm -v'
        }
      }
    }

    stage('Run tests') {
      steps {
          sh 'npm install'
          sh 'npm test'
      }
    }
  }
}