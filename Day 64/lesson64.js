function findLongest(array) {
    let mostDigitNumber = array[0];
  
    for (let i = 1; i < array.length; i++) {
      if (array[i].toString().length > mostDigitNumber.toString().length) {
        mostDigitNumber = array[i];
      }
    }
  
    return mostDigitNumber;
  }
  