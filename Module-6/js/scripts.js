let keyTrainer = {
    chars: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],
    charCount: '',
    setCharCount: function (){
        let num = +prompt("Какое количество символов Вы хотите ввести?", "");
        let positiveInteger = this.checkPositiveInteger(num);
        if (positiveInteger) {
            return this.charCount = num;
        } else {
            while (!positiveInteger) {
                num = + prompt('Введите позитивное число');
                positiveInteger = this.checkPositiveInteger(num);
            }
            return this.charCount = num;
        }},
    checkPositiveInteger: function (number) {
        let isNumInt = (Number.isInteger(number) && number > 0) ? true : false;
        return isNumInt;
    },
    task: '',
    createTask: function (){
        let b = keyTrainer.chars;
        let arr = [];
        let string = "";
        for(let i = 0; i < this.charCount-1; i++){
            arr[i] = b[Math.floor(Math.random()*this.charCount)];
            arr.push(arr[i]);
            string = arr.join("");
        }
        return(keyTrainer.task = string);
    },
    userInput: '',
    startTask: function (res){
        res = prompt(`Введите символы- ${this.task} - в этом сообщении:`, "");
        return (keyTrainer.userInput = res);
    },
    userErrors: function () {
        let a = this.task;
        let b = this.userInput;
        let c = 0;
        if (a == b) {
            alert(`Вы - молодец. Ошибок не обнаружено!`);
        } else {
            for (let i = 0; i < a.length; i++) {
                if (a[i] !== b[i]) {
                    c = c + 1;
                    alert(`Количество ошибок ${c}. Попробуйте пройти задание еще раз.`);
                }
            }
        }
    }
}

function run(){
    keyTrainer.setCharCount();
    keyTrainer.checkPositiveInteger();
    keyTrainer.createTask();
    keyTrainer.startTask();
    keyTrainer.userErrors();
    console.log(keyTrainer);
}


run();

