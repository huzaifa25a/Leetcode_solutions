var lengthOfLastWord = function(s) {
    const n = s.length;
    let word = '';
    let words = [];
    for(let i=0; i<n; i++){
        if(s[i] !== ' '){
            word += s[i];
        }
        if(s[i] === ' ' && word.length > 0){
            words.push(word);
            word = '';
        }
    }
    if(word.length > 0){
        words.push(word);
    }
    const last = words[words.length-1];
    return last.length;
};

const s ='This is  a sentence  '
console.log(lengthOfLastWord(s));