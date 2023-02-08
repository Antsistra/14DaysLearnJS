
//confirm,propmt,alert

const signin = confirm("Apakah umur anda lebih dari 18 Tahun?")
if(signin){
    const nama = prompt("Masukan Nama Anda : ")
    alert(`Hallo ${nama}`)
}
else{
    alert("Byeee")
}