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

// class Car {
//   constructor(brand, color, maxSpeed) {
//     this.brand = brand;
//     this.color = color;
//     this.maxSpeed = maxSpeed;
//     //set a random chassis number
//     this.chassisNumber = `${brand}-${Math.floor(Math.random() * 1000) + 1}`;
//     // Namun, adakalanya nilai properti juga bisa didefinisikan di dalam class itu sendiri. Contohnya, kita tidak ingin pengguna menentukan nomor rangka mobil secara mandiri, maka kita bisa memberi nilai properti chassisNumber langsung di dalam fungsi constructor.
//   }

//   // drive() {
//   //   console.log(`${this.brand} ${this.color} is driving`);
//   // }

//   // reverse() {
//   //   console.log(`${this.brand} ${this.color} is reversing`);
//   // }

//   // turn() {
//   //   console.log(`${this.brand} ${this.color} is turning`);
//   // }
// }

// const car1 = new Car ('subaru', 'red', 200);

// console.log(car1);

// // car1.turn();

// Contoh lain, jika Anda membuat class Mail, secara umum propertinya adalah sender, receiver, subject, dan body.

// class Mail {
//   constructor(sender, receiver, subject, body) {

//     this.sender = sender;
//     this.receiver = receiver;
//     this.subject = subject;
//     this.body = body;
//   }
// }

// // Lalu, bagaimana cara memproteksi agar nilai dari properti chassisNumber tidak dapat diubah? Nah, ketika kita berhadapan dengan kasus seperti ini, kita bisa memanfaatkan properti getter dan setter.

// Sebelum memecahkan masalah di atas, ketahuilah bahwa ada dua tipe properti, yaitu data property dan accessor property.

// Data property merupakan properti yang sejauh ini kita lihat, properti yang langsung menampung sebuah nilai di dalam sebuah objek.

// Sedangkan accessor property merupakan properti yang dikontrol oleh sebuah getter dan setter. Nilai yang didapatkan dari properti tersebut dikontrol oleh method get dan cara menetapkan nilai tersebut dikontrol oleh method set.

// Berikut contoh dari accessor property.

// class User { // class
//   constructor(firstName, lastName) { // Nilai dari properti tersebut ditetapkan via argumen constructor
//     this.firstName = firstName; // property
//     this.lastName = lastName; // property
//   }

//   get fullName() { // accessor property yang mengatur cara akses dari properti fullName.
//     return `${this.firstName} ${this.lastName}`;
//   }

//   set fullName(fullName) { // accessor property yang mengatur cara akses dari properti fullName.
//     const [firstName, lastName] = fullName.split(' ');
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
// }

// const user = new User('John', 'Doe');
// console.log(user);
// console.log(user.fullName);

// user.fullName = 'Fulan Fulanah';
// // console.log(user);
// console.log(user.fullName);

// Catatan penting yang perlu Anda ketahui mengenai getter setter adalah:

// method getter harus mengembalikan sebuah nilai dan nilai tersebut akan menjadi nilai properti;
// method setter harus menerima satu argumen yang nilainya diambil dari operand ke dua ketika melakukan assignment operator.

// Di JavaScript, pola yang sering diterapkan untuk memecahkan masalah ini adalah dengan memanfaatkan getter setter sebagai “wrapper” dari properti aslinya. Tujuannya agar getter setter bisa mengontrol akses seperti mendapatkan dan menetapkan nilai properti.

// class Car {
//   constructor(brand, color, maxSpeed) {
//     this.brand = brand;
//     this.color = color;
//     this.maxSpeed = maxSpeed;
//     this._chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`;
//   }

//   get chassisNumber () { // mengambil nilai
//     return this._chassisNumber;
//   }

//   set chassisNumber(chassisNumber) { // menetapkan nilai
//     console.log('you are not allowed to change the chassis number');
//   }

// }

// const car = new Car('BMW', 'red', 200);
// console.log(car.chassisNumber);
// car.chassisNumber = 'BMW-1';
// console.log(car.chassisNumber);

