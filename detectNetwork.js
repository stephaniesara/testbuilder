// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  // Visa always has a prefix of 4 and a length of 13, 16, or 19.
  // MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
  // Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
  // Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
  //  China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
  //  Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
  
  // Once you've read this, go ahead and try to implement this function, then return to the console.

  //var prefix = cardNumber.substring(0,2);
  var length = cardNumber.length;
  
  if (length === 14 && (cardNumber.substring(0,2) === '38' || cardNumber.substring(0,2) === '39')) {
    return 'Diner\'s Club';
  } else if (length === 15 && (cardNumber.substring(0,2) === '34' || cardNumber.substring(0,2) === '37')) {
    return 'American Express';
    
  } else if (
    (length === 16 || length === 18 || length === 19)
             &&
     (cardNumber.substring(0,4) === '4903' ||
      cardNumber.substring(0,4) === '4905' ||
      cardNumber.substring(0,4) === '4911' ||
      cardNumber.substring(0,4) === '4936' ||
      cardNumber.substring(0,4) === '6333' ||
      cardNumber.substring(0,4) === '6759' ||
      cardNumber.substring(0,6) === '564182' ||
      cardNumber.substring(0,6) === '633110'
      )
             ) {
    return 'Switch';
    
  } else if ((length === 13 || length === 16 || length === 19) && cardNumber.substring(0,1) === '4') {
    return 'Visa';
  } else if (length === 16 && (cardNumber.substring(0,2) >= 51 && cardNumber.substring(0,2) <= 55)) {
    return 'MasterCard';
  } else if ( (length === 16 || length === 19)
             && (cardNumber.substring(0,4) === '6011' || cardNumber.substring(0,3) === '644' || cardNumber.substring(0,3) === '645' || cardNumber.substring(0,3) === '646' || cardNumber.substring(0,3) === '647' || cardNumber.substring(0,3) === '648' || cardNumber.substring(0,3) === '649' || cardNumber.substring(0,2) === '65') ) {
    return 'Discover';
  } else if ( (length >= 12 && length <= 19)
             && (cardNumber.substring(0,4) === '5018' || cardNumber.substring(0,4) === '5020' || cardNumber.substring(0,4) === '5038' || cardNumber.substring(0,4) === '6304') ) {
    return 'Maestro';
  } else if ( (length >= 16 && length <= 19)
             && ( (Number(cardNumber.substring(0,6)) >= 622126 && Number(cardNumber.substring(0,6)) <= 622925) || ( Number(cardNumber.substring(0,3)) >= 624 && Number(cardNumber.substring(0,3)) <= 626) || ( Number(cardNumber.substring(0,4)) >= 6282 && Number(cardNumber.substring(0,4)) <= 6288) ) ) {
    return 'China UnionPay';
  }
};
