let even_count=0;
let odd_count=0;
let arr =[1,2,3,4,5,6];
for(let i=0; i<arr.length; i++){
  if(arr[i]%2 ==0){
    even_count++;
  }else{
    odd_count++;
  }
}

console.log("Even Count:",even_count,"Odd Count :",odd_count);