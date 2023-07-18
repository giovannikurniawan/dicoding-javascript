// Pengenalan Asynchronous

// Dalam asynchronous process, kita bisa menjalankan proses yang berada di baris kedua tanpa harus menunggu kode pada baris pertama selesai dieksekusi. Arti lainnya, kita bisa melakukan lebih dari satu proses sekaligus dalam waktu yang bersamaan. Mengapa hal ini penting? Simak contoh berikut.

// Kode di bawah ini merupakan fungsi untuk menghasilkan bilangan prima sebanyak input dari pengguna. Jika Anda menginput dengan nilai yang besar, contohnya 1 juta, Anda bisa merasakan sedikit delay hingga akhirnya pesan “proses membuat 1000000 bilangan prima selesai”.

// setTimeout Function

// JavaScript merupakan bahasa pemrograman yang menerapkan pola event-driven, baik pada environment Node.js maupun browser. Seluruh proses yang berjalan dipicu oleh sebuah event atau kejadian, contohnya DOMContentLoaded dalam browser atau process exit pada Node.js. Dengan pola event-driven itu, artinya kode yang ditulis dengan JavaScript tidak harus dijalankan secara berurutan, tetapi kode dapat dijalankan berdasarkan event atau bahkan dijadwalkan.

// Ada satu fungsi dalam JavaScript yang digunakan untuk menjadwalkan pemanggilan sebuah kode sekaligus membuatnya berjalan secara asynchronous, yakni setTimeout(). Fungsi tersebut menerima dua argumen dengan penjelasan berikut.

// Argumen pertama merupakan sebuah fungsi yang akan dipanggil secara terjadwal dan asynchronous.

// Argumen kedua merupakan delay waktu dalam satuan milisecond yang menentukan delay dari pemanggilan fungsi pada argumen pertama.

// Inilah contoh dari penggunaan fungsi setTimeout().

// console.log('selamat datang!');

// setTimeout(() => {
//     console.log('Terima kasih sudah mampir, silakan datang kembali!');
// }, 3000)

// console.log('Ada yang bisa dibantu?');

// Fungsi setTimeout() merupakan cara paling dasar untuk membuat baris kode berjalan secara asynchronous. Kita akan gunakan setTimeout() dalam pembelajaran ini untuk menyimulasikan cara mendapatkan nilai dari sebuah proses yang membutuhkan waktu.

// Catatan: Ketahuilah bahwa ada beberapa operasi yang berjalan secara asynchronous di berbagai environment JavaScript, contohnya fungsi fetch() di browser dan proses input/output pada Node.js. Namun, kita tidak akan menggunakan fungsi-fungsi tersebut pada pembelajaran ini. Seluruh proses asynchronous akan kami simulasikan dengan menggunakan fungsi setTimeout().

// Asynchronous Handling dengan Callback

// Dalam materi sebelumnya, kita sudah mengetahui bahwa ada kalanya operasi di JavaScript akan berjalan secara asynchronous. Proses tersebut membuat JavaScript dapat mengeksekusi proses selanjutnya tanpa menunggu tahapansebelumnya selesai. Perilaku ini membuat penanganan proses asynchronous berbeda dengan synchronous. Sebagai developer, kita harus tahu cara menangani proses asynchronous agar kelak kita bisa mendapatkan nilai yang dihasilkan dari proses tersebut.

// Saat ini ada dua cara atau pola yang digunakan JavaScript dalam menangani proses asynchronous. Pola pertama yang akan kita bahas adalah callback.

// Pola Callback

// Pola callback merupakan salah satu cara menangani proses asynchronous. Tidak hanya di JavaScript, pola ini juga digunakan pada bahasa pemrograman lainnya. Callback merupakan sebuah fungsi yang disisipkan pada argumen fungsi asynchronous dan akan dipanggil ketika proses dinyatakan selesai. Fungsi callback akan membawa nilai-nilai yang dihasilkan dari proses asynchronous sehingga kita bisa memanfaatkan nilai tersebut.

