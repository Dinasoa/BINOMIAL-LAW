const prompt = require("prompt-sync")() ;

// inputs needed

let n = +prompt("Enter a number n: ")
let p = +prompt("Enter a second number p: ")
let x = +prompt("Enter the third number x: ")

//A function that will calculate a factorial

const fact = (n) => {
    let prod = 1    
    for (let i = 1; i <= n; i++) {
        prod*=i
    }
    return prod
}

//A function that will calculate a combination 

const combinaison = (n,p) => {
    return fact(n) / (fact(p)*fact(n-p))
}

//A function that will calculate the power of any number 

const pow = (base , exp) => {
    let total = 1;
    for (let i = 1; i <= exp; i++) {
        total*=base
    }
    return total
}

//The principal function : binomial law

const binomial = (n,p,x) => {
    return combinaison(n,x) * pow(p,x) * pow(1-p , n-x)
}
