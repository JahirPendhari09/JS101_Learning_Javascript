let details ={
    name :"Jahir Penfhari",
    age : 25,
    city : "Kolhapur",
    mbl : 8007631530,
    pin : 416112,
    married : false
}
// print only key
for(let a in details){
  console.log(a);

}

// print only value

for(let a in details){
  console.log(details[a]);
}

// printing both

for(let a in details){
  console.log(a +":"+ details[a]);
}