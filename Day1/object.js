const papope = {}

//Nambah
papope["name"] = "Hadi Nur Muhammad"
papope["alamat"] = "Pandeglang"
papope["umur"] = 18

console.table(papope)

//hapus
delete papope ["name"]

console.table(papope)

//contoh tambahan
const papope1 = {
    nama : "Hadi Nur Muhammad" ,
    alamat : "Pandeglang",
    umur : 18,
    "tanggal lahir" : "29 Mei 2004"
}

console.table(papope1)



//contoh mengakses object

console.info(`Nama: ${papope1.nama}`)
console.info(`Alamat: ${papope1.alamat}`)
console.info(`Umur: ${papope1.umur}`)
console.info(`Tanggal Lahir : ${papope1["tanggal lahir"]}`)