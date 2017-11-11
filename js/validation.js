function check() {

    var cardNumber = document.getElementById('card_number').value;
    var html;

    if (isNaN(cardNumber)) {
        html = "Input should be a number"
    }
    else {
        var length = 1;
        var numbers = [];
        var n = cardNumber;

        while (n >= 10) {
            n = n / 10;
            length++;
        }

        n = cardNumber;
        for (i = 0; i < length; i++) {
            numbers[i] = (n % 10);
            n = Math.floor(n / 10);
        }
        
        var t, sum = 0;
        for (i = 1; i < length; i = i + 2) {
            t = numbers[i] * 2;
        
            if (t >= 10) {
                sum = sum + (t % 10) + Math.floor(t / 10);
            } else {
                sum = sum + t;
            }
        }
        
        for (i = 0; i < length; i = i + 2) {
            sum = sum + numbers[i];
        }
        
        if (sum % 10 == 0) {
            var check1 = numbers[length - 1];
            var check2 = numbers[length - 2];
            
            html = company_check(length, check1, check2);
            
            if (html == undefined) {
                html = "zzzzInvalid card number";
            }
        }
        else {
            html = "Invalid card number";
        }
    }
    document.getElementById('result').innerHTML = html;
}

function company_check(l, c1, c2) {
    if (l == 13) {
        if (c1 == 4) {
            return "VISA";
        }
    } 
    else if (l == 16) {
        if (c1 == 4) {
            return "VISA";
        }
        else if (c1 == 5) {
            if (c2 == 1 || c2 == 2 || c2 == 3 || c2 == 4 || c2 == 5) {
                return "MASTERCARD";
            }
        }
    }
    else if (l == 15) {
        if (c1 == 3) {
            if (c2 == 4 || c2 == 7) {
                return "AMEX";
            }
        }
    }
}