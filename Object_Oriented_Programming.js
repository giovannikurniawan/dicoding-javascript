//  const car = {
//     //properties
//     brand: "Ford",
//     color: "red",
//     maxSpeed: 200,
//     chassisNumber: "f-1",

//     //methods
//     drive: () => {
//         console.log('driving');
//     },
//     reverse: () => {
//         console.log('reversing');
//     },
//     turn: () => {
//         console.log('turning');
//     }
//  }

//  console.log(car.chassisNumber);
//  car.drive();

// Kode di atas merupakan contoh objek mobil atau car di JavaScript. Seperti yang Anda lihat, objek car memiliki properti brand, color, maxSpeed, dan chassisNumber; dan juga method drive, reverse, dan turn. Kita bisa akses nilai properti dan panggil method yang ada di dalam objek tersebut.

// Constructor Function

// function Car(brand, color, maxSpeed, chassisNumber) {
//     this.brand = brand;
//     this.color = color;
//     this.maxSpeed = maxSpeed;
//     this.chassisNumber = chassisNumber;
// }

// Car.prototype.drive = function() {
//     console.log(`${this.brand} ${this.color} is driving`);
// }

// // Kode di atas merupakan contoh membuat object blueprint dari sebuah mobil. Anda bisa membuat objek mobil--yang merupakan instance dari Car--dengan memanfaatkan constructor function Car.

// // Membuat objek mobil dengan constructor function Car
// const car1 = new Car('Toyota', 'Silver', 200, 'to-1');

// console.log(car1);
// car1.drive();

// Penamaan fungsi yang merupakan constructor function, secara konvensi harus ditulis dengan huruf kapital. Itulah alasan kami memberi nama fungsi tersebut Car, bukan car. Hal ini penting untuk Anda ikuti guna membedakan fungsi biasa dengan constructor function karena penggunaannya berbeda.

// Constructor function dapat memanfaatkan keywordthis yang bernilai objek (instance) dirinya sendiri. Keywordthis dapat dimanfaatkan untuk mengakses nilai properti atau method dari objek tersebut. Contoh, kami menggunakan keyword this untuk menetapkan nilai properti brand dari argumen fungsi. Selain itu, di dalam method drive, kami juga menggunakan this untuk mendapatkan nilai properti brand dan color.

// Constructor function memiliki internal property bernama prototype. Properti ini digunakan untuk mendefinisikan method-method yang akan dimiliki oleh objek yang dibuat. Alasan method perlu didefinisikan di dalam prototype agar mudah untuk diwarisi ketika melakukan pewarisan.

// Terakhir, agar fungsi mengembalikan sebuah objek, Anda harus memanggilnya dengan menambahkan keyword new. Contoh, pada kode di atas, perhatikan cara kami memanggil fungsi Car untuk membuat objek car1, car2, dan car3.

// Properti dan Method

// Properti merupakan bagian dari class yang mendefinisikan nilai-nilai yang terkandung dalam sebuah instance class. Contohnya, jika Anda membuat class Car, properti adalah informasi yang sekiranya terdapat pada sebuah mobil seperti brand, color, maxSpeed, dan chasissNumber. Contoh lain, jika Anda membuat class Mail, secara umum propertinya adalah sender, receiver, subject, dan body.

// class Car {
//     constructor(brand, color, maxSpeed, chassisNumber) {
//       this.brand = brand;
//       this.color = color;
//       this.maxSpeed = maxSpeed;
//       this.chassisNumber = chassisNumber;
//     }
// }

// const car1 = new Car('BMW', 'red', 200, 'b-1');

// console.log(car1);

// class Car {
//   constructor(brand, color, maxSpeed, chassisNumber) {
//     this.brand = brand;
//     this.color = color; // cetakan / blue print
//     this.maxSpeed = maxSpeed;
//     this.chassisNumber = chassisNumber;
//   }
// }

// const car1 = new Car('esemka', 'merah', 200, 'b-1'); // yang mau pake cetakan

// console.log(car1); // tampilkan hasil dari cetakan

