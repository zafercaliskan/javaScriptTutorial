export default class UserService { //export: dışarıdan import edilebileceği anlamına gelir. 
    //default: js firebase olduğu için userService.js import ettiğimde bu class'ı import et demek.

    constructor(loggerService) {
        this.users = []
        this.loggerService = loggerService
    }

    add(user) {
        this.users.push(user)
        this.loggerService.log(user)
    }

    list() {
        return this.users
    }

    getById(id) {
        return this.users.find(u => u.id === id)
    }
}