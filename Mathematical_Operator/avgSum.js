let i=1;
let count=0;
let sum=0;
while(i<=100){
  if(i%2 ==0){
    sum +=i;
    count++;
  }
  i++;
}
//console.log("Sum of all Num:-",sum);
//console.log("Count of all Num:-",count);
console.log("Average of Even Number is :",sum/count);