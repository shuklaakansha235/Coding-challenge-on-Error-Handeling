function Student(name) {
  this.name = name;
}

Student.prototype.printDetails = function () {
  console.log("Hello, the student is " + this.name);
};

const student = new Student("Mithun");
student.printDetails(); // "Hello, the student is Mithun"

// 2nd method to do this

// const Student = {
//   name: "",
//   printDetails: function () {
//     console.log("Hello, the student is " + this.name);
//   },
// };

// const student = Object.create(Student);
// student.name = "Mithun";
// student.printDetails(); // "Hello, the student is Mithun"