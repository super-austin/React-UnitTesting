pipeline {

  agent any

  environment {
    DOCKER_REGISTRY_CREDENTIALS = 'fc403e71-45cc-4962-a275-a2aad4d18e0b'
    DOCKER_REGISTRY_USERNAME = 'nikolabod'
    DOCKER_REGISTRY = 'index.docker.io'
    DOCKER_REGISTRY_URL = "https://${DOCKER_REGISTRY}/v1/"
    PROJECT_IMAGE = "${DOCKER_REGISTRY}/${DOCKER_REGISTRY_USERNAME}/react-app"

    APP_IMAGE = "node:10"

    GIT_COMMIT = ' '
  }

  stages {
    stage('Checkout from Git') {
      steps {
        sh "whoami"
        sh "echo $PATH"
        echo "--- Get latest git commit ---"
        script {
          GIT_COMMIT = sh(script: 'git rev-parse --short HEAD', returnStdout: true).trim()
          echo "the commit is ${GIT_COMMIT}"
        }
      }
    }

    stage('Execute Tests') {
      agent {
        docker {
          image APP_IMAGE
        }
      }
      steps {
        sh 'ls -l'
        sh 'yarn'
        echo "--- Execute Tests in CI mode ---"
        sh 'CI=true yarn test'
      }
    }

    stage('Build Image') {
      steps {
        echo '--- Building image ---'
        sh "docker build -t ${PROJECT_IMAGE}:${GIT_COMMIT} ."
      }
    }

    stage('Publish Image') {
      steps {
        echo '--- Publishing image ---'
        withDockerRegistry(credentialsId: DOCKER_REGISTRY_CREDENTIALS, url: DOCKER_REGISTRY_URL) {
          sh "docker push ${PROJECT_IMAGE}:${GIT_COMMIT}"
        }
      }
    }
  }

  post {
    success {
      echo 'image is pushed'
    }
    always {
      sh 'rm -rf node_modules'
    }
    failure {
      echo 'send warning about broken build'
    }
  }
}