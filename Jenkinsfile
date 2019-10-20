pipeline {
	agent {
		docker {
			image 'node:10-alpine'
			args '-p 3000:3000'
		}
	}

  stage('Install dependencies') {

  steps {
      sh 'node -v'
    }
  }     

  stage('Test') {
    steps {
       sh 'npm -v'
    }
  }             
}