// function getUsers(callback) {
//     // untuk menyimulasikan bahwa fungsi berjalan secara asynchronous
//     setTimeout(() => {
//         const users = ['John','Jack','Abigail'];
//         callback(users);
//     }, 3000);
// }

// // Anda juga bisa melihat bahwa fungsi tersebut memanggil argumen callback ketika prosesnya selesai dan membawa data users.

// getUsers((users) => {
//     console.log(users);
// });

// Ketika menggunakan fungsi getUsers() kita perlu memanggil dengan memberikan argumen fungsi. Fungsi ini akan dipanggil ketika proses asynchronous selesai sekaligus membawa data users yang dihasilkan. Di dalam cakupan fungsi inilah kita bisa mengonsumsi nilai users yang dihasilkan dari proses asynchronous. Inilah yang dimaksud dengan pola callback.

// function getUsers(isOffline, callback) {

//     setTimeout(() => {
//        const users = ['abs','ginting','asia'];

//        if (isOffline) {
//         callback(new Error('gak bisa karena kamu offline'.null));
//         return;
//        }

//        callback(null, users);
//     }, 3000);
// }

// function callback(error, data) {
//   // logika ketika proses asynchronous selesai
// }

// Argumen pertama dari fungsi callback merupakan error. Argumen ini hanya akan bernilai jika proses asynchronous gagal, sebaliknya biasanya bernilai null. Argumen kedua dari fungsi callback merupakan data yang dibawa ketika prosesnya berhasil. Jika proses asynchronous gagal, dia akan bernilai null.

// Selain itu, Anda juga perlu mengingat convention yang ditetapkan oleh Node.js bahwa argumen callback selalu diletakkan terakhir. Itulah alasan kami mendefinisikan argumen isOffline kemudian callback pada fungsi getUsers().

// Catatan: Harap diingat convention tersebut ditetapkan karena banyak proses asynchronous yang terdapat pada Node.js API menggunakan struktur tersebut dalam penggunaan callback, seperti fungsi fs.readFile().

// // Dengan diubahnya fungsi getUsers(), kita juga perlu menyesuaikan struktur callback-nya. Untuk menangani proses asynchronous pada fungsi getUsers(), baik ketika prosesnya berhasil maupun gagal, maka fungsi usersCallback() perlu diubah menjadi seperti ini.

// function getUsers(isOffline, callback) {
//   // simulate network delay
//   setTimeout(() => {
//     const users = ['John', 'Jack', 'Abigail'];

//     if (isOffline) {
//       callback(new Error('cannot retrieve users due offline'), null);
//       return;
//     }

//     callback(null, users);
//   }, 3000);
// }

// function usersCallback(error, users) {
//   if (error) {
//     console.log('process failed:', error.message);
//     return;
//   }
//   console.log('process success:', users);
// }

// getUsers(false, usersCallback); // process success: ['John', 'Jack', 'Abigail']
// getUsers(true, usersCallback); // process failed: cannot retrieve users due offline

// Callback Hell

// function getUserWeather(userId) {
//   try {
//     const user = getUser(userId);
//     const weather = getWeather(user.location);
//     return { ...user, ...weather };
//   } catch (error) {
//     console.log(error.message);
//     return null;
//   }
// }
 
// const userWeather = getUserWeather(1);
// console.log(userWeather); // { id: 1, name: 'John Doe', location: 'Jakarta', weather: 'Sunny', temperature: 30 }

// Kode di atas menunjukkan sebuah fungsi getUserWeather() yang bertujuan untuk mendapatkan cuaca berdasarkan userId. Anda juga bisa melihat bahwa data cuaca didapatkan dengan cara mengagregasi dua fungsi, yakni getUser() dan getWeather(). Jika kedua fungsi tersebut berjalan secara sinkron, tentu proses agregasi akan mudah karena proses berjalan secara terurut dan saling menunggu.

// Asynchronous Handling dengan Promise

