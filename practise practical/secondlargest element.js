let arr=[9,8,5,6]
function secondLargest(arr){
     let firstLargest=Math.max(...arr)
    let index=arr.indexOf(firstLargest)
    arr.splice(index,1)
    var secondlargest=Math.max(...arr)
    return secondlargest
}
console.log(secondLargest(arr))