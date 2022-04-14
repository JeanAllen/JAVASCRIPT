

// FORLOOP

//  1 PRINT ODDS from 1 - 20 
const odds = () => {
    let odd = 1
    for(odd ; odd <= 20; odd++){
        if(odd % 2 === 1){
            console.log(odd)
        }
    }
}
// odds()

// WHILELOOP

const odds2 = () => {
    let i  = 0
    while(i <= 20 ){
    if(i % 2 ===1 ){
    console.log(i)
}
    i++
    }
}
// odds2()



// FORLOOP

// 2 DECREASING MUTIPLES OF 3 from 100-0
const decrease = () => {
    let multiple = 100
    for(multiple; multiple >= 0; multiple--){
        if(multiple % 3 ==0){
            console.log(multiple)
        }
    }
}
// decrease()


// WHILELOOP

const decrease2 = () => {
    let multiple = 100
    while(multiple >=  0){
        if(multiple % 3 === 0){
            console.log(multiple)
        }
        multiple--
    }
}
// decrease2()



// FORLOOP

// 3 PRINT THE SEQUENCE from 4, 2.5, 1, -0.5, -2, -3.5
const sequence =  () => {
    let i = 4
    for(i; i >= -3.5; i-= 1.5){
        console.log(i)
    }
}
// sequence()


// WHILELOOP

const sequence2 = () => {
    let i = 4
    while(i >= -3.5){
        console.log(i)
    i -=  1.5
    }
}
// sequence2()
 




//  FORLOOP

// 4 SIGMA  SUM OF NUMBERS from 1-100
const sum = () => {
    let add =  1
    let total = 0
    for(add; add <= 100; add++) {
       done = total += add
    //    console.log(add *= 1)
    }
    console.log(done)
}
// sum()


// WHILELOOP

const sum2 = () => {
    let add = 1 
    let total = 0
    while(add <= 100){
        total += add
        add++
    }
    console.log(total)
}
// sum2()


// FORLOOP

// 5 FACTORIAL MULTIPLY ALL VALUES from 1-12 
const multiply = () => {
    let product = 1
    for( let i = 1; i <= 12; i++){
        product *= i
    }
    console.log(product)
}
// multiply()

// WHILELOOP

const multiply2 = () => {
    let product = 1
    let i = 1
    while (i <= 12){
        product *=  i
        i++
    }
    console.log(product)
}

// multiply2()