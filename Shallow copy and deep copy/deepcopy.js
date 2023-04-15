let person={
    name:'richa',
    age:23
}
let person2=
   JSON.parse(JSON.stringify(person))
   person2.age=22
   console.log(person2)
  
