pipeline {
  agent any 
  environment {
      DOCKER_REGISTRY_CRED = '6cf4cdbf-2269-41d7-a195-dae4078ec69e'
      DOCKER_REGISTRY = 'index.docker.io'
      DOCKER_REGISTRY_URL = "https://${DOCKER_REGISTRY}/"
      PROJECT_IMAGE_NAME = "${DOCKER_REGISTRY}/reactapp-image"
      GIT_HASH = ''
      IMAGE_NAME = 'react-app'
  }

  stages {   

    stage('Get hash'){
      script {
        GIT_HASH = sh(script: 'git rev-parse --short HEAD', returnStdout: true).trim()
      }          
    }

    stage('Build Image') {
      steps {
        echo '--- Building image ---'
        sh """
        docker build -t ${IMAGE_NAME}:${GIT_HASH} .
        """
      }
    }

    stage('Develop') {
      when {
          branch 'master'
      }
      stages{
          stage('Publish Image') {
              steps {
                  echo '--- Publishing image ---'
                  withDockerRegistry([credentialsId: DOCKER_REGISTRY_CRED, url: DOCKER_REGISTRY_URL]) {
                      sh "docker push ${IMAGE_NAME}:${GIT_HASH}"
                  }
              }
          }    
      }
    }
  
  post {
    success {
      echo 'create prod. build'
    }
    always {
      sh 'rm -rf node_modules'
    }
    failure {
       echo 'send email about broken build'
    }
  }
}
