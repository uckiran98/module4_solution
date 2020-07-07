(function(window){
	var hellogreeter = {};
	var greeting = "Hello ";
	hellogreeter.sayhello =function(name){
		console.log(greeting +  name);	
	}
	window.hellogreeter = hellogreeter;
})(window);


  
