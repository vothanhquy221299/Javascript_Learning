//Exercise 1&2
// let massMark = 87;
// let heightMark = 1.5;
// let massJohn = 65;
// let heightJoin = 1.8;

// let BMIMark = massMark / (heightMark * 2);
// let BMIJohn = massJohn / (heightJoin * 2);
// let isBMIMarkHeigher = BMIMark > BMIJohn;
// if (BMIMark > BMIJohn) {
//   console.log(
//     `Mark's BMI (${BMIMark}) is higher than John's BMI (${BMIJohn})!`
//   );
// } else {
//   console.log(
//     `John's BMI (${BMIJohn}) is higher than Mark's BMI (${BMIMark})!`
//   );
// }

//Exericse 3
// let scoreDolphins = (96 + 108 + 89) / 3;
// let scoreKoalas = (88 + 91 + 110) / 3;
// if (scoreDolphins > scoreKoalas) {
//   console.log("Dolphins win the trophy");
// } else if (scoreDolphins < scoreKoalas) {
//   console.log("Koalas win the trophy");
// } else {
//   console.log("Both win the trophy");
// }

// const day = "friday";
// switch (day) {
//   case "monday":
//     console.log("Plan course structure");
//     break;
//   case "tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "wednesday":
//     console.log("Write code examples ");
//     break;
//   case "thursday":
//   case "friday":
//     console.log("Record videos 🎥");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend :D");
//     break;
//   default:
//     console.log("Not a valid day!");
// }

// //Exercise 4
// const bill = 430;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total bill was ${
//     bill + tip
//   }`
// );

//Exercise 5
calAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
let scoreDolphins = calAverage(44, 23, 71);
let scoreKoalas = calAverage(65, 54, 49);
checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win ${scoreDolphins} vs. ${scoreKoalas}`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win ${scoreKoalas} vs. ${scoreDolphins}`);
  } else {
    console.log("No team wins...");
  }
};
checkWinner(scoreDolphins, scoreKoalas);
