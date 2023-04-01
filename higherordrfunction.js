function abc(){
    return function(){
return 'hello world'
    }
}
var x=abc
console.log(x)