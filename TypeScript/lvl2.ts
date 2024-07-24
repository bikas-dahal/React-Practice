interface GUser { //loose form of clss
    readonly _id: string,
    username: string,
    password: string,
    isAdmin: boolean,
    creditcard?: number,

    // statTrial: () => number,
    statTrial (): number,
    getCoupon?(name: string): number
}

let GmyUser: GUser = {
    _id: "1234",
    username: "hyalo",
    password: "1234",
    isAdmin: true,
    statTrial: () => 45,
    getCoupon: (name: 'ram') => {
        return 10
    }
}

