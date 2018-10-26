// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = arguments[0] || {};

var lblUserName,
    lblEmail;

// var propertieJson = Ti.App.Properties.getString('itemsPropertie');
// var objetoPro = JSON.parse(propertieJson);

lblUserName = Ti.UI.createLabel({
	color : 'black',
	width : Ti.UI.SIZE,
	height : Ti.UI.SIZE,
	text : 'user',
	top : '2%',
});

var txtUserName = Ti.UI.createTextField({
	borderColor : 'black',
	color : 'black',
	width : '85%',
	height : '8%',
	top : '8%'
});

lblEmail = Ti.UI.createLabel({
	color : 'black',
	width : Ti.UI.SIZE,
	height : Ti.UI.SIZE,
	text : 'email',
	top : '12%',
});

var txtEmail = Ti.UI.createTextField({
	borderColor : 'black',
	color : 'black',
	width : '85%',
	height : '8%',
	top : '18%'
});

var lblName = Ti.UI.createLabel({
	color : 'black',
	width : Ti.UI.SIZE,
	height : Ti.UI.SIZE,
	text : 'Name',
	top : '22%',
});

var txtName = Ti.UI.createTextField({
	borderColor : 'black',
	color : 'black',
	width : '85%',
	height : '8%',
	top : '28%'
});


var lblLastName = Ti.UI.createLabel({
	color : 'black',
	width : Ti.UI.SIZE,
	height : Ti.UI.SIZE,
	text : 'Last Name',
	top : '32%',
});

var txtLastName = Ti.UI.createTextField({
	borderColor : 'black',
	color : 'black',
	width : '85%',
	height : '8%',
	top : '38%'
});

var lblPass = Ti.UI.createLabel({
	color : 'black',
	width : Ti.UI.SIZE,
	height : Ti.UI.SIZE,
	text : 'Password',
	top : '42%',
});

var txtPass = Ti.UI.createTextField({
	borderColor : 'black',
	color : 'black',
	width : '85%',
	height : '8%',
	top : '48%'
});


var lblConfirmPass = Ti.UI.createLabel({
	color : 'black',
	width : Ti.UI.SIZE,
	height : Ti.UI.SIZE,
	text : 'Confirm Pass',
	top : '52%',
});

var txtConfirmPass = Ti.UI.createTextField({
	borderColor : 'black',
	color : 'black',
	width : '85%',
	height : '8%',
	top : '58%'
});

$.viewInfo.add(lblPass);
$.viewInfo.add(txtPass);
$.viewInfo.add(lblConfirmPass);
$.viewInfo.add(txtConfirmPass);
$.viewInfo.add(lblName);
$.viewInfo.add(txtName);
$.viewInfo.add(txtUserName);
$.viewInfo.add(lblLastName);
$.viewInfo.add(txtLastName);
$.viewInfo.add(txtEmail);
$.viewInfo.add(lblUserName);
$.viewInfo.add(lblEmail);

var btnAgregar = Ti.UI.createButton({
	bottom : '10%',
	color : 'black',
	backgroundColor : 'gray',
	width : '85%',
	height : '8%',
	title : 'Agregar Usuario'
});

$.viewInfo.add(btnAgregar);

btnAgregar.addEventListener('click', function(e) {
	var xhr = Ti.Network.createHTTPClient({
		onload : function(e) {
			var result = JSON.parse(this.responseText);
			alert('Respuesta result ' + JSON.stringify(result));
		},
		onerror : function(e) {
			alert('In error ' + this.status);
		},
		timeout : 5000,
	});

	xhr.open('POST', 'https://api.cloud.appcelerator.com/v1/users/create.json?key=rkqPXBTWooHrEObnb7hQaYpLFgi89GLM&pretty_json=true');
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send({
		username: txtUserName.value,
		email: txtEmail.value,
		first_name: txtName.value,
		last_name: txtLastName.value,
		password: txtPass.value,
		password_confirmation: txtConfirmPass.value,
	});
});

