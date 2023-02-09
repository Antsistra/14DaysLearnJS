console.info("Hello" || "")
console.info("" || [])
console.info("0" || "NOL")

//intinya diambil dari truthy yang paling awal 

//contoh penggunaan

const namalengkap ={
    namadepan : "",
    namabelakang : "Nur"
}

//kalo pake logic operator
const namasiswa = namalengkap.namadepan || namalengkap.namabelakang


console.info(namasiswa)

//kalo pake nullish
const namasiswa1 = namalengkap.namadepan ?? namalengkap.namabelakang
console.info(namasiswa1)

//kalo pake logic operator langsung ngambil truthy berikutnya
//kalo pake nullish tidak, kecuali yang depannya null

//operator AND &&
//mengambil falsy pertama

console.info("0" && "")
console.info(0 && "nol")
console.info("0" && "Enol") //kalo dua duanya truth ngambil paling akhir