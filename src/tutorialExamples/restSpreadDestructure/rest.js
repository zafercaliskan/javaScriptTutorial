//rest: Geriye kalan demek. id ve geriye kalanlar ürünler olsun. 
//c# da params
//javada varArgs
let showProducts = function name(id, ...products) { //(... rest)//Bir değişkene fonsiyon atayabiliriz.
    console.log(id)
    console.log(products)
    console.log(products[0]) //products'ın 0 elemanına ulaşabiliriz.
}

console.log(typeof (showProducts)) //typeof ile türüne bakabiliriz. //function gösterir.

showProducts() //id Çıktı: undefined,   products Çıktı:  []
showProducts(10, "Elma", "Armut", "Karpuz") //id Çıktı: 10    products Çıktı: (3) ['Elma', 'Armut', 'Karpuz']
showProducts(10, ["Elma", "Armut", "Karpuz"]) //Bunu tek bir elemanmış gibi gönderir.console.log(products): 
//çıktı: [Array(3)] yazar. [ içinde [array olur]] o yüzden ekrana düzgün array yazdırmak için. console.log(products[0]) 
//Bunu kullanmak gerekir. Arrayin 0. indexindeki arrayi yazdırmış oluruz.

//Rest parametrelerini array değil 1 parametre 1 parametre olarak alır.

let points = [1, 2, 3, 4, 50, 4, 60, 14]
//max(...values: number[]): number -> ...values rest 
console.log(Math.max(points)) //NaN
//spread: kelime anlamı ayrıştırmak.
console.log(...points) //1 2 3 4 50 4 60 14 -> virgülle ayırmış gibi ayırdı
console.log(Math.max(...points)) //60