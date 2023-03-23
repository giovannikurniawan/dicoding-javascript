// Paradigma Functional Programming

// Paradigma Functional Programming adalah paradigma pemrograman di mana proses komputasi didasarkan pada fungsi matematika murni. Functional Programming (selanjutnya akan kita singkat menjadi FP) ditulis dengan gaya deklaratif yang berfokus pada “what to solve” dibanding “how to solve” yang dianut oleh gaya imperatif.

// const names = ['Harry!', 'Ron', 'Jeff', 'Thomas'];

// const newNamesWithExcMark = [];

// for (let i = 0; i < names.length; i++) {
//     newNamesWithExcMark.push(`${names[i]}!`);
// }

// console.log(newNamesWithExcMark);

// Contoh kode di atas merupakan salah satu gaya penulisan kode imperatif. Di mana proses pengisian nilai array baru (newNames) berdasarkan array lama (names) dilakukan secara manual. Inilah maksud dari “how to solve”, di mana kita perlu memikirkan bagaimana cara melakukan perulangannya (for); kapan perulangannya harus berhenti (i < names.length); bagaimana cara memasukkan nilai baru ke dalam array (newNamesWithExcMark.push).

//Huft, sangat melelahkan!

// const names = ['Harry!', 'Ron', 'Jeff', 'Thomas'];

// const newNamesWithExcMark = names.map((name) => `${name}!`);

// console.log(newNamesWithExcMark);

// JavaScript sendiri merupakan bahasa pemrograman yang mendukung paradigma FP. Banyak Higher-Order Function (kita akan bahas detail tentang ini nanti) yang bisa kita manfaatkan sebagai utilitas, salah satunya fungsi array map() di atas.

// Namun FP bukan hanya sekedar menggunakan High-Order Function bawaan saja. Untuk memahami paradigma FP secara mendalam, kita perlu tahu dulu konsep-konsep apa saja yang ada di dalamnya.

// Konsep-Konsep Functional Programming

// Di sini kita akan membahas 4 konsep besar yang ada di FP. Yakni Pure Function, Immutability, Recursive, dan High-Order Function

// Pure Function

// tidak bergantung terhadap nilai yang berada di luar fungsi atau parameternya

// cara impure function

// let PI = 3.14;

// const hitungLuasLingkaran = (jariJari) => {
//     return PI * (jariJari * jariJari);
// }

// console.log(hitungLuasLingkaran(4)); // 50.24

// PI = 5; // nilai pi berubah

// console.log(hitungLuasLingkaran(4)); // 80

// Menurut Anda, apakah fungsi hitungLuasLingkaran merupakan pure function atau impure function (lawan dari pure function)? Jika Anda menjawab impure function, Anda tepat sekali!

// Fungsi tersebut tidak bisa dikatakan pure function karena ia membutuhkan nilai yang berada di luar dari fungsinya, yakni nilai PI. Bila nilai PI berubah, maka penggunaan fungsi menghasilkan nilai yang berbeda walaupun diberikan nilai parameter yang sama.

// Cara Pure Function

// const hitungLuasLingkaran = (jariJari) => {
//     return 3.14 * (jariJari * jariJari);
// }

// console.log(hitungLuasLingkaran(4)); // 50.24
// console.log(hitungLuasLingkaran(4)); // 50.24
// console.log(hitungLuasLingkaran(8)); // 50.24
// console.log(hitungLuasLingkaran(8)); // 50.24

// Selain dilarang untuk bergantung terhadap nilai luar, pure function juga dilarang keras untuk mengubah nilai yang berada di luar baik secara sengaja atau tidak sengaja. Pure function tidak boleh menimbulkan efek samping (no side effect) ketika digunakan.

// Lihat! Lagi-lagi lebih mudah dan singkat bukan?

// const createPersonWithAge = (age, person) => {
//     return { ...person, age };
//   };
  
//   const person = {
//     name: 'Bobo'
//   };
  
//   const newPerson = createPersonWithAge(18, person);
  
//   console.log({
//     person,
//     newPerson
//   });

// Agar lebih mudah dalam mengetahui apakah fungsi yang Anda buat sudah pure atau belum, pastikan 3 konsep ini ada pada fungsi yang Anda buat.

// Mengembalikan nilai yang sama bila inputannya (nilai parameter) sama.
// Hanya bergantung pada argumen yang diberikan.
// Tidak menimbulkan efek samping.
// Bila 3 konsep di atas terpenuhi, maka bisa dipastikan Anda membuat sebuah pure function.

// Immutability

// Konsep immutability sangat kental pada paradigma FP. Anda bisa lihat sebelumnya pada contoh penggunaan array map. Ketika menggunakan array.map(), alih-alih ia mengubah nilai dari array itu sendiri, malah ia membuat atau menghasilkan array baru.

// const user = {
//     firstname : 'Harry',
//     lastName : 'proter', // typo
// }

// const createUserWithLastName = (newlastName, user) => {
//     return {...user, lastName: newlastName}
// }

// const newUser = createUserWithLastName('Potter', user);

// console.log(newUser);

// Rekursif

