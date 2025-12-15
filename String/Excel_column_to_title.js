var titleToNumber = function(columnTitle) {
    let columnNumber = 0;
    let i = 0;
    if(columnTitle.length <= 1){
        columnNumber = columnTitle.charCodeAt(0) - 64; 
        return columnNumber;
    }
    while(i < columnTitle.length){
        if(i !== columnTitle.length-1){
            columnNumber += (columnTitle.charCodeAt(i) - 64) * Math.pow(26, columnTitle.length-1-i);
        }
        else if(i === columnTitle.length-1){
            columnNumber = columnNumber + (columnTitle.charCodeAt(columnTitle.length-1) - 64);
        }
        i++;
    }
    return columnNumber;
};

const columnTitle = 'ZYX';
console.log(titleToNumber(columnTitle));