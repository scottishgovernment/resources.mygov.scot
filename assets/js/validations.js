/**
 * Checks if $field is completed. Appends or Removes an error message.
 *
 * @param {object} $field - the form field to be checked
 * @returns {boolean} whether the field value is valid
 */
var requiredField = function($field, optionalMessage) {
    var trimmedValue = $.trim($field.val());
    var label = $('label[for="' + $field.attr('id') + '"]');
    var message = optionalMessage || 'Please answer this question';

    var valid = trimmedValue !== '';

    addOrRemoveFormErrors($field, valid, 'required', label.text(), message);
    showOrHideCurrentErrors($field, valid, message);

    return valid;
};

// Required inputs (more than one)

var requiredInputs = function($field, optionalMessage) {
    var inputs = $field.find('input');
    var label = $('label[for="' + $field.attr('id') + '"]');
    var message = optionalMessage || 'Please complete all fields';

    var valid = true;

    for (var i = 0; i < inputs.length; i++) {
        if ($(inputs[i]).val() == '') {
            valid = false;
        }
    }

    addOrRemoveFormErrors($field, valid, 'required', label.text(), message);
    showOrHideCurrentErrors($field, valid, message);

    return valid;
}

//  Required dropdown

var requiredDropdown = function($field, optionalMessage) {
    var dropdowns = $field.find('select');
    var label = $('label[for="' + $field.attr('id') + '"]').text() || $field.find('legend').text();
    var message = optionalMessage || 'Please make a selection for all fields';

    var valid = _.every(dropdowns, function(element){
        return element.value !== '';
    });

    addOrRemoveFormErrors($field, valid, 'required', label, message);
    showOrHideCurrentErrors($field, valid, message);

    return valid;
}

// Required group of time fields (dropdowns and radio buttons)

var requiredTimeGroup = function($field){
    var dropdowns = $field.find('select');
    var textInputs = $field.find('input');

    var radioButtons = $field.find('input:radio');
    var message = 'Please enter a full time, including \'AM\' or \'PM\'';
    var label = $('label[for="' + $field.attr('id') + '"]').text() || $field.find('legend').text();

    var valid = false;

    var dropdownsValid = _.every(dropdowns, function(element){
        return element.value !== '';
    });

    var textInputsValid = _.every(textInputs, function(element){
        return element.value !== '';
    });

    var radioButtonsValid = false;

    for (var i = 0; i < radioButtons.length; i++) {
        if ($(radioButtons[i]).is(':checked')) {
            radioButtonsValid = true;
        } 
    }

    if (dropdownsValid && textInputsValid && radioButtonsValid) {
        valid = true;
    }

    addOrRemoveFormErrors($field, valid, 'required', label, message);
    showOrHideCurrentErrors($field, valid, message);
    
    return valid;
}

// required checkbox

var requiredRadio = function($field){
    var radioButtons = $field.find('input:radio');
    var title = $field.find('legend').text();
    var message = 'Please select one of the options';

    var valid = false;

    for (var i = 0; i < radioButtons.length; i++) {
        if ($(radioButtons[i]).is(':checked')) {
            valid = true;
        } 
    }

    addOrRemoveFieldSetErrors($field, valid);
    addOrRemoveFormErrors($field, valid, 'required', title, message);
    showOrHideCurrentErrors($field, valid, message);

    return valid;
}

// required checkbox

var requiredCheckbox = function($field){
    var message = 'You can only submit this form if you accept the consent statement.';
    var valid = $field.find('input:checkbox').prop('checked');

    addOrRemoveFieldSetErrors($field, valid);
    addOrRemoveFormErrors($field, valid, 'consent-checkbox', 'Consent', message);
    showOrHideCurrentErrors($field, valid, message);

    return valid;
}


// required Time Spent boxes 

var requiredTimeSpent = function($field){
    var boxes = $field.find('input:text');
    var title = $field.find('legend').text();
    var message = 'Please enter a number in at least one box';

    var valid = false;

    for (var i = 0; i < boxes.length; i++) {
        $(boxes[i]).next().next('.field-errors').remove();
        $(boxes[i]).removeClass('input-error');

        if($(boxes[i]).val() !== ''){
            valid = true;
        }
    }

    addOrRemoveFieldSetErrors($field, valid);
    addOrRemoveFormErrors($field, valid, 'required', title, message);
    showOrHideCurrentErrors($field, valid, message);

    return valid;
}


