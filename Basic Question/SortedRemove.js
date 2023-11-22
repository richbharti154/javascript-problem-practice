const arr=[1,1,2]
let index=1
for(let i=0; i<arr.length;i++){
    if(arr[i]!==arr[i+1]){
        arr[index]=arr[i+1]
        index++
    }
   
}
console.log(arr)
