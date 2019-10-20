pipeline {
	agent {
		docker {
			image 'node:10-alpine'
			args '-p 3000:3000'
		}
	}
  stages {     
	  stage('Build') {
	    steps {
	       sh 'npm install'
	    }
	  }    
	  stage('Test') {
	    steps {
	       sh 'npm test'
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