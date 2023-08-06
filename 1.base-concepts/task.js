"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b ** 2 - 4 * a * c;
  if (discriminant === 0) {
    let sqr = -b / (2 * a);
    arr.push(sqr);
  } else if (discriminant > 0) {
    let sqrOne = (-b + Math.sqrt(discriminant)) / (2 * a);
    let sqrTwo = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(sqrOne, sqrTwo);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let list = [percent, contribution, amount, countMonths];
  for (let index = 0; index < list.length; index++) {
    if (isNaN(Number(list[index]))) {
      return false;
    } 
  };
  let persentPerMonth = percent / 100 / 12;
  let creditBody = amount - contribution;
  let payment = creditBody * (persentPerMonth + (persentPerMonth / (((1 + persentPerMonth) ** countMonths) - 1)));
  let totalSum = payment * countMonths;
  return +totalSum.toFixed(2);
}