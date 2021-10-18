console.log("Merhaba")

//Javascript'de  type safe değildir. 

// var dolarYesterday = 9.20

// {
//     var dolarYesterday = 9.10 //Burası başka blok diğer dolarYesterday'i etkilememesi gerekirdi fakat var keyword kullanınca etkiler.
//     //Bu yüzden var yerine let keyword'ü kullanırız. Tanımlandığı blok içerisinde geçerli olması için.
//     //Birde let ile tanımlayıp int değeri atadıysak gidip altta string değeri atayamayız hata verir olması gerektiği gibi ama var da vermez.
// }

let dolarBugun = 9.30

let dolarDun = 9.20
dolarDun = "9.20"
{
    let dolarDun = 9.10
}

console.log(dolarDun)

//const sabittir. sadece read-only dir.
const euroDun = 11.2
//euroDun = 11

console.log(euroDun)

//array
//name convention javascript
//camelCasing  - değişkenler - fonksiyon
//PascalCasing
let konutKredileri = ["Konut kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredisi"]

console.log("<ul>")
for(let i = 0;i<konutKredileri.length;i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")

{/* <ul>
    <li>Konut kredisi</li>
    <li>Emlak Konut Kredisi</li>
    <li>Kamu Konut Kredisi</li>
</ul> */}

console.log(konutKredileri)