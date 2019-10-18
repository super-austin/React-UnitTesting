pipeline {
    agent any
 
  	tools {nodejs "node"}

    stages {
        stage ('Install Stage') {

            steps {
                withNode(node : 'nodejs_10_16_1') {
                	sh 'whoami'
                	sh 'ls -lA'
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
}