$(document).ready(function () {
    $("button").click(function () {
        var textBox = $("#user-input");
        var userInput = parseInt(textBox.val());
        var result;

        if (isNaN(userInput)) {
            result = "Input was not a number!";
        } else if (isPrime(userInput)) {
            result = "Number " + userInput + " is a prime number";
        } else {
            result = "Number " + userInput + " is NOT a prime number";
        }

        alert(result);
    });
});


function isPrime(num) {
    var prime = num > 1;
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            prime = false;
            break;
        }
    }
    return prime;
}
