// console.log('hi my name is richa')
// setTimeout (function(){      // this is simple function to call easily but first is print and after thay  3 no are print
//     //after that print setTimeout  in two second then how to use promise insiode the code
// console.log('hi promise')
// },2000)
// console.log('hi my name is kittu')

let p=new Promise((resolve,reject)=>{
console.log('hello')
setTimeout(()=>{
console.log('hi')
// resolve(true)
reject(new Error('I am an error'))
},5000)

})
console.log(p)