// validate number input into text boxes

var validateNumberInput = function($field){
    var boxes = $field.find('input:text');
    var title = $field.find('legend').text();
    var message = 'Please give only enter numbers.';

    var valid = true;
    var regex = new RegExp('^[0-9.]{0,}$');

    for (var i = 0; i < boxes.length; i++) {
        var value = $.trim($(boxes[i]).val());
        var inputIsValid = value.match(regex);

        if (!inputIsValid){
            if($(boxes[i]).next().next('.field-errors').length === 0){
                $(boxes[i]).next().after('<p class="field-errors"><span class="fa-circle error-circle"></span>Please only enter numbers.</p>');
                $(boxes[i]).addClass('input-error');
            } 
            valid = false;  
        } else {
            $(boxes[i]).next().next('.field-errors').remove();
            $(boxes[i]).removeClass('input-error');
        } 
    }

    addOrRemoveFormErrors($field, valid, 'invalid-time-spent', title, 'Please only enter numbers.');    

    return valid;
}

// validates total time from all time boxes - could be refactored to be more reusable?

var validateTotalTime = function($field){
    var boxes = $field.find('input:text');
    var title = $field.find('legend').text();
    var message = 'Please give answers totalling under 24 hours.';

    var valid = true;
    var total = 0;

    for (var i = 0; i < boxes.length; i++) {
        var value = $.trim($(boxes[i]).val());
        if ( !isNaN(parseFloat(value)) ){
            total = total + parseFloat(value); 
        }
    }

    if (total === 0){
        return true;
    }

    if (total > 24) {
        valid = false;
    }

    addOrRemoveFieldSetErrors($field, valid);
    showOrHideCurrentErrors($field, valid, message);
    addOrRemoveFormErrors($field, valid, 'invalid-time-spent', title, message);

    return valid;
}

// validate date dropdown to make sure it's a real date

var validDateFromDropdown = function($field){
    var dropdowns = $field.find('select');
    var fieldName = $('label[for="' + $field.attr('id') + '"]').text();
    var message = 'Please check you\'ve entered the correct date';

    var day = dropdowns[0].value;
    var month = dropdowns[1].value;
    var year = dropdowns[2].value;

    if (!day || !month || !year) {
        return true;
    }

    var valid = isValidDate(day, month, year);

    if (!valid) {
        $(dropdowns[0]).addClass('input-error');
    } else {
        $(dropdowns[0]).removeClass('input-error');
    }

    addOrRemoveFormErrors($field, valid, 'invalid-date', fieldName, message);
    showOrHideCurrentErrors($field, valid, message);

    return valid;
}

// valid date finder

var isValidDate = function(day, month, year){
    // solution by Matti Virkkunen: http://stackoverflow.com/a/4881951
    var isLeapYear = year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    var daysInMonth = [31, isLeapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month - 1];

    var valid = day <= daysInMonth;

    return valid;
}

// participant old enough


var minimumAge = function($field, minimumAge){
    var dropdowns = $field.find('select');
    var fieldName = $('label[for="' + $field.attr('id') + '"]').text();
    var day = dropdowns[0].value;
    var month = dropdowns[1].value;
    var year = dropdowns[2].value;

    if (!day || !month || !year) {
        return true;
    }

    var birthdate = new Date('' + year + '-' +  month + '-' + day);
    var today = new Date();
    var age = today.getFullYear() - birthdate.getFullYear();
    var m = today.getMonth() - birthdate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }
    
    var valid = age >= minimumAge;

    if (!valid) {
        $(dropdowns[2]).addClass('input-error');
    } else {
        $(dropdowns[2]).removeClass('input-error');
    }

    addOrRemoveFormErrors($field, valid, 'minimum-age', fieldName, 'Participants must be aged ' + minimumAge + ' or older.');
    showOrHideCurrentErrors($field, valid, 'Sorry, you must be aged ' + minimumAge + ' or over to use this service - please check you\'ve entered the correct date of birth.');

    return valid;
}


