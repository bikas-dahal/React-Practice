interface People {
    name: string;
    age: number;
}

class IUser implements People{
    constructor(
        public name: string,
        public age: number
    ) 
    {}
}

// const score = Array<number>[];

function identityOne(val: boolean | number): number | boolean {
    return val;
}

function identityTwo(val: any ): any  {
    return val;
}

function identityThree<Type>(val: Type ): Type  {
    return val;
}

interface Bootle{
    brand: string;
    size: number;
}

identityThree<Bootle>({brand: "Fanta", size: 2});

