let range=20;
let a ="";
console.log("Print Prime Numbers in Given Range")
for(let i= 1; i<=range; i++){
  let count=0;
  for(let j=2; j<i; j++){
    if(i%j ==0){
      count++;
    }
  }
  if(count ==0){
    a +=i+" "
  }
}
console.log(a);
