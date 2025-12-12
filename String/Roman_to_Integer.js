var romanToInt = function(s) {
    const n = s.length;
    let number = 0;
    for(let i=0; i<n; i++){
        if(s[i] === 'I'){
            if(s[i+1] !== 'V' && s[i+1] !== 'X'){
            number += 1;
            }
            else if(s[i+1] === 'V'){
                number += 4;
            }
            else if(s[i+1] === 'X'){
                number += 9;
            }
        }
        if(s[i] === 'V' && s[i-1] !== 'I'){
            number += 5;
        }
        if(s[i] === 'X' && s[i-1] !== 'I'){
            if(s[i+1] !== 'L' && s[i+1] !== 'C'){
                number += 10;
            }
            else if(s[i+1] === 'L'){
                number += 40;
            }
            else if(s[i+1] === 'C'){
                number += 90;
            }
        }
        if(s[i] === 'L' && s[i-1] !== 'X'){
            number += 50;
        }
        if(s[i] === 'C' && s[i-1] !== 'X'){
            if(s[i+1] !== 'D' && s[i+1] !== 'M'){
                number += 100;
            }
            else if(s[i+1] === 'D'){
                number += 400;
            }
            else if(s[i+1] === 'M'){
                number += 900;
            }
        }
        if(s[i] === 'D' && s[i-1] !== 'C'){
            number += 500;
        }
        if(s[i] === 'M' && s[i-1] !== 'C'){
            number += 1000;
        }
    }
    return number;
};

const s = 'DCXXI'
console.log(romanToInt(s));