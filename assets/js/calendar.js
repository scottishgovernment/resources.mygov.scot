

// Calendar code
    function PickerOptions(field, dayField, monthField, yearField, container, settings, theme) {
        this.field = field;
        this.dayField = dayField;
        this.monthField = monthField;
        this.yearField = yearField;
        this.container = container;
        this.format = 'DD/MM/YYYY';
        this.maxDate = settings.maxDate;
        this.minDate = settings.minDate;
        this.bound = false;
        // this.yearRange = [1980, settings.maxDate.getFullYear()];
        this.theme = theme;
        this.onDraw = function() {
            $(this.el).find('select > option:disabled').prop('disabled', false);
            $(this.el).find('button, a, select').attr('tabindex', '-1');
        };

        this.onSelect = function () {

            // dataLayer.push({
            //     'field': this.name,
            //     'interaction': 'select',
            //     'event': 'date-picker'
            // });

            $(this._o.container).removeClass('date-entry__calendar--open');
            $(this._o.field).trigger('blur');
            }
        };
    

var testSettings = { maxDate: '2019-01-20', minDate: '2008-01-01'}

var day = document.getElementById('registration-date-day');
var month = document.getElementById('registration-date-month');
var year = document.getElementById('registration-date-year');
var toPickerOptions = new PickerOptions(document.getElementById('registration-date'), null, null, null, $('#registration-date').closest('.date-entry').find('.date-entry__calendar')[0], testSettings, 'confirm-date'); //NOSONAR
var confirmPickerOptions = new PickerOptions(document.getElementById('confirm-date'), day, month, year, $('#confirm-date').closest('.date-entry').find('.date-entry__calendar')[0], testSettings, 'confirm-date'); //NOSONAR

var dateToPicker = new Pikaday(toPickerOptions);
var confirmDatePicker = new Pikaday(confirmPickerOptions);

$('.js-show-calendar').on('click', function () {
    var calendar = $($(this).closest('.date-entry').find('.date-entry__calendar').get(0));
            // dataLayer.push({
            //     'field': calendar.parent().find('label').text().toLowerCase().replace(' ', '-'),
            //     'interaction': calendar.hasClass('date-entry__calendar--open') ? 'close': 'open',
            //     'event': 'date-picker'
            // });

    // close any other open calendars
    $(this).closest('.date-entry').siblings().find('.date-entry__calendar').removeClass('date-entry__calendar--open');
    calendar.toggleClass('date-entry__calendar--open');

    // scroll calendar into view on mobile
    scrollCalendarIntoView(calendar);

});

var scrollCalendarIntoView = function(calendar){
    if (window.innerWidth < 768 && calendar.hasClass('date-entry__calendar--open')) {
        var calendarTop = calendar.offset().top;
        var positionToShowCalendar = calendarTop - $(window).height() + 270; // 270 is the max height of the calendar + 10px

        // if the window's current scroll position is less than 
        // the position needed to show the whole calendar, scroll to that position
        if ($(window).scrollTop() < positionToShowCalendar){
            $('html, body').animate({
                scrollTop: positionToShowCalendar
            });
        }
    }
}

$('#registration-time').on('focus', function () {
    var calendar = $('.date-entry').find('.date-entry__calendar').get(0);
    $(calendar).removeClass('date-entry__calendar--open');
});

$('#registration-date').on('blur', function () {
    var calendar = $($(this).closest('.date-entry').find('.date-entry__calendar').get(0));
    calendar.removeClass('date-entry__calendar--open');
});


