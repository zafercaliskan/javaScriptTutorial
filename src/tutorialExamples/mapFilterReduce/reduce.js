let products = [
    { id: 1, name: "Acer Laptop", unitPrice: 15000 },
    { id: 2, name: "Asus Laptop", unitPrice: 16000 },
    { id: 3, name: "Hp Laptop", unitPrice: 13000 },
    { id: 4, name: "Dell Laptop", unitPrice: 12000 },
    { id: 5, name: "Casper Laptop", unitPrice: 17000 },
]

let cartTotal = products.reduce((acc, product) => acc + product.unitPrice, 0)
console.log(cartTotal)

//reduce akumülatör görevi görüyor. 
//Örneğin hepsiburada.comdayız. Sepet totalini göstermek istiyoruz. products'da sepete eklenen elemanlar olsun.
//Her bir ürün için toplam hesaplayacağız toplama acc deriz akümülatordan gelir. Her bir ürün için acc'ye
//ürün fiyatı ekle.  0 da başlangıç değeri. 

let cartTotal2 = products
    .filter(p => p.unitPrice > 13000) //bu bir array oluşturur.
    .map(p => { //map'i yeni objeler üretmek içinde kullanabiliriz. O an oluşturduğumuzu return etmişiz. 
        p.unitPrice = p.unitPrice * 1.18 //her bir ürün için kdv hesapladı unitPrice'ı değiştirdi. 
        return p
    })
    .reduce((acc, p) => acc + p.unitPrice, 0) //yukarıda değiştirdiği products'a reduce uyguladı.

console.log(cartTotal2)