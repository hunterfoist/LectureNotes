let student = {name: 'Peter', awesome: true, degree: 'javascript', week: 1}

for (item in student){
    console.log(item);
    console.log(student[item]);
}

let catArray = ['tabby', 'british', 'burmese'];

for (cat in catArray){
    console.log(catArray[cat]);
}

//for in loop that capitalizes first letter of a name

let instructor = 'pAul';
let capName;

for(n in instructor){
    if (n==0){
        capName = instructor[n].toUpperCase();
    } else {
        capName += instructor[n].toLowerCase();
    }
}

console.log(capName);
