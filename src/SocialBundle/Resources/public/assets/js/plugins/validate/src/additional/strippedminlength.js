$.validator.addMethod("strippedminlength", function(value, element, param) {
	return $(value).text().length >= param;
}, $.validator.format("Please enter at least {0} characters"));
