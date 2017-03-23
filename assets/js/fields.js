/*
	Form Fields Validations

	Use this file to declare which form fields should use which validation methods. This information
	should always be stored in an array called FormValidations, which is then used by the formSetup.js file.

	Each field's information is stored in a JavaScript object, which contains the following values:

	id - HTML ID of the field
	errorName - name of the field, not currently used but helps when reading this file
	fields - an array of IDs of the fields that make up this field, which may just be one element or 
	may be several for a fieldset of checkboxes etc
	validations - an array of which validation functions should be used to check the contents of the field
	serverSideValidations - an array of any server side validations that need to be done
	neutralEvent - the DOM event(s) that should be used to trigger validation checks when the field is in neutral state
	invalidEvent - the DOM event(s) that should be used to trigger validation checks when the field is in error state
*/

//NB: file of validation functions would have to go before this, and then file of setup for validation event listeners etc would go after

var FormValidations = [{
	id: '#registration-date',
	errorName: 'Date of session',
	fields: ['#registration-date'],
	validations: [_.partialRight(requiredField, 'Please enter a date, for example 06/02/2017'), dateRegex, todaysDate],
	neutralEvent: 'blur',
	invalidEvent: 'keyup'
},
{
	id: '#registration-time',
	errorName: 'Time of session',
	fields: ['#registration-time'],
	validations: [requiredTimeGroup],
	neutralEvent: 'blur',
	invalidEvent: 'keyup change'
},
{
	id: '#name',
	errorName: 'Name',
	fields: ['#name'],
	validations: [_.partialRight(requiredField, 'Please enter your name'), _.partialRight(maxCharacters, 300)],
	neutralEvent: 'blur',
	invalidEvent: 'keyup'
},
{
	id: '#birthdate',
	errorName: 'Date of birth',
	fields: ['#birthdate-year'],
	validations: [_.partialRight(requiredDropdown, 'Please enter a full date')],
	neutralEvent: 'blur change',
	invalidEvent: 'change'
},
{
	id: '#birthdate',
	errorName: 'Date of birth',
	fields: ['#birthdate-day', '#birthdate-month', '#birthdate-year'],
	validations: [validDateFromDropdown, _.partialRight(minimumAge, 18)],
	neutralEvent: 'blur',
	invalidEvent: 'change'
},
{
	id: '#email',
	errorName: 'Email address',
	fields: ['#email'],
	validations: [_.partialRight(requiredField, 'Please enter an email address, for example joe@gov.scot'), 
        validateEmail, _.partialRight(maxCharacters, 300)],
    serverSideValidations: [isGovScotEmail],
	neutralEvent: 'blur',
	invalidEvent: 'keyup'
},
{
	id: '#telephone-number',
	errorName: 'Phone number',
	fields: ['#telephone-number'],
	validations: [validatePhone],
	neutralEvent: 'blur',
	invalidEvent: 'keyup'
},
{
	id: '#address-1',
	errorName: 'Address line 1',
	fields: ['#address-1'],
	validations: [_.partialRight(requiredField, 'Please enter your address'), _.partialRight(maxCharacters, 300)],
	neutralEvent: 'blur',
	invalidEvent: 'keyup'
},
{
	id: '#postcode',
	errorName: 'Postcode',
	fields: ['#postcode'],
	validations: [_.partialRight(requiredField, 'Please enter your postcode, for example EH6 6QQ'), validatePostcode],
	neutralEvent: 'blur',
	invalidEvent: 'keyup'
},
{
	id: '#smartphone-radio',
	errorName: 'Do you use a smartphone or tablet to access the internet?',
	fields: ['#smartphone-yes', '#smartphone-no'],
	validations: [requiredRadio],
	neutralEvent: 'change',
	invalidEvent: 'change'
},
{
	id: '#time-online',
	errorName: 'Daily time spent online?',
	fields: ['#time-online-social', '#time-online-news', '#time-online-youtube', 
			'#time-online-work', '#time-online-gaming', '#time-online-other'],
	validations: [requiredTimeSpent, validateNumberInput],
	neutralEvent: 'textchange input',
	invalidEvent: 'keyup'
},
{
	id: '#time-online',
	errorName: 'Daily time spent online?',
	fields: ['#time-online-social', '#time-online-news', '#time-online-youtube', 
			'#time-online-work', '#time-online-gaming', '#time-online-other'],
	validations: [validateTotalTime],
	neutralEvent: 'textchange input',
	invalidEvent: 'keyup'
},
{
	id: '#form-difficulty',
	errorName: 'Tell us how you have found this form',
	fields: ['#very-difficult', '#difficult', '#ok', '#easy', '#very-easy'],
	validations: [requiredRadio],
	neutralEvent: 'change',
	invalidEvent: 'change'
},
{
	id: '#comments',
	errorName: 'Any other comments',
	fields: ['#comments'],
	validations: [_.partialRight(maxCharacters, 700)],
	neutralEvent: 'textchange keyup blur paste',
	invalidEvent: 'textchange keyup blur'
},
{
	id: '#confirm-date',
	errorName: 'Confirm date of session',
	fields: ['#registration-date-year'],
	validations: [_.partialRight(requiredInputs, 'Please enter a full date'), todaysDateSplit],
	neutralEvent: 'blur change',
	invalidEvent: 'keyup change'	
},
{
	id: '#confirm-time',
	errorName: 'Confirm time of session',
	fields: ['#confirm-time'],
	validations: [requiredTimeGroup],
	neutralEvent: 'blur',
	invalidEvent: 'keyup change'
},
{
	id: '#consent',
	errorName: 'Consent',
	fields: ['#consent'],
	validations: [requiredCheckbox],
	neutralEvent: 'change',
	invalidEvent: 'change'
}]