// Apa itu rekursif? Rekursif merupakan teknik pada sebuah function yang memanggil dirinya sendiri.

// Kita akan mencoba mengubah fungsi countDown yang biasanya kita buat menggunakan sintaksis iterasi seperti for, foreach, while seperti kode di bawah menjadi bentuk rekursif.

// const countDown = start => {
//     console.log(start);
//     if(start > 0) countDown(start-1);
// };

// countDown(10);

// Higher-Order Function

// JavaScript memiliki kemampuan First Class Functions, karena itu fungsi pada JavaScript dapat diperlakukan layaknya sebuah data. Kita bisa menyimpan function dalam variabel, memberikan function sebagai parameter pada fungsi lainnya, hingga mengembalikan function di dalam function.

// Reusable Function

// Dengan menerapkan konsep-konsep yang ada di dalam paradigma FP, fungsi yang Anda buat akan bersifat reusable. Karena fungsi yang Anda buat merupakan pure function, ia tidak akan dipengaruhi ataupun mempengaruhi keadaan di/dari luar. Hal ini tentu membuat fungsi dapat digunakan berkali-kali tanpa khawatir mendapatkan hasil di luar ekspektasi Anda.

// Array Map

// Fungsi array.map() merupakan fungsi bawaan dari array yang sangat berguna dan banyak sekali digunakan. Fungsi ini dapat dipanggil dari sebuah data bertipe array dan menerima satu buah callback function.

// ['Harry', 'Ron', 'Jeff', 'Thomas'].map(() => { });

// Callback function tersebut akan dipanggil sebanyak jumlah panjang array dan akan memiliki akses pada index array sesuai dengan iterasinya.

// ['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => { });

// const newArray = ['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => { return `${name}!`});

// console.log(newArray);

// Array Filter

// Sama seperti array.map(), fungsi array.filter() merupakan fungsi bawaan dari data yang bertipe array di JavaScript. Sesuai namanya, fungsi ini sangat berguna untuk melakukan proses penyaringan (filtering) terhadap nilai array yang ada. Bila Anda memiliki kasus di mana Anda ingin menghilangkan beberapa item di array berdasarkan spesifikasi tertentu, fungsi ini sangatlah cocok Anda gunakan.

// Cara kerja fungsi ini mirip seperti array.map(). Namun, callback function dari fungsi ini harus mengembalikan boolean. Di mana nilai boolean ini digunakan untuk menentukan apakah item array lolos saring atau tidak.

// Sama seperti fungsi map(), fungsi filter() juga akan mengembalikan array yang telah disaring dalam bentuk array baru.

// const truthyArray = [1, '', 'Hallo',  0,  null, 'Harry', 14].filter((item) => Boolean(item));

// console.log(truthyArray);

// Contoh lain, penggunaan filter untuk menyaring array dari objek siswa yang layak mendapatkan beasiswa berdasarkan nilai skor yang didapat

// const student = [
//     {
//         name: 'Harry',
//         score: 60,
//     },
//     {
//         name: 'James',
//         score: 88,
//     },
    
//     {
//         name: 'Ron',
//         score: 90,
//     },
//     {
//         name: 'Bethy',
//         score: 75,
//     }
// ];

// const eligibleForScholarshipStudents = student.filter((student) => student.score > 85);

// console.log(eligibleForScholarshipStudents);

// Array Reduce

// Array some

// Array find

// Array sort

// Array every

// Array forEach

/**
 * TODO:
 * Buatlah variabel greatAuthors yang merupakan array
 * berdasarkan hasil filter() dan map() dari books:
 *   - Gunakan fungsi filter untuk mengembalikan nilai item books
 *     yang hanya memiliki nilai sales lebih dari 1000000.
 *   - Gunakan fungsi map pada books yang sudah ter-filter,
 *     untuk mengembalikan nilai string dengan format:
 *     - `${author} adalah penulis buku ${title} yang sangat hebat!`
 *
 * Catatan: Jangan ubah nilai atau struktur dari books
 */

// const books = [
//     { title: 'The Da Vinci Code', author: 'Dan Brown', sales: 5094805 },
//     { title: 'The Ghost', author: 'Robert Harris', sales: 807311 },
//     { title: 'White Teeth', author: 'Zadie Smith', sales: 815586 },
//     { title: 'Fifty Shades of Grey', author: 'E. L. James', sales: 3758936 },
//     { title: 'Jamie\'s Italy', author: 'Jamie Oliver', sales: 906968 },
//     { title: 'I Can Make You Thin', author: 'Paul McKenna', sales: 905086 },
//     { title: 'Harry Potter and the Deathly Hallows', author: 'J.K Rowling', sales: 4475152 },
//   ];

//   let greatAuthors = books.filter((books) => books.sales > 1000000).map((item) => {
     
//     let author = item.author;

//     let title = item.author;

//     return `${author} adalah penulis buku ${title} yang sangat hebat!`

//   })


//   let greatAuthors = books.filter((books) => books.sales > 1000000).map((item) => {
     
//     let author = item.author;

//     let title = item.title;

//     return `${author} adalah penulis buku ${title} yang sangat hebat!`;
//   })