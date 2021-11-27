//Bu 3 tane fonksiyon iterate edilebilen yapılara uyguladığımız fonksiyonlardır.

let cart = [
    { id: 1, productName: "Telefon", quantity: 3, unitPrice: 4000 },
    { id: 2, productName: "Bardak", quantity: 2, unitPrice: 30 },
    { id: 3, productName: "Kalem", quantity: 1, unitPrice: 20 },
    { id: 4, productName: "Şarj Cihazı", quantity: 2, unitPrice: 100 },
    { id: 5, productName: "Kitap", quantity: 3, unitPrice: 30 },
    { id: 6, productName: "Pot", quantity: 5, unitPrice: 150 },
];

//angular ve vue da cart dizisine push bile yapsak yeniden render eder fakat react bunu yapmaz.
//Önceden 6 eleman vardı şimdi 7 eleman diyeanlamıyor reactta.
//cart'ın referansını değiştirmek gerekir. (Refrans tipler)
//cart.push({ id: 7, productName: "Ruhsat", quantity: 1, unitPrice: 20 })

// function addToCart(sepet) {
//     sepet.push({ id: 7, productName: "Ruhsat", quantity: 1, unitPrice: 20 })
// }

// addToCart(cart)

// console.log(cart) //referans ataması yapıldığı için id 7'yi de gösterir. 

// let sayi=10;
// function sayiTopla(number) {
//     number+=1;
// }
// sayiTopla(sayi)
// console.log(sayi) // 10 yazar çünkü burası referans tip değil. değer tip burası

//Hem itarate etmek hemde yep yeni bir array vermesi. 
//Tek tek dolaşıyor. İster aksiyonda bulunuruz istersekde elemanlar üzerinde çalışabiliriz. 
//Takma isim veririz buradaki takma isim product
cart.map(product => console.log(product.productName)) //sepeti dolaş product nameleri yazdır. 

//cart.map(product=>{}) birden fazla satırlıbirşey yazacağımızda {} açıp kapatıyoruz.

cart.map(product => {
    console.log(product.productName + " : " + product.unitPrice * product.quantity)
})

//filter: Data içerisinde birşey aramak istediğimizde. Yada filterelemelerde.
//Burada da yeni bir array oluşturur. 
let quantityOver2 = cart.filter(product => product.quantity > 2)
console.log(quantityOver2)

//reduce: sepetteki totali hesaplamak için örneğin.
//acc accumulator başlangıç bir accumulator'a ihtiyacımız var.
let total1 = cart.reduce((acc, product) => acc + product.unitPrice, 0) //0 index'i belirtir
console.log(total1)

let total2 = cart.reduce((acc, product) => acc + product.unitPrice * product.quantity, 0) //0 index'i belirtir
console.log(total2)