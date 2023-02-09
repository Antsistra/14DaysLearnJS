//outputnya return or false
//bisa juga cek index di array
//pokoknya ngecek tanpa ngeliat valuenya mau itu null tetep kebaca

const namamhs = {
    firstname : "Hadi",
    lastname : "Nur"
}

const result = "firstname" in namamhs;
document.writeln(`${result}`)