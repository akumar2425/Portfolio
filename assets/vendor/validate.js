/**
* PHP Email Form Validation - v2.0
* URL: https://bootstrapmade.com/php-email-form/
* Author: BootstrapMade.com
*/

var firebaseConfig = {
	apiKey: "AIzaSyAgs45nFFaeCdie1xGeMcdYWmrZlG8tJCg",
	authDomain: "arvind-resume-d9bc8.firebaseapp.com",
	databaseURL: "https://arvind-resume-d9bc8-default-rtdb.firebaseio.com",
	projectId: "arvind-resume-d9bc8",
	storageBucket: "arvind-resume-d9bc8.appspot.com",
	messagingSenderId: "1037572611781",
	appId: "1:1037572611781:web:9c52d59d65ac7498f99aac",
	measurementId: "G-2LJ9XE570N"
};

ServerKey = 'AAAA8ZQlnsU:APA91bH3NKiRoKdq6RscVqNpNjy42I0Q6HCJIZzWUdECjDta5M9jbWZkutZmZF2KdL3bmVfpJEIsp0T75jlHfDB7AK-qgFxYY9FP_iQFZQst1LMQiO7_VmeVgh4qq9-klG4FedmKyBIQ';

firebase.initializeApp(firebaseConfig);
firebase.analytics();

let firebaseDatabase = firebase.database()
let visitCount = firebaseDatabase.ref('visitCount');

let temp = 1;

visitCount.on('value', function (snapSort) {
	if (temp) {
		count = ++snapSort.val().count;
		temp = 0;
		visitCount.update({ count });
	}
	if (!(localStorage.getItem('notified'))) {
		localStorage.setItem('notified', '1');
		this.getTokenAndNotify('Someone visited!', `Total Count: ${count}`)
	}
});

function getTokenAndNotify(name, message) {
	firebase.firestore().collection('device').get().then((res) => {
		res.forEach((device) => {
			this.notify(device.data().token, name, message);
		});
	});
}

function notify(token, name, message) {
	let data = {
		"notification": {
			"title": name,
			"body": message,
		},
		"to": token
	}
	var xhttp = new XMLHttpRequest();
	xhttp.open("POST", "https://fcm.googleapis.com/fcm/send");
	xhttp.setRequestHeader('Content-Type', `application/json`);
	xhttp.setRequestHeader('Authorization', `key=${ServerKey}`);
	xhttp.send(JSON.stringify(data));
}

function saveMessage(name, email, subject, message) {
	let self = this;
	let data = {
		name,
		email,
		subject,
		message,
		createdAt: new Date().getTime(),
		new: true
	}
	let date = new Date();
	firebaseDatabase.ref(`contact/${date.getTime()}`).set(data).then((res) => {
		getTokenAndNotify(name, message);
	}).catch(error => {
		self.isSendingMessage = false;
	})
}


!(function ($) {
	"use strict";

	$('form.php-email-form').submit(function (e) {
		e.preventDefault();

		var f = $(this).find('.form-group'),
			ferror = false,
			emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;

		f.children('input').each(function () { // run all inputs

			var i = $(this); // current input
			var rule = i.attr('data-rule');

			if (rule !== undefined) {
				var ierror = false; // error flag for current input
				var pos = rule.indexOf(':', 0);
				if (pos >= 0) {
					var exp = rule.substr(pos + 1, rule.length);
					rule = rule.substr(0, pos);
				} else {
					rule = rule.substr(pos + 1, rule.length);
				}

				switch (rule) {
					case 'required':
						if (i.val() === '') {
							ferror = ierror = true;
						}
						break;

					case 'minlen':
						if (i.val().length < parseInt(exp)) {
							ferror = ierror = true;
						}
						break;

					case 'email':
						if (!emailExp.test(i.val())) {
							ferror = ierror = true;
						}
						break;

					case 'checked':
						if (!i.is(':checked')) {
							ferror = ierror = true;
						}
						break;

					case 'regexp':
						exp = new RegExp(exp);
						if (!exp.test(i.val())) {
							ferror = ierror = true;
						}
						break;
				}
				i.next('.validate').html((ierror ? (i.attr('data-msg') !== undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
			}
		});
		f.children('textarea').each(function () { // run all inputs

			var i = $(this); // current input
			var rule = i.attr('data-rule');

			if (rule !== undefined) {
				var ierror = false; // error flag for current input
				var pos = rule.indexOf(':', 0);
				if (pos >= 0) {
					var exp = rule.substr(pos + 1, rule.length);
					rule = rule.substr(0, pos);
				} else {
					rule = rule.substr(pos + 1, rule.length);
				}

				switch (rule) {
					case 'required':
						if (i.val() === '') {
							ferror = ierror = true;
						}
						break;

					case 'minlen':
						if (i.val().length < parseInt(exp)) {
							ferror = ierror = true;
						}
						break;
				}
				i.next('.validate').html((ierror ? (i.attr('data-msg') != undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
			}
		});
		if (ferror) return false;

		var this_form = $(this);
		var action = $(this).attr('action');

		if (!action) {
			this_form.find('.loading').slideUp();
			this_form.find('.error-message').slideDown().html('The form action property is not set!');
			return false;
		}

		this_form.find('.sent-message').slideUp();
		this_form.find('.error-message').slideUp();
		this_form.find('.loading').slideDown();

		if ($(this).data('recaptcha-site-key')) {
			var recaptcha_site_key = $(this).data('recaptcha-site-key');
			grecaptcha.ready(function () {
				grecaptcha.execute(recaptcha_site_key, { action: 'php_email_form_submit' }).then(function (token) {
					php_email_form_submit(this_form, action, this_form.serialize() + '&recaptcha-response=' + token);
				});
			});
		} else {
			php_email_form_submit(this_form, action, this_form.serialize());
		}

		return true;
	});

	function php_email_form_submit(this_form, action, data) {

		saveMessage(
			document.forms["formID"]["name"].value,
			document.forms["formID"]["email"].value,
			document.forms["formID"]["subject"].value,
			document.forms["formID"]["message"].value,
		);

		this_form.find('.loading').slideUp();
		this_form.find('.sent-message').slideDown();
		this_form.find("input:not(input[type=submit]), textarea").val('');
		setTimeout(() => {
			this_form.find('.sent-message').slideUp();
		}, 2000);

	}

})(jQuery);
