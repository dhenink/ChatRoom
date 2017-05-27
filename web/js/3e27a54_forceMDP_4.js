function forceMDP(mot_de_passe, confirmation)
{
    var valide = true;
    var message = "";
    var pourcentage = 0;
    var couleurs = "#ff5b5b";

    var strongRegex = new RegExp("^(?=.{12,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$", "g");
    var mediumRegex = new RegExp("^(?=.{10,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$", "g");
    var okRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$", "g");

    if (mot_de_passe != '' && confirmation != '' && mot_de_passe != confirmation) {
        valide = false;
        message = 'Mots de passe différents';
    } else if (!okRegex.test(mot_de_passe)) {
        valide = false;
        message = 'Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule et un chiffre.';
    } else if (strongRegex.test(mot_de_passe)) {
        // If reg ex matches strong password
        message = 'Fort';
    } else if (mediumRegex.test(mot_de_passe)) {
        // If medium password matches the reg ex
        message = 'Moyen';
    } else {
        // If password is ok
        message = 'Faible';
    }

    if(mot_de_passe.length < 12 && mot_de_passe.length > 0) {
        pourcentage = ( (100 / 12) * mot_de_passe.length ).toFixed(0);
    } else if(mot_de_passe.length >= 12) {
        pourcentage = 100;
    }

    if(valide) {
        if(mot_de_passe.length >= 12) {
            couleurs = "#10c469";
        } else if (mot_de_passe.length >= 8) {
            couleurs = "#f9c851";
        }
    }

    if(mot_de_passe.length < 8 || confirmation == ""){
      valide = false;
    }

    return {valide : valide, message : message, pourcentage : pourcentage, couleurs : couleurs};
}

function checkValid()
{
    var valide_form = true;
    var valide = false;
    var password1 = $('.password-first').val()
    var password2 = $('.password-second').val()
    $('.form-group input.required').each(function () {
        if($(this).val() == "") {
            valide_form = false;
        }
    });
    if (valide_form && password1 == password2) {
        $('#btn-submit').prop('disabled',false)
        valide = true;
    } else {
        validator.focusInvalid();
        $('#btn-submit').prop('disabled',true)
        valide = false;
    }
    return {valide: valide};
}

var force_valide = false;
$('.password').on('input', function () {
    var force = forceMDP($('.password-first').val(), $('.password-second').val());
    force_valide = force['valide'];
    $('#force-mdp').html(force['message']);
    $('#progress-bar-custom').css('width', force['pourcentage'] + '%');
    $('#progress-bar-custom').css('background-color', force['couleurs']);
    checkValid();
});
