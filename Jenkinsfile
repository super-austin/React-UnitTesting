pipeline {
    agent any

    environment {
        DOCKER_REGISTRY_CREDENTIALS = 'docker hub'
        DOCKER_REGISTRY = 'index.docker.io'
        DOCKER_REGISTRY_URL = "https://${DOCKER_REGISTRY}/"
        PROJECT_IMAGE = "${DOCKER_REGISTRY}/ce3d51cb45a2/reactapp"

        REACT_IMAGE = "node:8-alpine"

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
                echo '--- Starting lint ---'
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

        stage('Develop') {
            stages {
                stage('Publish Image') {
                    steps {
                        echo '--- Publishing image ---'
                        withDockerRegistry([credentialsId: DOCKER_REGISTRY_CREDENTIALS, url: DOCKER_REGISTRY_URL]) {
                            sh "docker push ${PROJECT_IMAGE}:${GIT_HASH}"
                        }
                    }
                }
            }
        }
    }
}