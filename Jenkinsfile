pipeline {
  agent any

  tools {nodejs "node"}

  stages {    
    stage('Cloning Git') {
      steps {
        git 'https://github.com/nikola-bodrozic/react-jest-enzyme'
      }
    }        
    stage('Install dependencies') {
      steps {
        sh 'npm -v'
      }
    }           
  }
}