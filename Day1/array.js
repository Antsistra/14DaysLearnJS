/* Beda sama bahasa lain, array di js dinamis. */
let namalengkap = ["Hadi","Nur","Muhammad"]
const namefull = []
namefull.push("Hadi") /* contoh input kedalam array */
namefull.push("Nur")
namefull.push("Muhammad")
namefull.push(1,2,3,4,5)
console.table(namefull)

/* Contoh ubah data pada array */
namefull[0]="Cui" 
namefull[2]="nama Hadi"

console.table(namefull)

/* contoh hapus data dalam array */

delete namefull[1]
console.table(namefull)