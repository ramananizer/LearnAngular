angular.module('phoneDetail').
component('phoneDetail',{
	templateUrl :'phone-detail/phone-detail.template.html',
	controller : function($routeParams,$http)
	{
		var self = this;
		$http.get('phones/' + $routeParams.phoneId + '.json').success(function(data){
			self.phone = data;
			self.mainImageUrl = data.images[0];
		});
		
		this.setImage = function(image)
		{
			self.mainImageUrl= image;
		}
	}});