// Time in 24 hours

var time24Hours = function($field){
    var trimmedValue = $.trim($field.val());
    var fieldName = $('label[for="' + $field.attr('id') + '"]').text();
    var message = 'Please enter the time using the 24 hour format, for example 14.30.';

    // A regular expression only allowing times in 24 hours, separated by '.' or ':'
    var regex = new RegExp("^([01]?[0-9]|2[0-3])[:.][0-5][0-9]$");

    var valid = trimmedValue.match(regex) !== null;

    addOrRemoveFormErrors($field, valid, 'invalid-time-24', fieldName, message);
    showOrHideCurrentErrors($field, valid, message);

    return valid;
}

// Time between time ranges

// var timeRange = function($field, startTime, endTime){
//     var dropdowns = $field.find('select');
//     var textInputs = $field.find('input');
//     var radioButtonChecked = $field.find('input:radio:checked');

//     var timePeriod = $(radioButtonChecked).val();

//     var hours = parseInt(dropdowns[0].value);
//     var minutes = parseInt(dropdowns[1].value);

//     if (timePeriod === "PM") {
//         hours = hours + 12;
//     }

//     // var fieldName = $('label[for="' + $field.attr('id') + '"]').text();
//     // var message = 'Times must be after ' + startTime.toTimeString().slice(0,5)
//     //                  + ' and before ' + endTime.toTimeString().slice(0,5) + '.';

//     var timeEntered = new Date(0, 0, 0, hours, minutes);
//     console.log(timeEntered)

//     var valid = (timeEntered >= startTime) && (timeEntered <= endTime);

//     // addOrRemoveFormErrors($field, valid, 'invalid-time-range', fieldName, message);
//     // showOrHideCurrentErrors($field, valid, message);

//     console.log(valid)
//     return valid;
// }

// regex for emails 

var validateEmail = function ($field) {
    var trimmedValue = $.trim($field.val());
    var message = 'Please enter a valid email address, for example joe@gov.scot';

    var regex = /^[^@ ]+@[^@ ]+\.[^@ ]+$/;

    var valid = trimmedValue.match(regex) !== null;

    addOrRemoveFormErrors($field, valid, 'invalid-email', 'Email address', message);
    showOrHideCurrentErrors($field, valid, message);

    return valid;
};

var isGovScotEmail = function($field) {
    var trimmedValue = $.trim($field.val()).toLowerCase();
    var message = 'Please enter a valid \'@gov.scot\' email address, for example joe@gov.scot';

    var regex = new RegExp('^[a-zA-Z0-9_.+-]+@gov.scot$');

    var valid = trimmedValue.match(regex) !== null;

    addOrRemoveFormErrors($field, valid, 'invalid-email', 'Email address', message);
    handleServerSideErrors($field, valid, message);

    return valid;
}

// time in dd/mm/yyyy

var dateRegex = function($field){
    var trimmedValue = $.trim($field.val());
    var fieldName = $('label[for="' + $field.attr('id') + '"]').text();
    var message = 'Please check you\'ve entered a correct date';

    // A regular expression only allowing dd/mm/yyyy format
    var regex = new RegExp('^\\d\\d\\/\\d\\d\\/\\d\\d\\d\\d$');

    var valid = trimmedValue.match(regex) !== null;

    if (!valid) {
        addOrRemoveFormErrors($field, valid, 'invalid-date-format', fieldName, 'Please enter the date as DD/MM/YYYY');
        showOrHideCurrentErrors($field, valid, 'Please enter the date as DD/MM/YYYY');
        return valid;
    }

    var day = parseInt(trimmedValue.slice(0, 2));
    var month = parseInt(trimmedValue.slice(3, 5));
    var year = parseInt(trimmedValue.slice(6, 10));

    var valid = isValidDate(day, month, year);

    addOrRemoveFormErrors($field, valid, 'invalid-date-format', fieldName, message);
    showOrHideCurrentErrors($field, valid, message);

    return valid;
}

// check date is today's date

