pipeline {
  agent any

  stages {
    stage('Build') {
      steps {
          echo 'Building..'
      }
    }

    stage('Test') {
      steps {
        dir('core') {
          nodejs(nodeJSInstallationName: 'Node-9.11.1') {
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