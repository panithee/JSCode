const { template } = require("@babel/core");
// d
function getMaxLengthString(arrayOfString) {
  if (arrayOfString === undefined || arrayOfString === null) {
    return undefined;
  }

  // [['hello', 'hi', 'hey']]

  let maxLength_Str = new Array(0);
  for (arr of arrayOfString) {
    if (maxLength_Str.length === 0) {
      maxLength_Str = [arr];
    } else if (arr.length >= maxLength_Str[0].length) {
      if (arr.length === maxLength_Str[0].length) {
        maxLength_Str.push(arr);
      } else {
        maxLength_Str = [arr];
      }
    }    
  }
  return maxLength_Str;
}

module.exports = getMaxLengthString;
