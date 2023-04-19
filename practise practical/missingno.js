let arr=[3,0,1]
function missing(arr){
    let n=arr.length
    let sum=0
    let total=n*(n+1)/2
    for(let i=0;i<n;i++){
        sum+=arr[i]
    }
    return total-sum
}
console.log(missing(arr))
