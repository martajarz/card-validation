var number = "378282246310005"; // get from user
var numbers = [];
var sum = 0;

var n = number;
var l = number.length;

for (i = 0; i < l; i++) {
    numbers[i] = (n % 10);
    n = Math.floor(n / 10);
}

for (i = 1; i < l; i = i + 2) {
    var n2 = numbers[i] * 2;

    if (n2 >= 10) {
        sum = sum + (n2 % 10) + Math.floor(n2 / 10);
    } else {
        sum = sum + n2;
    }
}

for (i = 0; i < l; i = i + 2) {
    sum = sum + numbers[i];
}

if (sum % 10 == 0) {
    var check1 = numbers[l - 1];
    var check2 = numbers[l - 2];

    if (l == 15) {
        if (check1 == 3) {
            if (check2 == 4 || check2 == 7) {
                console.log("AMEX");
            }
        }
    } else if (l == 13 && check1 == 4) {
        console.log("VISA")
    } else if (l == 16) {
        if (check1 == 4) {
            console.log("VISA");
        } else if (check1 == 5) {
            if (check2 >= 1 && check2 <= 5) {
                console.log("MASTERCARD");
            }
        }
    } else {
        console.log("INVALID");
    }
}