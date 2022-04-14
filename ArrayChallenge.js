// FORLOOP

// 1 ALWAYS HUNGRY given an array each time the value is "hamburger" log "yummy" else "I'm hungry"

// const hungry = (arr) => {
//     let i = 0
//     let timeToEat 
//     for(i; i<= arr.length; i++){
//         timeToEat = arr[i]
//         if(arr[i] === 'hamburger'){
//             console.log('yummy')
//         } else
//         {
//             console.log('I am so hungry food please' )
//         }
//     }
// }
// hungry([3.14, "food", "pie", "food","hamburger", 234 ])


// 2 HIGH PASS FILTER given an array and a cutoff return num bigger than cutoff point

// const highPass = (arr, cutoff) => {
//     let i = 0
//     let filteredArr = []
//     for(i; i <= arr.length; i++){
//         if(arr[i] > 5){
//             filteredArr.push(arr[i])
//         }
//     }
//         return filteredArr
// }
// let result = highPass([6,8,3,10,-2,5,9], 5)





//NO PUSH METHOD
// const array = [7,5,-3,2,8,0,9,10,33,4]
// function cutoff(pivot, [first, ...rest]){
//     console.log(first + 'firstfirstfirstfirstfirstfirstfirst')
//     console.log(pivot + 'pivotpivotpivotpivotpivot')
//     console.log(rest + 'restrestrestrestrestrest')
//     if(rest.length == 0){
//         return []
//     }
//     if(first > pivot) {
//         return [first, ...cutoff(pivot, rest)]
//     }else {
//         return cutoff(pivot, rest)
//     }
// }
// console.log(cutoff(1,array))


// 3 BETTER THAN AVERAGE given an [] return how many num r > than avg
// const array = [2,4,5,3,8,8,3]
// const betterThanAverage = (  [first, ...rest]) => {
//   let sum = 0
//   let i = 0
//     for(i; i< array.length; i++){
//         total = sum += array[i]
//     }
//       let ave = total / array.length
//       let ave2 = ave.toString()
//     // console.log(ave);
//     // console.log(ave2);
//     // console.log(ave2[2])
//     if(ave2[2] >= 5) {
//         only = ave2[0]
//         newOnly = parseInt(only)
//         // console.log(newOnly)
//          if(first < newOnly){
//              let diffarray =  [first, ...rest]
//              console.log([diffarray])
//          }else{
//              let rarray = [...rest]
//               console.log(rarray)
//             //   console.log(...rest)
//          }
        
//     }else {
//         if(ave2[2] < 5){
//        let  change = ave2[0] + 1
//         console.log(change)
//         console.log(array[i])
//         for(let k = 0; k< array.length; k++){
//          if(array[k] > change){
//         console.log(array[k])
//     }
//     } 
//         }
//     }
// }
// betterThanAverage(array)


// const betterThanAverage = (arr) => {
//     let sum = 0
//     let i = 0
//     for(i; i< arr.length; i++){
//          sum += arr[i]
//     }
//     console.log(sum)
//     let avg = sum  / arr.length
//     let count = 0
//     let j = 0 
//     for(j; j< arr.length; j++){
//         if(arr[j] > avg){
//             count++
//         }
//     }
//     return count
// }

// let result = betterThanAverage([6, 8, 3, 10, -2, 5, 9])
// console.log(result)





// const whatIsBetter = (arr) => {
//     let sum = 0
//     let i =  0 

//     for(i; i < arr.length; i++){
//         sum += arr[i]
//     }
//     let avg = sum/ arr.length
//     let count = 0
//     let j = 0
//     for (j; j < arr.length; j++){
//         if(arr[j] > avg){
//             count ++
//         }
//     }
//     return count
// }

// let result = whatIsBetter([6,8,3,10,-2,5,9])
// console.log(result)




// 4 ARRAY REVERSE write a function to reverse the values of an array
// const reverse = (arr) => {
//     let left = 0
//     let right = arr.length - 1
//     for(left; left < right; left++){
//         let temporary = arr[left]
//         arr[left] = arr[right]
//         arr[right] = temporary
//         right--

//     }
//     return arr
// }
// let result = reverse(['a', 'b', 'c', 'd', 'e'])
// console.log(result)

// const flipFlopper = (array) => {
//     let beginning = 0
//     let ending = array.length - 1

//     for(beginning; beginning < ending; beginning++){
//         let placeholder = array[beginning]
//         array[beginning] = array[ending]
//         array[ending] = placeholder
//         ending --
//     }
//     return array
// }
// let flipped = flipFlopper(['a', 'b', 'c', 'd', 'e', 'f'])
// console.log(flipped)

// 5 FIBONACCI ARRAY write function return [] of fibb # up to a gin num (n) 

const fibonacciArray = (n) => {
    let fibArray = [0,1]
    let i = 0
    for(i; i< n -2; i++){
        let prev = fibArray[fibArray.length - 1]
        // console.log(fibArray[fibArray.length - 1])
        let prevprev = fibArray[fibArray.length - 2]
        // console.log(fibArray[fibArray.length - 2])
        // console.log(prevprev)
        fibArray.push(prev + prevprev)
    }
    return fibArray
}
let fibbedNum = fibonacciArray(10)
console.log(fibbedNum)



