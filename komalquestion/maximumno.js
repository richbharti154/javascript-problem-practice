var arr=[45,78,65,34]
var largest=arr[0]
for(let i=0;i<arr.length;i++){
  if(largest<arr[i]){
    largest=arr[i]
  }
}                            //  this is first method are used in highest 
console.log(largest)


// second method are used in max no

let c=Math.max(89,56,34,90)
console.log(c)

// find out max no using reduce methodunder higher order funtion

const numbers = [5, 2, 8, 1, 9, 3];

const maxNumber = numbers.reduce((max, current) => {
  return Math.max(max, current);
});

console.log(maxNumber); // Output: 9