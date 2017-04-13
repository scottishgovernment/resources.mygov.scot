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

    // add 'dirty' class to fields once they have been focused on 

    $('input, select, textarea').on('focus', function(){
        $(this).addClass('dirty');
    })

    // add listeners to run validations for fields at the correct times

    var addEventListeners = function(item, index){

        // when item or its children are focused, run validations for all 'dirty' fields before it
        $('' + item.id + ', ' + item.id + ' *').on('focus', function() {
            for (var i = 0; i < index; i++) {
                if ($(FormValidations[i].id).hasClass('dirty') || $(FormValidations[i].id).find('.dirty').length > 0) {   
                    validateField($(FormValidations[i].id), true, FormValidations[i].validations);
                }
            }
        });

        // add event listeners for when a field is invalid and is being corrected
        for (var i = 0; i < item.fields.length; i++) {
            var field = $(item.fields[i]);

            field.on(item.invalidEvent, function(){
                if ($(this).hasClass('input-error') || $(this).parent().hasClass('input-error')){
                    validateField($(item.id), true, item.validations);
                }
            });

            // add validations on keyup in certain fields
            if (item.validateOnKeyup === true){
                field.on('keyup', function(event){
                    if (event.keyCode === 9){
                        // 9 is the 'tab' key which can trigger an error on entering the field for the first time so ignore
                        return;
                    }
                    validateField($(item.id), true, item.validations);
                });
            }
        }

    }

    for (var i = 0; i < FormValidations.length; i++) {
        addEventListeners(FormValidations[i], i);
    }

    // Restrict number of characters in fields

    var restrictCharacters = function(elementId, maxlength){
        $('#' + elementId).on('input', function(event){
            if ($(this).val().length > maxlength){
                var value = $(this).val();
                $(this).val(value.slice(0, maxlength))
            }
        });
    }

    restrictCharacters('registration-date-day', 2);
    restrictCharacters('registration-date-month', 2);
    restrictCharacters('registration-date-year', 4);
    restrictCharacters('confirm-time-hours', 2);
    restrictCharacters('confirm-time-minutes', 2);

    // Automatically skip to the following field when character limit reached

    var skipToNextField = function(elementId, maxlength, nextElementId){
        $('#' + elementId).on('input', function(){
            if ($(this).val().length === maxlength){
                $('#' + nextElementId).focus();
            }
        })
    }

    skipToNextField('registration-date-day', 2, 'registration-date-month');
    skipToNextField('registration-date-month', 2, 'registration-date-year');
    skipToNextField('confirm-time-hours', 2, 'confirm-time-minutes');

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
            var monthNum = monthDropdown.children[i].value;
            // Months need to have a value of "05" etc for validations to work, this strips the leading "0" for display.
            if (monthNum[0] === "0"){
                monthNum = monthNum.slice(1,2);
            }
            monthDropdown.children[i].innerText = monthNum;
        }
        monthDropdown.children[0].innerText = "Month";
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

            $('#feedback-box a:first').focus();
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