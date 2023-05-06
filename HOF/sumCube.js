

let arr =[1,2,3,4,5,6];


let sum =0;
 arr.forEach(function(a){
  if(a%3 ==0){
    sum +=a**3;
  }
})
console.log(sum);