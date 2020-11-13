

//equality comparison operator
console.log('3' == 3);

//strict equality comparison operator
console.log('3' === 3);

//not equal comparison operator - not equal to
console.log('3' != 4);

//strict not equal comparison operator - not equal to
console.log('3' !== 3);

//Greater than and less than are self explanatory

//And Operator (both expressions on either side of operator must be true for && to return true)
console.log(1<2 && 3>0)

//And Operator (one expression on either side of operator must be true for || to return true)
console.log(1<2 || 3>0) // true
console.log(1>2 || 3>0) // true
console.log(1>2 || 3<0) // false

let obj = {key: "test"};
console.log(obj == {key: "test"}); //false
console.log(obj == obj); //true
