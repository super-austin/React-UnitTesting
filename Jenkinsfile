pipeline {
    agent any
 
    stages {
        stage('Build') {
            steps {
                nodejs(nodeJSInstallationName: 'Node 10.x') {
                    sh 'npm -v'
                }
            }
        }
    }
}