// let [icAnadolu, marmara, karadeniz] = [
//     { name: "İç Anadolu", population: "20M" },
//     { name: "Marmara", population: "30M" },
//     { name: "Karadeniz", population: "10M" },
// ]

// console.log(icAnadolu.name)
// console.log(icAnadolu.population)

// //--

// let [icAnadolu1, marmara1, karadeniz1, [icAnadoluSehirleri, marmaraSehirleri, karadenizSehirleri]] = [ //desructre içinde desructre yaptık.
//     { name: "İç Anadolu", population: "20M" },
//     { name: "Marmara", population: "30M" },
//     { name: "Karadeniz", population: "10M" },
//     [
//         ["Ankara", "Konya"],
//         ["İstanbul", "Bursa"],
//         ["Sinop", "Trabzon"],
//     ]
// ]


// console.log(icAnadoluSehirleri) //['Ankara', 'Konya']
// console.log(marmaraSehirleri) //['İstanbul', 'Bursa']
// console.log(karadenizSehirleri) // ['Sinop', 'Trabzon']

let newProductName, newUnitPrice, newQuantity
({ productName: newProductName, unitPrice: newUnitPrice, quantity: newQuantity }
    = { productName: "Elma", unitPrice: 10, quantity: 5 }) //dıştaki parantezi koymazsak burayı kod bloğu algılayacağı için patlarız.

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)