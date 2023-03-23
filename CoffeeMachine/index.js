// console.log("Menyalakan mesin kopi");
// console.log("Menggiling biji kopi");
// console.log("Memanaskan air");
// console.log("Mencampurkan air dan kopi");
// console.log("Menuangkan kopi ke dalam gelas");
// console.log("Menuangkan susu ke dalam gelas");
// console.log("Kopi Anda sudah siap!");

// const coffeeStock = require('./state'); 

// Dalam inisialisasi variabel coffeeStock (nama variabel bebas kita tentukan), kita gunakan method require() dengan memberikan parameter lokasi berkas state.js. Dengan begitu variabel coffeeStock akan memiliki nilai module.exports yang sama pada berkas state.js. Setelah mendapatkan nilainya, kita bebas menggunakannya seperti variabel lokal pada umumnya.

// const {coffeeStock, isCoffeeMachineReady} = require('./state');

// Lalu untuk mengimpor nilainya kita dapat menggunakan keyword import … from seperti berikut ini: (ES6 Module)

import { coffeeStock, isCoffeeMachineReady} from "./state.js";

// const makeCofee = (type, miligrams) => {
//     if (coffeeStock[type], miligrams) {
//         console.log ("Kopi Berhasil dibuat!");
//     } else {
//         console.log("Biji kopi habis!");
//     }
// }

// makeCofee("robusta", 80);
 
// console.log(coffeeStock);

// const displayStock = stock => {
//     for (const type in stock) {
//       console.log(type);
//     }
//   }
   
//   displayStock(coffeeStock);

// Tips: Jika kita menggunakan lokasi yang relatif (dapat berubah/dipindahkan), pastikan awali dengan menuliskan ./. Contohnya, berkas index.js dan state.js berada pada folder yang sama, maka kita cukup menuliskannya dengan ./state.js.

// Lalu bagaimana cara import kedua nilai tersebut? Masih ingat dengan materi destructuring object? Pada berkas index.js kita gunakan teknik destructuring object untuk mendapatkan nilai yang di-import seperti ini:

console.log(coffeeStock);
console.log(isCoffeeMachineReady);