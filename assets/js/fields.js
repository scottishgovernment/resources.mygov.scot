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
	invalidEvent - the DOM event(s) that should be used to trigger validation checks when the field is in error state

	Fields that do not require validation should still be included, giving the correct value for their ID and
	an empty array for 'fields' and 'validations'. If not included they will not trigger 
	validation checks for previous fields when focused.
*/

//NB: file of validation functions would have to go before this, and then file of setup for validation event listeners etc would go after

var FormValidations = [{
	id: '#registration-date',
	errorName: 'Date of session',
	fields: ['#registration-date'],
	validations: [_.partialRight(requiredField, 'Please enter a date, for example 06/02/2017'), dateRegex, todaysDate],
	invalidEvent: 'keyup change'
},
{
	id: '#registration-time',
	errorName: 'Time of session',
	fields: ['#registration-time'],
	validations: [requiredTimeGroup, _.partialRight(timeRange, '#registration-time-hours', '#registration-time-minutes',
		 new Date(0,0,0,9,0), new Date(0,0,0,17,0), 'Time must be after 9:00am and before 5:00pm')],
	invalidEvent: 'keyup change'
},
{
	id: '#name',
	errorName: 'Name',
	fields: ['#name'],
	validations: [_.partialRight(requiredField, 'Please enter your name'), _.partialRight(maxCharacters, 300)],
	invalidEvent: 'keyup'
},
{
	id: '#birthdate',
	errorName: 'Date of birth',
	fields: ['#birthdate-day', '#birthdate-month', '#birthdate-year'],
	validations: [_.partialRight(requiredDropdown, 'Please enter a full date'), validDateFromDropdown, _.partialRight(minimumAge, 18)],
	invalidEvent: 'change'
},
{
	id: '#email',
	errorName: 'Email address',
	fields: ['#email'],
	validations: [_.partialRight(requiredField, 'Please enter an email address, for example joe@gov.scot'),
        validateEmail, _.partialRight(maxCharacters, 300)],
    serverSideValidations: [isGovScotEmail],
	invalidEvent: 'keyup'
},
{
	id: '#telephone-number',
	errorName: 'Phone number',
	fields: ['#telephone-number'],
	validations: [validatePhone],
	invalidEvent: 'keyup'
},
{
	id: '#address-1',
	errorName: 'Address line 1',
	fields: ['#address-1'],
	validations: [_.partialRight(requiredField, 'Please enter your address'), _.partialRight(maxCharacters, 300)],
	invalidEvent: 'keyup'
},
{
	id: '#address-2',
	fields: [],
	validations: []
},
{
	id: '#address-3',
	fields: [],
	validations: []
},
{
	id: '#postcode',
	errorName: 'Postcode',
	fields: ['#postcode'],
	validations: [_.partialRight(requiredField, 'Please enter your postcode, for example EH6 6QQ'), validatePostcode],
	invalidEvent: 'keyup'
},
{
	id: '#smartphone-radio',
	errorName: 'Do you use a smartphone or tablet to access the internet?',
	fields: ['#smartphone-yes', '#smartphone-no'],
	validations: [requiredRadio],
	invalidEvent: 'change'
},
{
	id: '#devices',
	fields: [],
	validations: []
},
{
	id: '#time-online',
	errorName: 'Daily time spent online?',
	fields: ['#time-online-social', '#time-online-news', '#time-online-youtube',
			'#time-online-work', '#time-online-gaming', '#time-online-other'],
	validations: [requiredTimeSpent, validateNumberInput, validateTotalTime],
	invalidEvent: 'keyup',
	validateOnKeyup: true
},
{
	id: '#form-difficulty',
	errorName: 'Tell us how you have found this form',
	fields: ['#very-difficult', '#difficult', '#ok', '#easy', '#very-easy'],
	validations: [requiredRadio],
	invalidEvent: 'change'
},
{
	id: '#comments',
	errorName: 'Any other comments',
	fields: ['#comments'],
	validations: [_.partialRight(maxCharacters, 50)],
	invalidEvent: 'textchange keyup blur',
	validateOnKeyup: true
},
{
	id: '#confirm-date',
	errorName: 'Confirm date of session',
	fields: ['#registration-date-day', '#registration-date-month', '#registration-date-year'],
	validations: [_.partialRight(requiredInputs, 'Please enter a date, for example 06/02/2017'), 
	_.partialRight(dateFormatSplit, '#registration-date-day', '#registration-date-month', '#registration-date-year'),
	todaysDateSplit],
	invalidEvent: 'keyup change'
},
{
	id: '#confirm-time',
	errorName: 'Confirm time of session',
	fields: ['#confirm-time'],
	validations: [requiredTimeGroup, _.partialRight(timeRange, '#confirm-time-hours', '#confirm-time-minutes',
		 new Date(0,0,0,9,0), new Date(0,0,0,17,0), 'Time must be after 9:00am and before 5:00pm')],
	invalidEvent: 'keyup change'
},
{
	id: '#consent',
	errorName: 'Consent',
	fields: ['#consent'],
	validations: [requiredCheckbox],
	invalidEvent: 'change'
}]
