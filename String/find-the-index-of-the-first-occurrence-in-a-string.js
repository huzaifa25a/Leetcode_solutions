var strStr = function(haystack, needle) {
    let i = 0;
    if(haystack.includes(needle)){
        return haystack.indexOf(needle);
    }
    return -1;
};

const haystack = 'salmonboi';
const needle = 'mon';
console.log(strStr(haystack, needle));