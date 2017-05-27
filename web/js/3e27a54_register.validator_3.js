var validator = $("#form-required").validate({
    rules: {
        "registration[nom]": {
            required: true,
            lettersonly: true
        },
        "registration[prenom]": {
            required: true,
            lettersonly: true
        },
        "registration[email]": {
            required: true,
            email: true
        },
        "registration[password][first]": {
            required: true,
            equalTo: '#registration_password_second'
        },
        "registration[password][second]": {
            required: true,
            equalTo: '#registration_password_first'
        },
        "resetting[password][first]": {
            required: true,
            equalTo: '#resetting_password_first'
        },
        "resetting[password][second]": {
            required: true,
            equalTo: '#resetting_password_second'
        }
    }
});
