pipeline {
    agent any

    stages {
        stage ('Compile Stage') {

            steps {
                withNode(node : 'nodejs_10_16_1') {
                    sh 'npm install'
                }
            }
        }

        stage ('Testing Stage') {

            steps {
                withMaven(node : 'nodejs_10_16_1') {
                    sh 'npm test'
                }
            }
        }
}