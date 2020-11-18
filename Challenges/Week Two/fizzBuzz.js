
/*
    Challenge:
    Bronze:
    Create a variable named FB that takes numbers
    Write an ELSE/IF conditional that: 
    Prints out "Fizz" if the number is divisible by 3
    Prints out "Buzz" if the number is divisible by 5
    Prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
    
    Silver: Convert this to SWITCH STATEMENT 
    
    Gold: Convert to a TERNARY
    Resources: https://www.w3schools.com/js/js_arithmetic.asp
               https://dj1hlxw0wr920.cloudfront.net/userfiles/wyzfiles/b410fcc6-7a7b-45a0-81b9-354423866db9.gif

*/

// let FB = 75
// let divThree = FB % 3
// let divFive = FB % 5

// if(divThree == 0 && divFive == 0){
//     console.log("Fizz Buzz");
// } else if(divThree == 0){
//     console.log('Fizz')
// } else if(divFive == 0){
//     console.log('Buzz');
// } else {
//      console.log('Not divisible by 3 or 5')
//}


//                          SWITCH
// let FB = 15
// let divThree = FB % 3
// let divFive = FB % 5
// let divBoth = FB % 3 == 0 && FB % 5 == 0;

// switch (true) {
//     case divBoth:
//         console.log('Fizz Buzz');
//         break;

//     case divFive == 0:
//         console.log('Buzz');
//         break;

//     case divThree == 0:
//         console.log('Fizz');
//         break;
//     default:
//         console.log('neither');
// }

let FB = 30;

(FB % 3 === 0 && FB % 5 === 0) ? console.log('Fizz Buzz') : (FB % 5 === 0) ? console.log('Buzz') : (FB % 3 === 0) ? console.log('Fizz') : console.log(FB)



