// function addToCart(productName) {
//     console.log("Sepete eklendi: " + productName)
// }
// function addToCart2(productName = "Elma") { //Default Parametre
//     console.log("Sepete eklendi: " + productName)
// }
// function addToCart3(productName = "Elma", quantity) { //Default Parametre (productName)
//     console.log("Sepete eklendi. Ürün: " + productName
//         + " adet: " + quantity)
// }
// addToCart(); //Sepete eklendi: undefined
// addToCart("Laptop"); //Sepete eklendi: Laptop 
// addToCart(15); // Sepete eklendi: 15
// addToCart2(); //Sepete eklendi: Elma
// addToCart3(); //Sepete eklendi. Ürün: Elma adet: undefined
// addToCart3(15); //Sepete eklendi. Ürün: 15 adet: undefine ->default parametre olsa bile sıralama önemlidir.
// addToCart3(undefined, 15); //Sepete eklendi. Ürün: Elma adet: 15 -> undefined verdik function default parametre olan elayı kullanır.

//Değişkene fonksiyon atıyoruz.
// let sayHello = () => {
//     console.log("Hello World!");
// }

// sayHello(); //Hello World!

// let sayHello2 = function () {
//     console.log("Hello World!2");
// }
// sayHello2(); //Hello World!2

// function addToCart4(productName, quantity, unitPrice) {
//     console.log("productName: " + productName
//         + " quantity:" + quantity
//         + " unitPrice" + unitPrice)
// }

// addToCart4("Elma", 5, 10); //Burada 5 neydi 10 neydi net görmek zordur.
// addToCart4("Armut", 2, 20); // bu yüzden obje oluşturup göndermek daha kullanışlı.
// addToCart4("Limon", 3, 15);

function addToCart5(product) {
    console.log("productName: " + product.productName)
    console.log("quantity: " + product.quantity)
    console.log("unitPrice: " + product.unitPrice)
}
let product1 = { productName: "Elma", unitPrice: 10, quantity: 5 }
addToCart5(product1);

let product2 = { productName: "Elma", unitPrice: 10, quantity: 5 }
let product3 = { productName: "Kavun", unitPrice: 20, quantity: 25 }

product2 = product3; //referans tip olduğu için bellek adresi ataması yapıldı
//product2 ve product3'ün bellek adresi aynı oldu.
product2.productName = "Karpuz";
console.log(product3.productName) //Karpuz

let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2 //Değer tip Burada sadece değer ataması yapılır. 
sayi2 = 100
console.log(sayi1) //20 

function addToCart6(products) {
    console.log(products)
}

let products = [
    product1,
    product2,
    product3
]

addToCart6(products);

function addToCart7(x) { //burada da yazdırır. bir üst scopeda
    //let products dakini yazdırır.
    console.log(products)
}