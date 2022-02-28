// let name1 = "An";
// let objNameAge = { name: "An beo", age: 1234 };
// localStorage.setItem("fullname", "Truong An");
// localStorage.setItem("age", 100);
// localStorage.setItem("objNameAge", JSON.stringify(objNameAge));
// // localStorage.removeItem("fullname");
// console.log(localStorage.getItem("age"));
// console.log(JSON.parse(localStorage.getItem("objNameAge")));

let string = "abcd";
let number = 1234;
// let array = ["Abcd", 1234, ["Truong An", 4321]];

let obj = {
  fullname: "Vu Phuc Truong An",
  age: 22,
  phone: [123456, 54321],
  family: { fatherName: "Vu Van A" },
};
let obj1 = { fullname: "To Viet Hoang", age: 23, phone: 123456 };
let obj2 = { fullname: "Do Hung Dung", age: 24, phone: 123456 };
let obj3 = { fullname: "Nguyen Van Quy", age: 25, phone: 123456 };
let nestedArray = [obj, obj1, obj2, obj3];
// console.log(nestedArray);
// console.log(obj);
// nestedArray.splice(2, 1, { fullname: "Do Van Dung", age: 24, phone: 123456 });
// nestedArray.push({ fullname: "Le Thu Na", age: 25, phone: 123456 });
// console.log(nestedArray);

let student = [
  {
    name: "NVA",
    age: 16,
    course: ["mindX 01", "mindX 02", "mindX 03"],
  },
  {
    name: "NVB",
    age: 18,
    course: ["mindX 01", "mindX 02", "mindX 04"],
  },
  {
    name: "NVC",
    age: 17,
    course: ["mindX 01", "mindX 03", "mindX 04"],
  },
  {
    name: "NVD",
    age: 15,
    course: ["mindX 01", "mindX 02", "mindX 03"],
  },
];
// let age = prompt("Do tuoi can tim");
// console.log(age);
// let check = false;

// for (let i = 0; i < student.length; i++) {
//   let studentAge = student[i].age;
//   if (studentAge == age) {
//     check = true;
//     alert(student[i].name);
//     break;
//   }
// }
// if (check == false) {
//   alert("khong tim thay!");
// }

// let course = prompt("Khóa học cần tìm?");
// console.log(course);
// let check = false;
// let arrName = [];

// for (let i = 0; i < student.length; i++) {
//   let studentCourse = student[i].course;
//   //   console.log(studentCourse);
//   if (studentCourse.indexOf(course) != -1) {
//     check = true;
//     arrName.push(student[i].name);
//   }
// }
// if (check == false) {
//   alert("khong ton tai khoa hoc!");
// }
// console.log(arrName);

// fetch(
//   "https://covid-19-data.p.rapidapi.com/report/country/name?name=Vietnam&date=2020-04-01",
//   {
//     method: "GET",
//     headers: {
//       "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
//       "x-rapidapi-key": "3edb169652msh769872043db1baap1ef9d1jsna5857ce33b0d",
//     },
//   }
// )
//   .then((response) => {
//     return response.json();
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

async function getApi(api) {
  let response = await fetch(api, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
      "x-rapidapi-key": "3edb169652msh769872043db1baap1ef9d1jsna5857ce33b0d",
    },
  });
  let result = await response.json();
  console.log(result);
}
getApi(
  "https://covid-19-data.p.rapidapi.com/report/country/name?name=Vietnam&date=2020-04-01"
);
