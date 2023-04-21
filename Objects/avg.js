let flipkart = [
    {name:"Speaker", price:5472, rating:4},
    {name:"Moble", price:52222, rating:3},
    {name:"laptop", price:110201, rating:4},
    {name:"shoes", price:2000, rating:5}
  ];
  
  let sum =0;
  for(let i=0; i<flipkart.length; i++){
    sum +=flipkart[i]["rating"];
  }
  console.log("Overall rating of Flipkart is :",sum/flipkart.length);