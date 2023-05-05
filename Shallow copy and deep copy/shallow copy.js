let person={
   name:'richa',    // first example
   age:23
}
let person2=person
person2.age=24
console.log(person)
console.log(person2)


const originalArray = [1, 2, {a: 3}];
const shallowCopyArray = originalArray.slice();  // second example

originalArray[2].a = 4;

console.log(originalArray); // [1, 2, {a: 4}]
console.log(shallowCopyArray); // [1, 2, {a: 4}] - the nested object is still the same object as in the original array