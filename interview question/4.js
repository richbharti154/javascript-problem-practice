// let data={name:'richa',age:23,name1:'prachi',age1:24} 
//  // without using dot 
//  const {name}=data
//  console.log(name)

// const data={name:'richa',age:23}
// const info={name1:'hello',age:23}
// let c ={...data,...info}
// console.log(c)


// const data={name:'richa'}
// const info={age:23}
// let c={...data,info}
// console.log(c)

// const data={name:'richa'};
// const info={age:23};
// data ={data,...info};
// console.log(data);
const data={name:'richa'}
const info={name:'kittu'}     /// output are only kitti because there is no sore first value 
const c={...data,...info}
console.log(c)