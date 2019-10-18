pipeline {
  agent any

  tools {nodejs "node10"}  

  stages{
    stage('Install deps.'){
      steps {
        sh 'npm -v'
        sh 'npm install'
      }  
    }
    stage('Jest tests'){
      steps {
        sh 'npm test'
      }  
    }
    stage('Clean up'){
      steps {
        sh 'rm -rf node_modules'
      }  
    }
  }
}
    