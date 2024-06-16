/**
 * jadi array destructuring ini dimana nilai array akan disimpan
 * kedalam sebuah varibale baru dengan menggunakan contoh :
 * const arr = [1,2,3,4,5]
 * const [x,y,z,a,w] = arr | arr disini sebagai nilai induk yang akan di panggil sesuai nomoer index
 * jadi const [] sebagai wadah array
 *
 */
// penggunaan array destructuring
const arrs = [1, 2, 3];
const [x, y, z] = arrs;
console.log(x + y + z);

/**
 * object desducturing ini juga sama dimana kita membuat dua 1 untuk object 1 lagi untuk varibale peyimpanan object
 * bedanya kalo di arr untuk variable [] kita bisa sesuka kita
 * untuk objec kita gunakan {nama atributnya} contoh:
 * const x = {
 * a: 'tester
 * }
 * const {a} = x | a disini sebagai variabel jaddi kita tinggal panggil a jadi sama seperti x.a
 *
 */

const object = {
  name: "Hello wolr",
  kelas: "Teknik MEsin",
  alalmat: "Tasikmalaya",
};
const { name, kelas, alalmat } = object;
console.log(object.name);

/**
 * Selanjutnya rest operatior ... dimana kita bisa meyinmpan banyak nial tanpa menetepakan parameter
 * jadi misal kita punya 2 parameter 1 rest
 * nah secar aturan di dalam functino hanya ada 2
 * tapi dengan menggunakan rest kita bisa membierkan niali banyak lebih dari 2 x(1,2,3,4,5,5,5,)
 */

function tester(x, y, ...z) {
  return x + y + z;
}
console.log(tester(10, 10, 10, 10, 10));
const [first, second, ...rest] = [1, 2, 3, 4, 5, 6, 7];
console.log(first);
console.log(second);
console.log(rest); // memanggil semua sisa yang ada di array

/**
 * spread operator memanggil semua array tanpa harus menggunakan array collection == arr[]
 */

const fruits1 = ["apple", "banana"];
console.log(...fruits1);
console.log(fruits1[0], fruits1[1]);
for (const x of fruits1) {
  console.log(x);
}
