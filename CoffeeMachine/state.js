const coffeeStock = {
    arabica: 100,
    robusta: 150,
    liberica: 200
}

// module.exports = coffeeStock; // Dalam environment Node.js, gunakan perintah module.exports untuk melakukan proses export module. Setiap berkas JavaScript yang berjalan pada Node, memiliki objek module lokal yang memiliki properti exports. Properti tersebut digunakan untuk mendefinisikan nilai apa yang akan diekspor dari berkas tersebut.

// console.log(module);

// // Export Beberapa Nilai pada Node.js

// Pada materi sebelumnya kita telah mengetahui cara export nilai dari suatu berkas JavaScript. Lantas bagaimana jika kita perlu meng-export beberapa nilai sekaligus?

const isCoffeeMachineReady = true;

// Baris kode kedua berarti kita menginisialisasikan ulang nilai properti module.exports sehingga nilai yang di-export hanya variabel isCoffeeMachineReady.

// module.exports = coffeeStock;
// module.exports = isCoffeeMachineReady;

// Solusinya adalah kita tetap mengekspor satu nilai, tetapi kita akan memanfaatkan object literals ({ }).

// module.exports = {coffeeStock, isCoffeeMachineReady};

// console.log(module);

// ES6 Module

// Pada Node.js sebelumnya tidak ada perbedaan antara export satu atau beberapa nilai. Semua nilai yang akan diekspor dijadikan nilai dari properti module.exports. Pada ES6 module, jika kita hanya mengekspor satu nilai pada sebuah berkas JavaScript baik itu primitive value, function, array, object, atau class, kita gunakan keyword export default. Contohnya seperti ini:

export {coffeeStock, isCoffeeMachineReady};

// Jika sebelumnya kita hanya melakukan ekspor satu nilai pada berkas JavaScript menggunakan default export, selanjutnya kita akan membahas bagaimana mengekspor banyak nilai dalam satu berkas JavaScript menggunakan ES6.

// Named export digunakan untuk mengekspor banyak nilai dalam berkas JavaScript. Cara kerjanya mirip seperti pada Node.js. Nilai yang akan diekspor dituliskan di dalam object literals, seperti ini:

