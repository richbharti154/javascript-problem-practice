let str="The story talks about two girls, one diligent and to take aone in  receiving help."
function vowelword(str){
    let array=['a','e','o','i','u']
    let newStr=str.split(" ")
    let arr=[]
    for(let i=0;i<newStr.length;i++){
        if(array.includes(newStr[i][0])){
        arr.push(newStr[i])
    }
   
}
return arr.join()
}
console.log(vowelword(str))
