let str='hello  ji'
let str1=''

function stringWord(str){
    for(let i=str.length-1;i>0;i--){
      str1+=str[i]
     
    }
    return str1
}
console.log(stringWord(str))
