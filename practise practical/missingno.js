let arr=[1,2,4]
function missing(arr){
    let n=arr.length
    let sum=0
    let total=n*(n+1)/2
    for(let i=0;i<n-1;i++){
        sum+=arr[i]
    }
    return total-sum
}
console.log(missing(arr))
