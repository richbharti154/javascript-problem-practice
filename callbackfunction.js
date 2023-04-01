// function abc(a,b){
//     return a+b
// }
// console.log(abc(3,4))
 // 2nd method 


 function add(a,b){
    return a+b
 }
 function sub(a,b){
    return a-b
 }
 function cal(fx,a,b){
    return fx(a,b)
 }
 console.log(cal(sub(4,5)))