pipeline {
  agent any

  tools {nodejs "node"}

  stages {    
    stage('Cloning Git') {
      steps {
        git 'https://github.com/nikola-bodrozic/react-jest-enzyme'
      }
    }        
    stage('Install NodeJS dependencies') {
      steps {
        sh 'npm install'
      }
    }    
    stage('Run tests') {
      steps {
        sh 'npm test'
      }
    }         
  }
}