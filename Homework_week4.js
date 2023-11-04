// buat variabel arrayRandomNumber yang isinya angka 1-50. coba pakai mathfloor
let ArrayRandom = []
for (let i = 0; i < 100; i++) {
    let  NilaiRandom = Math.floor(Math.random()* 50) + 1;
    ArrayRandom.push(NilaiRandom);
}
console.log(ArrayRandom)

// buat variable arrayGanjil dan arrayGenap, kalo index ganjil masuk ke variabel arrayGanjil, kalo genap masuk ke arrayGenap
let arrayGanjil = []
let arrayGenap = []
for (let i= 0; i < ArrayRandom.length; i++) {
    if (i % 2 == 0) {
        arrayGanjil.push(ArrayRandom[i]);
    } else {
        arrayGenap.push(ArrayRandom[i])
    }
}
console.log("Array Ganjil", arrayGanjil);
console.log("Array Genap", arrayGenap);

// min max sum average
function indeksHasil(numbers){
let min = numbers [0];
let max = numbers [0];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i]; 
        }
    if (numbers[i] > max) {
        max = numbers[i]; 
        }
        sum += numbers[i];
    }
let average = sum / numbers.length;
return  { min, max, sum, average };}

let indeksHasilganjil = indeksHasil(arrayGanjil)
let IndeksHasilgenap = indeksHasil(arrayGenap)

console.log("Indeks Hasil Ganjil",indeksHasilganjil)
console.log("Indeks hasil Genap",IndeksHasilgenap)

// Perbandingan

let HasilPerbandinganMin = indeksHasilganjil.min < IndeksHasilgenap.min ? "Min lebih besar array genap" : indeksHasilganjil.min > IndeksHasilgenap.min ? "Min lebih besar array genap" : "min memiliki nilai sama antara array genap dan ganjil"
console.log(HasilPerbandinganMin)

let HasilPerbandinganMax = IndeksHasilgenap.max < indeksHasilganjil.max ? "Max lebih besar array genap" : IndeksHasilgenap.max > indeksHasilganjil.max ? "max lebih besar array genap" : "max memiliki nilai sama antara array genap dan ganjil"
console.log(HasilPerbandinganMax)

let HasilPerbandinganTotal = IndeksHasilgenap.sum > indeksHasilganjil.sum ? "Total lebih besar array genap" : IndeksHasilgenap.sum > indeksHasilganjil.sum ? "Total lebih besar array genap" : "Total memiliki nilai sama antara array genap dan ganjil"
console.log(HasilPerbandinganTotal)

let HasilPerbandinganRata2 = IndeksHasilgenap.average > indeksHasilganjil.average ? "Rata-rata lebih besar array genap" : IndeksHasilgenap.average > indeksHasilganjil.average ? "Rata-rata lebih besar array genap" : "Rata-rata memiliki nilai sama antara array genap dan ganjil"
console.log(HasilPerbandinganRata2)