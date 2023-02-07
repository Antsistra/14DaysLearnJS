const nilaiUjian = 70
const nilaiAbsensi =70

const lulusujian = nilaiUjian>70
const lulusAbsen = nilaiAbsensi>70

const lulus = lulusujian && lulusAbsen
document.writeln("<p> Status Lulus = ",lulus,"</p>")
