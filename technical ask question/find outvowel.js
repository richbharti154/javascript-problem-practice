let str="The story talks about two girls, one diligent and to take aone in  receiving help."
str=str.split('')
let str3=''
// console.log(str)
for(let i=0;i<str.length;i++){
    let str2=str[i][0]
    // console.log(str2)
    if(str2=='a'||str2=='e'||str2=='i'||str2=='o'||str2=='u')
    str3+=str[i]+''
    console.log(str3)
}