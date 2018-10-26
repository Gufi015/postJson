// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

var url = "https://api.cloud.appcelerator.com/v1/users/query.json?key=rkqPXBTWooHrEObnb7hQaYpLFgi89GLM&pretty_json=true&count=true";
var http = Ti.Network.createHTTPClient({
	onload: function(e){
		var result= JSON.parse(this.responseText);
		Ti.API.info(JSON.stringify(result));
		alert('succes');
		
		for(var i = 0; i< result.response.users.length; i++){
			var labelUsername = Ti.UI.createLabel({
				width: Ti.UI.SIZE,
				height: Ti.UI.SIZE,
				color: 'black',
				text: result.response.users[i].username,		
			});
			var labelEmail = Ti.UI.createLabel({
				width: Ti.UI.SIZE,
				height: Ti.UI.SIZE,
				color: 'black',
				text: result.response.users[i].email,		
			});
			$.viewInfo.add(labelUsername);
			$.viewInfo.add(labelEmail);
		}
	},
	onerror: function(e){
		alert('error in ' + e.error);
	},
	timeout: 5000,
});

http.open('GET', url);
http.send();
