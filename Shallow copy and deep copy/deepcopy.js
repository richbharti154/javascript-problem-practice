let person={
    name:'richa',
    age:23
}
let person2=                   // 1 st example
   JSON.parse(JSON.stringify(person))
   person2.age=22
   console.log(person2)
  

   const originalObj = {a: 1, b: {c: 2}};   // 2nd example
const deepCopyObj = JSON.parse(JSON.stringify(originalObj));

originalObj.b.c = 3;

console.log(originalObj); // {a: 1, b: {c: 3}}
console.log(deepCopyObj); // {a: 1, b: {c: 2}} - the nested object is a separate object with the same values as in the original object