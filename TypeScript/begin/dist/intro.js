"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let hyalo = "Hyalo";
hyalo.concat('hy');
console.log(hyalo);
let userId = 9;
let isAdmin = false; // also ok if declered like this,
function addTwo(num) {
    return num + 2;
}
function toLower(str) {
    return str.toLowerCase();
}
let result = "";
result = toLower(hyalo);
console.log(result);
addTwo(userId);
function login(username, password) {
    if (username === "hyalo" && password === "1234") {
        return true;
    }
    else {
        return false;
    }
}
let myUser = {
    _id: "1234",
    username: "hyalo",
    password: "1234",
    isAdmin: true
};
const superHeroes = [];
const heropower = [];
superHeroes.push('Ram');
heropower.push('fly');
let score = 20;
let ram = {
    username: "ram",
    password: "1234",
    isAdmin: true
};
let seatAllotment = 'aisle';
let seatAllotment2 = 'middle';
const user = ['hyalo', 98];
let rgb = [255, 0, 0];
// const AISLE = 0
// const MIDDLE = 1
// const WINDOW = 2
var SeatEnum;
(function (SeatEnum) {
    SeatEnum[SeatEnum["AISLE"] = 10] = "AISLE";
    SeatEnum[SeatEnum["MIDDLE"] = 11] = "MIDDLE";
    SeatEnum[SeatEnum["WINDOW"] = 12] = "WINDOW";
})(SeatEnum || (SeatEnum = {}));
let seat = SeatEnum.AISLE;
function createUser(user) {
    console.log(user.username);
    console.log(user.password);
    console.log(user.isAdmin);
    return user;
}
