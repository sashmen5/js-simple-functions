$(document).ready(function () {
    var date = new Date();
    $('.current-date').text(formatDate(date));
    var userTimeZone = moment.tz.guess();
    date.setHours(date.getHours() + 36.5);
    moment.tz(userTimeZone);
    var isInDST = moment([date.getYear, date.getMonth, date.getDay]).isDST();

    if (isInDST) {
        var index = DSTindex(date.getMonth());
        date.setHours(date.getHours() + index);
    }

    $('.future-date').text(formatDate(date));
});


function DSTindex(mounth) {
    if (mounth >= 8 && mounth <= 10) {
        return -1;
    } else if (mounth >= 2 && mounth <= 5) {
        return 1;
    } else {
        return 0;
    }
};

function formatDate(date) {
    var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    var hour = getZeroCharToMinutesOrHours(date.getHours());
    var minutes = getZeroCharToMinutesOrHours(date.getMinutes());
    return day + '/' + monthNames[monthIndex] + '/' + year + ' ' + hour + ':' + minutes;
};

function getZeroCharToMinutesOrHours(timeItem) {
    if (timeItem == 0) {
        timeItem = '00';
    } else if (timeItem < 10) {
        timeItem = '0' + timeItem;
    }

    return timeItem;
};
