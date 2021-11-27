//Spread
//max(...values: number[]): number -> ...values rest 
console.log(Math.max(1, 2, 3, 45, 55, 22, 60)) //Bu sayıların en büyüğünü verir.

console.log(Math.max([1, 2, 3, 45, 55, 22, 60])) //NaN not a number

//Array olarak geliyor olsaydı. 
let points = [1, 2, 3, 45, 55, 22, 60];
console.log(...points) //1 2 3 45 55 22 60 çıktı verir. Array'i ayrı ayrı değerler olarak ekrana basar. (spread etti)
console.log(Math.max(...points)) //Böylece çalışır. spread arrayi parçalamaya yarar. 
console.log(..."ABC", "D", ..."EFG", "H") //Çıktı: A B C D E F G H