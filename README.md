# javaScriptStarterKit
1. Day notes: https://www.evernote.com/shard/s501/sh/087ff510-f6d6-ebde-4fe9-b3989abd535c/42bc7a7f23b9aac762e1e001116e8b49

![image](https://user-images.githubusercontent.com/40596204/121968053-33946700-cd7a-11eb-9a6d-1584ee38c7cc.png)


```
"es6-module-loader": Farklı dosyalarda çalıştığımızda bunları birbirine import edebilmemizi sağlıyor.
```

```
"traceur": Javscript next dediğimiz es6 (ecmascript 6)'dan sonraki özellikleride çalıştırabilmemizi sağlayan bir proje.
```

```
"lite-server": Javascript tarafında yazdığımız kodu anında yayına alır. Local ortamda yayına almak için lazım.
```

```
"scripts": "dev:" bizim için bir kısa yol. lite server yazmak yerine dev yazacağız. 
```

```
npm install -> Paketleri yükler

npm run dev -> Projeyi çalıştırır.
```

Kullandığım extensionlar

![image](https://user-images.githubusercontent.com/40596204/121968266-abfb2800-cd7a-11eb-8746-9a561bea94b5.png)

`Javascript type güvenli bir programlama dili değil. Microsoft type safe olarak type script geliştirmiş. Ama oda en sonunda saf javascript koduna çevriliyor.`

`Durum yönetimi: Bir sitede 3-4 yerinde sepete ekle var . Hepsinde güncellenmesini isteyince x'den app oradan y ve z'ye gitmek gerekiyor.  Bu basit yapıda bile 3 yol izledik.  Büyük yapıda 50 60 yol izlemek gerekiyor bunun sonu yok. State patern'i uygulayan çeşitli ürünler var.  Community'de en yaygın redux kullanılır.  Datayı tutan bir yer oluşturuyoruz buna mağaza deniyor.  İsteyenler bu mağazaya abone oluyor.  Data değiştiğinde abonelerin herbiri Observer Pattern ile haberdar ediliyor.  Single Page App (SPA) React Angular Vue benzer yapıya sahip.`