// properti getter dan setter.

// Sebelum memecahkan masalah di atas, ketahuilah bahwa ada dua tipe properti, yaitu data property dan accessor property.

// Data property merupakan properti yang sejauh ini kita lihat, properti yang langsung menampung sebuah nilai di dalam sebuah objek.

// Sedangkan accessor property merupakan properti yang dikontrol oleh sebuah getter dan setter. Nilai yang didapatkan dari properti tersebut dikontrol oleh method get dan cara menetapkan nilai tersebut dikontrol oleh method set.

// menggunakan constructor function

// function Car (brand, color, maxSpeed, chasissNumber) {
//   this.brand = brand;
//   this.color = color;
//   this.maxSpeed = maxSpeed;
//   this.chasissNumber = chasissNumber;
// }

// Car.prototype.drive = function () {
//   console.log(`${this.brand} ${this.color} is driving`);
// }

// Car.prototype.reverse = function () {
//   console.log(`${this.brand} ${this.color} is reversing`);
// }

// Car.prototype.turning = function () {
//   console.log(`${this.brand} ${this.color} is turning`);
// }

// // Kode di atas merupakan contoh membuat object blueprint dari sebuah mobil. Anda bisa membuat objek mobil--yang merupakan instance dari Car--dengan memanfaatkan constructor function Car.

// const car1 = new Car('Toyota', 'Silver', 200, 'to-1');
// const car2 = new Car('Honda', 'Black', 180, 'ho-1');
// const car3 = new Car('Suzuki', 'Red', 220, 'su-1');

// console.log(car1);
// console.log(car2);
// console.log(car3);

// Penamaan fungsi yang merupakan constructor function, secara konvensi harus ditulis dengan huruf kapital. Itulah alasan kami memberi nama fungsi tersebut Car, bukan car. Hal ini penting untuk Anda ikuti guna membedakan fungsi biasa dengan constructor function karena penggunaannya berbeda.

// Constructor function dapat memanfaatkan keywordthis yang bernilai objek (instance) dirinya sendiri. Keywordthis dapat dimanfaatkan untuk mengakses nilai properti atau method dari objek tersebut. Contoh, kami menggunakan keyword this untuk menetapkan nilai properti brand dari argumen fungsi. Selain itu, di dalam method drive, kami juga menggunakan this untuk mendapatkan nilai properti brand dan color.

// Constructor function memiliki internal property bernama prototype. Properti ini digunakan untuk mendefinisikan method-method yang akan dimiliki oleh objek yang dibuat. Alasan method perlu didefinisikan di dalam prototype agar mudah untuk diwarisi ketika melakukan pewarisan.

// Terakhir, agar fungsi mengembalikan sebuah objek, Anda harus memanggilnya dengan menambahkan keyword new. Contoh, pada kode di atas, perhatikan cara kami memanggil fungsi Car untuk membuat objek car1, car2, dan car3.

// cara menggunakan class

class Car {
  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    //set a random chassis number
    this.chassisNumber = `${brand}-${Math.floor(Math.random() * 1000) + 1}`;
    // Namun, adakalanya nilai properti juga bisa didefinisikan di dalam class itu sendiri. Contohnya, kita tidak ingin pengguna menentukan nomor rangka mobil secara mandiri, maka kita bisa memberi nilai properti chassisNumber langsung di dalam fungsi constructor.
  }

  // drive() {
  //   console.log(`${this.brand} ${this.color} is driving`);
  // }

  // reverse() {
  //   console.log(`${this.brand} ${this.color} is reversing`);
  // }

  // turn() {
  //   console.log(`${this.brand} ${this.color} is turning`);
  // }
}

const car1 = new Car ('subaru', 'red', 200);

console.log(car1);

// car1.turn();

// Contoh lain, jika Anda membuat class Mail, secara umum propertinya adalah sender, receiver, subject, dan body.

// class Mail {
//   constructor(sender, receiver, subject, body) {

//     this.sender = sender;
//     this.receiver = receiver;
//     this.subject = subject;
//     this.body = body;
//   }
// }

