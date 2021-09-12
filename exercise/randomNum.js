function Displayedmenu(){
    const menu = `
    *** Menu ***
    1: Find Sum
    2: Find Minimum Value 
    3: Find Maximum Value 
    `
    return menu;
}

function randomNum(){
    return Math.floor(Math.random()*100)+1;
}

//  console.log(randomNum())

        

// console.log(` number 1 = ${num1} \n number 2 = ${num2} \n number 3 = ${num3}`)

        

function findSum(num1,num2,num3){
    return num1+num2+num3;
}
function findMax(num1,num2,num3){
    let max=num1;
    if(num2>max){max=num2}
    if(num3>max){max=num3}
    return max
}
function findMin(num1,num2,num3){
    let min=num1;
    if(num2<min){min=num1}
    if(num3<min){min=num3}
    return min
}

    

    function operation(num1,num2,num3, fn) {
        console.log(`Your random numbers are 
          random number#1: ${num1}
          random number#2: ${num2}
          random number#3: ${num3}`);
        return fn(num1,num2,num3);
      }

        let num1 = randomNum()
        let num2 = randomNum()
        let num3 = randomNum()

console.log(Displayedmenu())
let chooseMenu=3;

    switch (chooseMenu) {
        case 1:
            console.log(`sum = ${operation(num1, num2, num3, findSum)}`);
        break;

        case 2:
        console.log(`max = ${operation(num1, num2, num3, findMax)}`);
        break;

        case 3:
        console.log(`min = ${operation(num1, num2, num3, findMin)}`);
        break;
    }