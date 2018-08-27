var currPressedCell = null;
var prevPressedCell = null;

$(document).ready(function () {
    $('.TreeTable tr').click(function (e) {
        var currPressedCell = $(e.target).get(0);
        var tr = $(this);
        if (currPressedCell != prevPressedCell) {
            $(currPressedCell).addClass("pressed");
            $(prevPressedCell).removeClass("pressed");
            prevPressedCell = currPressedCell;
        } else {
            $(currPressedCell).removeClass("pressed");
            prevPressedCell = null;
        }
    });
});