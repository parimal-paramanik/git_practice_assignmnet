function checkPrime(number) {
    let factor = 0

    for (let i = 1; i <= number.length; i++) {
      if (number % i == 0) {factor++
      }
    } if (factor == 2) {
      return true
    }
    return false
  }
  let ans = checkPrime(15)
  
  if (ans == true) {
    console.log("Prime")
  } else {
    console.log("Not prime")
  }