module.exports = function toReadable (number) {


    let stringNumber = number.toString();

    function getHundredNumber(hundr) {

        switch(hundr) {
            case '0': return '';
            case '1': return 'one hundred ';
            case '2': return 'two hundred ';
            case '3': return 'three hundred ';
            case '4': return 'four hundred ';
            case '5': return 'five hundred ';
            case '6': return 'six hundred ';
            case '7': return 'seven hundred ';
            case '8': return 'eight hundred ';
            case '9': return 'nine hundred ';
            default: 'no number!';
        };
    }

    function getDecimalNumber(decim) {

        switch(decim) {
            case '0': return '';
            case '2': return 'twenty ';
            case '3': return 'thirty ';
            case '4': return 'forty ';
            case '5': return 'fifty ';
            case '6': return 'sixty ';
            case '7': return 'seventy ';
            case '8': return 'eighty ';
            case '9': return 'ninety ';
            default: 'no number!';
        };
    };

    function getElevenPlusNumber (eleven) {

        switch(eleven) {
            case '10': return 'ten '
            case '11': return 'eleven '
            case '12': return 'twelve '
            case '13': return 'thirteen '
            case '14': return 'fourteen '
            case '15': return 'fifteen '
            case '16': return 'sixteen '
            case '17': return 'seventeen '
            case '18': return 'eighteen '
            case '19': return 'nineteen '
        }

    };
    function getSingleNumber (single) {

        switch(single) {
            case '0': return '';
            case '1': return 'one';
            case '2': return 'two';
            case '3': return 'three';
            case '4': return 'four';
            case '5': return 'five';
            case '6': return 'six';
            case '7': return 'seven';
            case '8': return 'eight';
            case '9': return 'nine';
        };

    };

    function ifNumberHundred (humberHundred) {

        if (humberHundred[1] != '1') {

            return getHundredNumber(humberHundred[0]) + getDecimalNumber(humberHundred[1]) +  getSingleNumber(humberHundred[2]); 
        } 
        else {

            return getHundredNumber(humberHundred[0])  +  getElevenPlusNumber(humberHundred.slice(1));
        };

    };


    function ifNumberDecimal () {

        if (stringNumber[0] != '1') {

            return getDecimalNumber(stringNumber[0]) +  getSingleNumber(stringNumber[1]);
        }
        else {
            return getElevenPlusNumber(stringNumber);
        };
    }

    function ifNumberSingle () {

        if (stringNumber.length === 1) {

            return getSingleNumber(stringNumber);
        }

    }


    function getResult () {

    if (number >= 100) {
        return ifNumberHundred(stringNumber);

    }
    else if (number >= 10 && number < 100) {
        return ifNumberDecimal(stringNumber);
    }
    else if (number < 10 && number > 0) {
        return ifNumberSingle (stringNumber);
    }
    else {
        return 'zero';
    }

    }   

    if (getResult()[getResult().length - 1] === ' ') {

        return (getResult().slice(0, -1));
    }
    else {
        return getResult();
    }
}


