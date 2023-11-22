// madam is palindrome because backward and forward read same 

let str='mom'
let str1=''
function palindrome(str){
     for(let i=str.length-1;i>=0;i--){
       str1+=str[i]
     }
     if(str1==str){
        return true
     }else{
        return false
     }
}
console.log(palindrome(str))