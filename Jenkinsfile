pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {
        
    stage('Install dependencies') {
      steps {
      	sh 'whoami'
      	sh 'ls -lA'
        sh 'npm install'
      }
    }
     
    stage('Test') {
      steps {
         sh 'npm test'
      }

    stage('Clean up') {
      steps {
         sh 'rm -rf node_modules/'
      }
    }      
  }
}