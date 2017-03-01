// ID of the field

// Name to refer to it by in code

// Possibly its name, or the name to use in errors? 

// Fields to be checking (for single inputs will be same as the field, for multiple ones will be a list)

// Type of field?

// List of validations required (inline)

// Any server side validations

// Event on which to check validity when neutral (e.g. blur, change)

// Event on which to check validity when invalid (e.g. keyup, change)


//NB: file of validation functions would have to go before this, and then file of settup up validation event listeners etc would go after

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
	validations: [_.partialRight(requiredField, 'Please enter a time, for example 12.43'), time24Hours, 
	_.partialRight(timeRange, new Date(0,0,0,9,0), new Date(0,0,0,17,0))],
	neutralEvent: 'blur',
	invalidEvent: 'keyup'
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
	fields: ['#birthdate-day', '#birthdate-month', '#birthdate-year'],
	validations: [requiredDateDropdown, validDateFromDropdown, _.partialRight(minimumAge, 18)],
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
	neutralEvent: 'blur change',
	invalidEvent: 'change'
},
{
	id: '#time-online',
	errorName: 'Daily time spent online?',
	fields: ['#time-online-social', '#time-online-news', '#time-online-youtube', 
			'#time-online-work', '#time-online-gaming', '#time-online-other'],
	validations: [requiredTimeSpent, validateTimeSpent],
	neutralEvent: 'keyup',
	invalidEvent: 'keyup'
},
{
	id: '#form-difficulty',
	errorName: 'Tell us how you have found this form',
	fields: ['#very-difficult', '#difficult', '#ok', '#easy', '#very-easy'],
	validations: [requiredRadio],
	neutralEvent: 'blur change',
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
	id: '#session-date',
	errorName: 'Confirm date of session',
	fields: ['#session-date'],
	validations: [_.partialRight(requiredField, 'Please enter a date'), dateRegex, todaysDate],
	neutralEvent: 'blur',
	invalidEvent: 'keyup'	
},
{
	id: '#consent-checkbox',
	errorName: 'Consent',
	fields: ['#consent-checkbox'],
	validations: [requiredCheckbox],
	neutralEvent: 'change',
	invalidEvent: 'change'
}]

