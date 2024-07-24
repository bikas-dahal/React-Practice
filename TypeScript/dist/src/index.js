"use strict";
class User {
    constructor(username, password, isAdmin) {
        this.username = username;
        this.password = password;
        this.isAdmin = isAdmin;
        this._count = 1;
    }
    get getTeslaEmail() {
        return `${this.username}@tesla${this.password}`;
    }
    get courseCount(count) {
        this._count = count;
    }
    set courseCount(count) {
        if (count > 5) {
            this._count = count;
            this._count = count;
        }
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._count = 5;
    }
}
// class User {
//     username: string;
//     password: string;
//     isAdmin: boolean;
//     constructor(username:string, password: string, isAdmin:boolean) {
//         this.username = username;
//         this.password = password;
//         this.isAdmin = isAdmin;
//     }
// }
const ram = new User("ram", "1234", true);
