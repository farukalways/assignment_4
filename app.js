//=========== problem  01 ===========

function calculateTax(income, expenses) {
  if( 0 > income || income <= expenses ){
    return "Invalid string"
    }
  const difference = income - expenses;
  const tax = difference * 20 / 100; 
  
 return tax
}

// const total = calculateTax( 10000, 9000)
// console.log(total);

//=========== problem 02 ===========

function sendNotification(email) {
  let parts = email.split('@');
  if ( parts.length !== 2 ){
    return "Invalid Email";
  }
  let username = parts [0]
  let domain = parts [1];
  return `${username} sent you an email from ${domain}`
}

// const lolo = sendNotification("fahim234.hotmail.com")
// console.log(lolo);


//=========== problem 03 ===========

function checkDigitsInName(name) {
  if(typeof name !== 'string'){
    return 'Invalid Input';
  }
  for (let i = 0; i < name.length; i++){
    if(!isNaN(name[i])){
      return true;
    }
  }
  return false
}

// console.log(checkDigitsInName('sho34'));


//=========== problem 04 ===========

function calculateFinalScore(score){ 
  if(typeof score !== 'object'){
    return 'Invalid Input';
  }

  let testScore = Math.min(score.testScore <= 50) 
  let schoolGrade = Math.min(score.schoolGrade <= 30) 

  if (score.isFFamily === true){
    ParentProfession = 20;
  }
  let totalScore = testScore + schoolGrade + score.ParentProfession
  return totalScore >= 80
}

//  const calculate = calculateFinalScore({ name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  })
//  console.log(calculate)

//=========== problem 05 ===========

  let times = "[ 3, 5, 7, 11, 6 ]"
  let serialNumber =  9

function  waitingTime(times, serialNumber) {

  if(!Array.isArray(times) || typeof serialNumber !== "number"){
    return 'Invalid Input';
  }
    let sum = 0
       for( let i = 0; i < times.length; i++){
        sum= sum + times[i]
   }
    let average = sum / times.length
    let result=  Math.round(average) 
    let bakiAseKoyjon =(serialNumber-1) - times.length 
    let myWaitingTime = bakiAseKoyjon * result
    return myWaitingTime
}
// const vvv = waitingTime(times, serialNumber) 
// console.log(vvv);


