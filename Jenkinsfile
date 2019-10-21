pipeline {
    agent any

    environment {
        DOCKER_REGISTRY_CREDENTIALS = '6cf4cdbf-2269-41d7-a195-dae4078ec69e'
        DOCKER_REGISTRY = 'index.docker.io/v1'
        DOCKER_REGISTRY_URL = "https://${DOCKER_REGISTRY}/"
        DOCKER_HUB_USER = 'ce3d51cb45a2'
        PROJECT_IMAGE = "${DOCKER_REGISTRY}/${DOCKER_HUB_USER}/reactapp"

        REACT_IMAGE = "node:10-alpine"

        GIT_HASH = ''

    }

    stages {
        stage('Preparation') {
            steps {
                echo "--- Initialize variables ---"
                script {
                    GIT_HASH = sh(script: 'git rev-parse --short HEAD', returnStdout: true).trim()
                }
            }
        }

        stage('Lint') {
            agent {
                docker { image REACT_IMAGE }
            }

            steps {
                echo "Running ${env.BUILD_ID} on ${env.JENKINS_URL}"
                echo '--- lint placeholder ---'
            }
        }

        stage('Build Image') {
            steps {
                echo '--- Building image ---'
                sh """
                docker build -t ${PROJECT_IMAGE}:${GIT_HASH} .
                """
            }
        }

        stage('Push image') {
            stages {
                stage('Publish Image') {
                    steps {
                        echo '--- Publishing image ---'
                        withDockerRegistry(credentialsId: DOCKER_REGISTRY_CREDENTIALS, url: DOCKER_REGISTRY_URL) {
                          sh "docker push ${PROJECT_IMAGE}:${GIT_HASH}"
                        }
                    }
                }
            }
        }
    }
}