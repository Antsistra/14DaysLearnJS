/*
parseint = String to Number
parsefloat = string to pecahan
number = string to number (bulat dan pecahan)
number.toString = ya dari number ke string
*/ 

const nilai1 = parseInt("1")
const nilai2 = 2
const sum = nilai1 + nilai2
document.writeln("<p>",sum,"</p>")

document.writeln(`<p> ${parseInt(4.9)}`)
document.writeln(`<p> ${parseFloat(1.9)}`)

console.log(`<p> ${parseInt(4.9)}`)
console.log((`<p> ${parseFloat(1.9)}`))