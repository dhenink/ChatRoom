var form = $("#form-structure").show();

form.steps({
    headerTag: "h3",
    bodyTag: "section",
    transitionEffect: "slideLeft",
    labels: {
        cancel: "Annuler",
        current: "current step:",
        pagination: "Pagination",
        finish: "Fin",
        next: "Suivant",
        previous: "Précédent",
        loading: "Chargement ..."
    },
    onStepChanging: function (event, currentIndex, newIndex) {
        form.validate().settings.ignore = ":disabled,:hidden";
        return form.valid();
    },
    onFinishing: function (event, currentIndex) {
        form.validate().settings.ignore = ":disabled";
        return form.valid();
    },
    onFinished: function (e, currentIndex) {
        // Uncomment the following line to submit the form using the defaultSubmit() method
        $('#form-structure').submit();
    }
})