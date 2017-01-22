var app = angular.module('authenticationModule',[]);
app.controller('LoginController',['$scope','authenticationService', function($scope,authenticationService){
	
	authenticationService.ClearCredentials();
	$scope.login = function () {
            $scope.dataLoading = true;
            AuthenticationService.Login($scope.username, $scope.password, function(response) {
                if(response.success) {
                    AuthenticationService.SetCredentials($scope.username, $scope.password);
                    $location.path('/');
                } else {
                    $scope.error = response.message;
                    $scope.dataLoading = false;
                }
            });
        };
}]);
