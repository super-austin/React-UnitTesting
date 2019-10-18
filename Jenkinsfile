pipeline {
    agent any
 
    stages {
        stage('Build') {
            steps {
                nodejs(nodeJSInstallationName: 'node10') {
                    sh 'npm -v'
                }
            }
        }
    }
}