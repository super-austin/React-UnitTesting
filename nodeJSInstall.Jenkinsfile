pipeline {
  agent any

  stages {
    stage('Install Node dep.') {
      steps {
          nodejs(nodeJSInstallationName: 'node10') {
            sh 'ls -l'
            sh 'node -v'
            sh 'npm -v'
            sh 'npm install'
            sh 'npm test'
        }
      }
    }

    stage('Clean up') {
      steps {
        sh 'rm -rf node_modules'
      }
    }
  }
}