/**  1 Creați o funcție care primește ca și parametru un număr și returnează dublul său dacă numărul primit este impar,
 * altfel returnează numărul scăzut cu 2 dacă este par. Afișați rezultatul în consolă.
 */

function evenOrOdd(number) {
  if (number % 2 === 0) {
    return number - 2;
  } else {
    return number * 2;
  }
}

console.log(evenOrOdd(9));

/** 2 Creați o funcție care stochează intr-un array doar numerele prime dintr-un array primit ca si parametru. Parcurgeți array-ul folosind 
 *un “for loop”. Afișați rezultatul în consola.

Ex:
const arr = [1,2,3,4,5,6,7,8,9];

savePrimes(arr) => [1,2,3,5,7];  
 * 
 */

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

savesPrimes = arr.filter((number) => {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});

console.log(savesPrimes);

// Mai jos am incercat sa fac si un arrow function pentru a rezolva exercitiul, dar din pacate nu reusesc sa inteleg de ce nu imi itereaza prin
// array.

const savesPrimes2 = (number) => {
  let primes = [];
  for (let i = 2, s = Math.sqrt(number); i <= s; i++)
    if (number % i === 0) {
      return false;
    } else {
      return primes.push(i);
    }
  console.log(primes);
};

savesPrimes2(arr);

/** 3 Creați o funcție care stochează intr-un array doar strings dintr-un array primit ca si parametru. Parcurgeți array-ul folosind “forEach”.
 *  Afișați rezultatul în consola.
Ex:

saveStrings([1, ‘1’, ‘salut’, 2, 6, true, ‘true’]) -> [‘1’, ‘salut’, ‘true’]

saveStrings([1,2,3,4]) -> []

saveStrings([‘1’,’2’,’3’,’4’]) -> [‘1’,’2’,’3’,’4’]
 */

const array = [1, "1", "salut", 2, 6, true, "true"];
const result = [];

array.forEach((thisArg) => {
  if (typeof thisArg === "string") {
    result.push(thisArg);
  } else {
    console.log("Not a string");
  }
});

console.log(result);

/** 4 Creați o funcție care adună cifrele impare ale unui număr primit ca și parametru de tip string folosind  “for loop” si keyword-ul
 *  “continue”. 

Ex:

	addDigits(“1523”) => 9
 * 
 */

let addDigits = [1, 5, 2, 3];

function addOddNumbers(number) {
  for (let i = 0; i < number.length; i++) {}
}

addOddNumbers(...addDigits);

/** 5 Creați un switch cu cel puțin 5 case-uri din care cel puțin 2 să aibă același rezultat, după exemplul prezentat la curs.
 */

const day = "saturday";

switch (day) {
  case "monday":
    console.log("work");
    break;
  case "tuesday":
    console.log("work");
    break;
  case "wednesday":
    console.log("work");
    break;
  case "thursday":
    console.log("work");
    break;
  case "friday":
    console.log("work");
    break;
  case "saturday":
  case "sunday":
    console.log("Time to relax");
    break;

  default:
    console.log("No time to relax this week");
}





// REZOLVARE TEMA

// Ex 1

const numberFn = number => number % 2 ? number * 2 : number - 2;
console.log(numberFn(5));


// Ex 2

const checkPrime = number => {
 for (let div = 2; div * div <= number; div++) {
   if (number % div === 0) return false;
 }
 return true;
}

function savePrimes(arr, primes = []) {
  for (let i = 0; i < arr.length; i++) {
    if (checkPrime(arr[i])) primes.push(arr[i]);
  }
  return primes;
}
console.log(savePrimes([2,4,6,3,5,7,11,13,17,31,37]));


// Ex 3

const saveString = function (arr,strings = []) {
  arr.forEach( element => typeof element === 'string' && strings.push(element));
  return strings;
}
console.log(saveString([1, '1', 'salut', 2,6,true, 'true']));

// Ex 4

const addDigits2 = (number, result = 0) => {
  for ( let i = 0; i < number.length; i++) {
    if (isNaN(Number(number[i])) || number % 2 === 0) continue;
    result += + number[i];
  }
  return result;
}

console.log(addDigits2("1523bc"));


// Ex 5

( date => {
  switch (date) {
    case 0:
      console.log("It is Sunday!");
      break;
    case 1:
      console.log("It is Monday again...");
      break;
    case 2:
      console.log("It is Tuesday!");
      break;
    case 3:  
      console.log("It is Wednesday!");
      break;
    case 4:
      console.log("It is Thursday!");
      break;
    case 5:
      // console.log("It is Friday!");
    case 6:
      console.log("Sunday is near!");
      break;
    default:
      console.log("This must be a bug ...");
  }
})(new Date().getDay())