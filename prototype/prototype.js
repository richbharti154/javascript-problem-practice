let a={
    name:'richa',
    language:'javascript'
}
console.log(a)
let p= {
    run:() => {
  alert('run')
    }
}
a.__proto__=p
a.run()
