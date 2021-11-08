//var, let, const -- değişken anımlardan kullanabiliriz. 
//Saf javascriptde sadece var varken es6 ile birlikte let ve const da kullanabiliyoruz.

//değişken tanımlarken let keyword kullanırız çünkü: 

var sayi = 10
console.log(sayi)
var sayi = "var olunca herşey atayabiliriz ve hatada vermez."
console.log(sayi)

let sayi2 = 20
console.log(sayi2)
sayi2 = "burada basina let eklemediğimiz için burada da hata vermez"
console.log(sayi2)

// let sayi3=30
// console.log(sayi3)
// let sayi3="Burada ise hata verir." //Duplicate declaration hatası
// console.log(sayi3)

let student = { id: 1, name: "Zafer" }
console.log(student)

function save(student) { //burada student göndereceğimizi varsayar. Burada tip yok. Sadece varsayım var.
    //yukarıdaki parametre student ile let student değişkeni sadece 
    //isim benzerliği hiçbir bağlantısı yok.
    console.log("saved")
    console.log(student) //undefined
}
save(); //undefined

function save2(ogrenci, puan = 10) { //puan=10 olunca default parametreli olur.
    console.log(ogrenci.name + " : " + puan)
}

save2(student) //Zafer : 10
save2(50) //undefined - tanımda böyle birşey yok. //null ise bellekte değeri var ama referansı yok

save2(student, 100) //Zafer : 100

function save3(puan = 10, ogrenci) { //puan=10 olunca default parametreli olur.
    console.log(ogrenci.name + " : " + puan)
}
//save3(student) //TypeError: Cannot read properties of undefined -- burada undefined birşeyin name'i olmaz patlarız.

//default parametre varsa onu sona yazmak gerekir. Fakat yazılmamışsa şöylede yapılabilir. 
save3(undefined, student) //Zafer : 10 //undefined gönderince puana default değeri atar.


//let arrays=[] //array [] köşeli parantez koyunca yep yeni referans alırız.
let arrays=["Zafer", "Hasan","Süleyman"]
console.log(arrays) //0: "Zafer"  1: "Hasan", 2: "Süleyman"

let arrays2=[arrays, {id: 2, name: "Murat"}, "Antalya", {city: "İstanbul"}]
console.log(arrays2) //0: (3) ['Zafer', 'Hasan', 'Süleyman']    1: {id: 2, name: 'Murat'}   2: "Antalya"    3: {city: 'İstanbul'}


let showProducts= function name(params) { //bir değişkene function atayabiliriz.
}