function calculateChange(price,cash){

    const moneys = [{
        type : 'bank500',
        value : 500,
    },
    {
        type : 'bank100',
        value : 100,
    },
    {
        type : 'bank50',
        value : 50,
    },
    {
        type : 'bank20',
        value : 500,
    },
    {
        type : 'coin10',
        value : 10,
    },
    {
        type : 'coin5',
        value : 5,
    },
    {
        type : 'coin2',
        value : 2,
    },
    {
        type : 'coin1',
        value : 1,
    },
    ]

    let change = cash-price;
    let amount;
    let returnChange={};

    for (var i = 0; i < moneys.length; i++){
        amount = Math.floor(change/moneys[i].value);   

        if(amount > 0) {
            returnChange[moneys[i].type] = amount;
            change = change%moneys[i].value;
        }
    }
    return returnChange;
}

console.log(calculateChange(501, 1000));
console.log(calculateChange(3950, 4000));