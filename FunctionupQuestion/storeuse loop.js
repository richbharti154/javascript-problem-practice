const items = [
    { item: 'apple', price: 0.5 },
    { item: 'banana', price: 0.25 },
    { item: 'pear', price: 0.75 },
    { item: 'orange', price: 1.0 },
  ];
  
  // ans :-  {
  //   totalItems: 4,
  //   totalPrice: 2.50,
  //   averagePrice: 0.63,
  //   mostExpensive: { item: 'orange', price: 1.0 }
  // }
  function xyz(items){
    let totalItems = 0;
  let totalPrice = 0;
  let mostExpensive = { item: '', price: 0 };

  for (let i = 0; i < items.length; i++) {
    totalItems++;
    totalPrice += items[i].price;

    if (items[i].price > mostExpensive.price) {
      mostExpensive = { item: items[i].item, price: items[i].price };
    }
  }

  const averagePrice = (totalPrice / totalItems).toFixed(3);

  return { totalItems, totalPrice, averagePrice, mostExpensive };
  
}
 console.log( xyz(items))


  