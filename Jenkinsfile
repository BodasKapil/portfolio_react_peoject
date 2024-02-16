pipeline {
    agent any

    environment {
        AZURE_CREDENTIALS = credentials('44dfde23-c266-4540-903e-4b98c9e2b853')
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
                                        resourceGroup: env.RESOURCE_GROUP,
                                        credentialsId: env.AZURE_CREDENTIALS,
                                        publishProfile: 'kapilbodas.scm.azurewebsites.net:443'
                }
            }
        }
    }
}
