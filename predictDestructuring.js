
// 1
// const cars = ['Tesla', 'Mercedes', 'Honda']
// const [randomCar] = cars
// const [ ,otherRandomCar] = cars
// const [blue] = cars
// const [,,whichCar] = cars

// console.log(randomCar) 
// ['"Tesla", "Mercedes", "honda"] PREDICTION (WRONG)
// console.log(otherRandomCar)  
// ["Tesla", "Mercedes", "honda",] PREDICTION (WRONG)
// console.log(whichCar)   
// console.log(blue)   



// 2
// const employee = {
//      person: 'Elon',  
//      age: 47,
//      company: 'Tesla',
// }
// const{ person: otherName} = employee

// console.log(otherName) 
// Elon 

// console.log(person);/
//  person is not defined 

// console.log(emplpoyee.person)
// Elon



// 3
// const person = {
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet'
// }
// const password = '12345';
// const {height: hashedPassword} = person;


// console.log(password)
//'12345'

// console.log(hashedPassword)

// undefined
// {name: hashedPassword} = person;
// 'Phil Smith'


// 4

// const numbers = [8,2,3,5,6,1,67,12,2];
// const [,first] = numbers; 
// // 2
// const [,,,second] = numbers;
// // 5
// const [,,,,,,,,third] = numbers 
// // 2

// console.log(first == second)
// // false
// console.log(first == third)
// // true

// 5
 
// const lastTest = {
//     key: 'value',
//     secondKey: [1,5,1,8,3,3]
// }
// const {key} = lastTest;
// // if the { object } in the lastTest it will give you the (VALUE) else {object } not in lastTest = undefined 
// const {secondKey} = lastTest
// // {object} is in lastTest (VALUE) = [1,5,1,8,3,3]
// const [ ,willThisWork] = secondKey

// console.log(key)
// // key is not defined WRONG
// console.log(secondKey)
// // secondKey is not defined WRONG
// console.log(secondKey[0])
// // secondKey is not defined WRONG
// console.log(willThisWork)
// // 5 CORRECT




// const beattle = ['bob', 'mike', 'johnny' ]
// function actuallyPrintingNames(names) {
//     let index = 0
//     let name
//   for ( index; index < names.length; index++) {
//      name = names[index];
//     // console.log(name + ' was found at index ' + index);
//   }
//   console.log('name and index after loop is ' + name + ' : ' + index);
// }
// actuallyPrintingNames(beattle)
    

const Jobs = ['McDonald', 'Wendys', 'Burger King', 'Taco Bell', "ChickFilA"]
const employees = ['Kyle', "billy", 'Bobby', 'juan']
const whichJob =(names, workers) => {
    let start = 0
    let name 
    for(start; start < names.length; start++){
        name  = names[start]
        // console.log(name + ' is the best working place' + start)
    }
    let position = 0
    let worker 
    for(position; position < names.length; position++){
            worker = workers[position]
            // console.log(worker)
            if(workers[position] == undefined){
                // console.log('it is now undefined')
                let overTime = position
                let secondShift 
                    console.log(overTime)
                for(overTime - 1; overTime <= 0; overTime--){

                    console.log(worker)
                    console.log(overTime)
                }
            } else{
                // console.log('it is working')
            }
        //    console.log(workers)

        //    console.log(worker +' ' + position)
        //    console.log(workers[position])

        //    console.log(position )
        
        // console.log( worker + ' ' + position)
        
    }

}
whichJob(Jobs, employees)