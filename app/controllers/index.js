var xhr;
var btnJson;

btnJson = Ti.UI.createButton({
	title : 'Request Json',
	color : 'white',
	width : '180dp',
	height : '70dp',
	bottom : '20%',
	backgroundColor:'black'
});

$.index.add(btnJson);

btnJson.addEventListener('click', function(e) {
	if($.txtUser.getValue() == "" || $.txtUser.getValue() == "" ){
		alert('User and Password required.. ');
	}
	
	xhr = Ti.Network.createHTTPClient({
		onload : function(e) {
			var result = JSON.parse(this.responseText);
			Ti.API.info(JSON.stringify(result));
			//alert('success' + JSON.stringify(result));
			
			for(var i = 0; i<result.response.users.length;i++){
				var dialogo = Ti.UI.createAlertDialog({
					title: result.response.users[i].username,
					message: result.response.users[i].email
				});
				dialogo.show();
				$.index.add(dialogo);
			}

			var users = Alloy.createController('users').getView();
			users.open();
		},
		onsendstream : function(e) {
			Ti.API.info('Progress ' + e.progress);
		},
		onerror : function(e) {
			Ti.UI.createAlertDialog({
				title : 'Error',
				message : e.error
			}).show();
			Ti.API.info('IN ERROR ' + e.error);
		},
		timeout : 5000,
	});

	xhr.open('POST', 'http://api.cloud.appcelerator.com/v1/users/login.json?key=rkqPXBTWooHrEObnb7hQaYpLFgi89GLM&');
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send({
		login : $.txtUser.getValue(),
		password : $.txtPass.getValue()
	});


});

$.index.open();
