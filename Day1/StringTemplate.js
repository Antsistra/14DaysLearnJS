const nama = "Hadi Nur Muhammad "
const template = `Name : ${nama}`

document.writeln("<p>",template,"</p>")
console.log(template);
const firstname = "Hadi"
const middlename = "Nur"
const lastname = "Muhammad"
const fullname = `Name : ${firstname} ${middlename} ${lastname}`

document.writeln("<p>",fullname,"</p>")
console.log(fullname)

const nilaiakhir = 70

const template2 = `${fullname}, ${nilaiakhir>50}`
document.writeln(template2)
console.log(template2)


/* String Template Bisa Multiline! */

let multiline = `Ini Contoh Dari Multiline 
Hadi Nur Muhammad
Student, Hobi Tidur
dan Juga Bermain Gem
`
document.writeln("<pre>")
document.writeln(multiline)
document.writeln("</pre>")