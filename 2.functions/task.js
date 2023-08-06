// additional
function sumCalback(accumulator, currentValue) {
  return accumulator + currentValue;
}

function sumEvenOddElements(...arr) {
  let sumEvenElements = 0;
  let sumOddElements = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElements += arr[i];
    } else {
      sumOddElements += arr[i];
    }  
  }
  return {sumEven: sumEvenElements, sumOdd: sumOddElements}
}

// task 1
function getArrayParams(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  // let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  let sum = arr.reduce(sumCalback, 0);
  let avg = Number((sum / arr.length).toFixed(2))
  return { min: min, max: max, avg: avg };
}

// task 2
function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sum = arr.reduce(sumCalback, 0);
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElements = 0;
  let sumOddElements = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElements += arr[i];
    } else {
      sumOddElements += arr[i];
    }  
  }
  return sumEvenElements - sumOddElements;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElements = 0;
  let countEvenElements = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElements += arr[i];
      countEvenElements += 1;
    }  
  }
  let avg = Number((sumEvenElements / countEvenElements).toFixed(2));
  return avg;
}

// tsak 3
function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    let result = func(...arrOfArr[i]);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}
