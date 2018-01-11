const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm.,/";
let firstLine, secondLine, thirdLine;

firstLine = alphabet.substr(0, alphabet.indexOf("a"));
console.log(firstLine);

secondLine = alphabet.substr(alphabet.indexOf("a"), alphabet.indexOf("z") - alphabet.indexOf("a"));
console.log(secondLine);

thirdLine = alphabet.substr(alphabet.indexOf("z"));
console.log(thirdLine);

let firstArr = firstLine.split('');
let secondArr = secondLine.split('');
let thirdArr = thirdLine.split('');
const keyboard = [firstArr, secondArr, thirdArr];
console.log(keyboard);

let wordHello = keyboard[1][5]+keyboard[0][2]+keyboard[1][8]+keyboard[1][8]+keyboard[0][8];
console.log(wordHello);

let wordJavascript = keyboard[1][6]+keyboard[1][0]+keyboard[2][3]+keyboard[1][0]+keyboard[1][1]+keyboard[2][2]+keyboard[0][3]+keyboard[0][7]+keyboard[0][9]+keyboard[0][4];
console.log(wordJavascript);

let wordTrainer = keyboard[0][4]+keyboard[0][3]+keyboard[1][0]+keyboard[0][7]+keyboard[2][5]+keyboard[0][2]+keyboard[0][3];
console.log(wordTrainer);