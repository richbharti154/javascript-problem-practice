function abc(a){
return function(b){
    return a+b
}
}
console.log(abc(3)(4))