function addKeyboardLayout(alphabet){
    let firstLine = alphabet.substr(0, alphabet.indexOf("a"));
    let secondLine = alphabet.substr(alphabet.indexOf("a"), alphabet.indexOf("z") - alphabet.indexOf("a"));
    let thirdLine = alphabet.substr(alphabet.indexOf("z"));

    let firstArr = firstLine.split('');
    let secondArr = secondLine.split('');
    let thirdArr = thirdLine.split('');

    let keyboard = [firstArr, secondArr, thirdArr];
    return keyboard;


}
addKeyboardLayout("qwertyuiop[]asdfghjkl;'zxcvbnm.,/");

function getRandCharInRow(row){
    var keyboard1 = addKeyboardLayout("qwertyuiop[]asdfghjkl;'zxcvbnm.,/");
    let firstArr1 = keyboard1[0];
    let secondArr1 = keyboard1[1];
    let thirdArr1 = keyboard1[2];

    row = +prompt("Введите число от 0 до 2", '');

    if (row === keyboard1.indexOf(firstArr1)){
        let a = Math.floor(Math.random() * firstArr1.length);
        alert(firstArr1[a]);
    } else if (row === keyboard1.indexOf(secondArr1)){
        let b = Math.floor(Math.random() * secondArr1.length);
        alert(secondArr1[b]);
    } else if (row === keyboard1.indexOf(thirdArr1)){
        let c = Math.floor(Math.random() * thirdArr1.length);
        alert(thirdArr1[c]);
    } else {
        alert("Error");
    }
}
getRandCharInRow();

// еще один вариант решения составления функции №2
// let a = Math.floor(Math.random() * keyboard1.length);
// let b = Math.floor(Math.random() * keyboard1[row].length);
// console.log(keyboard1[a][b]);

function getRandCharInAlph(){

    var keyboard2 = addKeyboardLayout("qwertyuiop[]asdfghjkl;'zxcvbnm.,/");
    for (i=0; i <= keyboard2.length; i++){
        for (j=0; j<keyboard2[i].length; j++){
            let a = Math.floor(Math.random() * keyboard2.length);
            let b = Math.floor(Math.random() * keyboard2[i].length);
            return keyboard2[a][b];
        }
    }
}

getRandCharInAlph ();
