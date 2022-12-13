const { template } = require('@babel/core')

//put your student id, name, and surname here
// 64130500047, Panithee Virojwongchai
function countCovidStatus(covidStatusArray) {
  //code here
  // if(covidStatusArray===undefined || covidStatusArray===null){
  //   return undefined
  // }

  // if(covidStatusArray===[]){
  //   return {}
  // }

  // let num_negative_and_low_risk = 0;
  // let num_positive=0;
  // let num_negative_and_high_risk=0;

  // for(let i=0; i<covidStatusArray.length;i++){
  //   if(covidStatusArray[i]==='negative and high risk'){
  //     num_negative_and_high_risk += 1
  //   }
  //   else if(covidStatusArray[i]==='negative and low risk'){
  //     num_negative_and_low_risk += 1
  //   }
  //   else if(covidStatusArray[i]==='positive'){
  //     num_positive += 1
  //   }else {
  //     covidStatusArray.pop(covidStatusArray[i])
  //   }
  // }
  
  //   let object = {"negative and low risk" : num_negative_and_low_risk, "positive" : num_positive,"negative and high risk" : num_negative_and_high_risk}
  //   if(num_negative_and_high_risk===0){
  //     delete object["negative and high risk"]
  //   }
  //   if(num_negative_and_low_risk===0){
  //     delete object["negative and low risk"]
  //   }
  //   if(num_positive===0){
  //     delete object.positive
  //   }
  //   return object
  
 
    if(covidStatusArray === undefined || covidStatusArray === null){
        return undefined
    }
    if(covidStatusArray===[]){
        return {}
    }
    
    let num_negative_and_low_risk = 0
    let num_negative_and_high_risk = 0
    let num_positive = 0

    for(let i=0; i<covidStatusArray.length; i++){
      if(covidStatusArray[i]==='negative and low risk'){
        num_negative_and_low_risk += 1
      }
      if(covidStatusArray[i]==='negative and high risk'){
        num_negative_and_high_risk += 1
      }
      if(covidStatusArray[i]==='positive'){
        num_positive += 1
      }
    }

    let obj = {'negative and low risk': num_negative_and_low_risk, 'positive' : num_positive, 'negative and high risk': num_negative_and_high_risk}
    if(num_negative_and_low_risk===0) delete obj['negative and low risk']
    if(num_negative_and_high_risk===0) delete obj['negative and high risk']
    if(num_positive===0) delete obj.positive

    return obj

}
console.log(countCovidStatus([
  'negative and low risk',
  'positive',
  'negative and low risk',
  'negative and high risk',
  'positive',
  'negative and low risk'
]))
module.exports = countCovidStatus
