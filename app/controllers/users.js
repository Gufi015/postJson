// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = arguments[0] || {};

var lblUserName, lblEmail, username, email;


lblUserName = Ti.UI.createLabel({
	color: 'black',
	width: Ti.UI.SIZE,
	height: Ti.UI.SIZE,
	text: 'username',
	top:  '5%',
});
Ti.API.info('lblUserName'+ lblUserName);

lblEmail = Ti.UI.createLabel({
	color: 'black',
	width: Ti.UI.SIZE,
	height: Ti.UI.SIZE,
	text: 'email',
	top: '10%',
});
Ti.API.info('lblEmail'+ lblEmail);

$.viewInfo.add(lblUserName);
$.viewInfo.add(lblEmail);
