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
            // Actions to be taken on success
            // For example, trigger another job or send notifications
        }
        failure {
            // Actions to be taken on failure
            // For example, send notifications or cleanup tasks
        }
    }
}
