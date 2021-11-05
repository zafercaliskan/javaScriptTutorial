console.log("Math: " + Math.max(20, 30, 40, 50))
let numbers = [120, 320, 420, 50] //apidan array geldiğini düşünelim.
console.log(numbers) //[120, 320, 420, 50]
console.log(...numbers) //120 320 420 50 ayırarak gönderir numbers'ı çıktıda böyle olur.
console.log("Math: " + Math.max(...numbers)) //Math: 420 Buradaki gibi arrayden ayırmak için spread kullanırız.