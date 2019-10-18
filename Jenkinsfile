pipeline {
  agent any

  stages {
    stage('Build') {
      steps {
          sh 'ls -l'
      }
    }

    stage('Test') {
      steps {
        dir('core') {
          nodejs(nodeJSInstallationName: 'node10') {
            sh 'ls -l'
            sh 'node -v'
            sh 'npm -v'
          }
        }
      }
    }

    stage('Deploy') {
      steps {
          echo 'Deploying....'
      }
    }
  }
}