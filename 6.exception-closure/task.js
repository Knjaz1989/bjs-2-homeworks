// task 1
function parseCount(value) {
  let floatNumber = Number.parseFloat(value);
  if (isNaN(floatNumber)) {
    throw new Error("Невалидное значение");
  }
  return floatNumber;
}

function validateCount(value) {
  try {
    return parseCount(value);
  } catch (error) {
    return error;
  }
}


// task 2
class Triangle {
  constructor(a, b, c) {
    let sideArray = [a, b, c];
    let sidesSum = sideArray.reduce((acc, value) => acc + value, 0);
    sideArray.forEach(value => {
        if (sidesSum - value < value) {
          throw new Error("Треугольник с такими сторонами не существует");
        }
      }
    );
    this.a = a;
    this.b = b;
    this.c = c;
  }

  get perimeter(){
    return this.a + this.b + this.c;
  }

  get area(){
    let semiPerimeter = 0.5 * this.perimeter;
    let square = Math.sqrt(semiPerimeter * (semiPerimeter - this.a) * (semiPerimeter - this.b) * (semiPerimeter - this.c));
    return Number.parseFloat(square.toFixed(3));
  }
}


function getTriangle(a, b, c){
  try {
    return new Triangle(...Array.from(arguments))
  } catch (error) {
    return {
      get area() {return "Ошибка! Треугольник не существует"},
      get perimeter() {return "Ошибка! Треугольник не существует"},
    }
  }
}
