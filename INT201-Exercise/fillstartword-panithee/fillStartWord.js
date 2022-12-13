const { template } = require('@babel/core')
// s
function fillStartWord(startWord, word) {
  //code here

    if (word == null || word == undefined) {
      return undefined;
    } else if (word.includes(startWord)) {
      return word;
    } else {
      return startWord + word;
    }
  }

  

module.exports = fillStartWord
