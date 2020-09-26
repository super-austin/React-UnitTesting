pipeline {
 agent any

 environment {
  DOCKER_REGISTRY_CREDENTIALS = 'fd2-84f3-afc9a8a831fd'
  DOCKER_REGISTRY_USERNAME = 'ce3d51cb45a2'
  DOCKER_REGISTRY = 'index.docker.io'
  DOCKER_REGISTRY_URL = "https://${DOCKER_REGISTRY}/v1/"
  PROJECT_IMAGE = "${DOCKER_REGISTRY}/${DOCKER_REGISTRY_USERNAME}/react-app"

  APP_IMAGE = "node:10"

  GIT_COMMIT = sh(script: 'git rev-parse --short HEAD', returnStdout: true).trim()
 }

 stages {
  stage('Test') {
   agent {
    docker {
     image APP_IMAGE
    }
   }
   steps {
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

  stage('Push Image') {
   stages {
    stage('Publish Image') {
     steps {
      echo '--- Publishing image ---'
      withDockerRegistry(credentialsId: DOCKER_REGISTRY_CREDENTIALS, url: DOCKER_REGISTRY_URL) {
       sh "docker push ${PROJECT_IMAGE}:${GIT_COMMIT}"
      }
     }
    }
   }
  }
 }
 
 post {
  success {
   echo 'image is created and pushed'
  }
  always {
    cleanWs(cleanWhenAborted: true, cleanWhenFailure: true, cleanWhenNotBuilt: true, cleanWhenSuccess: true, cleanWhenUnstable: true, deleteDirs: true)
  }
  failure {
   echo 'send email about broken build'
  }
 }
}