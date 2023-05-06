
let arr =["assignment", "problem", "media", "upload"];


let isPresent = arr.filter(function(arr){
  if(arr[0]=='a' || arr[arr.length-1]=='a'){
    return arr;
  }
  
})

console.log(isPresent);



