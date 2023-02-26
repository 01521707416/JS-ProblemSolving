/* Array Slicing: Doesn't affect main array */

const myNums = [58, 76, 98, 67, 64, 54];
const slice = myNums.slice(2, 5);
console.log(slice)
console.log(myNums)

/* Array Splicing: Affects main array */
const splice = myNums.splice(2, 5);
console.log(splice)
console.log(myNums)
