var xhr;
var btnJson;

btnJson = Ti.UI.createButton({
	title : 'Request Json',
	color : 'blue',
	width : '180dp',
	height : '70dp',
	bottom: '20%'
});

$.index.add(btnJson);


btnJson.addEventListener('click', function(e) {
	xhr = Ti.Network.createHTTPClient({
		onload : function(e) {
			var result = JSON.parse(this.responseText);
			Ti.API.info(result);
			alert('success' + JSON.stringify(result));
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

	xhr.open('POST', 'http://api.cloud.appcelerator.com/v1/users/login.json?key=39CfszDc4IxFppvqRyykQDgVPyuPhed2');
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send({
		login : $.txtUser.getValue(),
		password : $.txtPass.getValue()
	});
});

$.index.open();
