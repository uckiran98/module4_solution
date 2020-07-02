(function(){

	var names = ["john","yaakov","Jimson","hume","Jony","matt","sankar","jessy"];
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