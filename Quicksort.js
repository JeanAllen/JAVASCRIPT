

// ARRAY [4,8,5,7,1,6,10,2,3,9]

// Partition spliting up our numbers so that everything that is small goes to the left  {SMALL} of the pivot and {PIVOT}everything that is big goes to the left {BIG}

// PIVOT 6

// {PIVOT} can be any number in the array

// I idx[0] start J last idx[9] last




//  need {POINTER VARIABLES} farthest right {I} farthest left {J}


// is the {VALUE} of  {I} 4 < {PIVOT} 6 
//  ARRAY{I} < {PIVOT}6   |YES|   i++


// is the {VALUE} of  {I} 8 < {PIVOT} 6 
//  ARRAY{I} < {PIVOT}6   |NO| {PAUSE}{I} check {J}


// is the {VALUE} of  {J} 9 {PIVOT} 6
// ARRAY {J} > {PIVOT} 6 |YES| i--


// is the {VALUE} of  {J} 3 {PIVOT} 6
// ARRAY {J} > {PIVOT} 6 |NO| {PAUSE}{J} check {I}

// IF {I} IS GREATER THAN {PIVOT} and {J} IS SMALLER THAN {PIVOT} {SWAP} {I} and {J} is {VALUE} {I} 2 < {PIVOT} 6












// const smallOnPivot = (arr) => {
//     let newArr = []
//     let pivot = 6;
//     let i = arr[0];
//     for(i; i <= arr.length; i++) {
//         if(arr[i] > pivot){
//             let j = arr[9];
//             for(j; j>= arr.length; j--){
//                 if(arr[j] < pivot && arr[i] > pivot ){
//                     let temp = arr[j]
//                      arr[j] = arr[i];
//                     arr[i] = temp
//                 }
//             }

//         }
//     }
//     return newArr.push([])

// }



// console.log(smallOnPivot([4,8,5,7,1,6,10,2,3,9]))





// // Code to swap two numbers in JavaScript:
// function swap(items, leftIndex, rightIndex){
//     var temp = items[leftIndex];
//     items[leftIndex] = items[rightIndex];
//     items[rightIndex] = temp;
// }



// // Code to perform the partition as mentioned in above steps:
// function partition(items, left, right) {
//     var pivot   = items[Math.floor((right + left) / 2)], 
//     //middle element
//         i       = left, 
//         //left pointer
//         j       = right;
//          //right pointer
//     while (i <= j) {
//         while (items[i] < pivot) {
//             i++;
//         }
//         while (items[j] > pivot) {
//             j--;
//         }
//         if (i <= j) {
//             swap(items, i, j);
//              //swap two elements
//             i++;
//             j--;
//         }
//     }
//     return i;
// }


// // Perform the recursive operation
// function quickSort(items, left, right) {
//     var index;
//     if (items.length > 1) {
//         index = partition(items, left, right); 
//         //index returned from partition
//         if (left < index - 1) { 
//             //more elements on the left side of the pivot
//             quickSort(items, left, index - 1);
//         }
//         if (index < right) { //more elements on the right side of the pivot
//             quickSort(items, index, right);
//         }
//     }
//     return items;
// }
// // first call to quick sort
// var result = quickSort(items, 0, items.length - 1);




// // Complete Quick sort code:

// var items = [5,3,7,6,2,9];
// function swap(items, leftIndex, rightIndex){
//     var temp = items[leftIndex];
//     items[leftIndex] = items[rightIndex];
//     items[rightIndex] = temp;
// }
// function partition(items, left, right) {
//     var pivot   = items[Math.floor((right + left) / 2)], //middle element
//         i       = left,
//          //left pointer
//         j       = right; 
//         //right pointer
//     while (i <= j) {
//         while (items[i] < pivot) {
//             i++;
//         }
//         while (items[j] > pivot) {
//             j--;
//         }
//         if (i <= j) {
//             swap(items, i, j);
//              //sawpping two elements
//             i++;
//             j--;
//         }
//     }
//     return i;
// }

// function quickSort(items, left, right) {
//     var index;
//     if (items.length > 1) {
//         index = partition(items, left, right); 
//         //index returned from partition
//         if (left < index - 1) {
//              //more elements on the left side of the pivot
//             quickSort(items, left, index - 1);
//         }
//         if (index < right) { 
//             //more elements on the right side of the pivot
//             quickSort(items, index, right);
//         }
//     }
//     return items;
// }
// first call to quick sort
// var sortedArray = quickSort(items, 0, items.length - 1);
// console.log(sortedArray);
//prints [2,3,5,6,7,9]



const numScattered = [7,2,6,9,3,6,9,42,2,56,89,9,2,-1]

const tradePlaces = (numScattered, leftSide, rightSide) => {
    let placeholder = numScattered[leftSide];
    numScared = numScattered[rightSide];
    numScattered[rightSide] = placeholder
}
 const DivideArray =() => {
     
 }