function factorial(n){
    //base case
    if(n==1||n<=0) return 1
    // recursive
    return  n*factorial(n-1)
}
console.log(factorial(5))