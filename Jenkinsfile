pipeline {
    agent any

    stages {
        stage ('Install Stage') {

            steps {
                withNode(node : 'nodejs_10_16_1') {
                    sh 'npm install'
                }
            }
        }

        stage ('Testing Stage') {

            steps {
                withNode(node : 'nodejs_10_16_1') {
                    sh 'npm test'
                }
            }
        }
}