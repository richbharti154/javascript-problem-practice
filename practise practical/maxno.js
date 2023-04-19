let arr=[7,8,5,23,89]
function min(arr){
    return arr.reduce(function(pre,curr){
        return pre<curr?pre:curr
    })

}
console.log(min(arr))

let arr1=[8,9,6]
var max=arr[0]
let  i=0
if(max<arr[i]){
    max=arr[i]
}
console.log(arr1)