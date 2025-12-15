var isPalindrome = function(s) {
    const string = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    let i=0;
    let j=string.length-1;
    while(i < string.length){
        if(string[i] === string[j]){
            i++;
            j--;
        }
        else{
            return false;
        }
    }
    return true;
};

const s = 'A man, a plan, a canal: Panama';
console.log(isPalindrome(s));