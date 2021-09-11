function randomNum(){
    return Math.floor(Math.random() * 10) + 1;
}
 let randomNumber=randomNum();
function guessNum(num) {
    
    if(num>=1 && num<=10){
      if (num > randomNumber) console.log(`Too high : random number is ${randomNumber}`);
      else if (num < randomNumber) console.log(`Too Low : random number is ${randomNumber}`);
      else console.log(`You Win : random number is ${randomNumber}`);
    } 
    else console.log("ใส่เลข 1-10")
}

let num = parseInt(prompt("เลขที่คุณทาย"));
guessNum(num);
