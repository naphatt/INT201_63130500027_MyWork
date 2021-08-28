let poundToKg = 0.453592;
let inchToMeter = 0.0254;

function getMBI (weith,hight){
    return (Number(weith*poundToKg)/Math.pow((hight*inchToMeter),2)).toFixed(2);
}

console.log(getMBI(36.5,39));
console.log(getMBI(45.7,34));
console.log(getMBI(30.3,35));