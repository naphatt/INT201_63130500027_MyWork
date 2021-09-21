function displayMenu(){
    const menu=`
    *** Menu ***
    1: Reverse String 
    2: Replace Vowels with ‘*’
    3: Count Vowels in String `
    return menu;
}

function replaceVowels(letter){
    switch (letter) {
        case 'a':
        case 'A':
        case 'e':
        case 'E':
        case 'i':
        case 'I':
        case 'o':
        case 'O':
        case 'u':
        case 'U':
        return '*' ;
        
        default:
            return letter;
    }
}

function stringOps(text,chooseMenu){
    let resultString = '';
    if (chooseMenu === 1) {
        for (let i = text.length - 1; i >= 0; i--){
            resultString += text[i];
        }

    } else if(chooseMenu === 2){
        for(let i = 0; i < text.length; i++){
            resultString += replaceVowels(text[i])
        }
    } else if(chooseMenu === 3){
        resultString = 0;
        for (let i = 0; i < text.length; i++) {
            if (replaceVowels(text[i]) === '*') {
                resultString += 1;
            }
        }
    }
    return resultString
}
console.log(displayMenu());
let chooseMenu = 3;
let text = 'Hello World';
console.log(stringOps(text, chooseMenu));