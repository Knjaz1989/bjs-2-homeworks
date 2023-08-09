function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}


let student1 = new Student("Ivan", "male", 27);
let student2 = new Student("Olga", "femail", 21);
let student3 = new Student("Petr", "male", 41);


Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (!this.hasOwnProperty("marks")) {
    return "User is expelled"; 
  }
  this.marks.push(...marks);
}

Student.prototype.getAverage = function () {
  if (!this.hasOwnProperty("marks") || this.length) {
    return 0; 
  }
  let avg = this.marks.reduce(
      (acc, value, index, arr) => {
        acc += value;
        if (index === arr.length - 1) {
          return acc / arr.length;
        }
        return acc;
      }, 
      0
    );
  return avg
}

Student.prototype.exclude = function (reason) {
  delete this.marks;
  delete this.subject;
  this.excluded = reason;
}
