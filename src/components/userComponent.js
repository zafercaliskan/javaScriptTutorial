//Burası ekranımız gibi düşünebiliriz.
//Biz uygulamarımız içerisinde farklı bileşenler için onlara özel yapılar oluşturuyoruz. 
//Örneğin hepsiburada da sepete gittin ve sepet detayını gördün. o cartComponent
//Ürünün detayına gittin. prodcutDetailComponent

import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js";
import User from "../models/user.js";
import UserService from "../services/userService.js"

console.log("User components yüklendi")
let logger1=new BaseLogger()
let logger2=new ElasticLogger()
let logger3=new MongoLogger()
let userService = new UserService(logger2)

let user1=new User(1,"Zafer","Çalışkan","Antalya")
let user2=new User(2,"Hasan","Çalışkan","Antalya")

userService.add(user1);
userService.add(user2);

console.log(userService.list())
console.log(userService.getById(2))