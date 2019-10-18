pipeline {
  agent any

  tools {nodejs "node10"}  

  stages{
    stage('Dep.'){
      steps {
        sh 'npm -v'
      }  
    }
    stage('Dep2.'){
      steps {
        sh 'ls -l'
        sh 'npm -v'
      }  
    }
  }
}
    