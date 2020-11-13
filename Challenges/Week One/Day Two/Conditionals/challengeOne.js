/*

Relational Operators
-refers to greater than, less than, >=, <=

Logical Operators
- AND &&
- OR ||


Equality Operators
- Equal ==
- Strict Equal ===
- Not Equal !=
- Strict Not Equal !==

*/

let myName = "Hunter"
let friendName = "Colin"

console.log(myName.length);
console.log(friendName.length);

if(myName.length > friendName.length){
    console.log('My name is longer than my friend\'s name by', myName.length - friendName.length, 'letter(s)');
} else if(myName.length < friendName.length){
    console.log('My name is shorter than my friend\'s name by', friendName.length - myName.length, 'letter(s)');
} else if(myName.length == friendName.length){
    console.log('Wow! Our names are the same length');
} 
