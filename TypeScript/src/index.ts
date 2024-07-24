class User {

    protected _count:number = 1;

    constructor(
        public username:string,
        public password: string,
        public isAdmin:boolean
    ) {

    }
    get getTeslaEmail(): string{
        return `${this.username}@tesla${this.password}`;
    }

    get courseCount(count): number{
        this._count = count;
        return _count
    }

    set courseCount(count){
        if (count > 5){
            this._count = count;
        this._count = count;
    }



}


class SubUser extends User {
    isFamily: bool = true
    changeCourseCount() {
        this._count = 5
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
