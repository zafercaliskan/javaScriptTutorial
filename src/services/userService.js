export default class UserService { //export: dışarıdan import edilebileceği anlamına gelir. 
    //default: js firebase olduğu için userService.js import ettiğimde bu class'ı import et demek.
    add() {
        console.log("kullanıcı eklendi")
    }

    list() {
        console.log("kullanıcılar listelendi")
    }

    getById() {
        console.log("kullanıcı listelendi")
    }
}