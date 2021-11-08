// export class Customer { //export public'e karşılık gelir.
//     constructor(id, customerNumber) {

//     }
// }

// // let customer = new Customer();
// // console.log(customer); //Customer {}

// let customer = new Customer(1, "12345");
// console.log(customer.id); //undefined idye ulaşamıyoruz.

// //Bu olaya prototyping denir. Bir nesneye bambaşka bir özellik eklemiş oluyoruz.
// customer.name="Zafer Çalışkan"
// console.log(customer.name) //Zafer Çalışkan js de bu mümkün ve birçok şeyin alt yapısı. Instane'a prototyping yapar.

// Customer.bisey="Bisey" //Bu class'a yapılan prototyping.
// console.log(Customer.bisey) //Bisey
// console.log(customer.bisey)//undefined

export class Customer { //export public'e karşılık gelir.
    constructor(id, customerNumber) {
        //prototyping yaparız. Id yerine bisey de diyebiliriz ama isimlendirmelerin düzgün olması önemli.
        this.id = id;//this instance karşılık gelir. //pythonda self
        this.customerNumber = customerNumber;

        //instance id ve customerNumber diye birşey ekledim. 
        //Onlarıda consructordan gönderilen değerler olarak verdim. 
    }
}
let customer = new Customer(1, "12345");
console.log(customer.customerNumber) //12345 müşteri numarasını okuyabiliriz. 