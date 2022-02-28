let obj = {
  name: "An",
  age: "22",
};

// memory location of obj = xx01
let obj1 = Object.assign({}, obj);
// memory location of obj1 = xx02
let obj2 = { ...obj };

obj1.gender = "male";

obj2.salary = 100;

// console.log(obj1);
// console.log(obj2);
// console.log("obj ban dau", obj);

let array = [1, 2, 3, 4, 5, 6];
let array2 = [...array, 7, 8, 9];

let str = "12345";
let strArr = [...str];

let testArr = ["a", "b", "c", "d"];
testArr.map((v, i) => {
  console.log(v, i);
});

let ageArr = [21, 11, 12, 15, 16, 29, 28];

let resultArr = ageArr.filter((v, i) => {
  return v > 12;
});
// console.log(ageArr.sort());

// let splicedArr = ageArr.splice(0, 1);
console.log(ageArr.splice(0, 1));
