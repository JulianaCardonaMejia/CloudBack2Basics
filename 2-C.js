
function numberChecker(num) // names function numberChecker. The input is num {
    if (num > 20)  // if input num is greater than 20 {
      return `${num} is greater than 20`; // return input num + "is greater than 20"
    } else if (num === 20) { // if num is equal to 20 
      return `${num} is equal to 20`;// return num "is equal to 20"
    } else if (num < 20) { // if num is less than 20
      return `${num} is less than 20`; // return num is less than 20
    } else { // if not less than 20 
      return `${num} isn't even a number :(`; // return num isn't even a number
    }
  