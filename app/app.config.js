angular.module('phonecatApp').config(['$routeProvider', 
		function($routeProvider)
			 {
				$routeProvider.when('/phones',{
					template:'<phone-list></phone-list>'
				})
				.when('/phones/:phoneId',{
					template :'<phone-detail></phone-detail>'
				})
				 .when('/login', {
					controller: 'LoginController',
					templateUrl: 'core/authentication/login.html',
					hideMenus: true
        		})
				.otherwise('/phones'); 
			 }]);