// // Declaring Function

// // function greeting() {
// //     console.log("Good Morning");
// // }

// // greeting();

// // menambahkan lebih dari satu parameter dengan memberikan tanda koma antar variabel parameternya

// function greeting(name, language) {
//   if (language === 'English') {
//     console.log(`Good Morning ${name}!`);
//   } else if (language === 'French') {
//     console.log(`bonjour ${name}!`);
//   } else {
//     console.log(`Selamat Pagi ${name}!`);
//   }
// }

// greeting('Giovanni', 'French');

// //

// function multiply(a, b) {
//   return a * b;
// }

// // membuat function yang berfungsi untuk melakukan perhitungan matematika dan hasilnya dapat kita masukkan ke dalam sebuah variabel

// let result = multiply(10, 2);
// console.log(result);

// Expression Function

// Ingat kembali bahwa expression adalah kode atau instruksi yang mengembalikan nilai, sehingga expression function bisa disimpan dalam sebuah variabel.

// const greeting1 = function(name, language) {
//     if(language === "English") {
//         return "Good Morning " + name + "!";
//     } else if (language === "French") {
//         return "Bonjour " + name + "!";
//     } else {
//         return "Selamat Pagi" + name + "!";
//     }
// }

// console.log(greeting1('giovanni', 'English'));

// Function Parameter

// const user = {
//     id: 24,
//     displayName: 'kren',
//     fullName: 'Kylo Ren',
// };

// function intoduce({displayName, fullName}) {
//     console.log(`${displayName} is ${fullName}`);
// }

// intoduce(user);

// Default Parameters

// Arrow Function

// const sayHello = (greet) => {
//     console.log(`${greet}`);
// }

// const sayName = (name) => {
//     console.log(`Nama saya ${name}`)
// }

// sayName("Giovanni");

// fungsi didefinisikan menggunakan tanda panah atau fat arrow ( => )

//function declaration

// function sayHello(greet) {
//     console.log(`${greet}!`);
// }

// //function expression

// const sayName = function (name) {
//     console.log(`Nama saya ${name}`);
// }

// Namun, jika kita sama sekali tidak membutuhkan parameter, maka kita tetap menuliskan tanda kurung namun kosong seperti ini:

// const sayHello = () => {
//     console.log("Selamat pagi semuanya!");
// }

// sayHello();

// Satu hal yang menarik, ketika body dari function hanya terdiri dari satu baris, kita bisa menghapus tanda kurung kurawal. Tentunya ini akan menghemat baris kode yang kita tulis.

// const sayName = (name) => console.log(`Nama saya ${name}`);

// sayName('Leila');

// const multiply = (a, b) => a * b;

// console.log(multiply(3, 4));

// Variable Scope

 // Variabel yang dapat diakses dari seluruh script disebut dengan “globally scoped”, sementara variabel yang hanya diakses hanya pada fungsi tertentu disebut dengan “locally scoped”.

 // Sebisa mungkin kita harus menghindari pembuatan variabel global, karena variabel global dapat diakses pada seluruh script yang kita tuliskan. Semakin banyak variabel global yang kita tuliskan, semakin tinggi kemungkinan tabrakan (collision) terjadi.

 // Closure

//  Suatu fungsi yang dapat mengakses variabel di dalam lexical scope-nya disebut dengan closure. Lexical scope berarti pada sebuah fungsi bersarang, fungsi yang berada di dalam memiliki akses ke variabel di lingkup induknya.

// function init() {
//     const name = 'Obi Wan' // Variable lokal di dalam scope fungsi init

//     function greet() { // inner functio, merupakan contoh closure
//         console.log(`Halo, ${name}`); // Memanggil variabel yang dideklarasikan di parent function
//     }

//     greet();
// }

// init();

// Fungsi init() memiliki variabel lokal name dan fungsi greet()

//  Fungsi greet() adalah inner function yang didefinisikan di dalam init() dan hanya bisa diakses dari dalam fungsi init(). Perhatikan bahwa fungsi greet() tidak memiliki variabel lokal. Namun, karena inner function memiliki akses ke variabel di parent function-nya, sehingga greet() dapat mengakses variabel name. Itulah yang dimaksud dengan lexical scope.