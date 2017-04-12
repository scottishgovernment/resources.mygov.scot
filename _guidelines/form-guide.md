---
layout: article
title:  "Forms Guidance (alpha)"
categories: documentation
summary: The standard for the look and feel of forms available on mygov.scot.
imperative: Guideline
type: design
index: 2
frontpage: no
headings:
- Form structure
- Common elements
- Field types
- User notifications
contentclass: has-leaders

---

## Form structure
Forms should have a natural flow and feel like a conversation between the site and the user.

A form consists of most of the following features. Using these features across all forms helps create a structure and language that users identify with.

### Heading
Easy to understand title of the form.

### Introduction text
Helps the user know they are in the right place. A brief description of what the purpose of the form is, with links to any guidance.

{% include example-form-guidance.html file="forms_header" caption="Consider that users could land in the wrong place. Help them get to the right place by linking in text before they spend any time filling in the form." height="309" width="800" %}

### Progress
Helps the user know how much they have still to do and encourages them to finish. For long forms users should have the option to save at any stage and pick it up later. If steps within the form can be skipped then “steps # of #” should be changed to “part # of #”.

### Supporting text
Indicate to the user which fields need to be filled in.


{% include example-form-guidance.html file="forms_support_text" caption="Reduce the number of avoidable errors by clearly telling users what the from expects of them." height="123" width="800" %}

