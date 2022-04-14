
// ATTEMPT 1
const FizzBuzz = () => {
for(let i = 0; i <=100; i++){
if(i % 3 == 0 && i% 5 == 0){
    let i = 'FizzBuzz'
    console.log(i)
} else if(i % 5 == 0){
    let i ='Buzz'
    console.log(i)
} else if (i % 3 == 0){
    let i = "Fizz"
    console.log(i)
} else {
    console.log(i)
}
}
}
// FizzBuzz()


// ATTEMPT 2
for (let i = 1; i <= 100; i++) {

    let output = "";
    if (i % 3 === 0 && i % 5 === 0) {
        output += "fizzBuzz";
    } else if (i % 3 === 0) {
        output += "fizz";
    } else if (i % 5 === 0) {
        output += "Buzz";
    } else {
        output = i;
    }
    console.log(output);
}


// ATTEMPT 3
const FizzBuzz2 = () => {
    for(let i = 0; i <= 100; i++){
        let result = ''
        if(i % 3 === 0 && i % 5 === 0){
        result = 'FizzBuzz'
        }else if (i % 3 === 0){
            result += 'Fizz'
        } else if(i % 5 === 0){
            result += 'Buzz'
        } else {
            result = i
        }
            console.log(result)
    }
}
// FizzBuzz2()


// ATTEMPT 4
const FizzBuzzShort = () => {
    for(i = 0; i <= 100; i++){
        if(i % 15 === 0){
            console.log('FizzBuzz')
        } else if (i % 3 === 0) {
            console.log('Fizz')
        } else if(i % 5 === 0){
            console.log('Buzz')
        } else{
            console.log(i)
        }
    }
}
// FizzBuzzShort()