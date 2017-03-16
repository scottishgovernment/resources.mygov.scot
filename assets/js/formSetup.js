/**
 * Appends an error container for $field to the DOM
 *
 * @param {object} $field - the form field to log errors against
 */
var appendErrorContainer = function($field) {
    var className = $field.attr('id') + '-errors';
    if($('.' + className).length === 0) {
        $formErrors.append('<ul class="' + className + '"></ul>');
    }
};


/**
 * Validates $field
 *
 * @param {object} $field - the form field to validate
 * @param {boolean} highlightField - should a visual indicator be applied to the UI
 * @param {validationChecks} - array of validation functions to test $field against
 * @returns {boolean} whether the field value is valid
 */
var validateField = function($field, highlightField, validationChecks) {

    appendErrorContainer($field);
    var valid = true;

    for (var i = 0; i < validationChecks.length; i++) {
        if (validationChecks[i]($field) === false) {
            valid = false;
            break;
        }
    }

    if (highlightField) {
        if (!valid) {
            $field.addClass('input-error');
        } else {
            $field.removeClass('input-error');
        }
    }

    return valid;
};

var submitted = false;
var $clientError = $('.client-error');
var $formErrors = $('.form-errors');

var registrationForm = {};

/**
 * Checks all form field to determine if form is valid
 * Hightlights UI if highlightField
 *
 * @returns {boolean} is the form valid
 */
var formIsValid = function (highlightField) {
    $formErrors.html('');
    var formIsValid = true;

    for (var i = 0; i < FormValidations.length; i++) {
        var field = FormValidations[i];

        var valid = validateField($(field.id), highlightField, field.validations);

        if (valid){
            if (field.serverSideValidations){
                valid = validateField($(field.id), highlightField, field.serverSideValidations);
            }
        }

        if (!valid) {
            formIsValid = false;
        }
    }

    return formIsValid;
};
/**
 * Module entry point
 */
registrationForm.init = function () {

    // textchange is a shim to allow us to use the input event in IE8 & IE9

    var addEventListeners = function(item){
        for (var i = 0; i < item.fields.length; i++) {
            var field = $(item.fields[i])

            field.on(item.neutralEvent, function(){
                validateField($(item.id), true, item.validations);
            });

            field.on(item.invalidEvent, function(){
                if ($(this).hasClass('input-error')){
                    validateField($(item.id), true, item.validations);
                }
            });
        }
    }

    for (var i = 0; i < FormValidations.length; i++) {
        addEventListeners(FormValidations[i]);
    }

    // Have now set these with CSS, but input may need to be upper or lower cased when saved to database.

    // $('#postcode').on('keyup', function(){
    //     $(this).val($(this).val().toUpperCase());
    // });

    // $('#email').on('keyup', function(){
        // $(this).val($(this).val().toLowerCase());
    // });

    // Textarea expands when text is too long for it, and shrinks when too short (minimum height 84px)

    $('textarea').on('paste input', function () {
        var minHeight = $(this).attr('rows') * parseFloat($(this).css('line-height'));

        if ($(this).outerHeight() > this.scrollHeight){
            $(this).height(minHeight)
        }
        while ($(this).outerHeight() < this.scrollHeight + parseFloat($(this).css("borderTopWidth")) + parseFloat($(this).css("borderBottomWidth"))){
            $(this).height($(this).height() + 1)
        }
    });

    // Date of birth dropdowns - change month values to numbers when on smallest screens

    if (window.innerWidth < 360) {
        var monthDropdown = document.getElementById('birthdate-month');
        for (var i = 0; i < monthDropdown.children.length; i++) {
            monthDropdown.children[i].innerText = monthDropdown.children[i].value;
        }
    }

    // Submit actions

    $('form#registration-form').on('submit', function(e) {
        submitted = true;
        e.preventDefault();

        if(!formIsValid(true)) {
            $clientError.removeClass('hidden');

            //Click event to scroll to top
            var feedbackTop = $('#feedback-box').position().top;
            $('html, body').animate({scrollTop : feedbackTop}, 1000);

            return;
        } else {
            window.location.href = ('/prototypes/forms-prototype-complete/');
        }

        // this is a prototype so does not post the data anywhere.
    });
};

window.format = registrationForm;

// Prevent form from being submitted if 'return' key is pressed, unless focus is on submit button. 
$('html').bind('keypress', function(e){
    var submitButton = document.getElementById('form-submit');

    if(e.keyCode == 13 && document.activeElement !== submitButton && document.activeElement.tagName !== 'TEXTAREA'){
      return false;
    }
});