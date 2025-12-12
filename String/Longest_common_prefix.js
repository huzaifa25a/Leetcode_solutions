var longestCommonPrefix = function(strs) {
    if(strs[0] === ""){
        return "";
    }
    if(strs.length === 1 && strs[0] !== ""){
        return strs[0];
    }
    const first = strs[0];
    const n = strs.length;
    let i=0;
    while(i < first.length){
        let ch = first[i];
        for(let j=1; j<n; j++){
            if(strs[j][i] !== ch){
                return first.slice(0, i);
            }
        }
        i++;
    }
    return first;
};

const strs = ["flower","flow","flight"];
console.log(longestCommonPrefix(strs));