// Method

// Method adalah sebuah fungsi yang berada di dalam sebuah class dan dapat diakses melalui instance Class tersebut. Method biasanya mengindikasikan hal yang dapat dilakukan oleh sebuah class. Bila kita berbicara tentang class Car, method yang ada bisa drive(), reverse(), dan turn(). Jika pada class Mail, method bisa berupa send(), sendLater(), saveAsDraft().

// class Car {
//   constructor(brand, color, maxSpeed) {
//     this.brand = brand;
//     this.color = color;
//     this.maxSpeed = maxSpeed;
//     this._chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`; //  Biasanya method yang hanya digunakan secara internal disebut dengan private dan namanya diawali dengan tanda underscore.
//   }

//   get chassisNumber() {
//     return this._chassisNumber;
//   }

//   set chassisNumber(chassisNumber) {
//     console.log('you are not allowed to change the chassis number');
//   }

//   // Methods
//   drive() {
//     console.log(`${this.brand} ${this.color} is driving`);
//   }

//   reverse() {
//     console.log(`${this.brand} ${this.color} is reversing`);
//   }

//   turn(direction) {
//     console.log(`${this.brand} ${this.color} is turning ${direction}`);
//   }
// }

// class Mail {
//   constructor(sender, receiver, subject, body) {
//     this.sender = sender;
//     this.receiver = receiver;
//     this.subject = subject;
//     this.body = body;
//   }

//   //method

//   send() {
//     console.log(`Sending mail from ${this.sender} to ${this.receiver} `);
//   }

//   sendLatter(delay) {
//     console.log(`sending after ${delay} ms`);

//     setTimeout(() => {
//       this.send();
//     }, delay);
//   }
// }

// sama seperti fungsi JavaScript, method bisa menerima sebuah argumen. Contohnya pada method turn() di class Car dan sendLater di class Mail, kami memanfaatkan argumen direction dan delay untuk menetapkan arah dan waktu delay dalam menjalankan method-nya.

// const car = new Car('BMW', 'red', 200);

// car.drive();
// car.turn('left');
// car.reverse();

// Contoh, pada class Car, kita menetapkan nilai _chassisNumber dengan nilai random yang ditulis di dalam constructor. Hal itu membuat kode di dalam constructor menjadi sulit dibaca karena dicampuri dengan logika dalam menghasilkan angka acak.

// class Car {
//   // Khusus untuk properti yang sifatnya private, Anda harus mendeklarasikan propertinya di enclosing class seperti ini.
//   //  #chassisNumber = null; // enclosing class
//   constructor(brand, color, maxSpeed) {
//     this.brand = brand;
//     this.color = color;
//     this.maxSpeed = maxSpeed;
//     this.#chassisNumber = this.#generateChassisNumber();
//   }

//   get chassisNumber() {
//     return this._chassisNumber;
//   }

//   set chassisNumber(chassisNumber) {
//     console.log('you are not allowed to change the chassis number');
//   }

//   // Methods
//   drive() {
//     console.log(`${this.brand} ${this.color} is driving`);
//   }

//   reverse() {
//     console.log(`${this.brand} ${this.color} is reversing`);
//   }

//   turn(direction) {
//     console.log(`${this.brand} ${this.color} is turning ${direction}`);
//   }

//   #generateChassisNumber() {
//     return `${this.brand}-${Math.floor(Math.random() * 1000)}`;
//   }
// }

// const car = new Car ('subaru', 'biru', 200);
// car.#generateChassisNumber(); // syntax erorr
// console.log(car.#chassisNumber); // syntax erorr

// Member Visibility

// Member visibility bisa disebut juga sebagai hak akses pada sebuah properti dan method di dalam class. Secara default, seluruh properti dan method yang dibuat di dalam class bersifat public, alias dapat diakses di luar dari kode class via instance. Selain public, kita juga bisa membuat properti dan method bersifat private, terutama ketika kita ingin properti atau method tersebut hanya digunakan dalam cakupan kode di dalam class saja (penggunaan internal).

