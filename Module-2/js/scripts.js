let answer;
const resort = prompt("Which resort do you choose? Select number from 1 to 3.", "");
if ( resort == 1 ){
    answer = alert ("You choose - taba") ;
} else if (resort == 2){
    answer = alert ("You choose - sharm") ;
} else if (resort == 3){
    answer = alert ("You choose - hurgada") ;
} else {
    answer = alert ("There is no such resort!") ;
}

//additional task

let dataAnswer;

const taba = 6;
const sharm = 15;
const hurgada = 25;

const group = prompt ("Enter the number of group members", "");

if (parseInt(group) == group && group > 0 && group <= taba){
    dataAnswer = alert ("You are in the group - taba");
} else if (parseInt(group) == group && group > 0 && group > taba && group <= sharm){
    dataAnswer = alert ("You are in the group - sharm");
} else if (parseInt(group) == group && group > 0 && group > taba && group > sharm && group <= hurgada){
    dataAnswer = alert ("You are in the group - hurgada");
} else if (parseInt(group) !== group || group < 0){
    dataAnswer = alert ("Error");
} else {
    dataAnswer = alert ("All places are occupied!");
}