var todaysDate = function($field){
    var trimmedValue = $.trim($field.val());
    var fieldName = $('label[for="' + $field.attr('id') + '"]').text();
    var message = 'Your session date must be today\'s date';

    var day = parseInt(trimmedValue.slice(0, 2));
    var month = parseInt(trimmedValue.slice(3, 5));
    var year = parseInt(trimmedValue.slice(6, 10));

    var today = new Date();

    var valid = (today.getFullYear() === year) && (today.getMonth() === month - 1) && (today.getDate() === day);

    addOrRemoveFormErrors($field, valid, 'not-todays-date', fieldName, message);
    showOrHideCurrentErrors($field, valid, message);

    return valid;
}

//  check that date is today's date - split fields

var todaysDateSplit = function($field){
    var inputs = $field.find('input');
    var fieldName = $('label[for="' + $field.attr('id') + '"]').text();
    var message = 'Your session date must be today\'s date';

    var day = parseInt($(inputs[0]).val());
    var month = parseInt($(inputs[1]).val());
    var year = parseInt($(inputs[2]).val());

    var today = new Date();

    var valid = (today.getFullYear() === year) && (today.getMonth() === month - 1) && (today.getDate() === day);

    addOrRemoveFormErrors($field, valid, 'not-todays-date', fieldName, message);
    showOrHideCurrentErrors($field, valid, message);

    return valid;
}

// check two date inputs are matching

var matchesField = function($field, $compareField){
    var trimmedValue = $.trim($field.val());
    var compareValue = $.trim($compareField.val());
    var fieldName = $('label[for="' + $field.attr('id') + '"]').text();
    var compareFieldName = $('label[for="' + $compareField.attr('id') + '"]').text();
    var message = 'This must match the value of \'' + compareFieldName + '\'.';

    var valid = trimmedValue === compareValue;

    addOrRemoveFormErrors($field, valid, 'must-match-field', fieldName, message);
    showOrHideCurrentErrors($field, valid, message);

    return valid;
}

// valid postcode 

var validatePostcode = function($field){
    var message = 'Please enter a valid postcode, for example EH6 6QQ';

    var postcodeRegExp = new RegExp('^([A-PR-UWYZ0-9][A-HK-Y0-9][AEHMNPRTVXY0-9]?[ABEHMNPRVWXY0-9]? {0,2}[0-9][ABD-HJLN-UW-Z]{2}|GIR ?0AA)$');
    // var scottishPostcodeRegExp = new RegExp('^(AB|DD|DG|EH|FK|G|HS|IV|KA|KW|KY|ML|PA|PH|TD|ZE)[0-9]{1,2} {0,2}[0-9][ABD-HJLN-UW-Z]{2}$');

    var postcodeValue = $field.val().toUpperCase().replace(/\s+/g, '');

    var valid = postcodeValue.match(postcodeRegExp) !== null;

    addOrRemoveFormErrors($field, valid, 'invalid-postcode', 'Postcode', message);
    showOrHideCurrentErrors($field, valid, message);

    return valid;
}

// valid phone number 

var validatePhone = function($field){
    var trimmedValue = $.trim($field.val()).replace(/\s+/g, '');
    var message = 'Use only numbers 0-9 and the "+" character. Phone numbers should be less than 20 characters long.';

    // A regular expression matching only up to 20 numbers and possibly a '+' character at the beginning
    var regex = new RegExp('^\\+?[0-9]{0,20}$');

    var valid = trimmedValue.match(regex) !== null;

    addOrRemoveFormErrors($field, valid, 'invalid-phone', 'Phone number', message);
    showOrHideCurrentErrors($field, valid, message);

    return valid;
}

/**
 * Checks whether if $field is less than or equal to maxLength.
 * Appends or Removes an error message.
 * Updates character count
 *
 * @param {object} $field - the form field to be checked
 * @param {int} maxLength - the permitted character length of $field
 * @returns {boolean} whether the field value is valid
 */
