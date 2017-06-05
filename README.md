# Bullsfirst
**Previous Version**

* As suggested this version contain number of bad practices, few them are listed below:
    * Usage of global variable which leads to polluting the global enviornment as well anyone can override that variiable.
     Ex: 
     ```
        var appRoot = angular.module('bullsfirst', []);
     ```
     This can be resolved by self executing function :

     ```
        (function() {
            angular.module('bullsfirst', ['ngRoute']);
        }());
     ```
     Here for further usage we can use angular.module('bullsfirst') to access our app. 
     * Further in our app we are handling data in controller it self which should be part of factories/services.
       current implementation

       ```
        appRoot.controller('AccountsController', function($scope){

            $scope.rows = []
        });
       ```
     Imporvement: 
     ```
        (function() {
            var accounstFactory = function($http) {

                var factory = {};   
                return factory;
            };

            accounstFactory.$inject = ['$http'];
                
            angular.module('bullsfirst').factory('accounstFactory',accounstFactory);                  
        }());
     ```
     * One more mistake is ignoring the parameter injection techniques. In given implementation developer is directly using $scope variable
     which can be somewhat riskier if team use some minifier techniques.
     To handle that we can use $inject with our objects.
     Ex:  
     ```
        AccountsController.$inject = ['$scope', 'accounstFactory'];
        angular.module('bullsfirst').controller('AccountsController', AccountsController);
     ```
     *  In given implementaion modularity is aloso missing which will lead to a mess in future. This can be easily handled by usgae of
     ngview and angular routing and proper usage of MVC

     * To further simplification of code we create generic directive for charts
     Ex: 
     ```
            (function() {

            var app = angular.module('bullsfirst');

            app.directive('chart', function () {
                return {
                    scope: {},
                    template: 'Name: {{customer.name}} Street: {{customer.street}}'
                };
            });

            }());

     ```


# Bullsfirst -> Angular2

With this implementation I tried to remove above mentioned problem.
This project is based on  [Angular CLI](https://github.com/angular/angular-cli).
To support charting I trie to create a D3-shape -> pie chart which can be used as genericc component.


## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.
Artifacts can be vieable on browser only when we run them using some webserver Ex: **local-web-server**.

**Prod Build**:
`npm run build:prod`

## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

This will also create test coverage for the app
    * Coverage will be available in root/coverage folder. To vew it just open the index.html in browser

## Lint 
 `npm run lint`

**Note**: 
* For async we can also include Reactive programing using [RxJs](https://github.com/Reactive-Extensions/RxJS)
* We can also improve more on data side by using single store using [Redux](http://redux.js.org/) which is a state container for Javascript apps and provide 
    uniform data flow.
* Improvement in unit-test process : Current build process is default build process via angular-cli. But in this implemenation its
    dependent on karma-chrome-launcher which will not be available in deployment servers. We can relace crome launcher with 
    [karma-phantomjs-launcher](https://github.com/karma-runner/karma-phantomjs-launcher) which will introduce headless browser and runs in memory.