// Untuk menyelesaikan masalah ini, JavaScript versi ES2022 secara resmi mengenalkan cara dalam menetapkan hak akses private pada properti dan method objek, yakni dengan menambahkan tanda # di awal penamaan properti atau method.

// pewarisan

// Dengan konsep inheritance, kita bisa mewariskan sifat-sifat yang berada di dalam sebuah class ke class lain. Konsep inheritance cocok ketika kita ingin membuat objek yang mirip dan memiliki sedikit perbedaan seperti kasus yang kita hadapi.

// Implementasinya, kita tampung seluruh sifat yang “sama” pada sebuah class induk (superclass) dan sifat tersebut nantinya diwarisi kepada class di bawahnya (subclass). Kemudian pada subclass, kita bisa menambahkan kemampuan lain yang lebih spesifik.

// Contohnya, kita buat superclass bernama MailService yang mengandung seluruh sifat yang sama pada WhatsAppService dan EmailService.

// Superclass

// class MailService {
//   constructor(sender) {
//     this.sender = sender;
//   }

//   sendMessage(message, receiver) {
//     console.log(`${this.sender} sent ${message} to ${receiver}`);
//   }

// }

// // sub-class

// class WhatsAppService extends MailService {
//   sendBroadcastMessage(message, receivers) {
//     for (const receiver of receivers) {
//       this.sendMessage(message, receiver);
//     }
//   }
// }

// // Subclass

// class EmailService extends MailService {
//   sendDelayedMessage(message, receiver, delay) {
//     setTimeout(() => {
//       this.sendMessage(message, receiver);
//     }, delay);
//   }
// }

// const whatsapp = new WhatsAppService('+6281234567890');
// const email = new EmailService('dimas@dicoding.com');

// whatsapp.sendMessage('Hello', '+6289876543210');

// Operator instanceof

// Ketika menulis kode, kita seringkali kita perlu mengecek jenis dari objek tersebut. Salah satu cara mengetahui jenis objek adalah dengan mengecek rantai prototype-nya. Nah, untuk mengetes sebuah objek berdasarkan prototype dari constructor function atau class tertentu, kita bisa menggunakan operator instanceof.

// Penjelasannya:

// operand1: merupakan objek yang ingin dites prototype-nya.
// operand2: merupakan constructor function atau class.
// Berikut contoh penggunaan dari operator instanceof dalam mengecek objek whatsapp yang merupakan instance dari class WhatsAppService.

// const whatsapp = new WhatsAppService('+6281234567890');

// console.log(whatsapp instanceof WhatsAppService); // true
// console.log(whatsapp instanceof EmailService); // false

// Operator instanceof mengembalikan boolean. Operasinya akan menghasilkan nilai true jika objek yang dites (operand pertama) memiliki prototype yang merupakan operand kedua. Jika prototype operand pertama bukanlah operand kedua, operasinya akan menghasilkan nilai false.

// Operator instanceof juga akan mengecek prototype secara berantai. Artinya, instanceof juga mengecek hingga prototype yang diwarisi oleh objek tersebut.

// Overriding

// Object Composition

// Built-in Class

// tugas

// Buatlah class bernama Animal dengan ketentuan:
//  *    - Memiliki properti:
//  *      - name: string
//  *      - age: int
//  *      - isMammal: boolean
//  *    - Memiliki constructor untuk menginisialisasi properti:
//  *      - name
//  *      - age
//  *      - isMammal

// class Animal {
//   constructor(name, age, isMammal) {
//     this.name = name;
//     this.age = age;
//     this.isMammal = isMammal;
//   }
// }

// class Rabbit extends Animal {
//   eat() {
//     return (`${this.name} sedang makan!`);
//   }
// }

// class Eagle extends Animal {
//   fly() {
//     return (`${this.name} sedang terbang!`);
//   }
// }

// const myRabbit = new Rabbit ("Labi", 2, true);
// const myEagle = new Eagle ("Elo", 4, false);

// console.log(myRabbit);
// console.log(myEagle);
