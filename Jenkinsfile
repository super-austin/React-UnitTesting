pipeline {
  agent any
  stages {    
    stage('Install NodeJS dependencies') {
      tools {nodejs "node10"}
      steps {
        sh 'npm -v'
      }
    }       
  }
}