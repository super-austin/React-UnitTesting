pipeline {
  agent any

  environment {
    DOCKER_REGISTRY_CREDENTIALS = '454bff7d-1a8b-4e41-9812-2614890ca14f'
    DOCKER_REGISTRY_USERNAME = 'ce3d51cb45a2'
    DOCKER_REGISTRY = 'index.docker.io'
    DOCKER_REGISTRY_URL = "https://${DOCKER_REGISTRY}/v1/"
    PROJECT_IMAGE = "${DOCKER_REGISTRY}/${DOCKER_REGISTRY_USERNAME}/react-app"

    REACT_IMAGE = "node:10"

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

    stage('Test') {
      agent {
        docker { image REACT_IMAGE }
      }
      steps {
        sh 'yarn'
        sh 'yarn test'
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

    stage('Push Image') {
      stages {
        stage('Publish Image') {
          steps {
            echo '--- Publishing image ---'
            withDockerRegistry(credentialsId: DOCKER_REGISTRY_CREDENTIALS, url: DOCKER_REGISTRY_URL ) {
              sh "docker push ${PROJECT_IMAGE}:${GIT_HASH}"
            }
          }
        }
      }
    }
  }
}
