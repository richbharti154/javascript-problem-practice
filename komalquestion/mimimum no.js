var arr=[90,76,54]
var smallest =arr[0]
for(let i=0;i<arr.length;i++){
    if(smallest>arr[i]){
        smallest=arr[i]
    }
}
console.log(smallest)
// second method using minimum number
let arr1=Math.min(45,23,23,12)
console.log(arr1)

// find out min mo using higher order function
const numbers = [5, 2, 8, 1, 9, 3];

const minNumber = numbers.reduce((min, current) => {
  return Math.min(min, current);
});

console.log(minNumber); // Output: 9