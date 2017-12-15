const firstLine = "qwertyuiop[]";
const secondLine = "asdfghjkl;'";
const thirdLine = "zxcvbnm,./";

const firstLength = (firstLine.length);
console.log(firstLength);

const secondLength = (secondLine.length);
console.log(secondLength);

const thirdLength = (thirdLine.length);
console.log(thirdLength);

console.log(firstLine.charAt(firstLength-firstLength));
console.log(firstLine.charAt(firstLength-1));
console.log(secondLine.charAt(secondLength-secondLength));
console.log(secondLine.charAt(secondLength-1));
console.log(thirdLine.charAt(thirdLength-thirdLength));
console.log(thirdLine.charAt(thirdLength-1));

console.log(firstLine.indexOf('['));
console.log(firstLine.indexOf(']'));


const totalResult = `First line - ${firstLine} - has ${firstLength} letters; second line - ${secondLine} - has ${secondLength} letters; third line - ${thirdLine} - has ${thirdLength} letters`;
console.log(totalResult);