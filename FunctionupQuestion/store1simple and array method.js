const items = [
    { item: 'apple', price: 0.5 },
    { item: 'banana', price: 0.25 },
    { item: 'pear', price: 0.75 },
    { item: 'orange', price: 1.0 },
  ];
  
//   ans :-  {
//      totalItems: 4,
//      totalPrice: 2.50,
//      averagePrice: 0.63,
//      mostExpensive: { item: 'orange', price: 1.0 }
//    }

  
    
  function store(items){
    let totalItems=items.length
    let totalPrice=items.reduce((x,y)=>x+y.price,0)
    let averagePrice=totalPrice/totalItems
    let mostExpensive=items.reduce((x,y)=>x.price>y.price?x:y)  // x is accurate and y is current
    return {totalPrice  ,totalItems,averagePrice,mostExpensive}

  }
  console.log(store(items))
  