//Destructure Destructuring //Parçalamak demek.
//Elinizdeki arrayi değişkenlere atama yöntemi. 
//Elimizde array var değişkenlere atamak isteyince kullanırız.

let populations = [10000, 20000, 30000] //Değişken içinde çok fazla içerik varsa Destructure etmeye uygun değil demektir.
let [small1, medium1, high1] = populations //populations arrayini sırayla small, medium ve high değerlerine aktar demek. 
console.log(small1) //10000
console.log(medium1) //20000
console.log(high1) //30000

let populations2 = [100, 200, 300, [400, 500]]
let [small2, medium2, high2, veryHigh2, maximum2] = populations2
console.log(small2) //100
console.log(medium2) //200
console.log(high2) //300
console.log(veryHigh2) //[400, 500]
console.log(maximum2) //undefined

let populations3 = [100, 200, 300, [400, 500]] //Kendi içinde de Destructure etmek gerekir.
let [small3, medium3, high3, [veryHigh3, maximum3]] = populations3
console.log(small3) //100
console.log(medium3) //200
console.log(high3) //300
console.log(veryHigh3) //400
console.log(maximum3) //500

//Olay örneğin bizim 3 fonsiyonumuz var. Ve bu fonksiyonlar birbirini etkiliyor. Veya bir değişkenimiz var.
//Bu aslında state diyelim. Yani bir sepetin durumu sepetteki eleman sayısı. Sepette 0 tane eleman var. 
//let setState = function (params) { //state'i değiştirecek fonk.

//}
//let populations = [0, setState] //oda bunu değiştirecek. Bu şekilde çalışan yapılar için kullanıyoruz. 

//-----------------------------------------------------------------------------------------------------------------------------------
//Reactta sıklıkla kullanıyoruz. 
//Gelecekten örnek :)
//1
// let { name } = useParams() //parametreleri obje olarak veriyor. Yine desructer işlemi yapacağız. 
// //{id:id} aslında ama iki taraf aynıysa yazma 1 kez yazabilirsin.

// const [product, setProduct] = useState({}) //boş değeri boş bir obje array değil!!!
// //licecycle hook react yaşam döngüsüne müdahale etmemizi sağlar.
// useEffect(() => {
//     let productService = new ProductService()
//     productService.getByProductName(name).then(result => setProduct(result.data.data)) //name ile parametre geçiyoruz.
// },[]) 

//2
// //desructre
// const [products, setProducts] = useState([])
// //licecycle hook react yaşam döngüsüne müdahale etmemizi sağlar.
// useEffect(() => {
//     let productService = new ProductService()
//     productService.getProducts().then(result => setProducts(result.data.data))
// },[]) //Boş array atıyoruz. Aksi taktirde yine çalışır fakat sürekli istek atar.
// //Nedeni de şu: React'in yaşam döngüsü için bir nesnenin her değişikliğe uğradığında yeniden render edilmesini istersek
// //koyduğumuzun arrayin içerisine koyarak takibini yapabiliyoruz. Aksi taktirde sürekli elemanlar değiştiğinde sürekli istek atar.
//-----------------------------------------------------------------------------------------------------------------------------------

// function someFunctions([small4]) { //Gezilebilir değil hatası verir. Yani aslında 'small4' bu değerin geçilmesini zorunlu hale getirdik.
//     //Yukarıda bir array arıyor. Java scriptte bunu zorunlu hale getirmiş oluruz.
//     console.log(small4)//TypeError: undefined is not iterable (cannot read property Symbol(Symbol.iterator)) at someFunctions 
// }
// someFunctions();

// console.log("---")
// function someFunctions([small4]) {     
//     console.log(small4) //---  100 yazar.
// }
// someFunctions(populations3);

let category = { id: 1, name: "içecek" }
console.log(category.id)
console.log(category["name"]) //böylede kullanabiliriz.

//Objeyi değişkenlere desructre etmek istyebiliriz.
let { id, name } = category 
console.log(id)
console.log(name)

//Yukarıdaki yapıyıda Redux dediğimiz bir yapıda sıkça kullanılır.