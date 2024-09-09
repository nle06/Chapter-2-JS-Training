alert('hello, world');
console.log(1);
console.log(2);



//variables
let age = 25;
let year = 2019;

console.log(age,year);

age = 30;
console.log(age);

const points = 100; // Const cannot overwritten

console.log(points);

var score = 75; //old version of let
console.log(score);

// variables cannot start with numbers, cannot let const
// js data types : number, string,boolean (true,false), null(=no value), undefined,object,symbol



//strings
console.log('hello ,world');

let email ='lephun1@gmail.com';
console.log(email);

//strings concatenation
let firstName ="Phu";
let lastName = "Le";

let fullName = firstName + ' ' + lastName;
console.log(fullName);

//getting characters
console.log(fullName[2]);

//string length
console.log(fullName.length);


// string methods
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result, fullName);

let index = email.indexOf('@'); // When pass a value to a method = an argument
console.log(index);





// common string methods

let result2 = email.lastIndexOf('n'); // Automatically give the last order of 'n'
console.log(result2);

let result3 = email.slice(0,10); // only take from the number 0 - 10th character
console.log(result3);

let result4 = email.substring(4,10); // Starts from 4th, 10 is how many characters to ciunt towards
console.log(result4);

let result5 = email.replace('n','w');
console.log(result5);


// Math
let radius = 10;
const pi = 3.14;

console.log(radius,pi);

// Math operators = - x %
console.log (10/2);

let result6 = radius % 3; // Put out remainder
console.log (result6);

let result7 =pi * radius ** 2;
console.log(result7);

let likes = 10;

likes = likes + 1;
//likes++; (likes +1)
//likes--; (likes -1)

//likes += 10; // Takes current value add on value we put in
//likes -= 10;
//likes *= 2;
//likes /=2 ;
console.log(likes);

// NaN - not a number
console.log(5/ 'hello');
console.log(5* 'hello');

let result8 = 'the blog has' + likes + 'likes';
console.log(result8);






//TEMPLATE STRING
const title ='Best reads of 2019';
const author = 'Mario';
const likess = 30;

//Concatenation way
let result9 =' The blog called ' + title  + ' by ' + author + ' has ' + likes +' likes ';
console.log(result9);


//template string way
let result10 =`The blog called ${title} by ${author} has ${likes} likes`; // Embed directly variables into string using `` and ${variables}
console.log(result10);

// Create html templates
let html = `
<h2>${title}</h2>
<p>By ${author}</p>
<span>This blog has ${likes} likes</span>
`;

console.log(html);






//ARRAYS

let ninjas = ['shaun', 'ryu' , 'chun-li'];

ninjas[1]= 'ken'; // Overwrite values in array
console.log(ninjas[1]);


let ages =[20,25,30,35]; // Array can store numbers
console.log(ages);

console.log(ninjas.length);

//Array methods
let result11 = ninjas.join('-'); // Added in between each element of array

console.log(result11);

let result12 =ninjas.indexOf('chun-li'); // Number of order in array

console.log(result12);

let result13 =ninjas.concat(['ken', 'crystal']); // CONCAT = JOIN TOGETHER
console.log(result13);

let result14 =ninjas.push('ken'); // Addon an element into original array
result14 =ninjas.pop();
console.log(result14);




// BOOLEANS and COMPARISONS
console.log(true,false, "true", "false");

// Methods can return booleans
let email2 ='lephun1@gmail.com';
let names =['mario', 'luigi', 'toad'];

//let result15 = names.includes('luigi');
//let result15 =email.includes(!);

//console.log(result15);

//Comparision OPERATORS
let agess= 25;
console.log(agess ==25); // = sets the value , == asking if 2 values are the same
console.log(agess !=25); // != is not equal
console.log(agess <=25);

let namess ='shaun';
console.log(namess== 'shaun');
console.log(namess== 'Shaun');


//Loose comparison
console.log(agess !=25); //false
console.log(agess !='25'); //flase --> string got convert into number

//Strict comparision
console.log(agess === 25); // === check same VALUE and DATA TYPE (true)
console.log(agess ==='25'); // false
console.log(agess !==25); // false
console.log(agess !=='25'); // true




//TYPE CONVERSION
let score2 ='100';
score2 =Number(score2)
console.log(score2 + 1);


let result16 = Number('hello'); // NaN in result , not make sense

let result17 = String(50);
console.log(result17, typeof result17);


let result18 = Boolean(100); //Positive numbers are true, negative and 0 are false
console.log(result18, typeof result18);







