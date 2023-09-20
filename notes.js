
let message = 'Welcome to JvaScript';//variables
let message2 = `Welcome
to
JavaScript`;//multi-line strings
let language = 'JS';
let lan = `Welcome to ${language}`;// Template Literals
let name = 'mstr3sl';//string
let age = 24;//number, you can use - numbers  or ex: 2.5
let result = 2 > 3;//boolean<>
let result2 = 4 > 2;//boolean<>
let undefined;//undefined
let value = 2;//NuN mean is expect numbers only
let nul = null;//Null
let length = 'mstr3sl';
/////////////////////////
let vab1 = 'JavaScript';
let vab2 = 'welcome to ' + vab1 +'.';//String Concatenation, you must put spase in ' ' to spilt words.
/////////////////////////////
let bracket = 'JavaScript';// braket notation.
let colors = ['reds', 'blue', 'purple'];//Arays
//color[1] = 'black'; // for change items in the aray. 
colors.unshift('white');//to put the color white before thr red
colors.shift();// to delete the the first word in the array
const redColor = colors.shift();// to re put the color red or the first word.
const to = [[1, 2, 3],
            [4, 5, 6],
            [7, 8,  9, ]]//2d array
////////////////////////////////////////SPLIT
let spiltword = 'Welcome to JavaScript';
let reasult = spiltword.split(' ');//spilt used to spilt words or numbers blah blah.
console.log(reasult);
///////////////////////////////////////



console.log(message);//variables
console.log(message2);//multi-line strings
console.log(lan);// Template Literals
console.log(typeof name)//string
console.log(typeof age)//number
console.log(typeof result);//boolean typeof reasult
console.log(result);//boolean false
console.log(result2);//boolean true
console.log(undefined);//undefined if you put typeof is gona be the same 
console.log(value * 'JavaScript')//NuN mean is expect numbers only
console.log(nul)//Null
/////////////////////
console.log(length.length)
console.log(vab2)//String Concatenation
////////////////
console.log(bracket[0])// bracket noation. the first letter is must stated with  0 and the second one  is 2 blah blah.
console.log(colors.length);//  for length
console.log(colors.includes('green'));//includes to chcek if the green is there or not.
colors.push('yellow')//thats pushs the word you chose to the end the array.
colors.pop();//thats delete the last word in the array.
let blueColor = colors.pop();// is delete the last word in the array and deposit in the blueColor variable.
console.log(colors)//arays[0] for the first or waht ever word you want.
console.log(Array.isArray(colors))// to see if the variable is array or no. 
console.log(to[0][1]);// 2d array is to arrays thts you cane chose the array inside the first array.
