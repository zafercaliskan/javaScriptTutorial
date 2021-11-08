//React map'i sever ve çok kullanır.

//Angular react veya vue gibi frontend frameworkleri(kütüphaneleri) ekrandaki veriyi elimizdeki dataya göre şekillendirmek.

let products = [
    { id: 1, name: "Acer Laptop", unitPrice: 15000 },
    { id: 2, name: "Asus Laptop", unitPrice: 16000 },
    { id: 3, name: "Hp Laptop", unitPrice: 13000 },
    { id: 4, name: "Dell Laptop", unitPrice: 12000 },
    { id: 5, name: "Casper Laptop", unitPrice: 17000 },
]

console.log("<ul>") //Ul içerisinde li leri eklemek gerekir. Kaç li olacağını bilmediğimiz için aşağıdaki gibi kodlarız.
products.map(product=>console.log(`<li>${product.name}</li>`)) //map bizim arrayi dönüyor. foreach gibi dönüyor.
//product takma isim. => sonrası ne yapayım? console.log(`<li>${product.name}</li>`) bunu yapar.
console.log("</ul>")
//elimizde bulunan bir datayı ekrana basmak için kullanır. Çıktı aşağıda.

{/* <ul>
<li>Acer Laptop</li>
<li>Asus Laptop</li>
<li>Hp Laptop</li>
<li>Dell Laptop</li>
<li>Casper Laptop</li>
</ul> */}