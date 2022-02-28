"use strict";
class Human {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  //   di_chuyen() {
  //     return "abcd";
  //   }
  loi_chao() {
    return "xin chao " + this.name;
  }
}
class Doctor extends Human {
  constructor(name, age, gender, salary) {
    super(name, age, gender);
    this.salary = salary;
  }
  loi_chao_day_du() {
    return this.loi_chao() + " hien tai ban " + this.age + " tuoi";
  }
}
let human1 = new Human("An", 11, "male");
// human1.di_chuyen = "Chay";
// console.log(human1.di_chuyen);
let human2 = new Human("An2", 11, "male");
// human2.di_chuyen = "Bay";
// console.log(human1);
// console.log(human2);
let doctor1 = new Doctor("Anbeo", 22, "male", 10000);
console.log(doctor1.loi_chao_day_du());

// tính trừu tượng - abtraction
// tính đa hình - polymorphism
// tính kế thừa - inheritance
// tính đóng gói - encapsulation
