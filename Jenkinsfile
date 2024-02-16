pipeline {
    agent any

    environment {
        // Define environment variables if needed
        // For example:
        // JAVA_HOME = '/path/to/java'
        // MAVEN_HOME = '/path/to/maven'
    }

    stages {
        stage('install npm packages') {
            steps {
                // Checkout your source code repository
                // For example, for Git:
               bat 'npm install'
            }
        }

        stage('Build') {
            steps {
                // Build your project
                // For example, for Maven:
                bat 'npm run build'
            }
        }

        stage('Deploy to Azure Web App') {
            steps {
                
                bat 'Xcopy build C:\\home\\site\\wwwroot /E /H /C /I /Y '
            }
        }
    }
    post {
    success {
        script {
            // Actions to be taken on success
            echo 'Deployment successful'

            // Example: Deploy to a server
            // Add commands or scripts to copy React build artifacts to your server

            // Example: Trigger another Jenkins job for end-to-end testing
            // build job: 'EndToEndTests', wait: false
        }
    }
    failure {
        script {
            // Actions to be taken on failure
            echo 'Deployment failed'

            // Example: Send notifications
            // Use a notification plugin or send an email
        }
    }
}

}
