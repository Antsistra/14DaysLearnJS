const namalengkap ={
    namadepan : "Hadi",
    namatengah : "Nur",
    namabelakang : "Muhammad",
}

for(const property in namalengkap){
    document.writeln(`<p>${property} : ${namalengkap[property]} </p>`)
}

//memunculkan nomor index pada array

namafull= ["Hadi","Nur","Muhammad"]
for (const index in namafull){
    document.writeln(`<p>${index}: ${namafull[index]}`)
}

