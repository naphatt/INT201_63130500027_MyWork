
function zodiac(year) {
  const value = year % 12;
  console.log(value);

  const myZodiac = ["monkey","rooster","dog","pig","rat","ox","tiger","rabbir","dragon","snake","horse","sheep"]
    console.log(myZodiac[value])
//   switch (value) {
//     case 0:
//       console.log("monkey");
//       break;
//     case 1:
//       console.log("rooster");
//       break;
//     case 2:
//       console.log("dog");
//       break;
//     case 3:
//       console.log("pig");
//       break;

//     case 4:
//       console.log("rat");
//       break;
//     case 5:
//       console.log("ox");
//       break;
//     case 6:
//       console.log("tiger");
//       break;
//     case 7:
//       console.log("rabbit");
//       break;
//     case 8:
//       console.log("dragon");
//       break;

//     case 9:
//       console.log("snake");
//       break;
//     case 10:
//       console.log("horse");
//       break;
//     case 11:
//       console.log("sheep");
//       break;
//     default:
//         console.log("กรุณาใส่ข้อมูลที่ถูกต้อง")
//       break;
//   }
}

let userYear = parseInt(prompt("ใส่ปีที่อยากรู้"))
zodiac(userYear)

