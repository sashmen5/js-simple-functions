$(document).ready(function () {
    $("button").click(function () {
        var textArea = $("#text");
        var inputText = textArea.val();
        $("#text").val(inputText.titleizes());
    });
});


String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

String.prototype.titleizes = function () {
    var result = "";
    var stringArr = this.split(" ");
    for (var i = 0; i < stringArr.length; i++) {
        capitalizedWord = stringArr[i].replaceAt(0, stringArr[i].charAt(0).toUpperCase());
        result += capitalizedWord + " ";
    }

    return result;
}
