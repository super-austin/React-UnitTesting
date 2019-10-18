pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {
        
    stage('Install dependencies') {
      steps {
      	sh 'whoami'
      	sh 'ls -lA'
        sh 'npm -v'
      }
    }
  }
}