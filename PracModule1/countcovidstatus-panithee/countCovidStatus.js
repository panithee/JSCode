const { template } = require('@babel/core')

//put your student id, name, and surname here
// 64130500047, Panithee Virojwongchai
function countCovidStatus(covidStatusArray) {
    if(covidStatusArray===null || covidStatusArray === undefined){
      return undefined
    }else if(covidStatusArray.length===0){
      return {}
    }
    let nega_low = 0
    let nega_high = 0
    let posi = 0
    for(const status of covidStatusArray) {
      if(status === 'negative and low risk') {
        nega_low+=1
        continue
      }else if(status === 'negative and high risk') {
        nega_high+=1
        continue
      }else if(status === 'positive') {
        posi+=1
        continue
      }
    }
    let obj = {}
    if(nega_low>0){
      obj['negative and low risk'] = nega_low
    }
    if(nega_high>0){
      obj['negative and high risk'] = nega_high
    }
    if(posi>0){
      obj['positive'] = posi
    }
   return obj
}
module.exports = countCovidStatus
