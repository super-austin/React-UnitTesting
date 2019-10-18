pipeline {
    agent any
 
    stages {
        stage('Build') {
            steps {
                nodejs(nodeJSInstallationName: 'Node 10.16.1') {
                    sh 'npm -v'
                }
            }
        }
    }
}