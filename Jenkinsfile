pipeline {
    agent any

    environment {
        // AZURE_CREDENTIALS = credentials('69cb616c-21b7-4baa-b547-1a9d4c885bbe')
        RESOURCE_GROUP = 'kapilbodas1'
        WEB_APP_NAME = 'KapilBodas'
    }

    stages {
        stage('Install npm') {
            steps {
                
                bat 'npm install'
            }
        }

        stage('Build') {
            steps {
                // Add your build steps here
                bat 'npm run build'
            }
        }

        stage('Deploy to Azure Web App') {
            steps {
                script {
                    azureWebAppPublish appName: env.WEB_APP_NAME,
                                        resourceGroup: env.RESOURCE_GROUP
                                        // credentialsId: env.AZURE_CREDENTIALS
                }
            }
        }
    }
}
