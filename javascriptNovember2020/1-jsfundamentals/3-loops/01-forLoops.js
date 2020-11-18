// Loops offer a quick and easy way to do something repeatedly
//Many diff kinds
/*

For statement
while
do while
labeled
break
continue
for in
for of
.forEach
.map
*/

// Loop structure: a) creation of an indexing variable b) a run condition c) change to indexing variable

// count to 10 from 0 and log the numbers

for (let i = 0; i <= 10; i++){
    console.log(i);
}

// loops can run infinitely

//counts to negative 25 by negative 3, starting from 2, logs the numbers
for (let i = 2; i>=-25; i = i - 3){
    console.log(i);
}

//display letters in a name individually
let name = 'Hunter';

for (let i = 0; i < name.length; i++){
    console.log(name[i]);
}

//for loops can use lots of variables
let start = 2;
let stop = Math.floor(Math.random()*30);
let increment = 3;

for(let i = start; i <= stop; i = i + increment){
    console.log(i);
}