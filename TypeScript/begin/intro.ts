let hyalo: string = "Hyalo" 

hyalo.concat('hy')

console.log(hyalo) ;


let userId: number = 9;

let isAdmin = false // also ok if declered like this,


function addTwo(num: number){
    return num + 2;
}

function toLower(str: string){
    return str.toLowerCase();
}

let result = "";
result = toLower(hyalo)
console.log(result)

addTwo(userId)

function login(username: string, password: string): boolean {
    if(username === "hyalo" && password === "1234"){
        return true;
    }else{
        return false;
    }
}


type User = {
    readonly _id: string,
    username: string,
    password: string,
    isAdmin: boolean,
    creditcard?: number
}


let myUser: User = {
    _id: "1234",
    username: "hyalo",
    password: "1234",
    isAdmin: true
}

type cardNumber = {
    cardNumber: number
}

type UserWithCard = User & cardNumber

type cardDate = {
    cardDate: string
}

type UserWithCardDate = User & cardDate


const superHeroes: string[] =[]
const heropower: Array<string> = []

superHeroes.push('Ram')
heropower.push('fly')


let score: number | string = 20;

type Admin = {
    // username: string,
    password: string,
    isAdmin: boolean

}

let ram: User | Admin = {
    username: "ram",
    password: "1234",
    isAdmin: true

}

let seatAllotment: 'aisle' | 'middle' | 'window' = 'aisle'

type Seat = 'aisle' | 'middle' | 'window'

let seatAllotment2: Seat = 'middle'

const user: [string, number] = ['hyalo', 98]

let rgb: [number, number, number] = [255, 0, 0]

// const AISLE = 0
// const MIDDLE = 1
// const WINDOW = 2

enum SeatEnum {
    AISLE = 10 ,
    MIDDLE,
    WINDOW
}

let seat: SeatEnum = SeatEnum.AISLE

function createUser(user: User): User{
    console.log(user.username)
    console.log(user.password)
    console.log(user.isAdmin)
    return user;
}


export {} // this is to avoid the error of redeclaring the same variable in another file