// Selain sama-sama membutuhkan waktu, kesamaan lainnya terjadi pada hasil yang didapatkan. Di dunia nyata, janji bisa terpenuhi atau gagal. Contoh, jika teman Anda berjanji akan mengajak lari pada sore hari, bisa saja janji tersebut gagal terpenuhi karena hujan atau alasan lainnya. Promise di JavaScript pun memiliki konsep yang sama karena memiliki beberapa kondisi, yaitu pending, fulfilled, dan rejected.

// Pending merupakan keadaan Promise sedang berjalan.
// Fulfilled merupakan keadaan Promise yang terpenuhi.
// Rejected merupakan keadaan Promise yang gagal terpenuhi.
// Sudah paham mengapa fitur ini dinamakan Promise? Jika sudah, pertanyaan selanjutnya adalah apa bentuk Promise ini di JavaScript? Bagaimana cara menggunakannya?

// function getUsers(isOffline) {
//   // return a promise object
//   return new Promise((resolve, reject) => {

//     // simulate network delay
//     setTimeout(() => {
//       const users = ['John', 'Jack', 'Abigail'];

//       if (isOffline) {
//         reject(new Error('cannot retrieve users due offline'));
//         return;
//       }
      
//       resolve(users);
//     }, 3000);
//   });
// }

// getUsers(false)
//   .then(users => console.log(users))
//   .catch(err => console.log(err.massage));

//   Perhatikan kode di atas. Alih-alih fungsi getUsers() menerima callback sebagai argumen, dia mengembalikan objek Promise. Lalu, bagaimana dengan nilai yang belum dibawa oleh argumen callback? Nah, di sini Promise menawarkan penggantinya dengan memanfaatkan resolve dan reject. Dalam kasus yang menyebabkan proses asynchronous error, kita bisa bawa error tersebut menggunakan reject, sedangkan pada kasus proses asynchronous berjalan sukses, kita bisa bawa nilai tersebut dengan resolve. Sampai di sini, apakah Anda sudah paham?

// Catatan: Objek Promise dibuat dengan cara memanggil constructor Promise, yakni new Promise(). Kemudian di dalam constructor, Anda wajib memberikan argumen berupa fungsi yang di dalamnya terdapat operasi asynchronous. Fungsi tersebut juga diberikan akses terhadap dua argumen, yaitu resolve dan reject. Kedua argumen ini bisa Anda manfaatkan dalam membawa hasil dari proses asynchronous berupa data ataupun error.

// Sekarang Anda sudah paham cara membuat Promise. Selanjutnya, Anda perlu tahu cara menggunakan Promise untuk mendapatkan nilai yang dibawa olehnya. Mari kita lihat cara memanggil dan mendapatkan hasil dari fungsi getUsers().

// Setelah fungsi getUsers() diubah dari callback menjadi Promise-based, cara penggunaan fungsinya pun akan berubah. Fungsi yang mengembalikan objek Promise akan memiliki fungsi .then dan .catch. Fungsi tersebut digunakan untuk mengambil nilai yang dibawa oleh resolve dan reject. Gambarannya seperti ini.

// Mengubah Callback Menjadi Promise dengan Promisify

// Pada materi sebelumnya, kita sudah belajar cara mengubah callback menjadi Promise. Sekarang kita akan coba mengubah callback menjadi Promise dengan pendekatan yang berbeda. Di Node.js, terdapat sebuah fungsi dari core module util yang dapat mengubah fungsi asynchronous callback-based menjadi Promise-based dengan mudah, ia bernama promisify.

// function getUsers(isOffline, callback) {
//   // simulate network delay
//   setTimeout(() => {
//     const users = ['John', 'Jack', 'Abigail'];
  
//     if (isOffline) {
//       callback(new Error('cannot retrieve users due offline'), null);
//       return;
//     }
 
//     callback(null, users);
//   }, 3000);
// }

// Pada materi sebelumnya, kita sudah mengubahnya menjadi Promise-based dengan me-refactor kode fungsi tersebut. Namun, dalam skenario nyata, sering kali kita tidak memiliki akses untuk me-refactor sebuah fungsi. Contohnya ketika menggunakan library pihak ketiga. Ketika menghadapi kasus tersebut, bagaimana cara termudah dalam mengubah fungsi tersebut menjadi callback-based?

