// Object

// const character = {
//     name:"giovanni kurniawan",
//     age: 19,
//     species:"Human",
//     "Hair Color": "Blond",
// };

// const user = {
//     firstName : "Giovanni",
//     lastName :  "Kurniawan",
//     age : 24,
//     isJedi : true,
// };

// // manggil object ${variable.object-nya}

// console.log(`Halo, nama saya adalah ${user.firstName} ${user.lastName}`);
// console.log(`umur saya adalah ${user.age} tahun`);

// modifikasi object

// const spaceship = {
//     name: "Millenium Falcon",
//     manufacture: "corellian Engineering Corporation",
//     maxspeed: 1200,
//     color: "Light gray"
// };

// spaceship.color = "Glossy red";
// // spaceship = { name: "New Millenium Falcon" }; // Error
// spaceship["maxspeed"] = 1300;
// spaceship.class = "light freighter";

// delete spaceship.manufacture;
// console.log(spaceship);

// array

// let myArray = ['Cokelat', 42.5, 22, true, 'Programming'];

// // console.log(myArray[1]);
// // console.log(myArray.length); // cek panjang array
// // console.log("Panjang nilai myArray adalah " + myArray.length + "." );

// // myArray.push('JavaScript'); // tambah nilai array
// // myArray.pop(); // mengeluarkan elemen terakhir dari array
// // myArray.shift(); // digunakan untuk mengeluarkan elemen pertama dari array
// // myArray.unshift("apple"); // digunakan untuk menambahkan elemen di awal array

// myArray.splice(2, 1); // Menghapus dari index 2 sebanyak 1 elemen

// console.log(myArray);

// Spread Operator

// const favorites = ["seafood","Salad","Nugget", "Soup"];
// const others =["Cake","Pie","Donut"];

// const allFavorites = [...favorites,...others];

// console.log(allFavorites); //menggabungkan array menjadi satu

// Destructuring Object & Array (Es6)

// JavaScript. JSON (JavaScript Object Notation)

// const profile = {
//     firstName: "Giovanni",
//     lastName: "Kurniawan",
//     age: 24
// }

// const { firstName, lastName, age } = profile;

// console.log(firstName, lastName, age);

//Destructuring Array

// const favorites = ["Seafood", "Salad", "Nuget", "Soup"];

// const [firstFood, secondFood, thridFood, fourthFood] = favorites;

// console.log(firstFood);
// console.log(secondFood);
// console.log(thridFood);
// console.log(fourthFood);

// Destructuring Assignment

// Map

// const myMap = new Map([
//     ['1','a string key'],
//     [1, 'a number key'],
//     [true, true]
// ]);

// console.log(myMap);

// const capital = new Map([
//     ['Jakarta', 'Indonesia'],
//     ['London', 'England'],
//     ['Tokyo', 'Japan']
// ]);

// console.log(capital.size); //cek jumalah array
// console.log(capital.get("London")); // ambil nilai array | kita bisa mendapatkan nilainya berdasarkan key tertentu dengan metode
// capital.set("New Delhi", "India"); //untuk menambahkan pasangan key-value baru
// console.log(capital.size);
// console.log(capital.get("New Delhi"));

// Set  kumpulan nilai (set of values)

const numberSet = new Set([1, 4, 6, 4, 1]);

numberSet.add(5); // tambah data
numberSet.add(10);
numberSet.delete(4); // hapus data

console.log(numberSet);

// WeakMap & WeakSet