var maxCharacters = function($field, maxLength) {
    var valid = $field.val().length <= maxLength;
    var className = '.' + $field.attr('id') +'-errors';
    var label = $('label[for="' + $field.attr('id') + '"]');

    var message = 'Please answer in under ' + maxLength + ' characters. A character is a letter, number or symbol and includes spaces.';

    $field.next().find('span').html((maxLength - $field.val().length));

    if (!valid) {
        $field.next().find('span').css('color', '#d32205');
    } else {
        $field.next().find('span').css('color', 'grey');
    }

    addOrRemoveFormErrors($field, valid, 'too-many', label.text(), message);
    showOrHideCurrentErrors($field, valid, message);

    return valid;
};





/**
 * Adds or removes error messages to main error container (at top of page)
 */

 var addOrRemoveFormErrors = function (field, valid, errorClass, fieldName, message) {
    var className = '.' + field.attr('id') +'-errors';
    var errorName = className + ' .' + errorClass;

    if (!valid) {
        if($(errorName).length === 0) {
            $(className).append('<li class="error ' + errorClass + '"><a class="form-nav" href="#'
                  + field.attr('id') + '-link">'
                  + fieldName + ': <span class="underline">' +  message + '</span></a></li>');
        } else {
            $(errorName).removeClass('error-grey');
        }
    } else {
        if ($('.form-message--error').hasClass('hidden')) {
            $(errorName).remove();            
        } else {
            $(errorName).addClass('error-grey');
        }

    }
 }


// Show or hide fieldset errors

var addOrRemoveFieldSetErrors = function($field, valid){
     if (!valid){
        $field.find('.input-wrapper').addClass('input-error');
    } else {
        $field.find('.input-wrapper').removeClass('input-error');
    }
}

/**
 *  Shows or hides individual field's current errors box (box below each field)
 */

var showOrHideCurrentErrors = function (field, valid, message) {
    var errorContainer;

    if (field.find('.current-errors').length !== 0){
        errorContainer = field.find('.current-errors');
    } else {
        errorContainer = field.siblings('.current-errors');
    }

    if (!valid) {
        errorContainer.html('<li>' + message + '</li>');
    } else {
        errorContainer.html('');
    }
}

// 'Server side' error handling 

var handleServerSideErrors = function (field, valid, message) {
    var errorContainer;

    if (field.find('.server-side-errors').length !== 0){
        errorContainer = field.find('.server-side-errors');
    } else {
        errorContainer = field.siblings('.server-side-errors');
    }

    if (!valid) {
        errorContainer.html('<li>' + message + '</li>');
        errorContainer.removeClass('server-side-neutral');
    } else {
        errorContainer.html('');
    }

    field.one('input', function(){
        errorContainer.addClass('server-side-neutral');
        field.removeClass('input-error');
    });
}



// This would normally be included in main site's JS so could be removed for real version.
var expandable = {
    init: function () {

        // init all data-gtm to being closed
        $('.panel a.panel-heading').each(function () {
            $(this).attr('data-gtm', 'panel-closed');
        });

        //Handle changing colours on panel headers when open
        $('.expandable-item').on('click', '.js-toggle-expand', function(event) {
            event.preventDefault();

            var expandableItem = $(this).closest('.expandable-item'),
                expandableItemBody = expandableItem.find('.expandable-item__body');

            if (expandableItem.hasClass('expandable-item--open')) {
                expandableItemBody.attr('aria-expanded', "false");
                expandableItem.removeClass('expandable-item--open');
                expandableItemBody.slideUp(200, function () {
                    // hacky IE8 fix to force redraw of changed inline-block element
                    expandableItem.closest('.grid__item').toggleClass('foo');
                    expandableItem.closest('.grid__item').toggleClass('foo');
                });
                $(this).attr('data-gtm', 'panel-closed');
            } else {
                expandableItemBody.attr('aria-expanded', "true");
                expandableItem.addClass('expandable-item--open');
                expandableItemBody.slideDown(200, function () {
                    // hacky IE8 fix to force redraw of changed inline-block element
                    expandableItem.closest('.grid__item').toggleClass('foo');
                    expandableItem.closest('.grid__item').toggleClass('foo');
                });
                $(this).attr('data-gtm', 'panel-opened');
            }
        });
    }
};

// self-initialize
expandable.init();
