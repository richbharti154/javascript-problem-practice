
//  var xyzf

// console.log(xyzf)   
// xyzf=30
// this is undefinf does not have hoistin g method

//1. var abc=5   /// this is also hoisting method but only used var because there is global scope not const and let
// console.log(abc)
// var abc

//2.abc()
// function abc(){       // hoisting method
//     console.log('hello')
// }
function abc(){
  var x=34              // hoisting mehod
     console.log(x)
     var x
}
abc()