// // Node.js menawarkan solusi, yaitu menggunakan fungsi promisify dari core module util. Dengannya, kita bisa secara mudah membuat fungsi baru yang mengimplementasikan Promise berdasarkan fungsi callback-based, contohnya seperti ini.

// const { promisify } = require('util');
 
// function getUsers(isOffline, callback) {
//   // simulate network delay
//   setTimeout(() => {
//     const users = ['John', 'Jack', 'Abigail'];
//      if (isOffline) {
//       callback(new Error('cannot retrieve users due offline'), null);
//       return;
//     }
 
//     callback(null, users);
//   }, 3000);
// }

// // create a Promise version of getUsers
// const getUsersPromise = promisify(getUsers);

// getUsersPromise(false)
//   .then(users => console.log(users)) // ['John', 'Jack', 'Abigail']
//   .catch(err => console.log(err.message));
 
// getUsersPromise(true)
//   .then(users => console.log(users))
//   .catch(err => console.log(err.message)); // cannot retrieve users due offline

//   Sangat mudah, bukan? Namun, terdapat beberapa catatan ketika Anda hendak mengubah fungsi asynchronous callback-based menjadi Promise-based menggunakan util.promisify().

// Promisify selalu menganggap callback berada pada argumen paling akhir sebuah fungsi asynchronous. Dengan begitu, Anda tidak dapat menggunakan promisify jika callback berada di posisi awal ataupun tengah argumen.
// Promisify akan bekerja dengan baik jika callback memiliki struktur argumen callback(error, data). Jika callback memiliki struktur argumen di luar aturan tersebut, nilai yang dibawa oleh Promise ketika fulfilled dan rejected bisa tertukar.

// kuis 

// /**
//  * @TODO
//  * Ubahlah fungsi asynchronous callback-based getProvinces menjadi Promise-based.
//  *
//  * Catatan:
//  * - Anda boleh menggunakan util.promisify untuk mengubah fungsi callback-based menjadi Promise-based.
//  * - Jika nama fungsinya berubah, sesuaikan nilai yang diekspor tanpa mengubah nama properti di akhir berkas ini.
//  */

// const { promisify } = require('util');

// function getProvinces(countryId, callback) {
//   setTimeout(() => {
//     if (countryId === 'id') {
//       callback(null, [
//         { id: 'id-jk', name: 'Jakarta' },
//         { id: 'id-bt', name: 'Banten' },
//         { id: 'id-jr', name: 'Jawa Barat' },
//       ]);
//       return;
//     }

//     callback(new Error('Country not found'), null);
//   }, 1000);
// }

// const getProvincesPromise = promisify(getProvinces);

// getProvincesPromise('id')

// .then((provinces) => console.log(provinces))
// .catch((error) => console.log(error.message))


// module.exports = { getProvinces: getProvincesPromise };


// Promise Berantai

// function withDrawMoney(amount) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//          if (amount > 100) {
//             reject(new Error('Not Enough to withdraw'));
//          }
//         }, 1000);
//     })
// }

// function buyCinemaTicket(money) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (money < 10) {
//           reject(new Error('not enough money to buy ticket'));
//         }
  
//         resolve('ticket-1');
//       }, 1000);
//     });
//   }

//   function goInsideCinema(ticket) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (!ticket) {
//           reject(new Error('no ticket'));
//         }
  
//         resolve('enjoy the movie');
//       }, 1000);
//     });
//   }

//   function watchMovie() {
//     withDrawMoney(10)
//       .then((money) => {
//         return buyCinemaTicket(money);
//       })
//       .then((ticket) => {
//         return goInsideCinema(ticket);
//       })
//       .then((result) => {
//         console.log(result);
//       })
//       .catch((error) => {
//         console.log(error.message);
//       });
//   }
  
//   watchMovie();