### Error playback
If there is an error, after a submission or on next step there should be a bulleted list of errors indicating the field(s) with the issue. The help on how to fix it should be in plain English and each list item (in the playback box) should link to the affected field. The field validation text should be displayed directly below the field as well as any extra error messages. [https://www.nngroup.com/articles/error-message-guidelines/](https://www.nngroup.com/articles/error-message-guidelines/)

{% include example-form-guidance.html file="forms_error_playback" caption="The Playback box is triggered after the user tries to submit or progress to next step when there are fields in error state." height="412"  width="800" %}

### Elements
The fields of the form should be ordered in a logical and structured manner making it easier for the user to fill out the form.

{% include example-form-guidance.html file="forms_elements" caption="Where fields are of a similar nature it makes sense to order a mandatory field before an optional field." height="292" width="800" %}

### Forward and backward buttons/pagination
On multipage forms the user should always be able to navigate forward and back without losing their answers. The only thing that should stop a user progressing is an invalid input.

{% include example-form-guidance.html file="forms_next_btn" caption="Buttons are aligned left: ‘Previous’ left; ‘Next’ right." height="153" width="800" %}

### Consent statement
When entering personal details, it is important that users know what is going to happen with that data and that they are given the opportunity to consent to this use. Users will not be able to submit without consent. For long consent statements an accordion can be used to hide and show content.

{% include example-form-guidance.html file="forms_consent" caption="Ensure the hit area of the checkbox is large enough across all devices." height="153" width="800" %}


### Captcha
Robotic submission is a problem with any forms. It is important to reduce these submissions as much as possible. The Captcha plugin is used to ensure that submissions are human, by using visual or audio challenges to test their humanity. [https://www.google.com/recaptcha/intro/index.html](https://www.google.com/recaptcha/intro/index.html)

{% include example-form-guidance.html file="forms_captcha" caption="Example of new Captcha plugin which is based on picture recognition." height="153" width="800" %}

### Submit
There should be a button that finalises and submits the user input. When submitting, there should be a spinner to show that there is an action, followed by a success page, failure page or playback error message.

{% include example-form-guidance.html file="forms_submit" caption="Users will pause before pressing this button. They will read the text. And after pressing they will want to know that something is happening." height="153" width="800" %}

## Common elements
The area around the field is just as important as the field itself.

Each form field is supported with a range of common elements that helps the user understand what is required of them. They should answer the questions ‘Do I need to fill this in?’ and ‘How should I fill this in?’.

[http://govuk-elements.herokuapp.com/form-elements](http://govuk-elements.herokuapp.com/form-elements)

### Elements

{% include example-form-guidance.html file="forms_elements_combo" caption="A range of common elements that can be associated with any form field. Text field labels have a different appearance to radio button labels. The common styling is applied to what the user perceives the title of the form field to be." height="697" width="800" %}

#### 1. Label
Each label should be clear and describe the field they relate to. Try not to be conversational by using short sharp text wherever possible and when necessary use short questions for the user to provide information. When a user clicks on the label it should give focus to its corresponding field.

#### 2. Required
Indicated with a ‘\*’ to the left of the label. Every field should be required as default. Say at the top of the form that “All fields marked with an asterisk must be filled in (\*)”.

#### 3. Optional
Indicated with ‘(optional)’ to the right of the label. Optional fields should not be used if avoidable. Often users feel compelled to fill all the fields, when there are excess fields this frustrates users as it is slowing them down and increases drop off. Optional fields should only be used when it is of advantage to the user, the advantage should be stated in the ‘explain’ text below the field. For example phone number will allow us to contact them quicker than letter, but it is not necessary.

#### 4. Help
Text is displayed above the field. The text helps the user decide or fill in the field by giving more information (for example “Select this checkbox to include funds that apply to any UK business in your results”).

#### 5. Hint
This should always be visible if needed. Text to tell the user how to fill out the field (e.g. “Use DD/MM/YYYY format” or “Password must include a special character”).

#### 6. Placeholder text
Shows the user an example of the information that is needed in that field. This should be accompanied by an associated text label for a text field, using either the label element or the title attribute. Placeholder text disappears when a textbox receives focus. Note: Placeholder text does not meet 4:5:1 WCAG AA colour contrast ratio. At 4:5:1 ratio the text is in danger of looking like input text, so the contrast has been decreased slightly to prevent users thinking a text field is already filled in and skip over it.

Since it disappears on focus, do not use placeholder text to indicate to the user the expected format (DD/MM/YYYY). Use it to show an example (e.g. 01/02/2017).

#### 7. Validation
Text is positioned directly below the field. Red is used if there is a problem with the input (invalid). Invalid inputs are accompanied by an error message below the field explaining why it is invalid in plain English. When the user corrects the mistake the error message goes away and the focus state reappears. Green is used to show a successful (validated) input along with a tick to indicate that the answer is correct.

#### 8. Explain
Text is displayed below the field automatically. This text explains what the field entry means (e.g. user selects ‘No’ and the text says “You will not receive any correspondence from us” or user selects ‘Yes’ the text will say “On Submit, a summary of the information you provided will be sent to the email provided ‘yourname@email.com’”).

### States

The state of each field tells the user what is selected and what they are currently engaged with or even can’t engage with.

#### Default
Neutral state of the field before the user has interacted with it or if the input is valid (but not validated).

{% include example-form-guidance.html file="forms_default_state" caption="A text field in default state has a white background, so using a grey (#f8f8f8) background on forms helps these fields to stand out and look more like inputs." height="172" width="800" %}

#### Focus
 The user has clicked/tapped in or tabbed to the field. Indicated by a blue border and a light blue background. When the field is in error state the light blue background is retained while the border turns  red. Invalidated state, again the background is retained, while the border turns green and a tick is displayed within the field, aligned to the right.

{% include example-form-guidance.html file="forms_focus_state" caption="The focus state follows the same rules as selected state styling. The light blue background is retained in error and validation states." height="460" width="800" %}

#### Inactive
The user cannot interact with the field. Can become active depending on selection in other fields. Indicated by being greyed out.

{% include example-form-guidance.html file="forms_inactive_state" caption="If it is necessary to show inactive fields then it is important that users can identify between these and active fields." height="172" width="800" %}

#### Selected
Used for dropdowns, checkboxes and radio buttons to show what has been selected.

{% include example-form-guidance.html file="forms_selected_state" caption="The selected state follows the same rules as focus state styling." height="319" width="800" %}

#### Error
Validation has deemed the field input to be incorrect. This is indicated by the border turning red and increasing in thickness, accompanied by an error message below the field.

{% include example-form-guidance.html file="forms_error_state" caption="An example of a field in error state when not in focus." height="193" width="800" %}

#### Validated
When a field input is compared with something else and is deemed correct (for example a reference number is compare to a database and find the reference number in the database). This is indicated by the border turning green and increasing in thickness, accompanied by a green tick aligned to the right within the field.

{% include example-form-guidance.html file="forms_validated_state" caption="An example of a field in validated state when not in focus." height="194" width="800" %}

## Field types
Users know forms fields better than they think they do.

Fields are where the user inputs their information. Many users are familiar with field types that have a specific purpose. Therefore it is important to choose the right type of field that meets user expectations and avoids confusion.

### Text fields
A text field is for small amounts of free text for example Name. The different types of text fields are listed below:

Label: Sits directly above the field to describe what the user should enter.

Field: The width of the field is by default full width of the container. In the case of Desktop and Tablet screens, there are two other widths to choose from for smaller fields. For input smaller than this, use the Variable small field:

* Medium: 50% of container. (Max 18 char) Example usage: Phone number / Reference number
* Small: 37.5% of container (Max 12 char). Example usage: Date input
* Variable small: 45px min-width (Use for 1-4 char) Example usage: Time in Hours and Minutes.

Placeholder: Should only hold non-essential, example text, Since the text disappears there should never be a reliance on users to remember the text. Numerical inputs have ‘0’ placeholders (centre-aligned) to indicate the type of data to be entered. Placeholders are considered inaccessible as they disappear as soon as the user focus on the field. Treat them as visual indicators.

#### Plain text

A plain text field has no restrictions on the input. Apart from the character count, this is a field that can be used flexibly. It has little support in terms of browser side validation so it’s important that labels, hints and help text is used to show what the user has to input.

Character count: Not shown to the user. The maximum number of characters in text field should be 300 characters, unless there is need for more.

{% include example-form-guidance.html file="forms_plain_text" caption="Plain text fields are by default full width of container as the input will likely be variable in size." height="172" width="800" %}

#### Email

An email text field provides inbuilt validation of the email address in many browsers.

Validation: Check that the input is a valid email address.

Hint: For example “This must be a gov.scot email address, for example ‘joe@gov.scot’”.

Field: Uppercase inputs should be converted to lowercase on entry.

{% include example-form-guidance.html file="forms_email" caption="Company name emails are often represented in title case, for example, ‘JohnSmith@gov.scot’. On entry any CAPS are converted to lowercase." height="172" width="800" %}

#### Number

A number text field can only contain numerical digits. Any field that has letters or special characters should give a validation error; for example reference numbers for dates that are thought of as numbers often have letters or “/” in them.

Validation: Inputs should be numbers only. Spaces and commas should be ignored.

Hint: For example “Use only numbers 0-9”

Field: When there are more than 3 digits separate with comma in groups of 3, for example, “1,000” or “1,000,000”. When no more that 4 digits are allowed the input should be centred. When a number of inputs are totalled at the bottom then they should be right aligned. On mobile ensure the number keypad is displayed on focus.

{% include example-form-guidance.html file="forms_number" caption="The minimum size for a text input field is 45px x 42px. This accommodates up to two digits (including decimal). If any numerical field within a fieldset is expected to have an input of 3 digits for example, then all fields should be the same width." height="292" width="800" %}

#### Telephone

A telephone field does not have much browser support at the moment and due to the different types of phone numbers (local, distance, international, extensions) we have to develop our own validation. This is still in an alpha state and therefore cannot be robustly relied upon.

Validation: Check that it is a valid phone number.

Hint: For example “Please include area code”.

Label: Phone number rather than telephone.

Field: On mobile ensure the number keypad is displayed on focus.

{% include example-form-guidance.html file="forms_telephone" caption="Phone number fields can be displayed at 50% of the container with an 18 character limit. Use ‘Phone’ instead of ‘Telephone’ – it’s shorter and easy to understand." height="202" width="800" %}

#### Password

A password field is used for the input or the creation of passwords only and will hide the user input by default, e.g. ‘*****’

Validation: Activated when the field loses focus. Passwords should have 8 or more characters and not include spaces. The error message should list all the things that make the entry invalid for example “Passwords can not have spaces”.

Tell user if the caps lock is on through a pop-up message.

Hint: The hint should list the criteria needed for a password for example “Passwords should have 8 or more characters”.

Character count: A countdown should be used to show the number of characters and turns green when the input is 8 or more without spaces.

Placeholder: Field must be blank in case users think it has autocompleted.

Field: Any input must be masked by asterisks or dots for example ‘********’

Show password: Show password is helpful to the user, especially if an account gets locked after a certain number of tries. However, there is a security issue with always being able to show the password especially when the browser stores the username and password.

Show password should only be used when creating and confirming a password.

Confirm password: When the password is successfully matched, there should be a tick to the right of the text field.

{% include example-form-guidance.html file="forms_password" caption="Passwords are masked within the field. If a user is creating a password, then the field should be followed up by a ‘Confirm password’ field." height="202" width="800" %}

#### Date

There are different ways date fields can be displayed depending on how near or far away the date range is. It is up to the specific use case which date format should be used.

Validation: Should check for agreed format and if there are known restrictions, for example the date can’t be in the past. Format of the date has to be shown.

Hint: For example “Use dd/mm/yy format”

Placeholder: For example ‘e.g. 25/05/67’

Fieldset: Group related fields together horizontally - day, month, year. Once day has 2 valid digits the focus should automatically move to the month. The same behaviour is applied to the month.

Field: A plain text field that allows the user to directly enter the date. Alternative formats or mistakes are automatically corrected wherever possible (for example puts in ‘/’ automatically). Can be accompanied by a date picker.

Date picker: A date picker should be an addition and not a replacement for the input fields. This can make it easier for users to find the right date if within a year of the current date. For example the user knows it was last Saturday but doesn’t know the exact date. The date picker will allow them to pick the date rather than force them to work it out (they might not even know what today's date is).

Today’s date should be highlighted when the date picker is selected. If it is a date range, then the first date selected should show while the second date is being selected. (If it’s likely that the dates are yesterday, today or tomorrow then buttons allow automatic selection.)

Dropdown for day, month, year: This reduces thinking time for the user. Note: Individual labels are not displayed for each dropdown field in this case. ‘Day’, ‘Month’ and ‘Year’ should be used for the Placeholder.

Time: Hours and minutes should be dropdowns. Hours listing 1 to 12 and minutes listing 1 to 60, in increments of 1, 5, 10 or 15 minutes. AM/PM radio buttons should sit alongside with AM auto-selected.

Legend: Clearly title each fieldset appropriately.

{% include example-form-guidance.html file="forms_date" caption="The example above allows user to choose whether they type the date in or choose a date from the date picker on the right. The hint below the label tells the user what format is required and the placeholder gives an example. DD MM YYYY (spaces) or DDMMYYYY (no spaces) should be converted to DD/MM/YYYY on blur (de-focus)." height="208" width="800" %}

#### Closely related text fields

Fieldset: Group related dependent fields together. For example grouping of Radio buttons, Checkboxes and Date fields. Grouping enables error messages to be associated with several closely related fields.

Legend: Each title must be clear (usually a question). In a fieldset of dependent fields the legend adopts the default label styling, with the labels for each dependent field being given less prominent styling.

Label: Doesn’t look like a regular label. Sits to the right of the field by default. In cases where this doesn’t work, it can be placed above the field.

Field: Width should be appropriate size for expected input.

Placeholder: Should only hold example text. As the text disappears, the users shouldn’t have to remember the text. Numerical inputs have ‘0’ placeholders (centre-aligned) to indicate the type of data to be entered.

Validation: Fieldset error messages are positioned above the top field if related to all fields or directly below the corresponding field. When the error relates to all fields then it is supported by a red tint background box with red dashed border surrounding all fields. If the fields are placed horizontally on one line then they are treated as a single element with the error message below the fields and no surrounding box.

{% include example-form-guidance.html file="forms_related" caption="Labels are by default positioned to the right of fields within fieldsets. This allows fields within a form to be left-aligned making it easy for the user to scan the page and to navigate from one field to the next. Fieldset error box is used to encapsulate all fields that an error message applies to." height="404" width="800" %}

### Address fields

Address picker: This should be at the top of the address fields. List all possible addresses under a postcode from database.

Fields: Address line 1, 2, 3, country and postcode.

#### Postcode

Validation: Where possible entries should be checked against a valid postcode database.

Hint: For example “Must be a UK postcode, for example EH6 6QQ.

Field: Lowercase inputs should be converted to uppercase on entry. If possible users can select from a list of addresses with that postcode.

Alternative: “Don’t know postcode?” should always be provided if using a postcode lookup.

{% include example-form-guidance.html file="forms_postcode" caption="The postcode field should be set to display uppercase as the user enters letters even if the user inputs lowercase. This makes it easier for users particularly on mobile devices." height="173" width="800" %}

### Text box

Label: Sits directly above the text box to clearly indicate what the user should enter.

Character count: Only shown for this type of field. Used when there is a limit or importance to the number of characters used. Positioned to the left below the field. The count should start at the maximum and work down as the user types. The border and negative number turns red if the character count is exceeded.

Default character limit is 700 characters. Medium and Large boxes have a limit of 1500 and 3500 respectively.

Text box: Default is full width of main pane and 4 line height. Height, should reflect expected content, so:

* ‘Reason for leaving’ might be Small (4 lines)
* ‘Main duties’ might be Medium (10 lines)
* Personal statement might be Large (20 lines)

Maximum input is approximately double the initial set line height i.e. 10, 20 and 40 lines.

As the user enters text beyond the set height, the box expands. If the input box is bigger than the viewport then the cursor should align to the bottom of the viewport (above the keyboard on touch devices, and react when the keyboard is deactivated).

Validation: When the character count is exceeded, it displays negative numbers and turns red. When focus is lost on the box and character count is still exceeded the border turns 2px red and a red error message is shown.

{% include example-form-guidance.html file="forms_text_box" caption="Examples of Small, Medium and Large text boxes. If the expected input is to be long then use a Large text box to set expectation and avoid unnecessary masking of content. Initial views are set at 4, 10 and 20 lines respectively. Maximum input is approximately double this i.e. 10, 20 and 40 lines." height="1189" width="800" %}

### Dropdown (select box)

Label: Sits above the select element to show what the list represents.

List: Width appropriate to list entries. Unless a mandatory field, the list should always have all, none or zero value entry.

Placeholder: Should not be an example in case users think that it has already been automatically selected. Instead use prompts or titles, for example ’Please choose from list’ or ‘Month’ or leave blank.

{% include example-form-guidance.html file="forms_dropdown" caption="Examples of select boxes at size appropriate to the content." height="465" width="800" %}

### Checkbox

Legend: Clearly title each fieldset appropriately.

Fieldset: Group all related checkboxes with corresponding labels under the one legend. Always group related fields together.

Grouping helps the user to scan the document and make sure that there is no missing information.

Hint: should go below the legend and indicate whether the the user can select on or many checkboxes.

Label: Positioned to the right of the check behaving like an unordered list. This allows users to move cursor down in a straight line selecting multiple boxes and easily identify the corresponding check box to the label (instead of a ragged right hand side). Check boxes should not be listed horizontally.

Validation: Error messages are positioned above the first checkbox supported by a red tint background box with red dashed border surrounding all the checkboxes.

{% include example-form-guidance.html file="forms_checkbox" caption="When checkboxes are used as part of a filter set and space is at a premium, then it is recommended that a minimum hit/touch area of 40px is honoured to avoid accidental select of neighbouring checkboxes." height="359" width="800" %}

### Radio button

Legend: Give each fieldset a clear title (usually the question).

Fieldset: Group all related radio buttons with corresponding labels under the one legend. Always group related fields together, for example Yes, No. Radio buttons can be placed horizontally if there is a maximum of 2 options.

Label: Positioned to the right of the button behaving like an unordered list. Radio buttons should be clearly grouped and labelled.

Validation: Error messages are positioned above the first radio button supported by a red tint background box with red dashed border surrounding all the radio buttons. If radio buttons are positioned horizontally on one line then they are treated as a single element with the error message below the radio buttons and no surrounding box.

* [GDS advice on forms](https://gdstechnology.blog.gov.uk/2016/12/13/improving-forms-with-new-radios-and-checkboxes/)

{% include example-form-guidance.html file="forms_radio" caption="If there are only 2 short options then they can be presented side by side. In this instance, error messaging is handled as it is on standard one line fields ie no encapsulating box and message appears below the fields." height="538" width="800" %}

## User Notifications
Keeping the user informed is a vital aspect of forms.

The aim is to create a dialogue with the user and support them by reacting to their input. Helpful validation messaging and feedback builds trust and helps reassure the user. Getting this right relies on the user being at the heart of the form design, and can have a huge impact on the success of the form and consequently the service.

### Validation messaging

There are two types of validation;

* Instant (as the user completes each field)
* Page reload (after submit/next)

The user does not differentiate between types of validation and so it is important to maintain a level of consistency in how this is handled on the front end.

#### Instant validation

Instant (client-side or inline) validation reacts immediately to user input. It is important to not prematurely indicate an error. This can distract, annoy or disengage the user. Therefore show error messages only after the field has lost focus. On correction of the error this should be corrected real time to quickly reduce the error states and reward the user for the correction.

Screen readers: Error messages should be read out when the field has lost focus.

{% include example-form-guidance.html file="forms_instant_validation" caption="If a user has tabbed or selected a mandatory field and then moves on to the next field without entering anything, an error message will trigger on ‘blur’ (de-focus)." height="340" width="800" %}

#### Page reload validation

Page reload (or server-side) validation checks all the form fields are correct on submit/next. This can check inputs against databases and more sophisticated validation that isn’t usually handled by instant validation. Page reload validation works alongside instant validation and allows users to see a list of all the errors at the top of the form, linking to their corresponding fields where the error message is also displayed.

This validation is not able to react to user input, so the errors are not removed when they are corrected, only when the submit or next button is selected again. However, the field in error adopts neutral state as soon as the user interacts with the field and the associated error message turns from red to grey.

{% include example-form-guidance.html file="forms_reload_validation" caption="This example shows what might happen on 'Submit / Next’. The user is taken to the error playback box on the same page with a mixture of server-side and client-side errors. Since we are not validating the server-side errors in the browser, instead of the error state persisting even after correct input, the error state is removed on any change. The inline error message and the playback message both turn to grey. Crucially, there is no strong green tick validation, as this would be mis-leading." height="822" width="800" %}

#### Neutral, error and validated state

A neutral state is a field that has no indicators on it and uses default styling to indicate how the user interacts with it, for example hover, focus, selected state.

An error state is indicated with a red 2px border and a red text error message. Once corrected, the field will return to a neutral state. If validation can confirm that the input is correct, for example a “confirm password” field can be validated against a “new password” field, then the validated field’s border turns green and a tick is displayed within the field, aligned to the right.

As page reload validation can not be checked until the page is submitted, the page reload error will be greyed out but will still be visible. This is to show that there has been a change which might have corrected the error. Leaving it visible allows the user to cross-reference their input with the error message.

{% include example-form-guidance.html file="forms_validation_state_removal" caption="1 - Client side error message triggered on blur (de-focus) 2 - Error message and error state removed on correction" height="687" width="800" %}

#### Language

It is very important to be clear and to the point but also friendly and understanding. For example it’s not helpful to say “incorrect date” instead say “Sorry, you must be aged 18 or over to use this service - please check you've entered the correct date of birth”.

### Feedback

#### Success page

It is important to reassure the user that their information has been safely sent so they know they have completed the task. The Success box at the top of the page should display “Thank you” to let the user know you appreciate their effort. This is accompanied by a sentence telling the user what has happened e.g. “Your application has been submitted. An email summary has been sent to the address provided”.

The success page should not be viewed as the conclusive step of the journey. At this point you are still hand-holding. Use this page to set out the next steps. Provide the user with a reference number, and any other helpful information. If there is a logical conclusion to the journey then highlight that link e.g. Track the progress of your application.

If there is a way of users tracking or chasing up their submission, e.g. tracking code, reference number etc. then all details for this should be displayed.

Help the user once the form is complete to carry on their journey. It could be as simple as saying “Check your email for confirmation”. Always be thinking, ‘What is the user’s next question?’.

{% include example-form-guidance.html file="forms_success_page" caption="Don’t just focus on what’s wrong. Be sure to give the user a pat on the back at the end of the form. And remember, the end of the form isn’t the end of the process, so clearly communicate next steps or options" height="772" width="800" %}
