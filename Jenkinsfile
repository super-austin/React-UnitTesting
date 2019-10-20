pipeline {
    agent {
        docker {
            image 'node:10-alpine'
            args '-p 3000:3000'
        }
    }
    environment {
        CI = 'true' 
    }
    stages {
        stage('Install node') {
            steps {
                sh 'node -v'
                sh 'npm -v'
            }
        }
        stage('Jest tests'){
          steps {
            sh 'npm test'
          }  
        }
    }
}