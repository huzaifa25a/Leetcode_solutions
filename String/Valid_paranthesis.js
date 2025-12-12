var isValid = function(s) {
    if(s.length === 1){
        return false;
    }
     if(s[0] === ')' || s[0] === ']' || s[0] === '}'){
        return false;
    }
    let brackets = [];
    let i=0;
    while(i < s.length){
        const bracket = s[i];
        if(bracket === '(' || bracket === '[' || bracket === '{'){
            brackets.push(s[i]);
        }
        if(bracket === ')'){
            if(!brackets.includes('(')){
                return false;
            }
            if(brackets[brackets.length-1] === '('){
                brackets.pop();
            }
        }
        if(bracket === ']'){
            if(!brackets.includes('[')){
                return false;
            }
            if(brackets[brackets.length-1] === '['){
                brackets.pop();
            }
        }
        if(bracket === '}'){
            if(!brackets.includes('{')){
                return false;
            }
            if(brackets[brackets.length-1] === '{'){
                brackets.pop();
            }
        }
        i++;
    }
    console.log(brackets);
    if(brackets.length !== 0){
        return false;
    }
    return true;
};

const s = '{[()]}';
isValid(s);