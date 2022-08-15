const sonarqubeScanner =  require('sonarqube-scanner');
sonarqubeScanner(
    {
        serverUrl:  'http://localhost:9000',
        token: '46b2a69c0528c280757c3e53f836c333d7157715',
        options : {
            'sonar.projectKey': 'poc-sonar-node-ts',
            'sonar.sources':  'src',
            'sonar.tests':  'src',
            'sonar.sourceEncoding':  'UTF-8',
            'sonar.inclusions':  '**', // Entry point of your code
            'sonar.test.inclusions':  'src/**/*.spec.ts',
            'sonar.javascript.lcov.reportPaths':  'coverage/lcov.info',
            'sonar.testExecutionReportPaths':  'coverage/test-reporter.xml'
        }
    }, () => {});
