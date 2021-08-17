const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '*****':  ' ',
};

function decode(expr) {
    let str = '';
    let text = expr;
    const arr = Array.from(text);

    for (let i = 0; i < text.length; i = i + 10) {

        let letterCode = '';

        for (let j = 0; j < 10; j = j + 2) {
            let double = '';
            for (let k = 0; k < 2; k++){
                double += arr[i+j+k];
            }

            if ( double === '10') {
                letterCode += '.';
            } else if ( double === '11') {
                letterCode += '-';
            } else if (double === '**') {
                letterCode += '*';
            }
        }

        str += MORSE_TABLE[letterCode];
    }
    
    return str;
}

module.exports = {
    decode
}