angular.
  module('phoneList').
  component('phoneList', {
    templateUrl:'phone-list/phone-list.template.html',
	controller : ['phone',function(phone){
		var self = this;
		this.orderprop = 'name';
		
		//$http.get('phones/phones.json').success(
			//function(data){
				//self.phones = data;
			
		//})
		this.phones = phone.query();
		this.setsort = function(value)
		{
			this.orderprop = value;
			
		};
	}]
	
        
    
  });