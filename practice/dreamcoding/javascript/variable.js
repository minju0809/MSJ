'use strict';

// Variable, rw(read/write)
// * let - mutable (값이 변경될 수 있는 것)

let globalName = 'global name'; 
// 글로벌 변수들은 어플 실행부터 끝까지 메모리에 탑재되어 있기 때문에 
// 최소한으로 사용하는 것이 좋음

{
  let name = 'minju';
  console.log(name);
  name = 'hello';
  console.log(name);  
  console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// has no block scope

console.log(age);
age = 4;
console.log(age);
var age;

// * Contant - immutable (값이 변경될 수 없는 것), r(read only)
// favor immutable data type always for a few reasons:
// security, thread safety, reduce human mistakes

const daysInWeek = 7;
const manNumber = 5;

// Note!
// Immutable data types: primitive types, frozen objects
// Mutable data types: all objects by default are mutable in JS

// Variable types
// primitive, single item: number, string, boolean, null, undefiend, symbol
// object, box containet
// function, first-class function

// number - special numeric values
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// string
const char = 'c';
console.log(char);
const brendan = 'brendan';
console.log(brendan);
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`;
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + 'type: ' + typeof helloBob);

// boolean
// faise: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undifined
let a;
console.log(`value: ${a}, type: ${typeof a}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbul1 = Symbol.for('id');
const gSymbul2 = Symbol.for('id');
console.log(gSymbul1 === gSymbul2);
console.log(`value: ${symbol1.description}, type: ${typeof symbol}`);

// object, real-life object, data structure
const ellie = {name: 'ellie', age: 20};
console.log(ellie);
ellie.age = 21;
console.log(ellie);

// Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
// console.log(text.charAt(0));



