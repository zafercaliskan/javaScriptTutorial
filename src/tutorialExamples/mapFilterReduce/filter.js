//Elimizdeki arrayi filtrelemeye yarar. !Yepyeni bir array çıkartır.! 
//Filter'ın sonucu sıfır eleman bile olsa yeni bir array oluşturur. 
//Bu neden önemli? -> Angular react vue'da state management denen bir olay var.
//Yani bir data değiştiğinde ekran yeniden render edilmesi için.  
//!!Ekran yeniden render edilmesi için referans'ın değişmesi gerekir eğer referans tip ise.
//filter yapıldığında ekran yeniden render edilir yeni array oluşturduğu için.
//O yüzden slice veya splice kullanmıyoruz. Onlar referans değiştirmez. Ekstra işlem gerektirir. 

let products = [
    {id:1, name : "Acer Laptop", unitPrice:15000},
    {id:2, name : "Asus Laptop", unitPrice:16000},
    {id:3, name : "Hp Laptop", unitPrice:13000},
    {id:4, name : "Dell Laptop", unitPrice:12000},
    {id:5, name : "Casper Laptop", unitPrice:17000},
]

let filteredProducts = products.filter(product=>product.unitPrice>12000)

console.log(filteredProducts)