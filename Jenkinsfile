pipeline {
  
 agent any

 environment {
  DOCKER_REGISTRY_CREDENTIALS = 'fd2-84f3-afc9a8a831fd'
  DOCKER_REGISTRY_USERNAME = 'ce3d51cb45a2'
  DOCKER_REGISTRY = 'index.docker.io'
  DOCKER_REGISTRY_URL = "https://${DOCKER_REGISTRY}/v1/"
  PROJECT_IMAGE = "${DOCKER_REGISTRY}/${DOCKER_REGISTRY_USERNAME}/react-app"

  APP_IMAGE = "node:10"

  GIT_COMMIT = ' '
 }

 stages {
  stage('Preparation') {
   steps {
    sh "whoami"
    sh "echo $PATH"
    echo "--- Get latest git commit ---"
    script {
     GIT_COMMIT = sh(script: 'git rev-parse --short HEAD', returnStdout: true).trim()
    }
   }
  }

  stage('Test') {
   agent {
    docker {
     image APP_IMAGE
    }
   }
   steps {
    sh 'ls -l'
    sh 'yarn'
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
   echo 'image is created and pushed'
  }
  always {
   sh 'rm -rf node_modules'
  }
  failure {
   echo 'send email about broken build'
  }
 }
}