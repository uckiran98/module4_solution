(function(){

	var names = ["Yaakov","John","jen","Jason","Paul","Frank","Larry","Paula","Laura","jim"];
	var len=names.length;
	for(var i = 0; i < len; i++){
		var name = names[i];
		var firstletter = name.charAt(0).toLowerCase();
		if(firstletter === 'j'){
			goodbyegreeter.saygoodbye(name);
		}else{
			hellogreeter.sayhello(name);
		}
	}
})();