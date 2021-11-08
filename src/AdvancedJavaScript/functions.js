let student = { id: 1, name: "Zafer" }

// //1
// function save(student) { //Yukarıdaki student ile bağlantısı ve alakası yok. 
//     //Parametre olarak ismini belirtiğimiz datayı göndereceğimizi varsayarız.
//     console.log(student) // undefined: Data göndereceğimiz bekledi ama göndermedik.
//     console.log(student.name) // TypeError: Cannot read property 'name' of undefined at save
//     //undefined birşey'in özelliğine erişirken hata alırız. 
// }
// save();

// //2
// function save(student) {
//     console.log(student)
//     console.log(student.name)
// }
// save(student); //datayı gönderdiğimiz için düzgün çalışır.

// //3
// function save(student) {
//     console.log(student) //15 yazar
//     console.log(student.name) //undefined yazar.
// }
// save(15); //beklediği datayı göndermediğimizde.

// //4
// function save(ogrenci, puan = 10) {
//     console.log(ogrenci.name + " : " + puan)
// }
// save(15); //Çıktı: undefined : 10
// save(student); //Zafer : 10 //puan göndermeyince default'u alır.
// save(student, 100); //Zafer : 100

// //5
// function save(puan = 10, ogrenci) { //default parametren varsa sona yazmak gerekir.
//     console.log(ogrenci.name + " : " + puan);
// }
// //save(student); //Burada student puan'a atanır. ogrenci undefined. undefined'ın name'i olmaz patlarız.
// //TypeError: Cannot read property 'name' of undefined at save 
// save(undefined, student); //Zafer : 10 burada puan'a undefined verdik. O yüzden default 10 değeri atandı.