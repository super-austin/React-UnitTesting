pipeline {
  agent any

  stages {
    stage('Install dep.') {
      steps {
        step {
          nodejs(nodeJSInstallationName: 'node10') {
            sh 'node -v'
            sh 'npm -v'
          }
        }
      }
    }
  }
}