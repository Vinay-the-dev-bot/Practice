// declare a variable called employee;
// employe should be an object with following key values;
// fName: 'Vivek'
// lName: 'Agarwal'
// age: 40
// loveJS: true
// console.log employee
// add another property called hobbies using [] notion
// add another property called favSport using . notatin
var employee = {
  fname : 'Vivek',
  lname :'Agarwal',
  age : 40,
  loveJS : true
}
console.log(employee);

employee["hobbies"] = 'reading';
employee.favSport = "Cricket";

console.log(employee);
 

function giveMaxNumber(a, b) { 
    return a > b ? a: b;
}
console.log(giveMaxNumber(1,-2));

var giveMaxNumber2 = function(a, b) { 
    return a > b ? a: b;
}
console.log(giveMaxNumber2(1,7));

var giveMaxNumber3 = (a, b) => { 
    return a > b ? a: b;
}
console.log(giveMaxNumber3(10,7));

var students = [
  { subject: 'English', score: 58 },
  { subject: 'Kannada', score: 66 },
  { subject: 'Hindi', score: 47 },
  
];

console.log(students);

function student(subject, score) {
    var stud = {
        subject: subject,
     score: score
    }
    return stud;
}

var x = student("kannada", 80);

var y = student("kannadaadd", 85); 
console.log(": ", y.subject)

var colorarray;
var colors = (col1,col2,col3) =>{
    colorarray = [col1,col2,col3];
  return colorarray;
}

console.log(colors("red", "green", "yellow"));
console.log( colorarray[2]);

console.log(colors(colorarray[0], colorarray[1], "purple"))
colorarray[2] = "aqua";
console.log(colorarray)

let z ;
if (z) {
    console.log(1);
} else { 
    console.log(2);
}
const aVeryBigNumber = 1234567890123456789012345678901234567890n;
console.log(typeof aVeryBigNumber)

let symbol1 = Symbol('hello'); // Guarenteed unique value
let symbol2 = Symbol.for('world');
console.log(  Symbol.keyFor(symbol1))
console.log(symbol2)
console.log(Symbol.keyFor(symbol2)); // Output: 'world'
let xyz = 'hello'

var x = 1;
var y = 1;
x++;
++y;
console.log(x, " - ", y);

let age = "40"
let nex = +age + 1
console.log(nex, "--")
 let a = 5;
let b = 10;
console.log(a && b);