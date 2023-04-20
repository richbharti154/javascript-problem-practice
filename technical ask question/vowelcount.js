let str='hlo aicha'
function vowelCount(str){
let newStr=str.split(" ")
let vowel=['a','e','i','o','u']
let count=0
for(let i=0;i<newStr.length;i++){
    if(vowel.includes(str)){
        str[i]==newStr[i+1]
        count++
    }
   
}
  return count
}
console.log(vowelCount(str))